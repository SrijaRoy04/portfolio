import React from 'react';
import { Link } from 'react-router-dom';

export default function AboutMe() {
  return (
    <div className="flex flex-col w-full">
      {/* Atmospheric Glow Overlays */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[900px] h-[350px] bg-gradient-to-b from-primary-container/15 via-secondary-container/10 to-transparent blur-3xl pointer-events-none rounded-full"></div>
        <div className="absolute top-96 -right-32 w-80 h-80 bg-tertiary-container/10 blur-3xl pointer-events-none rounded-full"></div>
        {/* SECTION 1: High-Impact Hero */}
        <div className="max-w-[1200px] mx-auto px-gutter py-space-xl relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-center">
            {/* Hero Left Column: Developer Overview & Pitch */}
            <div className="lg:col-span-7 flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs self-start px-space-sm py-space-xs rounded-full bg-surface-container-high/80 backdrop-blur-md shadow-sm">
                <span className="inline-block h-2 w-2 rounded-full bg-tertiary animate-pulse"></span>
                <span className="font-label-badge text-label-badge text-primary uppercase tracking-wider">Data Associate • Python Developer </span>
              </div>
              <div className="flex flex-col gap-space-xs">
                <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-none">SRIJA ROY</h1>
                <p className="font-headline-md text-headline-md text-primary font-medium tracking-tight">
                  Engineering deterministic software from kernel to browser.
                </p>
              </div>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-xl leading-relaxed">
                Crafting resilient web applications, distributed systems, and delightful developer experiences with React, TypeScript & Node.js. Obsessed with sub-millisecond hot reloads and zero-defect deployments.
              </p>
              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-space-sm pt-space-xs">
                <Link className="inline-flex items-center gap-space-xs px-space-md py-space-sm bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 text-on-surface font-body-md font-medium rounded-lg shadow-md transition-all" to="/projects">
                  <span className="">View Projects</span>
                  <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
                </Link>
                <Link className="inline-flex items-center gap-space-xs px-space-md py-space-sm text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low font-body-md font-medium rounded-lg transition-colors" to="/contact">
                  <span className="material-symbols-outlined text-[18px]">mail</span>
                  <span className="">Get in Touch</span>
                </Link>
              </div>
            </div>
            {/* Hero Right Column: Animated Interactive Terminal */}
            <div className="lg:col-span-5 w-full">
              <div className="bg-surface-container-lowest/90 backdrop-blur-xl rounded-xl p-space-md shadow-xl flex flex-col gap-space-sm relative">
                <div className="flex items-center justify-between pb-space-xs">
                  <div className="flex items-center gap-1.5">
                    <span className="w-3 h-3 rounded-full bg-error inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-tertiary-container inline-block"></span>
                    <span className="w-3 h-3 rounded-full bg-tertiary inline-block"></span>
                  </div>
                  <div className="flex items-center gap-space-xs font-label-badge text-label-badge text-outline">
                    <span className="material-symbols-outlined text-[14px]">terminal</span>
                    <span className="">zsh - srija@mainframe</span>
                  </div>
                  <span className="font-label-code text-label-code text-outline-variant">node v20.11.0</span>
                </div>
                {/* Terminal Stream Body */}
                <div className="font-label-code text-label-code flex flex-col gap-space-xs text-on-surface-variant bg-surface-container-low/70 p-space-sm rounded-lg overflow-x-auto min-h-[220px]">
                  <div className="flex items-center gap-space-xs text-outline">
                    <span className="text-tertiary">&gt;</span>
                    <span className="">neofetch --stdout</span>
                  </div>
                  <div className="text-primary font-semibold">Srija Roy @ DevCore OS</div>
                  <div className="grid grid-cols-2 gap-x-space-sm text-outline text-[12px] pt-1">
                    <span className="">OS: Arch Linux x86_64</span>
                    <span className="">Host: ThinkPad X1 Nano</span>
                    <span className="">Shell: zsh 5.9</span>
                    <span className="">Editor: VS Code</span>
                  </div>
                  <div className="pt-2 text-on-surface">
                    <span className="text-tertiary">&gt;</span> srija.getCoreValues()
                  </div>
                  <div className="text-tertiary font-medium">
                    ["Zero Tolerance for Flaky Tests", "Deterministic State", "Perceptual Snappiness"]
                  </div>
                  <div className="flex items-center gap-1 text-primary-fixed pt-1">
                    <span className="text-tertiary">&gt;</span>
                    <span className="animate-pulse font-bold">_ ready for next pipeline run</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
