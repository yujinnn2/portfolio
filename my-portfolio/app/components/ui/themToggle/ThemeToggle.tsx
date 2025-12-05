"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const isDark = currentTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label="Toggle theme"
      className={`
        relative h-10 w-18 rounded-full
        transition-colors duration-300
        flex items-center px-1
        ${isDark ? "bg-[#2C2C2C]" : "bg-[#E5E5E5]"}
      `}
    >
      {/* Thumb */}
      <span
        className={`
          absolute top-1 h-8 w-8 rounded-full bg-white
          shadow-[0_2px_6px_rgba(0,0,0,0.25)]
          flex items-center justify-center
          transition-transform duration-300
          ${isDark ? "translate-x-[30px]" : "translate-x-0"}
        `}
      >
       {isDark ? (
         // 🌙 Toss-style bitten crescent moon
         <svg
           viewBox="0 0 24 24"
           className="h-6 w-6"
           aria-hidden="true"
         >
           <defs>
             <mask id="theme-toggle-moon-cut">
               <rect width="24" height="24" fill="white" />
               <circle cx="16" cy="10" r="7" fill="black" />
             </mask>
           </defs>

           {/* 메인 달 원: 진한 색 + 마스크 적용 */}
           <circle
             cx="11"
             cy="13"
             r="7.5"
             fill="#2C2C2C"
             mask="url(#theme-toggle-moon-cut)"
           />
         </svg>
        ) : (
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="#111"
            strokeWidth="1.8"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
          </svg>
        )}
      </span>
    </button>
  );
}
