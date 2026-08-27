import React, { useState, useEffect, useRef } from 'react';
import { Phone, Mail, Linkedin, ArrowDown, Copy, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

function AnimatedCounter({ target, suffix = '', decimals = 0, duration = 1200 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.2 });

    if (domRef.current) observer.observe(domRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(current);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };
    window.requestAnimationFrame(step);
  }, [isVisible, target, duration]);

  return (
    <span ref={domRef} className="tabular-nums">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export default function Hero({ onCopy }) {
  return (
    <section id="hero" className="relative pt-16 pb-20 md:pt-24 md:pb-28 border-b border-slate-100 dark:border-slate-800/60 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] pointer-events-none bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 dark:bg-emerald-950/50 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-800/40 mb-6 transition-all hover:scale-105">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>{personalInfo.status}</span>
        </div>

        {/* Name */}
        <h1 className="font-heading font-bold text-4xl sm:text-5xl md:text-6xl text-slate-900 dark:text-white tracking-tight leading-tight md:leading-none">
          {personalInfo.name}
        </h1>

        {/* Title */}
        <p className="mt-4 font-heading text-lg sm:text-xl md:text-2xl text-accent dark:text-accent-muted font-medium">
          {personalInfo.title}
        </p>

        {/* Tagline */}
        <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-3xl leading-relaxed">
          {personalInfo.tagline}
        </p>

        {/* Contact Action Pills */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          
          {/* Phone */}
          <div className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-accent hover:-translate-y-0.5 transition-all">
            <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-2 hover:text-accent">
              <Phone className="w-4 h-4 text-accent" />
              <span>{personalInfo.phone}</span>
            </a>
            <button
              onClick={() => onCopy(personalInfo.phone, "Phone number")}
              title="Copy Phone"
              className="ml-2.5 pl-2 border-l border-slate-200 dark:border-slate-700 text-slate-400 hover:text-accent transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Email */}
          <div className="inline-flex items-center rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-accent hover:-translate-y-0.5 transition-all">
            <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-2 hover:text-accent">
              <Mail className="w-4 h-4 text-accent" />
              <span>{personalInfo.email}</span>
            </a>
            <button
              onClick={() => onCopy(personalInfo.email, "Email address")}
              title="Copy Email"
              className="ml-2.5 pl-2 border-l border-slate-200 dark:border-slate-700 text-slate-400 hover:text-accent transition-colors"
            >
              <Copy className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* LinkedIn */}
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/60 px-3 py-2 text-sm text-slate-700 dark:text-slate-300 shadow-sm hover:border-accent hover:text-accent hover:-translate-y-0.5 transition-all group"
          >
            <Linkedin className="w-4 h-4 text-accent" />
            <span>LinkedIn Profile</span>
            <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Action CTAs */}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium text-sm transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 group"
          >
            <span>View Projects</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 bg-transparent text-slate-800 dark:text-slate-200 font-medium text-sm transition-all hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Get In Touch</span>
          </a>
        </div>

        {/* Stats Ribbon with Animated Counters */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 dark:border-slate-800 grid grid-cols-2 md:grid-cols-4 gap-6">
          {personalInfo.stats.map((st, i) => (
            <div key={i} className="flex flex-col p-3 rounded-lg bg-slate-50/50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-800/60 hover:border-accent/40 transition-colors">
              <span className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white">
                <AnimatedCounter
                  target={st.target}
                  suffix={st.suffix}
                  decimals={st.decimals || 0}
                  duration={1400 + i * 200}
                />
              </span>
              <span className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-1">
                {st.label}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
