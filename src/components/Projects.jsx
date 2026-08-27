import React, { useState, useMemo } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects() {
  const [projectFilter, setProjectFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI & Computer Vision', 'Embedded & IoT', 'Hardware & Control'];

  const filteredProjects = useMemo(() => {
    if (projectFilter === 'All') return projects;
    return projects.filter(p => p.category === projectFilter);
  }, [projectFilter]);

  return (
    <section id="projects" className="py-20 border-b border-slate-100 dark:border-slate-800/60 bg-surface-50/50 dark:bg-surface-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
              Featured Projects
            </h2>
            <div className="w-12 h-1 bg-accent mt-2 rounded"></div>
          </div>

          {/* Filter Tabs */}
          <div className="flex flex-wrap gap-1.5 bg-slate-200/60 dark:bg-slate-800/80 p-1 rounded-lg">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setProjectFilter(cat)}
                className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                  projectFilter === cat
                    ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm font-semibold'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col justify-between bg-white dark:bg-slate-800/70 rounded-xl border border-slate-200/80 dark:border-slate-700/80 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-accent dark:hover:border-accent transition-all group"
            >
              <div>
                {/* Category & Period */}
                <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 mb-2 font-mono">
                  <span className="text-accent dark:text-accent-muted font-sans font-semibold">
                    {proj.category}
                  </span>
                  <span>{proj.period.split(',')[0]}</span>
                </div>

                {/* Title */}
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white group-hover:text-accent dark:group-hover:text-accent-muted transition-colors leading-snug">
                  {proj.title}
                </h3>

                {/* Subtitle / Context */}
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 font-medium">
                  {proj.subtitle} {proj.teamSize && `• ${proj.teamSize}`}
                </p>

                {/* Summary */}
                <p className="mt-3 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                  {proj.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-700/60">
                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {proj.tags.slice(0, 4).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                  {proj.tags.length > 4 && (
                    <span className="px-2 py-0.5 rounded text-[11px] font-medium bg-slate-100 dark:bg-slate-800 text-slate-500">
                      +{proj.tags.length - 4}
                    </span>
                  )}
                </div>

                {/* Open Details Button */}
                <button
                  onClick={() => setSelectedProject(proj)}
                  className="w-full py-2 px-3 text-xs font-semibold uppercase tracking-wider text-slate-700 dark:text-slate-200 bg-slate-100 hover:bg-accent hover:text-white dark:bg-slate-800 dark:hover:bg-accent dark:hover:text-white rounded-lg transition-all text-center flex items-center justify-center gap-1.5"
                >
                  <span>View Architecture & Specs</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
