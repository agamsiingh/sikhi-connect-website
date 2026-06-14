'use client';

import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { submitWaitlist } from '@/app/actions';
import { Sparkles, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

export default function WaitlistForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const triggerConfetti = () => {
    // Elegant luxury gold and saffron confetti explosion
    const duration = 2.5 * 1000;
    const end = Date.now() + duration;

    const frame = () => {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: ['#e25822', '#d4af37', '#faf6f0'],
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: ['#e25822', '#d4af37', '#faf6f0'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };
    frame();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setStatus('loading');
    setMessage('');

    const formData = new FormData();
    formData.append('email', email);
    formData.append('name', name);

    try {
      const result = await submitWaitlist(formData);
      if (result.success) {
        setStatus('success');
        setMessage(result.message);
        triggerConfetti();
        setName('');
        setEmail('');
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (err) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-card-bg/60 border border-gold-500/30 rounded-2xl glow-gold text-center animate-fade-in-up">
        <div className="w-16 h-16 bg-gradient-saffron-gold p-0.5 rounded-full mb-4 flex items-center justify-center shadow-lg">
          <div className="w-full h-full bg-card-bg rounded-full flex items-center justify-center">
            <CheckCircle2 className="w-8 h-8 text-saffron-500" />
          </div>
        </div>
        <h3 className="font-serif text-2xl text-gradient-gold-saffron font-bold mb-2">
          You're on the list!
        </h3>
        <p className="text-foreground/80 text-sm max-w-sm mb-6">
          {message}
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="px-6 py-2.5 text-xs uppercase tracking-widest font-semibold border border-card-border hover:border-saffron-500/50 hover:bg-saffron-500/5 rounded-full transition-all duration-300"
        >
          Register Another Email
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-lg mx-auto bg-card-bg/50 backdrop-blur-md p-8 rounded-2xl border border-card-border glow-saffron relative overflow-hidden group"
    >
      {/* Background radial saffron glow */}
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-saffron-500/10 rounded-full blur-3xl group-hover:bg-saffron-500/15 transition-all duration-500 pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-gold-500/10 rounded-full blur-3xl group-hover:bg-gold-500/15 transition-all duration-500 pointer-events-none" />

      <h3 className="font-serif text-2xl font-bold text-center mb-6">
        Join the Exclusive Waitlist
      </h3>

      <div className="space-y-4 relative z-10">
        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/70 mb-2">
            Your Name (Optional)
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            disabled={status === 'loading'}
            placeholder="e.g. Agam Singh"
            className="w-full bg-background/60 border border-card-border focus:border-saffron-500/60 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 placeholder:text-foreground/30 focus:shadow-[0_0_15px_-3px_rgba(226,88,34,0.2)]"
          />
        </div>

        <div>
          <label className="block text-xs uppercase tracking-wider font-semibold text-foreground/70 mb-2">
            Email Address
          </label>
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={status === 'loading'}
            placeholder="e.g. contact@sikhiconnect.app"
            className="w-full bg-background/60 border border-card-border focus:border-saffron-500/60 rounded-xl px-4 py-3 text-sm focus:outline-none transition-all duration-300 placeholder:text-foreground/30 focus:shadow-[0_0_15px_-3px_rgba(226,88,34,0.2)]"
          />
        </div>

        {status === 'error' && (
          <div className="flex items-center gap-2 text-red-500 bg-red-500/5 border border-red-500/20 px-4 py-3 rounded-xl text-xs animate-fade-in">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{message}</span>
          </div>
        )}

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-gradient-saffron-gold hover:bg-gradient-gold-saffron text-white font-medium rounded-xl py-3.5 px-6 transition-all duration-500 flex items-center justify-center gap-2 group-hover:shadow-[0_4px_20px_-4px_rgba(226,88,34,0.4)] cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              Securing Your Spot...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Request Early Access
            </>
          )}
        </button>
      </div>
    </form>
  );
}
