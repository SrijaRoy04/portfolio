import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const getLinkClasses = (path) => {
    const isActive = location.pathname === path || (path === '/' && location.pathname === '');
    if (isActive) {
      return "px-space-sm py-space-xs transition-colors text-on-surface bg-surface-container font-semibold rounded-lg";
    }
    return "px-space-sm py-space-xs text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors font-body-sm rounded-lg";
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 max-w-[1200px] mx-auto px-gutter flex items-center justify-between gap-space-md">
        <div className="flex items-center gap-space-sm shrink-0">
          <img alt="DevPortfolio Monogram Logo" className="h-8 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/AEtjO1WYUpcM8aqYc3tSi82iiWAnLN8VEYroF2aQ3smgC-gCDn1LA1FZCLJvAv5bv08ZHCpbgaIGBLtgcLTB6l8COnt3DRqp5OMA_gDT4M4RyBjL1_bd3X2KMMdiTvsxL1Dx4ORkhlaTpKkenWPgQ62eqr_3QXF-AhpVYkCdcxPaagg8ibspC5y-Zj_XBr0XX1Z1JCKEAffiMVdhwBS-ON1JUaw4qeBb9-OQZF43supR_tYNVMJT_hkunqspgQ" />
          <span className="font-headline-md text-body-md font-semibold tracking-tight text-on-surface hidden sm:inline-block">Srija Roy</span>
          <span className="font-label-code text-body-sm text-outline hidden md:inline-block">// Full-Stack Developer</span>
        </div>
        
        <nav className="hidden lg:flex items-center gap-space-xs p-space-xs rounded-xl bg-surface-container-lowest/60">
          <Link to="/" className={getLinkClasses("/")}>About</Link>
          <Link to="/experience-and-education" className={getLinkClasses("/experience-and-education")}>Experience & Education</Link>
          <Link to="/skills" className={getLinkClasses("/skills")}>Skills</Link>
          <Link to="/projects" className={getLinkClasses("/projects")}>Projects</Link>
          <Link to="/contact" className={getLinkClasses("/contact")}>Contact</Link>
        </nav>

        <div className="flex items-center gap-space-sm shrink-0">
          <div className="hidden xl:flex items-center gap-space-xs px-space-sm py-space-xs rounded-full bg-surface-container-low">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-tertiary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-tertiary"></span>
            </span>
            <span className="font-label-badge text-label-badge text-on-surface-variant uppercase tracking-wider">Available for hire</span>
          </div>
          <div className="flex items-center gap-space-xs">
            <a aria-label="GitHub Profile" className="p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center" href="https://github.com" rel="noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[20px]">code</span>
            </a>
            <a aria-label="LinkedIn Profile" className="p-space-xs rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors flex items-center justify-center" href="https://linkedin.com" rel="noreferrer" target="_blank">
              <span className="material-symbols-outlined text-[20px]">share</span>
            </a>
          </div>
          <div className="flex items-center pl-space-xs">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover shadow-[0_0_12px_-2px_rgba(77,142,255,0.4)]" src={`${import.meta.env.BASE_URL}srija_profile_pic.png`} />
          </div>
        </div>
      </div>
    </header>
  );
}
