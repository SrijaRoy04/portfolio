import React from 'react';

export default function Contact() {
  return (
    <div className="relative w-full overflow-hidden pb-space-xl">
      <div className="absolute -top-32 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-80 right-10 w-[500px] h-[500px] bg-secondary-container/20 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="max-w-[1200px] mx-auto px-gutter w-full pt-space-xl">
        <div className="flex flex-col gap-space-sm mb-space-xl max-w-3xl">
          <div className="flex items-center gap-space-sm flex-wrap">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-tertiary"></span>
              </span>
              <span className="font-label-badge text-label-badge text-tertiary tracking-wide uppercase">Available Q2 / Q3 2025</span>
            </div>
            <span className="font-label-code text-label-code text-outline">// ACCEPTING SELECT FREELANCE CONTRACTS & FULL-TIME ROLES</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight mt-space-xs">
            Let's Connect & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-tertiary to-secondary">Build Something Great</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            Whether you need a high-scale React/Next.js interface, cloud-native distributed architecture, or fractional technical leadership—reach out. I typically review incoming briefs within 24 hours.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
          <div className="lg:col-span-5 flex flex-col gap-space-md">
            <div className="p-space-md rounded-xl bg-surface-container shadow-md flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-xs text-primary">
                  <span className="material-symbols-outlined text-[20px]">alternate_email</span>
                  <span className="font-label-badge text-label-badge uppercase tracking-wider text-outline">Primary Inquiries</span>
                </div>
              </div>
              <div className="mt-space-xs flex items-center justify-between bg-surface-container-lowest p-space-sm rounded-lg">
                <span className="font-label-code text-label-code text-on-surface truncate select-all">srija.roy@example.com</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">Instant delivery straight to unified inbox.</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <div className="p-space-lg rounded-xl bg-surface-container shadow-xl relative overflow-hidden flex flex-col gap-space-md">
              <div className="flex flex-col">
                <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">// DISPATCH BRIEF</span>
                <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">Project Inquiry Form</h2>
              </div>
              <form className="flex flex-col gap-space-md">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="flex flex-col gap-1">
                    <label className="font-label-code text-label-code text-on-surface">Full Name</label>
                    <input className="w-full bg-surface-container-lowest text-on-surface rounded-lg px-space-sm py-2.5 focus:outline-none focus:bg-surface-container-high transition-colors font-body-md shadow-inner" type="text" placeholder="e.g. Sarah Connor" required />
                  </div>
                  <div className="flex flex-col gap-1">
                    <label className="font-label-code text-label-code text-on-surface">Email Address</label>
                    <input className="w-full bg-surface-container-lowest text-on-surface rounded-lg px-space-sm py-2.5 focus:outline-none focus:bg-surface-container-high transition-colors font-body-md shadow-inner" type="email" placeholder="s.connor@cyberdyne.io" required />
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-code text-label-code text-on-surface">Message</label>
                  <textarea className="w-full bg-surface-container-lowest text-on-surface rounded-lg p-space-sm focus:outline-none focus:bg-surface-container-high transition-colors font-body-md resize-none shadow-inner" rows="4" placeholder="Share details..." required></textarea>
                </div>
                <button className="w-full sm:w-auto px-space-lg py-3 rounded-lg bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 active:scale-[0.98] text-white font-label-code text-label-code transition-all shadow-lg" type="submit">
                  Transmit Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
