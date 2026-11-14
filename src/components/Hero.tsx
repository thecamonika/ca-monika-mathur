import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Mail, Phone, Check, FileDown } from 'lucide-react';

export default function Hero({ data }: { data: any }) {
  const [copied, setCopied] = useState(false);
  const phoneNumber = data.phone || '+91-9829596348';
  const emailAddress = data.email || 'monika.mathur20@gmail.com';

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(phoneNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="portfolio-hero relative flex min-h-screen flex-col justify-center px-5 pb-16 pt-28 sm:px-8 lg:px-12">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.25fr_0.85fr] lg:gap-12 xl:gap-16">
          
          {/* Left Column: Headlines & Actions */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4"
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="inline-flex w-fit items-center gap-2 border border-[#e34f3c]/40 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#a52f21]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e34f3c] opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[#e34f3c]"></span>
                </span>
                ICAI Chartered Accountant • Open to Strategic Finance Leadership
              </motion.div>

              <h1 className="portfolio-hero-title font-[family-name:var(--font-display)] text-[#151514]">
                <span className="block">{data.name}</span>
                <span className="block text-[#e34f3c]">
                  {data.title.split(' | ')[0] || data.title.split(' & ')[0]}
                </span>
                <span className="mt-3 block max-w-2xl text-base font-medium leading-snug tracking-normal text-[#4d4c47] sm:text-lg lg:text-xl">
                  {data.title.includes(' | ') ? data.title.split(' | ').slice(1).join(' | ') : (data.title.includes(' & ') ? `& ${data.title.split(' & ')[1]}` : '')}
                </span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl border-t border-black/20 pt-5 text-base leading-relaxed text-[#4d4c47] sm:text-lg"
            >
              {data.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap gap-3 pt-2"
            >
              <motion.a
                href="#experience"
                className="group inline-flex items-center justify-center gap-2 bg-[#151514] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#e34f3c]"
              >
                <span className="relative z-10">View Experience</span>
                <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-1" />
              </motion.a>

              <motion.a
                href="./resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 border border-black/30 px-5 py-3 text-sm font-semibold text-[#151514] transition-colors hover:border-[#e34f3c] hover:text-[#e34f3c]"
              >
                <FileDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                <span>Download CV</span>
              </motion.a>

              <motion.a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 border border-black/30 px-5 py-3 text-sm font-semibold text-[#151514] transition-colors hover:border-[#e34f3c] hover:text-[#e34f3c]"
              >
                <span>Email</span>
                <Mail className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
              </motion.a>

              <motion.button
                onClick={handleCopyPhone}
                className="group inline-flex cursor-pointer items-center justify-center gap-2 border border-black/30 px-5 py-3 text-sm font-semibold text-[#151514] transition-colors hover:border-[#e34f3c] hover:text-[#e34f3c]"
              >
                <span>{copied ? 'Copied!' : phoneNumber}</span>
                {copied ? (
                  <Check className="h-4 w-4 text-emerald-700" />
                ) : (
                  <Phone className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                )}
              </motion.button>

              {data.links?.map((link: any, index: number) => (
                <motion.a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center justify-center gap-2 border border-black/30 px-5 py-3 text-sm font-semibold text-[#151514] transition-colors hover:border-[#e34f3c] hover:text-[#e34f3c]"
                >
                  <span>{link.name}</span>
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Column: Editorial Portrait Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none"
          >
            <div className="relative border border-black/20 bg-[#f4f0e8] p-3">
              {/* Corner accent marks in terracotta */}
              <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-[#e34f3c]" />
              <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-[#e34f3c]" />
              <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-[#e34f3c]" />
              <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-[#e34f3c]" />

              <div className="relative overflow-hidden bg-[#e9e4da]">
                <img
                  src="./monika-mathur.jpg"
                  alt="Monika Mathur - Chartered Accountant & Finance Manager"
                  className="aspect-[4/4.3] w-full object-cover object-[center_16%] filter contrast-[1.03] transition-transform duration-700 hover:scale-[1.02]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
              </div>

              {/* Editorial Caption Bar */}
              <div className="mt-3 flex items-center justify-between border-t border-black/15 pt-2.5 text-xs font-mono text-[#6c6b64]">
                <div className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 bg-[#e34f3c]" />
                  <span className="font-semibold tracking-wider text-[#151514]">MONIKA MATHUR</span>
                </div>
                <span className="tracking-widest text-[#a52f21]">CHARTERED ACCOUNTANT</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
