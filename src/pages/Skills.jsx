import React from 'react';

export default function Skills() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto px-gutter py-space-xl">
        <div className="flex flex-col gap-space-sm mb-space-xl">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-badge text-label-badge text-primary uppercase tracking-widest">// CAPABILITIES & ARCHITECTURE</span>
            <span className="w-2 h-2 rounded-full bg-tertiary"></span>
            <span className="font-label-code text-label-code text-outline">INDEX_VERSION::v4.18</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">Technical Arsenal & Competencies</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-space-xs">
            Systematic overview of production-verified engineering skillsets, frameworks, infrastructure patterns, and distributed protocols.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-md">
          {/* React */}
          <div className="skill-card bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-start justify-between">
                <h3 className="font-headline-md text-body-lg font-semibold text-on-surface">React</h3>
                <span className="font-label-badge text-label-badge px-space-xs py-0.5 rounded bg-tertiary-container/30 text-tertiary font-bold uppercase">Expert</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Server Components, Concurrent Mode, custom hook paradigms, and atomic design primitives.
              </p>
            </div>
          </div>
          
          {/* TypeScript */}
          <div className="skill-card bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-start justify-between">
                <h3 className="font-headline-md text-body-lg font-semibold text-on-surface">TypeScript</h3>
                <span className="font-label-badge text-label-badge px-space-xs py-0.5 rounded bg-tertiary-container/30 text-tertiary font-bold uppercase">Expert</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Conditional types, template literal generics, and compile-time type safety assurances.
              </p>
            </div>
          </div>
          
          {/* Python */}
          <div className="skill-card bg-surface-container-low p-space-lg rounded-xl shadow-md flex flex-col justify-between gap-space-md">
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-start justify-between">
                <h3 className="font-headline-md text-body-lg font-semibold text-on-surface">Python</h3>
                <span className="font-label-badge text-label-badge px-space-xs py-0.5 rounded bg-secondary-container/40 text-secondary font-bold uppercase">Advanced</span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                Data engineering, pipeline architecture, scripting, and automation tools.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
