"use client";

import { motion } from "motion/react";

export function Card({
                            badge,
                            title,
                            description,
                          }: {
  badge: string;
  title: string;
  description: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
      className="
        group relative
        rounded-xl
        border border-gray-200 dark:border-white/[0.08]
        bg-white/85 dark:bg-white/[0.04]
        backdrop-blur-lg
        p-6
        transition-all duration-300

        hover:border-blue-400/60 dark:hover:border-blue-500/40
        hover:bg-white/95 dark:hover:bg-white/[0.06]
        hover:shadow-[0_6px_20px_rgba(0,0,0,0.10)]
        dark:hover:shadow-[0_12px_30px_rgba(0,0,0,0.55)]
      "
    >
      {/* 기술 태그 */}
      <span
        className="
          inline-flex items-center
          text-[11px] font-semibold
          text-blue-600 dark:text-blue-300
          bg-blue-50 dark:bg-blue-500/10
          px-3 py-1 rounded-full
          border border-blue-200/60 dark:border-blue-500/20
        "
      >
        {badge}
      </span>

      {/* 기술명 */}
      <h3 className="mt-3 text-[16px] font-semibold text-gray-900 dark:text-white">
        {title}
      </h3>

      {/* 설명 */}
      <p className="mt-1 text-[13px] leading-relaxed text-gray-600 dark:text-gray-400">
        {description}
      </p>
    </motion.div>
  );
}
