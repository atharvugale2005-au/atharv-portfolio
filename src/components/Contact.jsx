import React, { useState } from 'react';
import { Mail, Phone, Linkedin, MapPin, Copy, ExternalLink, Check } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact({ onCopy }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formSent, setFormSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoUrl = `mailto:${personalInfo.email}?subject=${encodeURIComponent(subject || `Portfolio Contact from ${name}`)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoUrl;
    setFormSent(true);
    onCopy('', 'Email client opened with pre-filled draft!');
  };

  return (
    <section id="contact" className="py-20 bg-surface-50/50 dark:bg-surface-950/40">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="mb-12">
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
            Get In Touch
          </h2>
          <div className="w-12 h-1 bg-accent mt-2 rounded"></div>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">
            Have a question, an opportunity, or a collaborative project in mind? Reach out directly!
          </p>
        </div>

        <div className="grid md:grid-cols-12 gap-8">
          
          {/* Direct Contact Cards */}
          <div className="md:col-span-5 space-y-4">
            
            {/* Email Box */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-sm flex items-start justify-between card-interactive">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Email</span>
                  <a href={`mailto:${personalInfo.email}`} className="block text-sm font-semibold text-slate-900 dark:text-white hover:text-accent break-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              <button
                onClick={() => onCopy(personalInfo.email, "Email address")}
                className="p-1.5 rounded text-slate-400 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                title="Copy email"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* Phone Box */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-sm flex items-start justify-between card-interactive">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">Phone / WhatsApp</span>
                  <a href={`tel:${personalInfo.phone}`} className="block text-sm font-semibold text-slate-900 dark:text-white hover:text-accent">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              <button
                onClick={() => onCopy(personalInfo.phone, "Phone number")}
                className="p-1.5 rounded text-slate-400 hover:text-accent hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors"
                title="Copy phone"
              >
                <Copy className="w-4 h-4" />
              </button>
            </div>

            {/* LinkedIn Box */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-sm flex items-center justify-between hover:border-accent transition-colors group card-interactive"
            >
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-accent/10 text-accent">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-medium">LinkedIn</span>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white group-hover:text-accent">
                    {personalInfo.linkedinHandle}
                  </p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>

            {/* Location Info */}
            <div className="p-5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-800/80 shadow-sm flex items-center gap-3">
              <div className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-500">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-slate-400 font-medium">Base Location</span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white">
                  {personalInfo.location}
                </p>
              </div>
            </div>

          </div>

          {/* Interactive Contact Form */}
          <div className="md:col-span-7 bg-white dark:bg-slate-800/80 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-4">
              Send a Message
            </h3>
            
            {formSent ? (
              <div className="p-6 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-2 animate-slide-up">
                <div className="inline-flex p-3 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300">
                  <Check className="w-6 h-6" />
                </div>
                <h4 className="font-heading font-bold text-emerald-800 dark:text-emerald-300 text-base">
                  Message Prepared!
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400">
                  Your email client has been launched with the drafted message. You can also reach out directly to {personalInfo.email}.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="mt-4 text-xs font-semibold text-emerald-700 dark:text-emerald-300 underline"
                >
                  Send another note
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. John Doe"
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. john@example.com"
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Internship Inquiry / Hardware Project"
                    value={formData.subject}
                    onChange={e => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Message *
                  </label>
                  <textarea
                    required
                    rows="4"
                    placeholder="Write your note or project requirements..."
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-shadow"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-lg bg-accent hover:bg-accent-hover text-white font-medium text-xs uppercase tracking-wider transition-all shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Message via Mail</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
