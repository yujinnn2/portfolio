"use client";

import { motion } from "motion/react";

export type CardProps = {
  badge: string;
  title: string;
  description: string;
  delay?: number;
};

export function Card({ badge, title, description, delay = 0 }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay }}
      className="
        group relative
        rounded-xl
        border border-gray-200 dark:border-white/[0.08]
        bg-white/80 dark:bg-white/[0.04]
        backdrop-blur-xl
        p-7
        transition-all duration-300
        hover:border-blue-400/60 dark:hover:border-blue-500/40
        hover:shadow-[0_8px_22px_rgba(0,0,0,0.08)]
        dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.45)]
      "
    >
      <span
        className="
          inline-flex items-center
          text-xs font-semibold
          text-blue-600 dark:text-blue-400
          bg-blue-50 dark:bg-blue-500/15
          px-3 py-1 rounded-full
        "
      >
        {badge}
      </span>

      <h3 className="mt-4 text-[18px] font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      <p className="mt-2 text-[14px] leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}
