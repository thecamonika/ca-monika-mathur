import React from 'react';
import { motion } from 'motion/react';
import { Building2, Landmark, Globe2, ShieldCheck } from 'lucide-react';

const trustItems = [
  {
    name: 'Pocket FM',
    role: 'Finance Manager (Present)',
    detail: 'Global digital audio platform',
    icon: Building2,
    badge: 'PF'
  },
  {
    name: 'GeekyAnts',
    role: 'Finance Manager (4.5 yrs)',
    detail: 'Multi-entity product studio',
    icon: Building2,
    badge: 'GA'
  },
  {
    name: 'ICAI (Chartered Accountancy)',
    role: 'Qualified Chartered Accountant',
    detail: 'The Institute of Chartered Accountants of India',
    icon: ShieldCheck,
    badge: 'CA'
  },
  {
    name: 'Cross-Border Entities',
    role: 'India • United Kingdom • United States',
    detail: 'Consolidated reporting & controllership',
    icon: Globe2,
    badge: '3X'
  }
];

export default function TrustStrip({ companies }: { companies?: string[] }) {
  return (
    <section className="border-y border-black/20 py-10">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-7 px-5 sm:px-8 lg:px-12">
        <p className="section-kicker">
          Finance leadership & enterprise controllership across
        </p>

        <div className="grid grid-cols-1 border-t border-black/20 sm:grid-cols-2 lg:grid-cols-4">
          {trustItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex flex-col gap-2.5 border-b border-black/20 py-6 text-left sm:border-r sm:px-6 sm:first:pl-0 lg:last:border-r-0"
              >
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center bg-[#151514] text-xs font-bold text-white">
                    {item.badge}
                  </span>
                  <span className="text-base font-bold tracking-tight text-[#151514]">{item.name}</span>
                </div>
                <div className="mt-1 flex flex-col">
                  <span className="text-xs font-semibold text-[#e34f3c]">{item.role}</span>
                  <span className="text-xs text-[#6c6b64]">{item.detail}</span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

