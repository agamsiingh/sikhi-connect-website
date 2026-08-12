'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X, Radio, Smartphone, ShieldCheck } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Live Darbar', href: '/#live-darbar' },
    { name: 'Features', href: '/#features' },
    { name: 'App Preview', href: '/#preview' },
    { name: 'Roadmap', href: '/#roadmap' },
    { name: 'FAQs', href: '/#faq' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-md border-b border-card-border/50 py-3 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/icon.png"
            alt="Sikhi Connect Logo"
            width={36}
            height={36}
            className="rounded-xl shadow-md shadow-saffron-500/10 group-hover:scale-105 transition-transform duration-300"
          />
          <span className="font-serif font-extrabold text-xl tracking-tight text-foreground group-hover:text-saffron-500 transition-colors duration-300">
            Sikhi<span className="text-saffron-500 font-sans font-light">Connect</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-foreground/75 hover:text-saffron-500 transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/#waitlist"
            className="inline-flex items-center gap-1.5 bg-gradient-saffron-gold text-white font-semibold text-xs uppercase tracking-widest px-5 py-2.5 rounded-full hover:shadow-[0_4px_15px_-4px_rgba(226,88,34,0.3)] hover:scale-102 transition-all duration-300 cursor-pointer"
          >
            <Smartphone className="w-3.5 h-3.5" />
            Get App Access
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground/80 hover:text-saffron-500 transition-colors cursor-pointer"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-x-0 top-[61px] bottom-0 bg-background/98 backdrop-blur-lg z-40 transition-all duration-500 md:hidden flex flex-col justify-between p-8 border-t border-card-border/50 ${
          isMobileMenuOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 text-center mt-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-serif font-bold text-2xl text-foreground/80 hover:text-saffron-500 transition-all duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="mt-auto flex flex-col gap-4">
          <Link
            href="/#waitlist"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-full text-center bg-gradient-saffron-gold text-white font-semibold text-sm uppercase tracking-widest py-4 rounded-xl hover:shadow-lg transition-all duration-300"
          >
            Join the Waitlist
          </Link>
        </div>
      </div>
    </nav>
  );
}
