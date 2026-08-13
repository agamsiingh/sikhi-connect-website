'use client';

import React, { useState } from 'react';
import { submitDeleteAccountRequest } from '@/app/actions';
import { Mail, Trash2, Send, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function DeleteAccountForm() {
  const [email, setEmail] = useState('');
  const [reason, setReason] = useState('');
  const [confirmation, setConfirmation] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [response, setResponse] = useState<{ success: boolean; message: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setResponse(null);

    if (!email) {
      setResponse({ success: false, message: 'Please enter your account email address.' });
      return;
    }

    if (confirmation.trim().toUpperCase() !== 'DELETE') {
      setResponse({
        success: false,
        message: 'Please type "DELETE" in capital letters to confirm your deletion request.',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const formData = new FormData();
      formData.append('email', email);
      formData.append('reason', reason);
      formData.append('confirmation', confirmation.trim().toUpperCase());

      const res = await submitDeleteAccountRequest(formData);
      setResponse(res);
      if (res.success) {
        setEmail('');
        setReason('');
        setConfirmation('');
      }
    } catch (err) {
      setResponse({
        success: false,
        message: 'An unexpected error occurred. Please email support@sikhiconnect.app directly.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {response && (
        <div
          className={`p-4 rounded-xl border flex items-start gap-3 text-xs leading-relaxed ${
            response.success
              ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400'
              : 'bg-rose-500/10 border-rose-500/30 text-rose-400'
          }`}
        >
          {response.success ? (
            <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
          ) : (
            <AlertCircle className="w-5 h-5 flex-shrink-0 text-rose-400 mt-0.5" />
          )}
          <div>
            <div className="font-bold text-sm mb-0.5">
              {response.success ? 'Request Registered' : 'Validation Error'}
            </div>
            <p>{response.message}</p>
          </div>
        </div>
      )}

      <div className="space-y-1.5">
        <label htmlFor="delete-email" className="block text-xs font-semibold text-foreground/80">
          Account Email Address <span className="text-saffron-500">*</span>
        </label>
        <div className="relative">
          <Mail className="w-4 h-4 text-foreground/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            id="delete-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="enter-your-account@email.com"
            className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-background/80 border border-card-border/60 text-foreground text-xs focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all placeholder:text-foreground/30"
          />
        </div>
      </div>

      <div className="space-y-1.5">
        <label htmlFor="delete-reason" className="block text-xs font-semibold text-foreground/80">
          Reason for Account Deletion <span className="text-foreground/40 font-normal">(Optional)</span>
        </label>
        <textarea
          id="delete-reason"
          rows={2}
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          placeholder="Help us improve Sikhi Connect by letting us know why you are leaving..."
          className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-card-border/60 text-foreground text-xs focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all placeholder:text-foreground/30 resize-none"
        />
      </div>

      <div className="space-y-1.5">
        <label htmlFor="delete-confirm" className="block text-xs font-semibold text-foreground/80">
          Confirmation Word <span className="text-saffron-500">*</span>
        </label>
        <p className="text-[11px] text-foreground/60">
          Type <strong className="text-saffron-500 font-mono">DELETE</strong> in capital letters to confirm:
        </p>
        <input
          id="delete-confirm"
          type="text"
          required
          value={confirmation}
          onChange={(e) => setConfirmation(e.target.value)}
          placeholder="DELETE"
          className="w-full px-4 py-2.5 rounded-xl bg-background/80 border border-card-border/60 text-foreground text-xs font-mono tracking-wider focus:outline-none focus:border-saffron-500 focus:ring-1 focus:ring-saffron-500 transition-all placeholder:text-foreground/30"
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-saffron-gold text-white font-semibold text-xs uppercase tracking-widest px-6 py-3 rounded-xl hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Deletion Request...</span>
          </>
        ) : (
          <>
            <Trash2 className="w-4 h-4" />
            <span>Submit Deletion Request</span>
          </>
        )}
      </button>
    </form>
  );
}
