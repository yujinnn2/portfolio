"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react"; // ← 예쁜 아이콘 적용
import { cn } from "@/app/lib/utils";

export function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200); // 스크롤 내리면 나타남
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="맨 위로 이동"
      className={cn(
        "fixed z-50",
        "bottom-6 right-6",
        "flex h-12 w-12 items-center justify-center rounded-full",
        "bg-white/80 text-gray-900 shadow-lg border border-gray-200",
        "backdrop-blur-lg",
        "hover:bg-white hover:shadow-xl hover:-translate-y-1",
        "dark:bg-[#030610]/70 dark:text-gray-100 dark:border-white/10",
        "dark:hover:bg-[#030610]",
        "transition-all duration-300 cursor-pointer"
      )}
    >
      <ArrowUp className="h-5 w-5" strokeWidth={2.2} />
    </button>
  );
}
