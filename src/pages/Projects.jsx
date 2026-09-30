import React from 'react';

export default function Projects() {
  return (
    <div className="w-full">
      <div className="max-w-[1200px] mx-auto px-gutter w-full pt-space-lg flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-xs">
          <div className="flex items-center gap-space-xs">
            <span className="font-label-badge text-label-badge text-tertiary uppercase tracking-widest">// REPOSITORY INDEX</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-tertiary"></span>
            <span className="font-label-code text-label-code text-outline">PRODUCTION BUILDS</span>
          </div>
          <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight">
            Featured Projects <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">& Open Source</span>
          </h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
            High-concurrency distributed engines, production UI frameworks, and toolchains built for performance, resilience, and scale.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-space-lg">
          <article className="project-card custom-highlight group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-md">
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div>
                  <span className="font-label-badge text-label-badge text-secondary uppercase tracking-wider">Full-Stack • Observability</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface pt-space-xs">DevMetrics Pro</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  High-throughput real-time telemetry dashboard monitoring microservice latency spikes and anomaly clustering. Handles bidirectional telemetry pipelines via WebSockets.
                </p>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  <span className="px-space-xs py-space-xs rounded bg-surface-container font-label-badge text-label-badge text-primary-fixed">React 18</span>
                  <span className="px-space-xs py-space-xs rounded bg-surface-container font-label-badge text-label-badge text-primary-fixed">Go 1.22</span>
                  <span className="px-space-xs py-space-xs rounded bg-surface-container font-label-badge text-label-badge text-primary-fixed">WebSockets</span>
                </div>
              </div>
            </div>
          </article>
          
          <article className="project-card group relative flex flex-col bg-surface-container-low rounded-xl overflow-hidden shadow-md">
            <div className="p-space-lg flex flex-col flex-1 justify-between gap-space-md">
              <div className="flex flex-col gap-space-sm">
                <div>
                  <span className="font-label-badge text-label-badge text-secondary uppercase tracking-wider">UI Framework • Open Source</span>
                  <h2 className="font-headline-md text-headline-md text-on-surface pt-space-xs">Quantum UI</h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Unstyled, accessible React design primitives engineered for zero-runtime styling engines. Features robust ARIA focus-trapping and full keyboard navigation.
                </p>
                <div className="flex flex-wrap gap-space-xs pt-space-xs">
                  <span className="px-space-xs py-space-xs rounded bg-surface-container font-label-badge text-label-badge text-primary-fixed">React 18</span>
                  <span className="px-space-xs py-space-xs rounded bg-surface-container font-label-badge text-label-badge text-primary-fixed">TypeScript</span>
                  <span className="px-space-xs py-space-xs rounded bg-surface-container font-label-badge text-label-badge text-primary-fixed">ARIA 1.2</span>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
