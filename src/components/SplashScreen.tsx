import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export default function SplashScreen({ onComplete, initials = 'MM' }: { onComplete: () => void; initials?: string }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 1400; // 1.4s
    const interval = 25;
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      setProgress(Math.min((currentStep / steps) * 100, 100));

      if (currentStep >= steps) {
        clearInterval(timer);
        setTimeout(onComplete, 250);
      }
    }, interval);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#111110] text-[#f4f0e8]"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="flex flex-col items-center gap-8">
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative flex h-24 w-24 items-center justify-center border border-white/20 bg-[#181816]"
        >
          <span className="text-3xl font-bold tracking-tight text-[#f4f0e8]">
            {initials}
          </span>
          {/* Terracotta corner accents */}
          <div className="absolute -left-1 -top-1 h-3 w-3 border-l-2 border-t-2 border-[#ff5f4c]" />
          <div className="absolute -right-1 -top-1 h-3 w-3 border-r-2 border-t-2 border-[#ff5f4c]" />
          <div className="absolute -bottom-1 -left-1 h-3 w-3 border-b-2 border-l-2 border-[#ff5f4c]" />
          <div className="absolute -bottom-1 -right-1 h-3 w-3 border-b-2 border-r-2 border-[#ff5f4c]" />
        </motion.div>

        <div className="flex w-52 flex-col gap-2.5">
          <div className="h-1 w-full overflow-hidden bg-white/10">
            <motion.div
              className="h-full bg-[#ff5f4c]"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1, ease: "linear" }}
            />
          </div>
          <div className="flex justify-between text-[11px] font-mono tracking-widest text-[#8a8880]">
            <span>MONIKA MATHUR • CA</span>
            <span>{Math.round(progress)}%</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
