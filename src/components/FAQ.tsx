'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = {
  question: string;
  answer: string;
};

const faqItems: FAQItem[] = [
  {
    question: 'What is Sikhi Connect?',
    answer:
      'Sikhi Connect is a premium companion application designed to help Sikhs worldwide connect deeply with Gurbani, Nitnem, Live Streams, History, and interactive AI-driven tools. It combines premium UI design with robust features for daily spiritual practices.',
  },
  {
    question: 'What platforms will the app be available on?',
    answer:
      'The app is currently built using Flutter, which allows us to launch natively on both iOS (Apple App Store) and Android (Google Play Store) simultaneously. The waitlist handles early access registration for both platforms.',
  },
  {
    question: 'How does the Gurbani AI assistant work?',
    answer:
      'The Gurbani AI assistant uses advanced linguistic models specifically trained on Guru Granth Sahib translations, commentaries, and history. It helps you search, explain, and contextualize Gurbani verses. Note: It does not generate new verses; it strictly searches and explains existing scriptures using authenticated translation materials.',
  },
  {
    question: 'Can I listen to Live Darbar Sahib?',
    answer:
      'Yes! Sikhi Connect integrates high-quality, direct audio streaming from Sri Harmandir Sahib (Golden Temple), Amritsar. It also displays the official daily Hukamnama alongside translations in multiple languages (Gurmukhi, English, Hindi, and Punjabi).',
  },
  {
    question: 'What Gurbani tools are provided?',
    answer:
      'We offer an advanced Gurbani Reader with word-by-word translations, custom fonts, dark/light modes, and bookmarks; Nitnem reminders that send personalized push notifications for morning, evening, and bedtime prayers; and audio audiobooks/podcasts/kirtan playlists.',
  },
  {
    question: 'Is the app free to use?',
    answer:
      'Sikhi Connect will offer a comprehensive free tier that includes all essential spiritual tools (Gurbani Reader, Nitnem, Hukamnama, Live streams). We will also offer an optional premium tier to support hosting, edge servers, and AI processing, with no ads in either tier to maintain a respectful space.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqItems.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            key={index}
            className={`bg-card-bg/40 border rounded-2xl transition-all duration-300 ${
              isOpen
                ? 'border-saffron-500/30 shadow-[0_0_15px_-4px_rgba(226,88,34,0.15)] bg-card-bg/60'
                : 'border-card-border hover:border-foreground/20'
            }`}
          >
            <button
              onClick={() => toggleIndex(index)}
              className="w-full flex justify-between items-center text-left p-6 font-semibold font-serif text-lg text-foreground hover:text-saffron-500 transition-colors cursor-pointer group"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-foreground/45 transition-transform duration-300 group-hover:text-saffron-500 ${
                  isOpen ? 'rotate-180 text-saffron-500!' : ''
                }`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isOpen ? 'max-h-60 border-t border-card-border/50' : 'max-h-0'
              }`}
            >
              <div className="p-6 text-sm text-foreground/75 leading-relaxed bg-black/5 dark:bg-white/1 rounded-b-2xl">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
