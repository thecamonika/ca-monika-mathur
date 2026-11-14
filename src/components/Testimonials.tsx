import React from 'react';
import { motion } from 'motion/react';
import { MessageSquareQuote } from 'lucide-react';

const getInitials = (name: string) => {
  return name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase();
};

export default function Testimonials({ data }: { data: any[] }) {
  if (!data || data.length === 0) return null;

  return (
    <section id="testimonials" className="portfolio-section px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="grid gap-5 border-t border-black/20 pt-5 lg:grid-cols-[1fr_2fr]"
        >
          <p className="section-kicker">Testimonials</p>
          <div>
          <h2 className="section-title">Trusted in the work.</h2>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#4d4c47] sm:text-lg">
            Endorsements from engineering leaders, controllership peers, and clients.
          </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 border-t border-black/20 lg:grid-cols-3">
          {data.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex min-h-80 flex-col justify-between gap-6 border-b border-black/20 py-7 lg:px-7 lg:border-r lg:first:pl-0 lg:last:border-r-0"
            >
              <div>
                <div className="mb-5 flex items-center justify-between">
                  <MessageSquareQuote className="h-7 w-7 text-[#e34f3c]" />
                  {testimonial.relationship && (
                    <span className="border border-black/15 bg-black/[0.02] px-2 py-0.5 text-xs font-medium text-[#6c6b64]">
                      {testimonial.relationship}
                    </span>
                  )}
                </div>
                <p className="text-base leading-relaxed text-[#4d4c47] whitespace-pre-line">
                  "{testimonial.text}"
                </p>
              </div>
              
              <div className="mt-6 flex items-start gap-3 border-t border-black/20 pt-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center bg-[#151514] text-xs font-bold text-white">
                  {getInitials(testimonial.name)}
                </span>
                <div className="flex flex-col gap-0.5">
                  <h4 className="font-bold text-[#151514]">{testimonial.name}</h4>
                  <p className="text-xs font-medium text-[#e34f3c] line-clamp-2" title={testimonial.title}>
                    {testimonial.title}
                  </p>
                  <p className="text-[11px] text-[#6c6b64]">{testimonial.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
