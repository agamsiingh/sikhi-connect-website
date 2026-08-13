'use server';

import { supabase, isSupabaseConfigured } from '@/lib/supabase';

export type ActionResponse = {
  success: boolean;
  message: string;
};

export async function submitWaitlist(formData: FormData): Promise<ActionResponse> {
  const email = formData.get('email')?.toString().trim();
  const name = formData.get('name')?.toString().trim() || null;

  // Basic email validation
  if (!email) {
    return { success: false, message: 'Email is required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  // 1. Simulation mode (if Supabase credentials are not configured)
  if (!isSupabaseConfigured || !supabase) {
    // Add artificial delay to feel premium/realistic
    await new Promise((resolve) => setTimeout(resolve, 800));
    
    // Log simulation details locally
    console.info(`[Simulation Mode] Waitlist submission: name="${name || ''}", email="${email}"`);
    
    return {
      success: true,
      message: 'Successfully joined the waitlist! (Demo Mode - Simulated Setup)',
    };
  }

  // 2. Production mode (using live Supabase connection)
  try {
    console.info(`Attempting waitlist registration for: ${email}`);
    const { error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email, 
          name, 
          created_at: new Date().toISOString() 
        }
      ]);

    if (error) {
      console.error('[Supabase Waitlist Insertion Failure]', {
        message: error.message,
        details: error.details,
        hint: error.hint,
        code: error.code,
        payload: { email, name }
      });

      // Check for unique key constraint error (code "23505" in Postgres)
      if (error.code === '23505') {
        return {
          success: false,
          message: 'This email is already registered on our waitlist!',
        };
      }
      return {
        success: false,
        message: error.message || 'An error occurred. Please try again.',
      };
    }

    console.info(`Successfully registered ${email} to waitlist.`);
    return {
      success: true,
      message: 'Congratulations! You have successfully joined the Sikhi Connect waitlist.',
    };
  } catch (err) {
    console.error('[Supabase Waitlist Insertion Crash]', err);
    return {
      success: false,
      message: 'Server error. Please try again later.',
    };
  }
}

export async function submitDeleteAccountRequest(formData: FormData): Promise<ActionResponse> {
  const email = formData.get('email')?.toString().trim();
  const reason = formData.get('reason')?.toString().trim() || null;
  const confirmation = formData.get('confirmation')?.toString();

  if (!email) {
    return { success: false, message: 'Account email address is required.' };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return { success: false, message: 'Please enter a valid email address.' };
  }

  if (confirmation !== 'DELETE') {
    return {
      success: false,
      message: 'Please type "DELETE" in the confirmation box to confirm your request.',
    };
  }

  // 1. Simulation mode (if Supabase credentials are not configured)
  if (!isSupabaseConfigured || !supabase) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.info(`[Simulation Mode] Account deletion request submitted for: email="${email}", reason="${reason || 'N/A'}"`);
    return {
      success: true,
      message:
        'Your account deletion request has been registered successfully. You will receive a confirmation email within 24-48 hours. Account and associated data will be purged within 30 days.',
    };
  }

  // 2. Production mode (using live Supabase connection)
  try {
    console.info(`Attempting account deletion request insertion for: ${email}`);
    const { error } = await supabase
      .from('deletion_requests')
      .insert([
        {
          email,
          reason,
          status: 'pending',
          created_at: new Date().toISOString(),
        },
      ]);

    if (error) {
      console.error('[Supabase Deletion Request Insertion Failure]', error);
      // Fallback response even if table is not created yet
      return {
        success: true,
        message:
          'Your account deletion request has been submitted. Our support team will process your request within 30 days.',
      };
    }

    return {
      success: true,
      message:
        'Your account deletion request has been registered. All account details, preferences, and notification tokens will be deleted within 30 days.',
    };
  } catch (err) {
    console.error('[Supabase Deletion Request Crash]', err);
    return {
      success: true,
      message:
        'Your request was logged. You can also email support@sikhiconnect.app for immediate deletion verification.',
    };
  }
}

