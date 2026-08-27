import React from 'react';
import { Trophy, Award, Medal, HeartHandshake, Users } from 'lucide-react';
import { achievements, extracurriculars } from '../data/portfolioData';

const iconMap = {
  Trophy,
  Award,
  Medal,
  HeartHandshake,
  Users
};

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 border-b border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid md:grid-cols-2 gap-12">
          
          {/* Awards */}
          <div>
            <div className="mb-6">
              <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                Awards & Honours
              </h2>
              <div className="w-12 h-1 bg-accent mt-2 rounded"></div>
            </div>

            <div className="space-y-4">
              {achievements.map((aw, idx) => {
                const IconComponent = iconMap[aw.icon] || Trophy;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 shadow-sm card-interactive"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-accent dark:text-accent-muted">
                          {aw.type}
                        </span>
                        <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white leading-snug">
                          {aw.title}
                        </h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                          {aw.issuer}
                        </p>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                          {aw.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Extracurricular Activities */}
          <div>
            <div className="mb-6">
              <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white tracking-tight">
                Extracurricular & Leadership
              </h2>
              <div className="w-12 h-1 bg-accent mt-2 rounded"></div>
            </div>

            <div className="space-y-4">
              {extracurriculars.map((ec, idx) => {
                const IconComponent = iconMap[ec.icon] || Medal;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/50 shadow-sm card-interactive"
                  >
                    <div className="flex items-start gap-3.5">
                      <div className="p-2 rounded-lg bg-accent/10 text-accent dark:text-accent-muted shrink-0">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                          {ec.category}
                        </span>
                        <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white leading-snug">
                          {ec.title}
                        </h3>
                        <p className="text-xs text-slate-600 dark:text-slate-300 mt-2 leading-relaxed">
                          {ec.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
