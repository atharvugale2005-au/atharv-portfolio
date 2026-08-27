import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function About() {
  return (
    <section id="about" className="py-20 border-b border-slate-100 dark:border-slate-800/60 bg-surface-50/50 dark:bg-surface-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-10">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            About & Background
          </h2>
          <div className="w-12 h-1 bg-accent mt-2 rounded"></div>
        </div>

        <div className="grid md:grid-cols-12 gap-8 items-start">
          
          {/* Main Narrative */}
          <div className="md:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed">
            <p className="font-medium text-slate-900 dark:text-slate-100">
              {personalInfo.about}
            </p>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
              I thrive at the intersection of embedded microcontrollers and edge artificial intelligence. From developing deterministic C firmware for STM32 elevator logic to designing dedicated 2-layer PCBs for voice assistants and deploying quantized YOLO vision models onto Raspberry Pi 5 rovers, my focus is on practical, robust hardware engineering.
            </p>
          </div>

          {/* 3 Core Pillars */}
          <div className="md:col-span-5 space-y-3">
            {personalInfo.pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700/70 shadow-sm card-interactive group"
              >
                <h3 className="font-heading font-semibold text-slate-900 dark:text-white text-sm group-hover:text-accent dark:group-hover:text-accent-muted transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-normal">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
