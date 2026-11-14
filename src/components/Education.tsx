import React from 'react';
import { motion } from 'motion/react';

export default function Education({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="education" className="portfolio-section px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 border-t border-black/20 dark:border-white/15 pt-5 lg:grid-cols-[1fr_2fr]"
        >
          <p className="section-kicker">Education</p>
          <div>
            <h2 className="section-title text-[#151514] dark:text-[#f4f0e8]">Foundations that keep evolving.</h2>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4d4c47] dark:text-[#b8b5ad] sm:text-lg">
              Chartered Accountancy qualification from ICAI and advanced commerce study, grounded in enterprise controllership.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 border-t border-black/20 dark:border-white/15 sm:grid-cols-2 lg:grid-cols-3">
          {data.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex min-h-52 flex-col justify-between gap-8 border-b border-black/20 dark:border-white/15 py-6 sm:px-6 sm:odd:border-r sm:first:pl-0 lg:nth-[3n]:border-r-0"
            >
              <div className="flex flex-col gap-2">
                <p className="section-kicker">{edu.dates}</p>
                <h3 className="text-xl font-medium text-[#151514] dark:text-[#f4f0e8]">
                  {edu.degree}
                </h3>
                <p className="text-base font-medium text-[#e34f3c] dark:text-[#ff5f4c]">
                  {edu.institution}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
