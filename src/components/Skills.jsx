import React from 'react';
import { Cpu, Brain, Code, Cloud, Box } from 'lucide-react';
import { skills } from '../data/portfolioData';

const iconMap = {
  Cpu: Cpu,
  Brain: Brain,
  Code: Code,
  Cloud: Cloud,
  Box: Box,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-b border-slate-100 dark:border-slate-800/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            Technical Skills & Domains
          </h2>
          <div className="w-12 h-1 bg-accent mt-2 rounded"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || Cpu;
            return (
              <div
                key={idx}
                className="bg-white dark:bg-slate-800/50 p-6 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm flex flex-col justify-between card-interactive h-full"
              >
                <div>
                  {/* Header with Icon */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-lg bg-accent/10 text-accent dark:bg-accent/20 transition-transform group-hover:scale-110">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 dark:text-white">
                      {group.category}
                    </h3>
                  </div>

                  {/* Items */}
                  <div className="space-y-3.5 mt-4">
                    {group.items.map((item, iIdx) => (
                      <div key={iIdx} className="group/skill">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {item.name}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                            {item.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                          {item.desc}
                        </p>
                        {/* Micro proficiency bar */}
                        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1 rounded-full mt-1.5 overflow-hidden">
                          <div
                            className="bg-accent h-full rounded-full transition-all duration-1000 ease-out"
                            style={{ width: `${item.pct || 80}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
