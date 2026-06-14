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
