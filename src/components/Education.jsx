import React from 'react';
import { education } from '../data/portfolioData';

export default function Education() {
  return (
    <section id="education" className="py-20 border-b border-slate-100 dark:border-slate-800/60 bg-surface-50/50 dark:bg-surface-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            Academic Journey
          </h2>
          <div className="w-12 h-1 bg-accent mt-2 rounded"></div>
        </div>

        <div className="space-y-6">
          {education.map((edu, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-slate-800/70 p-6 rounded-xl border border-slate-200/80 dark:border-slate-700/80 shadow-sm card-interactive"
            >
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                    {edu.degree}
                  </h3>
                  <p className="text-accent dark:text-accent-muted font-medium text-sm sm:text-base mt-0.5">
                    {edu.institution}
                  </p>
                </div>

                <div className="flex flex-col sm:items-end gap-1">
                  <span className="text-xs font-mono text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded">
                    {edu.period}
                  </span>
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    {edu.score}
                  </span>
                </div>
              </div>

              <p className="mt-3 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                {edu.highlights}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
