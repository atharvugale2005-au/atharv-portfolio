import React, { useState } from 'react';
import { Sun, Moon, Menu, X } from 'lucide-react';

export default function Navbar({ isDark, setIsDark, activeSection, scrollProgress = 0 }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'education', label: 'Education' },
    { id: 'achievements', label: 'Awards' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-surface-900/90 border-b border-slate-200/80 dark:border-slate-800/80 transition-colors">
      {/* Top Reading Progress Bar */}
      <div
        className="absolute top-0 left-0 h-[2.5px] bg-accent transition-all duration-150 ease-out"
        style={{ width: `${scrollProgress}%` }}
      ></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <span className="w-8 h-8 rounded bg-accent text-white flex items-center justify-center font-heading font-bold text-sm tracking-tight transition-transform group-hover:scale-105 group-hover:rotate-3 duration-200">
            AU
          </span>
          <span className="font-heading font-bold text-lg text-slate-900 dark:text-white tracking-tight group-hover:text-accent dark:group-hover:text-accent-muted transition-colors">
            Atharv Ugale
          </span>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                activeSection === item.id
                  ? 'text-accent dark:text-accent-muted bg-accent-light dark:bg-accent-dark/30 font-semibold'
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-3 right-3 h-0.5 bg-accent rounded-full"></span>
              )}
            </a>
          ))}
        </nav>

        {/* Action Buttons: Dark Mode & CTA */}
        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setIsDark(!isDark)}
            aria-label="Toggle Theme"
            className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all duration-200 hover:scale-110 active:scale-95"
          >
            {isDark ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700" />}
          </button>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-accent hover:bg-accent-hover rounded-md transition-all shadow-sm hover:shadow hover:-translate-y-0.5"
          >
            Let's Connect
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
            className="md:hidden p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-surface-900 px-4 pt-2 pb-6 space-y-1 animate-slide-up">
          {navItems.map(item => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-3 py-2.5 rounded-md text-base font-medium transition-colors ${
                activeSection === item.id
                  ? 'text-accent dark:text-accent-muted bg-accent-light dark:bg-accent-dark/30 font-bold'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.label}
            </a>
          ))}
          <div className="pt-3">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center py-2.5 px-4 rounded-md text-sm font-semibold uppercase tracking-wider text-white bg-accent hover:bg-accent-hover"
            >
              Contact Atharv
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
