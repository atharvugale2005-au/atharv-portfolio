import React from 'react';
import { Calendar } from 'lucide-react';
import { experiences } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-b border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            Work Experience
          </h2>
          <div className="w-12 h-1 bg-accent mt-2 rounded"></div>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative pl-6 sm:pl-8 border-l-2 border-slate-200 dark:border-slate-800 group hover:border-accent transition-colors"
            >
              {/* Timeline Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-white dark:bg-surface-900 border-2 border-slate-300 dark:border-slate-700 group-hover:border-accent group-hover:bg-accent transition-all duration-200 group-hover:scale-125"></div>

              <div className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm card-interactive">
                
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-slate-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-muted transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-accent dark:text-accent-muted font-medium text-sm sm:text-base">
                      {exp.company}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-md font-mono">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{exp.period}</span>
                  </div>
                </div>

                {/* Responsibilities */}
                <ul className="mt-4 space-y-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {exp.description.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>

                {/* Tool Tags */}
                <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-700/60 flex flex-wrap gap-1.5">
                  {exp.tools.map((t, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-accent/40 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
