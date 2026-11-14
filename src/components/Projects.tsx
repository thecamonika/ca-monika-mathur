import React from 'react';
import { motion } from 'motion/react';
import { Globe, Scale, TrendingUp, ShieldCheck, FileText, ArrowUpRight } from 'lucide-react';

const getIcon = (type?: string) => {
  switch (type?.toLowerCase()) {
    case 'globe': return <Globe className="h-5 w-5" />;
    case 'scale': return <Scale className="h-5 w-5" />;
    case 'trending': return <TrendingUp className="h-5 w-5" />;
    case 'shield': return <ShieldCheck className="h-5 w-5" />;
    default: return <FileText className="h-5 w-5" />;
  }
};

export default function Projects({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="projects" className="portfolio-section px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 border-t border-black/20 dark:border-white/15 pt-5 lg:grid-cols-[1fr_2fr]"
        >
          <p className="section-kicker">02 / Strategic Initiatives</p>
          <div>
            <h2 className="section-title text-[#151514] dark:text-[#f4f0e8]">Transformations & strategic initiatives.</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4d4c47] dark:text-[#b8b5ad] sm:text-lg">
              Key initiatives across multi-entity financial consolidation, statutory compliance automation, working capital optimization, and financial governance.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 border-t border-black/20 dark:border-white/15 md:grid-cols-2">
          {data.map((project, index) => {
            const actionLinks = Array.isArray(project.links) && project.links.length > 0
              ? project.links
              : (project.url ? [{ name: 'Open', url: project.url }] : []);

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex min-h-64 flex-col border-b border-black/20 dark:border-white/15 py-6 md:px-6 md:odd:border-r md:first:pl-0 md:nth-[2n]:pr-0"
              >
                <div className="flex h-full flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-9 w-9 items-center justify-center border border-black/25 dark:border-white/20 text-[#e34f3c] dark:text-[#ff5f4c]">
                        {getIcon(project.type)}
                      </div>
                      <div>
                        <h3 className="text-xl font-medium leading-tight text-[#151514] dark:text-[#f4f0e8]">
                          {project.title}
                        </h3>
                        {project.category && (
                          <p className="mt-1 text-sm text-[#6c6b64] dark:text-[#8a8880]">{project.category}</p>
                        )}
                      </div>
                    </div>
                  </div>

                  {project.outcome && (
                    <div className="inline-flex items-center gap-2 border border-[#e34f3c]/30 dark:border-[#ff5f4c]/30 bg-[#e34f3c]/5 dark:bg-[#ff5f4c]/10 px-3 py-1.5 text-xs font-semibold text-[#a52f21] dark:text-[#ff7a6b]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#e34f3c] dark:bg-[#ff5f4c]" />
                      <span>{project.outcome}</span>
                    </div>
                  )}

                  {project.stack && project.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {project.stack.map((tech: string, i: number) => (
                        <span
                          key={i}
                          className="border border-black/20 dark:border-white/15 px-2 py-1 text-xs font-medium text-[#4d4c47] dark:text-[#b8b5ad]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  {project.bullets && project.bullets.length > 0 && (
                    <ul className="flex flex-col gap-3 mt-4">
                      {project.bullets.map((bullet: string, i: number) => (
                        <li key={i} className="flex items-start gap-3 text-[#4d4c47] dark:text-[#b8b5ad]">
                          <span className="mt-1.5 flex h-1.5 w-1.5 shrink-0 bg-[#e34f3c] dark:bg-[#ff5f4c]" />
                          <span className="text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {actionLinks.length > 0 && (
                    <div className="mt-auto flex flex-wrap gap-3 pt-2">
                      {actionLinks.map((link: { name?: string; url: string }, linkIndex: number) => (
                        <a
                          key={linkIndex}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 border-b border-black/50 dark:border-white/40 pb-1 text-xs font-semibold tracking-wide text-[#151514] dark:text-[#f4f0e8] transition-colors hover:border-[#e34f3c] dark:hover:border-[#ff5f4c] hover:text-[#e34f3c] dark:hover:text-[#ff5f4c]"
                        >
                          {link.name || 'Open'}
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
