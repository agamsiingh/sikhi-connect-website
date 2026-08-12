import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import {
  ShieldCheck,
  Lock,
  Eye,
  FileText,
  Trash2,
  Mail,
  Bell,
  HardDrive,
  Cpu,
  UserCheck,
  ChevronRight,
  ArrowLeft,
  Calendar,
  Globe,
  Sparkles,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy - Sikhi Connect',
  description:
    'Privacy Policy for Sikhi Connect. Learn how we handle, protect, and respect your data across our mobile applications and web services.',
};

export default function PrivacyPolicy() {
  const lastUpdated = 'August 13, 2026';

  const tableOfContents = [
    { id: 'overview', title: '1. Overview & Data Controller' },
    { id: 'data-collected', title: '2. Information We Collect' },
    { id: 'data-usage', title: '3. How We Use Your Information' },
    { id: 'third-parties', title: '4. Data Sharing & Third Parties' },
    { id: 'data-security', title: '5. Security & Encryption' },
    { id: 'data-retention', title: '6. Data Retention & Deletion' },
    { id: 'children-privacy', title: '7. Children\'s Privacy' },
    { id: 'your-rights', title: '8. Your Rights & Choices' },
    { id: 'policy-changes', title: '9. Changes to This Policy' },
    { id: 'contact-us', title: '10. Contact Information' },
  ];

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-background text-foreground min-h-screen">
      {/* Background decoration glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[30%] right-10 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 lg:px-8 max-w-5xl mx-auto w-full space-y-12">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-semibold text-foreground/60">
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-saffron-500 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            Back to Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-foreground/30" />
          <span className="text-saffron-500">Privacy Policy</span>
        </div>

        {/* Hero Header */}
        <div className="space-y-4 pb-8 border-b border-card-border/40">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/20 text-saffron-500 text-xs font-semibold uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4" />
            User Data & Transparency Guarantee
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-foreground/75 text-base sm:text-lg max-w-3xl leading-relaxed">
            At <strong className="text-foreground">Sikhi Connect</strong>, we hold your trust and privacy with sacred respect. This policy details how we treat personal, device, and usage information when you interact with our mobile application and website.
          </p>
          <div className="flex items-center gap-2 text-xs text-foreground/50 pt-2 font-medium">
            <Calendar className="w-3.5 h-3.5 text-saffron-500" />
            <span>Effective Date: <strong>{lastUpdated}</strong></span>
          </div>
        </div>

        {/* Table of Contents & Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Sidebar TOC */}
          <aside className="lg:col-span-4 sticky top-28 bg-card-bg/40 backdrop-blur-md p-6 rounded-2xl border border-card-border/50 space-y-4">
            <h2 className="font-serif text-sm font-bold uppercase tracking-wider text-saffron-500 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Table of Contents
            </h2>
            <nav className="space-y-1.5 text-xs">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block py-1.5 px-2.5 rounded-lg text-foreground/70 hover:text-saffron-500 hover:bg-saffron-500/5 transition-all duration-200"
                >
                  {item.title}
                </a>
              ))}
            </nav>
          </aside>

          {/* Policy Main Articles */}
          <article className="lg:col-span-8 space-y-12 text-sm text-foreground/80 leading-relaxed font-sans">
            {/* Section 1 */}
            <section id="overview" className="space-y-4 scroll-mt-28">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-saffron-500/10 text-saffron-500">
                  <Globe className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  1. Overview & Data Controller
                </h2>
              </div>
              <p>
                Sikhi Connect (“we”, “our”, or “us”) operates the Sikhi Connect mobile application (available on iOS and Android) and the official website (<strong className="text-foreground">sikhiconnect.app</strong>). Our mission is to provide an open-source, respectful, and distraction-free platform for reading Gurbani, managing daily Nitnem, streaming Live Kirtan from Sri Harmandir Sahib, and exploring Sikh history.
              </p>
              <p>
                We are committed to full compliance with Google Play Store User Data Policies, Apple App Store Guidelines, and global data privacy standards (including GDPR and CCPA).
              </p>
            </section>

            {/* Section 2 */}
            <section id="data-collected" className="space-y-4 scroll-mt-28 border-t border-card-border/30 pt-8">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-saffron-500/10 text-saffron-500">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  2. Information We Collect
                </h2>
              </div>
              <p>
                We collect only the minimal necessary data required to deliver our core application functionality:
              </p>

              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-xl bg-card-bg/60 border border-card-border/40 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Mail className="w-4 h-4 text-saffron-500" />
                    <span>A. Personal & Contact Information</span>
                  </div>
                  <p className="text-xs text-foreground/70">
                    When you voluntarily submit your email address via our waitlist or account creation forms, we collect your email to provide early access invites, important feature announcements, and account security updates.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-card-bg/60 border border-card-border/40 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Bell className="w-4 h-4 text-gold-500" />
                    <span>B. Push Notification Tokens & Device Identifiers</span>
                  </div>
                  <p className="text-xs text-foreground/70">
                    To deliver scheduled Nitnem reminders (morning, evening, bedtime) and Daily Hukamnama notifications, we store an encrypted Firebase Cloud Messaging (FCM) or Apple Push Notification Service (APNs) device token. We also log operating system version, device model, and app release version to maintain compatibility.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-card-bg/60 border border-card-border/40 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <Sparkles className="w-4 h-4 text-saffron-500" />
                    <span>C. Gurbani AI Queries & Search Data</span>
                  </div>
                  <p className="text-xs text-foreground/70">
                    Search queries entered into our Gurbani AI feature are processed anonymously to retrieve relevant scriptural verses and historical context. Search prompts are not linked to your personal identity.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-card-bg/60 border border-card-border/40 space-y-2">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    <HardDrive className="w-4 h-4 text-gold-500" />
                    <span>D. Local Device Storage & Preferences</span>
                  </div>
                  <p className="text-xs text-foreground/70">
                    Your reading history, bookmarked Shabads, custom font sizes, night mode preferences, and offline downloaded Banis are stored locally on your device using secure local storage / key-value stores.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section id="data-usage" className="space-y-4 scroll-mt-28 border-t border-card-border/30 pt-8">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-saffron-500/10 text-saffron-500">
                  <Cpu className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  3. How We Use Your Information
                </h2>
              </div>
              <p>
                We use the data collected strictly for legitimate application operating purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-xs text-foreground/75 pl-2">
                <li><strong className="text-foreground">Core App Functionality:</strong> Enabling Gurbani scriptural reading, offline Bani access, and live audio playback from Sri Harmandir Sahib.</li>
                <li><strong className="text-foreground">Push Notifications:</strong> Triggering customized reminders for daily prayer schedules as requested by the user.</li>
                <li><strong className="text-foreground">Gurbani AI Responses:</strong> Generating accurate scriptural translations and historical explanations.</li>
                <li><strong className="text-foreground">Diagnostics & Performance:</strong> Monitoring application stability, fixing crashes, and improving server response times.</li>
                <li><strong className="text-foreground">No Advertising:</strong> Sikhi Connect is 100% ad-free. We do not use your data for advertising, cross-app tracking, or marketing profiling.</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section id="third-parties" className="space-y-4 scroll-mt-28 border-t border-card-border/30 pt-8">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-saffron-500/10 text-saffron-500">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  4. Data Sharing & Third Parties
                </h2>
              </div>
              <p className="font-semibold text-saffron-500">
                We strictly DO NOT sell, rent, or trade your personal data to third parties.
              </p>
              <p>
                To provide dependable cloud features, we rely on trusted enterprise infrastructure providers who adhere to rigorous data privacy standards:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-2">
                <div className="p-3.5 rounded-xl bg-card-bg/40 border border-card-border/30 space-y-1">
                  <div className="font-bold text-foreground">Google Firebase</div>
                  <div className="text-foreground/60">Cloud Messaging for push notifications & app diagnostics.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-card-bg/40 border border-card-border/30 space-y-1">
                  <div className="font-bold text-foreground">Supabase / PostgreSQL</div>
                  <div className="text-foreground/60">Secure database infrastructure for waitlist authentication & metadata.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-card-bg/40 border border-card-border/30 space-y-1">
                  <div className="font-bold text-foreground">Vercel Platform</div>
                  <div className="text-foreground/60">High-performance global web hosting & SSL certificate infrastructure.</div>
                </div>
                <div className="p-3.5 rounded-xl bg-card-bg/40 border border-card-border/30 space-y-1">
                  <div className="font-bold text-foreground">AI Processing Services</div>
                  <div className="text-foreground/60">Anonymized query processing for Gurbani AI search features.</div>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section id="data-security" className="space-y-4 scroll-mt-28 border-t border-card-border/30 pt-8">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-saffron-500/10 text-saffron-500">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  5. Security & Encryption
                </h2>
              </div>
              <p>
                All data transmitted between the Sikhi Connect mobile application, website, and servers is protected using <strong className="text-foreground">Transport Layer Security (TLS 1.2/1.3 / HTTPS encryption)</strong>. Data stored on cloud services is encrypted at rest using industry-standard AES-256 algorithms.
              </p>
            </section>

            {/* Section 6 */}
            <section id="data-retention" className="space-y-4 scroll-mt-28 border-t border-card-border/30 pt-8">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-saffron-500/10 text-saffron-500">
                  <Trash2 className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  6. Data Retention & User Deletion Process
                </h2>
              </div>
              <p>
                We retain personal information only for as long as necessary to fulfill the purposes described in this Privacy Policy.
              </p>
              <div className="p-5 rounded-2xl bg-saffron-500/5 border border-saffron-500/20 space-y-3">
                <h3 className="font-bold text-saffron-500 text-base">Request Account or Data Deletion</h3>
                <p className="text-xs text-foreground/80 leading-relaxed">
                  In compliance with Google Play Store and iOS developer policies, users have full rights to request complete deletion of their account records, email address, and push notification tokens.
                </p>
                <div className="text-xs font-semibold text-foreground flex items-center gap-2">
                  <span>To request data deletion, send an email to:</span>
                  <a
                    href="mailto:support@sikhiconnect.app?subject=Data%20Deletion%20Request"
                    className="text-saffron-500 underline font-bold"
                  >
                    support@sikhiconnect.app
                  </a>
                </div>
                <p className="text-[11px] text-foreground/50">
                  All valid deletion requests are fulfilled within 30 days of receipt.
                </p>
              </div>
            </section>

            {/* Section 7 */}
            <section id="children-privacy" className="space-y-4 scroll-mt-28 border-t border-card-border/30 pt-8">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-saffron-500/10 text-saffron-500">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  7. Children&apos;s Privacy
                </h2>
              </div>
              <p>
                Sikhi Connect is designed for spiritual, educational, and family use across all age groups. We do not knowingly collect personal identifiable information from children under the age of 13. If a parent or guardian becomes aware that their child has provided personal information without consent, please contact us immediately for prompt deletion.
              </p>
            </section>

            {/* Section 8 */}
            <section id="your-rights" className="space-y-4 scroll-mt-28 border-t border-card-border/30 pt-8">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-saffron-500/10 text-saffron-500">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  8. Your Rights & Choices
                </h2>
              </div>
              <p>
                Depending on your location, you hold specific rights regarding your personal data:
              </p>
              <ul className="list-disc list-inside space-y-1.5 text-xs text-foreground/75 pl-2">
                <li><strong className="text-foreground">Push Notifications:</strong> You can disable prayer reminders at any time through your mobile device system settings.</li>
                <li><strong className="text-foreground">Access & Export:</strong> You may request a summary copy of your stored account data.</li>
                <li><strong className="text-foreground">Local Data Reset:</strong> You can clear app cache and local offline data at any time via app settings or OS application preferences.</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section id="policy-changes" className="space-y-4 scroll-mt-28 border-t border-card-border/30 pt-8">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-saffron-500/10 text-saffron-500">
                  <Calendar className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  9. Changes to This Privacy Policy
                </h2>
              </div>
              <p>
                We may update our Privacy Policy periodically to reflect app updates, new functionality, or legal requirements. Material updates will be posted on this page with an updated &quot;Effective Date&quot; at the top.
              </p>
            </section>

            {/* Section 10 */}
            <section id="contact-us" className="space-y-4 scroll-mt-28 border-t border-card-border/30 pt-8">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-saffron-500/10 text-saffron-500">
                  <Mail className="w-5 h-5" />
                </div>
                <h2 className="font-serif text-2xl font-bold text-foreground">
                  10. Contact Information
                </h2>
              </div>
              <p>
                If you have questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact our team:
              </p>
              <div className="p-6 rounded-2xl bg-card-bg/60 border border-card-border/50 space-y-2">
                <div className="font-serif font-bold text-lg text-foreground">Sikhi Connect Support Team</div>
                <div className="text-xs text-foreground/70">Official Application & Platform Support</div>
                <div className="text-sm font-semibold text-saffron-500 pt-2 flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <a href="mailto:support@sikhiconnect.app" className="hover:underline">
                    support@sikhiconnect.app
                  </a>
                </div>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-charcoal-950 text-cream-100 py-12 px-6 lg:px-8 border-t-2 border-gold-500/20 mt-auto">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-cream-100/60">
          <div className="flex items-center gap-2.5">
            <Image
              src="/icon.png"
              alt="Sikhi Connect Logo"
              width={24}
              height={24}
              className="rounded-lg"
            />
            <span className="font-serif font-extrabold text-sm text-white">
              Sikhi<span className="text-saffron-500 font-sans font-light">Connect</span>
            </span>
          </div>
          <div>
            &copy; {new Date().getFullYear()} Sikhi Connect App. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <Link href="/privacy" className="text-saffron-500 font-semibold hover:underline">Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
