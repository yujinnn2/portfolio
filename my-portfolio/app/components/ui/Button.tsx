"use client";

import React from "react";
import { cn } from "@/app/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        `
        inline-flex items-center justify-center
        h-11 px-8 rounded-[12px]
        bg-white/10 dark:bg-white/10
        backdrop-blur-xl
        border border-white/20 dark:border-white/10
        text-black dark:text-white
        shadow-[0_2px_8px_rgba(0,0,0,0.12)]
        hover:bg-white/20 dark:hover:bg-white/[0.15]
        hover:shadow-[0_4px_14px_rgba(0,0,0,0.15)]
        active:scale-[0.96]
        transition-all duration-200
        font-semibold text-sm
        `,
        className
      )}
    >
      {children}
    </button>
  );
}
