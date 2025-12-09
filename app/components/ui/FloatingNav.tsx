// components/FloatingNav.tsx
"use client";

import React, { useEffect, useState } from "react";
import { cn } from "@/app/lib/utils";

const SECTIONS = [
  { id: "section-strength", label: "강점" },
  { id: "section-skills", label: "기술" },
  { id: "section-career", label: "경력" },
  { id: "section-project", label: "프로젝트" },
];

interface FloatingNavProps {
  /** 화면 상단에서부터 거리(px) – 원하는 만큼 조절 */
  offset?: number;
}

export function FloatingNav({ offset = 80 }: FloatingNavProps) {
  const [active, setActive] = useState<string>(SECTIONS[0].id);
  const [isVisible, setIsVisible] = useState(false);

  // 스크롤에 따라: 인트로 지나면 보이기 + 섹션 스파이
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const vh = window.innerHeight;

      // 인트로 영역 70% 정도 지나면 등장
      setIsVisible(scrollY > vh * 0.7);

      // 현재 섹션 계산
      let current = SECTIONS[0].id;
      for (const sec of SECTIONS) {
        const el = document.getElementById(sec.id);
        if (!el) continue;
        const rectTop = el.getBoundingClientRect().top + window.scrollY;
        if (scrollY >= rectTop - 140) {
          current = sec.id;
        }
      }
      setActive(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div
      style={{ top: `${offset}px` }}
      className={cn(
        "fixed left-1/2 z-40 -translate-x-1/2 transition-all duration-300",
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 -translate-y-3 pointer-events-none"
      )}
    >
      {/* 리퀴드 글래스 컨테이너 */}
      <div
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-2",
          // 리퀴드 글래스 느낌: 살짝 반투명 + blur + soft shadow
          "backdrop-blur-2xl border",
          "bg-white/30 border-white/60 shadow-[0_24px_80px_rgba(15,23,42,0.40)]",
          // 다크모드에서는 살짝 더 어둡게
          "dark:bg-white/8 dark:border-white/15 dark:shadow-[0_24px_80px_rgba(0,0,0,0.85)]"
        )}
      >
        <nav className="flex items-center gap-2 text-[12px] sm:text-[13px] font-medium">
          {SECTIONS.map((tab) => {
            const isActive = active === tab.id;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleClick(tab.id)}
                className={cn(
                  "relative px-3.5 py-1.5 rounded-full transition-all duration-200",
                  "flex items-center justify-center",
                  // 기본 텍스트 색
                  "text-slate-700 dark:text-slate-200",
                  "hover:bg-white/40 hover:text-slate-900",
                  "dark:hover:bg-white/10 dark:hover:text-white cursor-pointer",
                  // 액티브 – 라이트/다크 각각 톤 맞춤
                  isActive && [
                    // light
                    "bg-sky-500 text-white",
                    "dark:bg-white/90 dark:text-[#050816]",
                    "shadow-[0_10px_28px_rgba(56,189,248,0.55)] dark:shadow-[0_10px_32px_rgba(0,0,0,0.9)]",
                    "scale-[1.02]",
                  ]
                )}
              >
                {isActive && (
                  <span
                    className={cn(
                      "pointer-events-none absolute inset-[1px] rounded-full",
                      "bg-gradient-to-b from-white/40 to-white/5 dark:from-white/40 dark:to-transparent",
                      "opacity-[0.55]"
                    )}
                  />
                )}
                <span className="relative z-[1]">{tab.label}</span>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
