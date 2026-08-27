import React, { useEffect } from 'react';
import { X, Check } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div
        className="bg-white dark:bg-slate-900 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 shadow-2xl p-6 sm:p-8 relative"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1.5 rounded-lg text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <div className="inline-block px-2.5 py-0.5 rounded text-xs font-semibold bg-accent-light dark:bg-accent-dark/40 text-accent dark:text-accent-muted mb-2">
            {project.category}
          </div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white">
            {project.title}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            {project.subtitle} • {project.period} ({project.teamSize})
          </p>
        </div>

        {/* Key Highlight Banner */}
        <div className="mt-4 p-3 rounded-lg bg-accent/5 dark:bg-accent/10 border border-accent/20 text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-medium">
          💡 {project.highlight}
        </div>

        {/* Problem & Solution */}
        <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <div>
            <h4 className="font-heading font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-slate-500 mb-1">
              Problem Context
            </h4>
            <p>{project.details.problem}</p>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-slate-500 mb-1">
              Engineered Solution
            </h4>
            <p>{project.details.solution}</p>
          </div>
        </div>

        {/* Key Technical Features */}
        <div className="mt-6">
          <h4 className="font-heading font-semibold text-slate-900 dark:text-white text-xs uppercase tracking-wider text-slate-500 mb-2">
            Key Features & Technical Breakdown
          </h4>
          <ul className="space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {project.details.keyFeatures.map((feat, fIdx) => (
              <li key={fIdx} className="flex items-start gap-2.5">
                <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hardware & Software Stacks */}
        <div className="mt-6 grid sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Hardware / Devices
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.details.hardware.map((hw, hIdx) => (
                <span
                  key={hIdx}
                  className="px-2.5 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                >
                  {hw}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2">
              Software / Protocols
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {project.details.software.map((sw, sIdx) => (
                <span
                  key={sIdx}
                  className="px-2.5 py-1 rounded text-xs bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-mono"
                >
                  {sw}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 font-medium text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
          >
            Close Case Study
          </button>
        </div>

      </div>
    </div>
  );
}
