import React from 'react';
import Image from 'next/image';
import Navbar from '@/components/Navbar';
import LiveDarbarSahib from '@/components/LiveDarbarSahib';
import AppScreenshots from '@/components/AppScreenshots';
import WaitlistForm from '@/components/WaitlistForm';
import FAQ from '@/components/FAQ';

import {
  BookOpen,
  Calendar,
  Radio,
  Volume2,
  Bookmark,
  Sparkles,
  Award,
  ChevronRight,
  ShieldCheck,
  Zap,
  Globe,
  Star,
  Users,
} from 'lucide-react';

type FeatureItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge?: string;
};

const features: FeatureItem[] = [
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Gurbani Reader',
    description:
      'Immersive reading layouts with word-by-word translations, Gurmukhi transliterations, and customizable themes for a respectful reading experience.',
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: 'Nitnem Companion',
    description:
      'Organize your daily Nitnem schedule. Configure push notification reminders for morning, evening, and bedtime prayers so you never miss a Bani.',
  },
  {
    icon: <Bookmark className="w-5 h-5" />,
    title: 'Daily Hukamnama',
    description:
      'Access the daily Hukamnama from Sri Harmandir Sahib, complete with translations, historical archives, and audio recitation of the daily verse.',
  },
  {
    icon: <Volume2 className="w-5 h-5" />,
    title: 'Audio Companion',
    description:
      'Stream high-quality Kirtan, Nitnem audio tracks, educational podcasts, and audiobooks. Download prayers locally for offline listening.',
  },
  {
    icon: <Radio className="w-5 h-5" />,
    title: 'Live Darbar Sahib',
    description:
      'Direct, high-fidelity audio streams from Golden Temple (Sri Harmandir Sahib), Amritsar. Listen live during daily prayers and Asa Di Var.',
    badge: 'Live',
  },
  {
    icon: <Award className="w-5 h-5" />,
    title: 'Sikh History & Heritage',
    description:
      'Explore an interactive history database containing profiles of the Ten Gurus, historical timelines, and educational materials for youth.',
  },
  {
    icon: <Sparkles className="w-5 h-5" />,
    title: 'Gurbani AI Search',
    description:
      'Ask complex questions about Shabad meanings, translate difficult terms, and search scriptural history with our custom-trained Gurbani AI assistant.',
    badge: 'Smart',
  },
];

