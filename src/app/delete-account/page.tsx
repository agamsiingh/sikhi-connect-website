import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import DeleteAccountForm from '@/components/DeleteAccountForm';
import {
  Trash2,
  ShieldCheck,
  ArrowLeft,
  ChevronRight,
  Mail,
  Smartphone,
  CheckCircle2,
  Clock,
  Database,
  FileText,
  AlertTriangle,
  Lock,
  UserX,
  RefreshCw,
  HelpCircle,
} from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Account & Data Deletion - Sikhi Connect',
  description:
    'Official Account and User Data Deletion Request page for Sikhi Connect app. Learn how to delete your account, push notification tokens, and cloud data.',
};

export default function DeleteAccountPage() {
  const lastUpdated = 'August 13, 2026';

  return (
    <div className="flex-1 flex flex-col relative overflow-hidden bg-background text-foreground min-h-screen">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-saffron-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-[40%] right-10 w-[500px] h-[500px] bg-gold-500/5 rounded-full blur-3xl pointer-events-none" />

      {/* Global Navbar */}
      <Navbar />

      <main className="flex-1 pt-32 pb-24 px-6 lg:px-8 max-w-4xl mx-auto w-full space-y-12">
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
          <Link
            href="/privacy"
            className="hover:text-saffron-500 transition-colors"
          >
            Privacy Policy
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-foreground/30" />
          <span className="text-saffron-500">Account & Data Deletion</span>
        </div>

        {/* Header Title Section */}
        <div className="space-y-4 pb-8 border-b border-card-border/40">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-saffron-500/10 border border-saffron-500/20 text-saffron-500 text-xs font-semibold uppercase tracking-widest">
            <Trash2 className="w-4 h-4" />
            Sikhi Connect User Data Control
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold tracking-tight">
            Account & Data Deletion
          </h1>
          <p className="text-foreground/80 text-base sm:text-lg max-w-3xl leading-relaxed">
            At <strong className="text-foreground">Sikhi Connect</strong> (App & Platform), we respect your right to control your personal data. Below are clear instructions, policies, and a direct request form to delete your user account and all associated personal data.
          </p>
          <div className="flex items-center gap-4 text-xs text-foreground/60 pt-2 font-medium">
            <div className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-saffron-500" />
              <span>Effective Date: <strong>{lastUpdated}</strong></span>
            </div>
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-gold-500" />
              <span>Google Play & iOS Compliant</span>
            </div>
          </div>
        </div>

        {/* Policy & Instruction Sections */}
        <div className="space-y-12 text-sm text-foreground/85 leading-relaxed">

          {/* Section 1: Developer & App Identification */}
          <section className="space-y-3 p-6 rounded-2xl bg-card-bg/50 border border-card-border/40">
            <h2 className="font-serif text-xl font-bold text-foreground flex items-center gap-2">
              <Smartphone className="w-5 h-5 text-saffron-500" />
              Application & Developer Details
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              <div>
                <span className="text-foreground/50 uppercase tracking-wider text-[10px] font-bold block">Application Name</span>
                <span className="font-semibold text-foreground text-sm">Sikhi Connect</span>
              </div>
              <div>
                <span className="text-foreground/50 uppercase tracking-wider text-[10px] font-bold block">Developer / Organization</span>
                <span className="font-semibold text-foreground text-sm">Sikhi Connect Team</span>
              </div>
              <div>
                <span className="text-foreground/50 uppercase tracking-wider text-[10px] font-bold block">Official Website</span>
                <span className="font-semibold text-saffron-500 text-sm">sikhiconnect.app</span>
              </div>
              <div>
                <span className="text-foreground/50 uppercase tracking-wider text-[10px] font-bold block">Support Email</span>
                <a href="mailto:support@sikhiconnect.app" className="font-semibold text-saffron-500 hover:underline text-sm">
                  support@sikhiconnect.app
                </a>
              </div>
            </div>
          </section>

          {/* Section 2: Prominent Steps to Request Deletion */}
          <section className="space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-bold text-foreground flex items-center gap-2.5">
                <UserX className="w-6 h-6 text-saffron-500" />
                How to Request Account & Data Deletion
              </h2>
              <p className="text-foreground/75">
                You can request the deletion of your <strong className="text-foreground">Sikhi Connect</strong> account and associated data through any of the three options below:
              </p>
            </div>

            {/* Option A: On-Page Web Form */}
            <div id="request-form" className="p-6 rounded-2xl bg-card-bg/80 border-2 border-saffron-500/30 space-y-4 shadow-lg shadow-saffron-500/5">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gradient-saffron-gold text-white font-bold text-sm shadow-md">
                  1
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground">Option 1: Submit Request Online (Web Form)</h3>
                  <p className="text-xs text-foreground/60">Fastest method. Submit your registered email address right here on this page.</p>
                </div>
              </div>

              <div className="pt-2">
                <DeleteAccountForm />
              </div>
            </div>

            {/* Option B: In-App Steps */}
            <div className="p-6 rounded-2xl bg-card-bg/50 border border-card-border/40 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-saffron-500/20 text-saffron-500 font-bold text-sm border border-saffron-500/30">
                  2
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground">Option 2: Delete Account In-App (Mobile App)</h3>
                  <p className="text-xs text-foreground/60">If you have the Sikhi Connect mobile app installed on iOS or Android:</p>
                </div>
              </div>
              <ol className="list-decimal list-inside space-y-2 text-xs text-foreground/80 pl-2">
                <li>Open the <strong className="text-foreground">Sikhi Connect</strong> app on your device.</li>
                <li>Tap the <strong className="text-foreground">Settings / Profile</strong> icon in the navigation bar.</li>
                <li>Scroll down to <strong className="text-foreground">Account & Privacy</strong>.</li>
                <li>Select <strong className="text-saffron-500 font-semibold">Delete Account & Data</strong>.</li>
                <li>Confirm the prompt. Your request will be instantly registered.</li>
              </ol>
            </div>

            {/* Option C: Direct Email Request */}
            <div className="p-6 rounded-2xl bg-card-bg/50 border border-card-border/40 space-y-4">
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-8 h-8 rounded-xl bg-gold-500/20 text-gold-500 font-bold text-sm border border-gold-500/30">
                  3
                </span>
                <div>
                  <h3 className="font-serif font-bold text-lg text-foreground">Option 3: Request via Email Support</h3>
                  <p className="text-xs text-foreground/60">Send a direct email request from your registered email address.</p>
                </div>
              </div>
              <div className="text-xs text-foreground/80 space-y-2 pl-2">
                <p>
                  Send an email to <a href="mailto:support@sikhiconnect.app?subject=Account%20and%20Data%20Deletion%20Request%20-%20Sikhi%20Connect" className="text-saffron-500 font-bold hover:underline">support@sikhiconnect.app</a> with the subject line <strong className="text-foreground">&quot;Account and Data Deletion Request - Sikhi Connect&quot;</strong>.
                </p>
                <p className="text-foreground/60 text-[11px]">
                  Please include your registered email address and optional account details. Our team will verify ownership and process the deletion.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3: Types of Data Deleted vs Kept & Retention Period */}
          <section className="space-y-6 pt-6 border-t border-card-border/30">
            <div className="space-y-2">
              <h2 className="font-serif text-2xl font-bold text-foreground flex items-center gap-2.5">
                <Database className="w-6 h-6 text-saffron-500" />
                Data Types Deleted, Data Kept & Retention Timelines
              </h2>
              <p className="text-foreground/75">
                In compliance with Google Play Store Data Safety rules and data privacy regulations, here is a detailed summary of how your data is handled upon deletion:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
              {/* Deleted Data Card */}
              <div className="p-6 rounded-2xl bg-card-bg/60 border border-saffron-500/30 space-y-4">
                <div className="flex items-center gap-2 text-saffron-500 font-bold text-base">
                  <CheckCircle2 className="w-5 h-5" />
                  <span>Data That Is Permanently Deleted</span>
                </div>
                <ul className="space-y-2 text-xs text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-1.5 flex-shrink-0" />
                    <span><strong className="text-foreground">User Account Identity:</strong> Email address, full name, display profile, and unique user account IDs.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-1.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Notification Identifiers:</strong> Firebase Cloud Messaging (FCM) and Apple Push Notification (APNs) device tokens used for Nitnem reminders.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-1.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Cloud Sync & Preferences:</strong> Saved Shabads, bookmarks, reading history, custom font sizes, and Nitnem reminder schedules stored on cloud servers.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-saffron-500 mt-1.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Waitlist Registration:</strong> Early access waitlist entries, contact preferences, and invite records.</span>
                  </li>
                </ul>
              </div>

              {/* Data Kept & Local Data Card */}
              <div className="p-6 rounded-2xl bg-card-bg/60 border border-gold-500/30 space-y-4">
                <div className="flex items-center gap-2 text-gold-500 font-bold text-base">
                  <Lock className="w-5 h-5" />
                  <span>Data Kept & Additional Retention Info</span>
                </div>
                <ul className="space-y-2 text-xs text-foreground/80">
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                    <span><strong className="text-foreground">No Retention of Personal Data:</strong> Once an account deletion request is processed, no personal identity data or email address is kept in active databases.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Security Logs (Max 30 Days):</strong> Minimal anonymized server request logs may be kept in encrypted system backup logs for up to 30 days strictly for fraud prevention, server security, and crash debugging, after which they are automatically purged.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500 mt-1.5 flex-shrink-0" />
                    <span><strong className="text-foreground">Local Device Storage:</strong> Scripture files, audio cache, and offline settings stored locally on your smartphone are controlled by your OS. They are deleted immediately when you uninstall the app or clear app data.</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Retention Period Callout */}
            <div className="p-5 rounded-2xl bg-saffron-500/10 border border-saffron-500/30 flex items-start gap-3">
              <Clock className="w-5 h-5 text-saffron-500 flex-shrink-0 mt-0.5" />
              <div className="space-y-1 text-xs">
                <h4 className="font-bold text-foreground text-sm">Account Deletion Retention & Processing Timeline</h4>
                <p className="text-foreground/80 leading-relaxed">
                  Upon receiving a valid request (via web form, in-app option, or email), your deletion request is verified immediately. All cloud account records, notification tokens, and personal details are permanently deleted from our servers within <strong className="text-saffron-500 font-bold">30 calendar days</strong>.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4: Contact & Help */}
          <section className="p-6 rounded-2xl bg-card-bg/60 border border-card-border/50 space-y-3">
            <h3 className="font-serif font-bold text-lg text-foreground flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-saffron-500" />
              Questions or Verification?
            </h3>
            <p className="text-xs text-foreground/75">
              If you have any questions regarding our account deletion policy, or wish to verify the status of an ongoing request, please reach out to our team:
            </p>
            <div className="flex items-center gap-2 text-sm font-semibold text-saffron-500 pt-1">
              <Mail className="w-4 h-4" />
              <a href="mailto:support@sikhiconnect.app" className="hover:underline">
                support@sikhiconnect.app
              </a>
            </div>
          </section>

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
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/delete-account" className="text-saffron-500 font-semibold hover:underline">Delete Account</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
