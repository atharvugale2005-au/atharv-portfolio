import React from 'react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="mt-auto py-8 border-t border-slate-200 dark:border-slate-800 text-center text-xs text-slate-500 dark:text-slate-400 bg-white dark:bg-surface-900">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          © 2026 <span className="font-semibold text-slate-700 dark:text-slate-300">{personalInfo.name}</span>. All rights reserved.
        </div>

        <div className="flex items-center gap-4 text-xs font-medium">
          <a href="#hero" className="hover:text-accent transition-colors">Top</a>
          <span>•</span>
          <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">LinkedIn</a>
          <span>•</span>
          <a href={`mailto:${personalInfo.email}`} className="hover:text-accent transition-colors">Email</a>
        </div>
      </div>
    </footer>
  );
}
