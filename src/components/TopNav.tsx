import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, FileDown, Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

type NavSection = { id: string; label: string };

export default function TopNav({
  sections,
  activeSection,
  name,
  email,
}: {
  sections: NavSection[];
  activeSection: string;
  name: string;
  email: string;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!drawerOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setDrawerOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [drawerOpen]);

  const firstName = name.split(' ')[0];

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="portfolio-nav fixed inset-x-0 top-0 z-50 flex justify-center px-5"
      >
        <div
          className={`flex w-full max-w-[1440px] items-center justify-between gap-3 border-b py-4 backdrop-blur-md transition-all duration-300 ${
            scrolled
              ? 'border-black/20 bg-[#f4f0e8]/95 dark:border-white/15 dark:bg-[#121211]/95'
              : 'border-black/15 bg-[#f4f0e8]/85 dark:border-white/10 dark:bg-[#121211]/85'
          }`}
        >
          <a href="#hero" className="flex items-center gap-2 text-sm font-bold tracking-tight text-[#151514] dark:text-[#f4f0e8]">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center bg-[#e34f3c] text-xs font-bold text-white">
              {firstName.charAt(0)}
            </span>
            <span>{name}</span>
            <span className="hidden text-xs font-medium text-[#6c6b64] dark:text-[#8a8880] sm:inline">| CA</span>
          </a>

          <nav className="hidden lg:flex items-center gap-6">
            {sections.filter(s => s.id !== 'hero').map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={`text-xs font-semibold uppercase tracking-wider transition-colors ${
                  activeSection === section.id
                    ? 'text-[#e34f3c] dark:text-[#ff5f4c]'
                    : 'text-[#4d4c47] dark:text-[#b8b5ad] hover:text-[#e34f3c] dark:hover:text-[#ff5f4c]'
                }`}
              >
                {section.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2 sm:gap-2.5">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
              className="flex h-8 w-8 items-center justify-center border border-black/25 dark:border-white/20 text-[#151514] dark:text-[#f4f0e8] transition-colors hover:border-[#e34f3c] dark:hover:border-[#ff5f4c] hover:text-[#e34f3c] dark:hover:text-[#ff5f4c]"
            >
              {theme === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </button>

            <a
              href="./resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden items-center gap-1.5 border border-black/25 dark:border-white/20 px-3 py-1.5 text-xs font-semibold text-[#151514] dark:text-[#f4f0e8] transition-colors hover:border-[#e34f3c] dark:hover:border-[#ff5f4c] hover:text-[#e34f3c] dark:hover:text-[#ff5f4c] sm:inline-flex"
            >
              <FileDown className="h-3.5 w-3.5" />
              <span>Resume</span>
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-btn-primary bg-[#151514] px-3.5 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#e34f3c] dark:bg-[#f4f0e8] dark:text-[#121211] dark:hover:bg-[#ff5f4c] dark:hover:text-white"
            >
              Email me
            </a>
            <button
              onClick={() => setDrawerOpen(true)}
              aria-label="Open navigation menu"
              className="flex h-8 w-8 items-center justify-center border border-black/20 dark:border-white/20 text-[#151514] dark:text-[#f4f0e8] transition-colors hover:bg-[#e34f3c] hover:text-white lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {drawerOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={() => setDrawerOpen(false)}
              className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-sm"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[85vw] max-w-xs flex-col border-l border-black/15 bg-[#f4f0e8] dark:border-white/15 dark:bg-[#141412] p-6 shadow-2xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#6c6b64] dark:text-[#8a8880]">Navigate</span>
                <button
                  onClick={() => setDrawerOpen(false)}
                  aria-label="Close navigation menu"
                  className="flex h-8 w-8 items-center justify-center border border-black/20 dark:border-white/20 text-[#151514] dark:text-[#f4f0e8] transition-colors hover:bg-[#e34f3c] hover:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Theme Toggle in Drawer */}
              <div className="mb-4 flex items-center justify-between border-y border-black/10 dark:border-white/10 py-3">
                <span className="text-xs font-semibold uppercase tracking-wider text-[#6c6b64] dark:text-[#8a8880]">Appearance</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 border border-black/20 dark:border-white/20 px-3 py-1 text-xs font-semibold text-[#151514] dark:text-[#f4f0e8] transition-colors hover:border-[#e34f3c] dark:hover:border-[#ff5f4c] hover:text-[#e34f3c] dark:hover:text-[#ff5f4c]"
                >
                  {theme === 'light' ? (
                    <>
                      <Moon className="h-3.5 w-3.5" />
                      <span>Dark</span>
                    </>
                  ) : (
                    <>
                      <Sun className="h-3.5 w-3.5" />
                      <span>Light</span>
                    </>
                  )}
                </button>
              </div>

              <nav className="flex flex-col gap-1">
                {sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={() => setDrawerOpen(false)}
                    className={`border-b border-black/10 dark:border-white/10 px-0 py-3 text-sm font-medium transition-colors ${
                      activeSection === section.id
                      ? 'text-[#e34f3c] dark:text-[#ff5f4c]'
                      : 'text-[#151514] dark:text-[#f4f0e8] hover:text-[#e34f3c] dark:hover:text-[#ff5f4c]'
                    }`}
                  >
                    {section.label}
                  </a>
                ))}
              </nav>

              <div className="mt-auto flex flex-col gap-2 pt-6">
                <a
                  href="./resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDrawerOpen(false)}
                  className="flex items-center justify-center gap-2 border border-black/30 dark:border-white/20 px-4 py-3 text-center text-sm font-semibold text-[#151514] dark:text-[#f4f0e8] transition-colors hover:border-[#e34f3c] dark:hover:border-[#ff5f4c] hover:text-[#e34f3c] dark:hover:text-[#ff5f4c]"
                >
                  <FileDown className="h-4 w-4" />
                  Download Resume (PDF)
                </a>
                <a
                  href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setDrawerOpen(false)}
                  className="theme-btn-primary bg-[#151514] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#e34f3c] dark:bg-[#f4f0e8] dark:text-[#121211] dark:hover:bg-[#ff5f4c] dark:hover:text-white"
                >
                  Email me
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
