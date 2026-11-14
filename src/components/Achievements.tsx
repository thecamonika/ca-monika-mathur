import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, CheckCircle2, FileCheck2, Globe, Scale } from 'lucide-react';

const getAchievementIcon = (title: string) => {
  const t = title.toLowerCase();
  if (t.includes('compliance')) return ShieldCheck;
  if (t.includes('error') || t.includes('reduction')) return CheckCircle2;
  if (t.includes('audit')) return FileCheck2;
  if (t.includes('cross-border') || t.includes('entities')) return Globe;
  return Scale;
};

export default function Achievements({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="achievements" className="portfolio-section px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 border-t border-black/20 dark:border-white/15 pt-5 lg:grid-cols-[1fr_2fr]"
        >
          <p className="section-kicker">Impact</p>
          <div>
            <h2 className="section-title text-[#151514] dark:text-[#f4f0e8]">Numbers worth making visible.</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4d4c47] dark:text-[#b8b5ad] sm:text-lg">
              Measurable impact and significant milestones from my controllership career.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 border-t border-black/20 dark:border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((achievement, index) => {
            const Icon = getAchievementIcon(achievement.title);
            const isCrossBorder = achievement.title.toLowerCase().includes('cross-border') || achievement.title.toLowerCase().includes('entities');

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex flex-col justify-between gap-4 border-b border-black/20 dark:border-white/15 py-6 sm:px-6 sm:odd:border-r sm:first:pl-0 lg:nth-[3n]:border-r-0"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-9 w-9 items-center justify-center border border-black/25 dark:border-white/20 text-[#e34f3c] dark:text-[#ff5f4c]">
                      <Icon className="h-5 w-5" />
                    </div>
                    <span className="section-kicker">
                      Milestone
                    </span>
                  </div>
                  
                  <div className="mt-4 flex flex-col gap-2">
                    <h3 className="text-5xl font-medium tracking-tight text-[#151514] dark:text-[#f4f0e8]">
                      {achievement.metric}
                    </h3>
                    <p className="text-base font-semibold text-[#e34f3c] dark:text-[#ff5f4c] sm:text-lg">
                      {achievement.title}
                    </p>
                    <p className="text-sm leading-relaxed text-[#4d4c47] dark:text-[#b8b5ad]">
                      {achievement.context}
                    </p>
                  </div>
                </div>

                {isCrossBorder && (
                  <div className="mt-2 flex flex-wrap gap-2 pt-2">
                    <span className="border border-black/20 dark:border-white/15 px-2 py-0.5 text-xs font-medium text-[#4d4c47] dark:text-[#b8b5ad]">🇮🇳 India</span>
                    <span className="border border-black/20 dark:border-white/15 px-2 py-0.5 text-xs font-medium text-[#4d4c47] dark:text-[#b8b5ad]">🇬🇧 UK</span>
                    <span className="border border-black/20 dark:border-white/15 px-2 py-0.5 text-xs font-medium text-[#4d4c47] dark:text-[#b8b5ad]">🇺🇸 US</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
