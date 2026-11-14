import React from 'react';
import { motion } from 'motion/react';
import { Landmark, Scale, TrendingUp, Sparkles, ShieldCheck, Building2 } from 'lucide-react';

type SkillGroup = {
  group: string;
  items: string[];
};

const getGroupIcon = (groupName: string) => {
  const normalized = groupName.toLowerCase();
  if (normalized.includes('controllership') || normalized.includes('reporting') || normalized.includes('accounting')) return Landmark;
  if (normalized.includes('statutory') || normalized.includes('tax') || normalized.includes('compliance')) return Scale;
  if (normalized.includes('operations') || normalized.includes('capital') || normalized.includes('working')) return TrendingUp;
  if (normalized.includes('controls') || normalized.includes('audit')) return ShieldCheck;
  if (normalized.includes('transformation') || normalized.includes('ai') || normalized.includes('analytics')) return Sparkles;
  if (normalized.includes('strategic') || normalized.includes('leadership') || normalized.includes('governance')) return Building2;
  return Building2;
};

export default function Skills({ data }: { data: SkillGroup[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="skills" className="portfolio-section px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 border-t border-black/20 dark:border-white/15 pt-5 lg:grid-cols-[1fr_2fr]"
        >
          <p className="section-kicker">Capabilities</p>
          <div>
            <h2 className="section-title text-[#151514] dark:text-[#f4f0e8]">Core capabilities & expertise.</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4d4c47] dark:text-[#b8b5ad] sm:text-lg">
              The financial frameworks, compliance standards, and operating disciplines I use to build scalable, high-performance finance functions.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 border-t border-black/20 dark:border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((skillGroup, index) => {
            const GroupIcon = getGroupIcon(skillGroup.group);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex min-h-64 flex-col border-b border-black/20 dark:border-white/15 py-6 sm:px-6 sm:odd:border-r sm:first:pl-0 lg:border-r lg:nth-[3n]:border-r-0"
              >
                <div className="mb-5 flex items-start gap-3">
                  <div className="flex items-start gap-3">
                    <div className="border border-black/25 dark:border-white/20 p-2 text-[#e34f3c] dark:text-[#ff5f4c]">
                      <GroupIcon className="h-4 w-4" />
                    </div>
                    <h3 className="text-xl font-semibold leading-tight text-[#151514] dark:text-[#f4f0e8]">
                      {skillGroup.group}
                    </h3>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2.5">
                  {skillGroup.items.map((item: string, i: number) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 6 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.25, delay: i * 0.03 }}
                      className="border border-black/20 dark:border-white/15 px-2 py-1 text-xs font-medium tracking-wide text-[#4d4c47] dark:text-[#b8b5ad] transition-colors hover:border-[#e34f3c] dark:hover:border-[#ff5f4c] hover:text-[#e34f3c] dark:hover:text-[#ff5f4c]"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>

                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-black/20 dark:bg-white/15" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
