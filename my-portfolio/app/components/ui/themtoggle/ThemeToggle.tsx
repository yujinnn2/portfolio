"use client";

import { useTheme } from "next-themes";
import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

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
        relative h-10 w-18 rounded-full cursor-pointer
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
    <Moon className="h-5 w-5 text-[#2C2C2C]" strokeWidth={2} />
  ) : (
    <Sun className="h-5 w-5 text-[#111]" strokeWidth={2} />
  )}
</span>

    </button>
  );
}