export default function Home() {
  return (
    <div className="flex-1 flex flex-col relative overflow-hidden">
      {/* Background abstract decoration glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[20%] right-1/4 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-[20%] left-10 w-[450px] h-[450px] bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Global Navigation Header */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 border-b border-card-border/30">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-fade-in-up">
          {/* Tag badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-saffron-500/10 border border-saffron-500/20 text-saffron-500 text-xs font-semibold uppercase tracking-widest">
            <Zap className="w-3 h-3" />
            Introducing Sikhi Connect
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-6xl font-extrabold tracking-tight text-foreground leading-[1.1] max-w-4xl mx-auto">
            Your Premium Companion for <br />
            <span className="text-gradient-saffron-gold">Gurbani & Sikh Heritage</span>
          </h1>

          {/* Subtext */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-foreground/75 leading-relaxed font-sans">
            Sikhi Connect bridges centuries of scriptural wisdom and historical heritage with the modern, high-quality digital experience you deserve. Gurbani AI search, personalized Nitnem tracking, live streaming, and history, built directly for iOS and Android.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="#waitlist"
              className="w-full sm:w-auto text-center bg-gradient-saffron-gold text-white font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl hover:shadow-[0_4px_25px_-5px_rgba(226,88,34,0.4)] hover:scale-102 transition-all duration-300 cursor-pointer"
            >
              Join the Waitlist
            </a>
            <a
              href="#features"
              className="w-full sm:w-auto text-center border border-card-border hover:border-saffron-500/50 hover:bg-saffron-500/5 text-foreground font-bold text-sm uppercase tracking-widest px-8 py-4 rounded-xl transition-all duration-300 cursor-pointer"
            >
              Explore Features
            </a>
          </div>

          {/* Trust stats or badges */}
          <div className="pt-8 grid grid-cols-2 sm:grid-cols-3 gap-6 max-w-3xl mx-auto border-t border-card-border/30">
            <div className="space-y-1">
              <div className="font-serif text-2xl font-bold text-gradient-gold-saffron">iOS & Android</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50 font-semibold">Flutter Platform</div>
            </div>
            <div className="space-y-1">
              <div className="font-serif text-2xl font-bold text-gradient-gold-saffron">No Ads</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50 font-semibold">Respectful Space</div>
            </div>
            <div className="col-span-2 sm:col-span-1 space-y-1">
              <div className="font-serif text-2xl font-bold text-gradient-gold-saffron">Open-Source</div>
              <div className="text-xs uppercase tracking-wider text-foreground/50 font-semibold">Community-Led</div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Darbar Widget Section */}
      <section id="live-darbar" className="py-20 px-6 lg:px-8 bg-card-bg/25 border-b border-card-border/30">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Direct Connection to Sri Amritsar Sahib
            </h2>
            <p className="text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
              Access live daily kirtan broadcasts and official daily scriptures directly within the application dashboard.
            </p>
          </div>
          <LiveDarbarSahib />
        </div>
      </section>

      {/* Features Grid Section */}
      <section id="features" className="py-20 px-6 lg:px-8 border-b border-card-border/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-saffron-500">Core Architecture</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Designed to Enlighten and Empower
            </h2>
            <p className="text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
              Discover a suite of premium tools built for study, prayer, listening, and discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feat, index) => (
              <div
                key={index}
                className="bg-card-bg/40 hover:bg-card-bg/60 border border-card-border hover:border-saffron-500/20 rounded-2xl p-6 transition-all duration-300 group shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="w-10 h-10 rounded-xl bg-saffron-500/10 text-saffron-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {feat.icon}
                    </div>
                    {feat.badge && (
                      <span className="text-[10px] font-extrabold uppercase tracking-widest bg-gold-500/10 border border-gold-500/20 text-gold-500 px-2 py-0.5 rounded-full">
                        {feat.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="font-serif text-lg font-bold text-foreground">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-foreground/75 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
                
                <div className="pt-4 flex items-center gap-1.5 text-xs text-saffron-500 font-semibold uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more
                  <ChevronRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* App Mockups Showcase Section */}
      <section id="preview" className="py-20 px-6 lg:px-8 bg-card-bg/25 border-b border-card-border/30">
        <AppScreenshots />
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="py-20 px-6 lg:px-8 border-b border-card-border/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-saffron-500">Our Timeline</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Development Roadmap
            </h2>
            <p className="text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
              Follow our steps as we transition from private development to a public app release.
            </p>
          </div>

          {/* Timeline diagram */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {[
              {
                phase: 'Phase 1',
                title: 'Core Architecture',
                desc: 'Initialize databases, design design tokens, and launch Gurbani Reader + custom Nitnem scheduling engine.',
                status: 'Complete',
              },
              {
                phase: 'Phase 2',
                title: 'Broadcasts & Audio',
                desc: 'Integrate Live SGPC Darbar Sahib streaming, add audiobooks, offline play list, and custom widgets.',
                status: 'In Progress',
              },
              {
                phase: 'Phase 3',
                title: 'Gurbani AI Search',
                desc: 'Deploy AI models trained on verified translations to enable natural semantic searches and Shabad lookup.',
                status: 'Upcoming',
              },
              {
                phase: 'Phase 4',
                title: 'History & Community',
                desc: 'Implement rich history profiles, quiz tools, and collaborative forums for global community connect.',
                status: 'Upcoming',
              },
            ].map((step, idx) => (
              <div
                key={idx}
                className="bg-card-bg/30 border border-card-border rounded-2xl p-6 relative flex flex-col justify-between group hover:border-saffron-500/20 transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-bold text-gradient-gold-saffron uppercase tracking-widest">
                      {step.phase}
                    </span>
                    <span
                      className={`text-[9px] font-extrabold uppercase tracking-widest px-2 py-0.5 rounded-full border ${
                        step.status === 'Complete'
                          ? 'bg-green-500/10 border-green-500/20 text-green-500'
                          : step.status === 'In Progress'
                          ? 'bg-saffron-500/10 border-saffron-500/20 text-saffron-500 animate-pulse'
                          : 'bg-card-border/40 border-card-border/50 text-foreground/40'
                      }`}
                    >
                      {step.status}
                    </span>
                  </div>
                  <h4 className="font-serif text-lg font-bold text-foreground group-hover:text-saffron-500 transition-colors duration-300">
                    {step.title}
                  </h4>
                  <p className="text-xs text-foreground/75 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist Call-to-Action Form */}
      <section id="waitlist" className="py-20 px-6 lg:px-8 bg-card-bg/25 border-b border-card-border/30">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-3">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Ready to Connect?
            </h2>
            <p className="text-sm sm:text-base text-foreground/70 max-w-md mx-auto">
              Secure your early access to the Sikhi Connect mobile application and receive progress updates straight to your inbox.
            </p>
          </div>
          <WaitlistForm />
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 px-6 lg:px-8 border-b border-card-border/30">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-saffron-500">Need Help?</span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="text-sm sm:text-base text-foreground/70 max-w-xl mx-auto">
              Find quick answers to common questions about early access, features, and platform updates.
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal-950 text-cream-100 py-12 px-6 lg:px-8 border-t-2 border-gold-500/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Logo & Description */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/icon.png"
                alt="Sikhi Connect Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="font-serif font-extrabold text-lg tracking-tight">
                Sikhi<span className="text-saffron-500 font-sans font-light">Connect</span>
              </span>
            </div>
            <p className="text-xs text-cream-100/60 leading-relaxed max-w-sm">
              Sikhi Connect is a modern, high-quality, open-source application designed to serve the global Sikh Sangat with scripture reading, Nitnem, Live Streams, History, and AI-powered searching.
            </p>
          </div>

          {/* Links Section */}
          <div className="md:col-span-3 space-y-3 text-xs">
            <h5 className="font-bold text-saffron-500 uppercase tracking-wider">Navigation</h5>
            <ul className="space-y-2 text-cream-100/70">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#live-darbar" className="hover:text-white transition-colors">Live Kirtan</a></li>
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><a href="#roadmap" className="hover:text-white transition-colors">Roadmap</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3 text-xs">
            <h5 className="font-bold text-gold-500 uppercase tracking-wider">Contact & Legal</h5>
            <p className="text-cream-100/60 leading-relaxed">
              Have questions, feedback, or want to contribute? Connect with the developer team:
            </p>
            <div className="text-saffron-500 font-semibold">
              support@sikhiconnect.app
            </div>
            <div className="text-[10px] text-cream-100/40 pt-4">
              &copy; {new Date().getFullYear()} Sikhi Connect App. Built for the global Sangat with respect.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
