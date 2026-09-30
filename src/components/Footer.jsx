import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-container-lowest py-space-xl">
      <div className="max-w-[1200px] mx-auto px-gutter flex flex-col gap-space-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-space-lg">
          <div className="md:col-span-2 flex flex-col gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <img alt="DevPortfolio Monogram Logo" className="h-6 w-auto object-contain opacity-90" src="https://lh3.googleusercontent.com/aida/AEtjO1WYUpcM8aqYc3tSi82iiWAnLN8VEYroF2aQ3smgC-gCDn1LA1FZCLJvAv5bv08ZHCpbgaIGBLtgcLTB6l8COnt3DRqp5OMA_gDT4M4RyBjL1_bd3X2KMMdiTvsxL1Dx4ORkhlaTpKkenWPgQ62eqr_3QXF-AhpVYkCdcxPaagg8ibspC5y-Zj_XBr0XX1Z1JCKEAffiMVdhwBS-ON1JUaw4qeBb9-OQZF43supR_tYNVMJT_hkunqspgQ" />
              <span className="font-headline-md text-body-md font-semibold text-on-surface">Srija Roy</span>
            </div>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">Senior Full-Stack Engineer architecting distributed cloud systems, modern web platforms, and accessible user interfaces.</p>
            <div className="flex items-center gap-space-xs pt-space-xs">
              <span className="font-label-badge text-label-badge text-outline">STATUS:</span>
              <div className="flex items-center gap-space-xs px-space-xs py-space-xs rounded bg-surface-container-low">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-tertiary"></span>
                <span className="font-label-code text-label-code text-tertiary">SYSTEMS_NOMINAL // OPEN_TO_ROLES</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-badge text-label-badge text-on-surface uppercase tracking-wider mb-space-xs">Navigation</span>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" to="/">About</Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" to="/experience-and-education">Experience & Education</Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" to="/skills">Skills</Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" to="/projects">Projects</Link>
            <Link className="font-body-sm text-body-sm text-on-surface-variant hover:text-on-surface transition-colors" to="/contact">Contact</Link>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="font-label-badge text-label-badge text-on-surface uppercase tracking-wider mb-space-xs">Specs & Feeds</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">Built with React & Tailwind CSS</span>
            <span className="font-label-code text-label-code text-outline">v2.4.0-production</span>
            <span className="font-body-sm text-body-sm text-on-surface-variant">San Francisco, CA • UTC-7</span>
            <a className="font-label-code text-label-code text-primary hover:text-on-surface transition-colors" href="#">PGP Key: 0x4F12A8C9</a>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-space-md pt-space-md">
          <span className="font-body-sm text-body-sm text-outline">© 2024 Srija Roy. All rights reserved. Licensed under MIT.</span>
          <div className="flex items-center gap-space-md">
            <span className="font-label-code text-label-code text-outline">LATENCY: 24ms</span>
            <span className="font-label-code text-label-code text-outline">REGION: us-west-1</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
