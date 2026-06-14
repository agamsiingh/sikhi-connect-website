'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  Home,
  BookOpen,
  CheckCircle,
  Volume2,
  Calendar,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

// Static image imports from the SS folder
import imgHome from '@/SS/1.jpeg';
import imgHistoryGurpurab from '@/SS/2.jpeg';
import imgNitnemList from '@/SS/3.jpeg';
import imgReader from '@/SS/4.jpeg';
import imgAudio from '@/SS/5.jpeg';
import imgCalendar from '@/SS/6.jpeg';
import imgHistoryTimeline from '@/SS/7.jpeg';
import imgHistoryGurus from '@/SS/8.jpeg';
import imgAI from '@/SS/9.jpeg';
import imgReaderSettings from '@/SS/10.jpeg';

type TabId = 'home' | 'reader' | 'nitnem' | 'audio' | 'calendar' | 'history' | 'ai';

type TabData = {
  id: TabId;
  label: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  images: {
    label: string;
    image: any;
  }[];
};

export default function AppScreenshots() {
  const [activeTab, setActiveTab] = useState<TabId>('home');
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  const tabs: TabData[] = [
    {
      id: 'home',
      label: 'Home Dashboard',
      icon: <Home className="w-4 h-4" />,
      title: 'Personalized Home Dashboard',
      description: 'Start your spiritual journey daily with Hukamnama updates, quote of the day, recent play progress, and custom quick access shortcuts.',
      images: [
        { label: 'Dashboard Screen', image: imgHome },
        { label: 'Gurpurab Countdown', image: imgHistoryGurpurab },
      ],
    },
    {
      id: 'reader',
      label: 'Gurbani Reader',
      icon: <BookOpen className="w-4 h-4" />,
      title: 'Advanced Gurbani Reader',
      description: 'Immerse yourself in Gurbani with high-contrast customizable reading layouts, Ang navigations, font adjustments, and translation settings.',
      images: [
        { label: 'Reader View', image: imgReader },
        { label: 'Reader Settings', image: imgReaderSettings },
      ],
    },
    {
      id: 'nitnem',
      label: 'Nitnem Companion',
      icon: <CheckCircle className="w-4 h-4" />,
      title: 'Nitnem Prayers Checklist',
      description: 'Maintain your daily Nitnem routine with a clear tracker showing completed, in-progress, or upcoming morning/evening Banis.',
      images: [
        { label: 'Nitnem Checklist', image: imgNitnemList },
      ],
    },
    {
      id: 'audio',
      label: 'Audio Sanctuary',
      icon: <Volume2 className="w-4 h-4" />,
      title: 'High-Quality Audio Streamer',
      description: 'Browse, listen, and download Nitnem and Kirtan audio tracks locally. Experience offline audio streaming with dedicated play controls.',
      images: [
        { label: 'Audio Tracks', image: imgAudio },
      ],
    },
    {
      id: 'calendar',
      label: 'Nanakshahi Calendar',
      icon: <Calendar className="w-4 h-4" />,
      title: 'Interactive Sikh Calendar',
      description: 'Track key historical events, gurpurabs, shaheedi divs, sangrand, and festivals with countdowns and context descriptions.',
      images: [
        { label: 'Calendar Screen', image: imgCalendar },
      ],
    },
    {
      id: 'history',
      label: 'Sikh History & Heritage',
      icon: <Award className="w-4 h-4" />,
      title: 'Sikh History Archives',
      description: 'Deep dive into history with detailed profiles of the Ten Gurus and interactive chronological timelines of historic events.',
      images: [
        { label: 'Events Timeline', image: imgHistoryTimeline },
        { label: 'Ten Gurus Profiles', image: imgHistoryGurus },
      ],
    },
    {
      id: 'ai',
      label: 'Gurbani AI Assistant',
      icon: <Sparkles className="w-4 h-4" />,
      title: 'Gurbani AI Companion',
      description: 'Search scripture semantically, clarify translation meanings, learn about history, and explore Sikh teachings interactively.',
      images: [
        { label: 'AI Welcome', image: imgAI },
      ],
    },
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  const handleTabChange = (tabId: TabId) => {
    setActiveTab(tabId);
    setActiveImageIndex(0);
  };

  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % currentTab.images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev - 1 + currentTab.images.length) % currentTab.images.length);
  };

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      {/* Tab controls (Left side for desktop) */}
      <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
        <div className="space-y-2">
          <h3 className="font-serif text-3xl font-bold tracking-tight text-gradient-gold-saffron">
            Experience the App
          </h3>
          <p className="text-sm text-foreground/75 leading-relaxed">
            Sikhi Connect packs powerful spiritual features in a gorgeous, modern interface. Click through to explore what we have built.
          </p>
        </div>

        <div className="space-y-2 max-h-[500px] overflow-y-auto pr-2 scrollbar-thin">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`w-full text-left p-3.5 rounded-2xl border transition-all duration-300 flex items-start gap-4 cursor-pointer ${
                  isActive
                    ? 'border-saffron-500/30 bg-saffron-500/5 shadow-[0_0_15px_-4px_rgba(226,88,34,0.15)]'
                    : 'border-card-border hover:border-foreground/15 hover:bg-card-bg/20'
                }`}
              >
                <div
                  className={`p-2.5 rounded-xl shrink-0 transition-colors duration-300 ${
                    isActive ? 'bg-saffron-500 text-white' : 'bg-card-bg text-foreground/60'
                  }`}
                >
                  {tab.icon}
                </div>
                <div>
                  <h4 className={`font-semibold text-sm transition-colors ${isActive ? 'text-saffron-500' : 'text-foreground'}`}>
                    {tab.title}
                  </h4>
                  <p className="text-xs text-foreground/60 mt-1 leading-relaxed line-clamp-2">
                    {tab.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Mobile Phone Mockup (Right side) */}
      <div className="lg:col-span-7 flex flex-col items-center justify-center order-1 lg:order-2">
        <div className="relative w-[290px] h-[590px] bg-charcoal-950 border-[10px] border-charcoal-900 rounded-[45px] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),_0_0_40px_-5px_rgba(226,88,34,0.25)] flex flex-col overflow-hidden group">
          {/* Dynamic Speaker Grill/Camera Notch */}
          <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-charcoal-900 rounded-full z-30 flex justify-center items-center gap-1.5 pointer-events-none">
            <div className="w-10 h-0.75 bg-charcoal-950 rounded-full" />
            <div className="w-2 h-2 bg-[#1a1c35] rounded-full border border-charcoal-900" />
          </div>

          {/* Screenshot Container */}
          <div className="relative flex-1 bg-background overflow-hidden">
            <Image
              key={`${activeTab}-${activeImageIndex}`}
              src={currentTab.images[activeImageIndex].image}
              alt={currentTab.images[activeImageIndex].label}
              fill
              sizes="290px"
              className="object-cover select-none animate-fade-in"
              priority
            />

            {/* Subtle Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/20 via-transparent to-charcoal-950/20 pointer-events-none z-10" />

            {/* Arrow Navigation (overlay on hover, only if multiple images) */}
            {currentTab.images.length > 1 && (
              <>
                <button
                  onClick={handlePrevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-charcoal-950/60 hover:bg-saffron-500 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 cursor-pointer border border-white/10"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  onClick={handleNextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-charcoal-950/60 hover:bg-saffron-500 text-white flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 z-20 cursor-pointer border border-white/10"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Indicators and Selector Labels under mockup */}
        {currentTab.images.length > 1 && (
          <div className="flex flex-col items-center gap-2 mt-4 w-full">
            <div className="flex justify-center gap-2">
              {currentTab.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase transition-all duration-300 border cursor-pointer ${
                    activeImageIndex === idx
                      ? 'bg-saffron-500 border-saffron-500 text-white shadow-md shadow-saffron-500/10'
                      : 'bg-card-bg border-card-border text-foreground/60 hover:border-foreground/20 hover:bg-card-bg/60'
                  }`}
                >
                  {img.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
