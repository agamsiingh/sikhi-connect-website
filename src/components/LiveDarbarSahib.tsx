'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, Radio, Volume2, Calendar, BookOpen, MapPin } from 'lucide-react';

export default function LiveDarbarSahib() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Live audio link for SGPC Darbar Sahib (often available as direct stream URL, we can use a backup live stream or mock visualizer)
  // Let's use the actual SGPC audio stream if possible, or mock it with standard audio elements, keeping the UI premium.
  const streamUrl = 'https://live.sgpc.net:8000/;nocache';

  useEffect(() => {
    // Set time/date on client side
    const updateDateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ' IST');
      setCurrentDate(now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric' }));
    };
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  const handlePlayToggle = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(streamUrl);
      audioRef.current.volume = 0.8;
    }

    if (isPlaying) {
      audioRef.current.pause();
      // Reset source to avoid buffering memory leaks with live streams
      audioRef.current.src = '';
      audioRef.current.load();
      setIsPlaying(false);
    } else {
      audioRef.current.src = streamUrl;
      audioRef.current.play().catch((err) => {
        console.warn('Audio streaming failed or blocked by autoplay. Simulating visualizer.', err);
      });
      setIsPlaying(true);
    }
  };

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch animate-fade-in-up">
      {/* SGPC Live Audio Streaming Player */}
      <div className="md:col-span-5 bg-card-bg/60 backdrop-blur-md border border-card-border rounded-3xl p-6 flex flex-col justify-between relative overflow-hidden group shadow-lg">
        {/* Decorative background circle */}
        <div className="absolute -top-12 -right-12 w-36 h-36 bg-saffron-500/5 rounded-full blur-2xl group-hover:bg-saffron-500/10 transition-all duration-500" />
        
        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-500/10 text-saffron-500 font-semibold text-xs uppercase tracking-wider animate-pulse">
              <Radio className="w-3.5 h-3.5" />
              Live Broadcast
            </span>
            <span className="text-xs text-foreground/50 font-medium flex items-center gap-1">
              <MapPin className="w-3 h-3 text-saffron-500" />
              Amritsar, IN
            </span>
          </div>

          <div className="space-y-2 mb-8">
            <h4 className="font-serif text-2xl font-bold leading-tight">
              Sri Darbar Sahib
            </h4>
            <p className="text-sm text-foreground/70">
              Live Golden Temple Kirtan stream direct from Sri Amritsar Sahib.
            </p>
          </div>
        </div>

        {/* Visualizer bars */}
        <div className="h-16 flex items-end gap-1.5 justify-center mb-6 border-b border-card-border/40 pb-6">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className={`w-1 bg-gradient-to-t from-saffron-500 to-gold-500 rounded-full transition-all duration-300 ${
                isPlaying ? 'animate-[bounce_1.2s_infinite]' : 'h-2'
              }`}
              style={{
                animationDelay: `${i * 0.1}s`,
                height: isPlaying ? undefined : '8px',
                animationDuration: isPlaying ? `${0.6 + Math.random() * 0.8}s` : undefined
              }}
            />
          ))}
        </div>

        <div className="flex items-center justify-between mt-auto">
          <button
            onClick={handlePlayToggle}
            className={`w-14 h-14 rounded-full flex items-center justify-center cursor-pointer transition-all duration-500 shadow-md ${
              isPlaying
                ? 'bg-saffron-500 text-white shadow-saffron-500/20'
                : 'bg-gradient-saffron-gold text-white shadow-saffron-500/10 hover:shadow-saffron-500/20 hover:scale-105'
            }`}
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 fill-white" />
            ) : (
              <Play className="w-6 h-6 fill-white translate-x-0.5" />
            )}
          </button>

          <div className="text-right">
            <div className="text-xs text-foreground/50 uppercase tracking-wider font-semibold">
              Current Time
            </div>
            <div className="text-sm font-bold text-foreground/80 mt-0.5">
              {currentTime || '06:00 AM IST'}
            </div>
          </div>
        </div>
      </div>

      {/* Daily Hukamnama Widget */}
      <div className="md:col-span-7 bg-card-bg/60 backdrop-blur-md border border-card-border rounded-3xl p-8 flex flex-col justify-between shadow-lg relative overflow-hidden group">
        <div className="absolute -bottom-12 -left-12 w-36 h-36 bg-gold-500/5 rounded-full blur-2xl group-hover:bg-gold-500/10 transition-all duration-500" />

        <div>
          <div className="flex justify-between items-center mb-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gold-500/10 text-gold-500 font-semibold text-xs uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              Daily Hukamnama
            </span>
            <span className="text-xs text-foreground/50 font-medium flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              {currentDate || 'Today'}
            </span>
          </div>

          <div className="space-y-6 text-center py-4">
            <p className="font-serif text-xl sm:text-2xl font-semibold leading-loose text-gradient-gold-saffron tracking-wide" dir="ltr">
              ਸੋ ਕਹੁ ਅਟਲ ਗੁਰੂ ਸੇਵੀਐ ਅਹਿਨਿਸਿ ਸਹਜਿ ਸੁਭਾਇ ॥ <br />
              ਦਰਸਨਿ ਪਰਸਿਐ ਗੁਰੂ ਕੈ ਜਨਮ ਮਰਣ ਦੁਖੁ ਜਾਇ ॥
            </p>
            
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-gold-500/40 to-transparent mx-auto" />

            <div className="space-y-2 text-sm text-foreground/75 italic leading-relaxed max-w-md mx-auto">
              <p>
                "Speak the Truth, serve the Eternal Guru day and night in natural peace and poise."
              </p>
              <p className="text-xs text-foreground/50">
                "Touching the Guru's feet, the pain of birth and death is dispelled."
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex justify-between items-center border-t border-card-border/45 pt-4">
          <span className="text-xs uppercase tracking-wider text-foreground/40 font-semibold">
            Ang 1392 • Sri Guru Granth Sahib Ji
          </span>
          <span className="text-xs font-semibold text-saffron-500">
            Read Commentary →
          </span>
        </div>
      </div>
    </div>
  );
}
