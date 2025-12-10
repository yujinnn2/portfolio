"use client";

import { TypewriterEffect } from "./Typewriter-effect";
import type { TypewriterWord } from "./Typewriter-effect";
import { Button } from "@/app/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";

export function Cover() {
  const words: TypewriterWord[] = [
    { text: "UX/UI" },
    { text: "WEB" },
    { text: "Publisher" },
    { text: "Portfolio" },
    { text: "YUJIN", className: "text-blue-500 dark:text-blue-400" },
  ];

  return (
    <section
      id="section-1"
      className="
        relative h-[100vh] max-h-[1080px] w-full snap-start overflow-hidden
        bg-gray-50 text-gray-900
        dark:bg-[#050816] dark:text-white
      "
    >
      {/* 🔵 움직이는 그라디언트 오브들 */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        {/* 🟦 큰 메인 오브 (오른쪽) */}
        <motion.div
          className="
            absolute
            right-[-180px] top-1/2 -translate-y-1/2
            h-[520px] w-[520px]
            md:right-[-220px] md:h-[700px] md:w-[700px]
            lg:right-[-260px] lg:h-[880px] lg:w-[880px]
            rounded-full
            bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.55),_rgba(191,219,254,0)_70%)]
            blur-[70px] md:blur-[85px] lg:blur-[95px]
            opacity-80 lg:opacity-85
            dark:bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.7),_rgba(15,23,42,0)_70%)]
          "
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: [-80, 60, -50, 0],
            y: [0, -90, 60, 0],
            scale: [1, 1.12, 0.94, 1],
          }}
          transition={{
            duration: 11,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        {/* 🔵 작은 보조 오브 (왼쪽 위) */}
        <motion.div
          className="
            absolute
            left-[-140px] top-[-120px]
            h-[360px] w-[360px]
            md:left-[-160px] md:top-[-120px] md:h-[440px] md:w-[440px]
            lg:left-[-180px] lg:h-[520px] lg:w-[520px]
            rounded-full
            bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.55),_rgba(219,234,254,0)_70%)]
            blur-[60px] md:blur-[75px] lg:blur-[85px]
            opacity-75 lg:opacity-80
            dark:bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.55),_rgba(15,23,42,0)_70%)]
          "
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: [50, -70, 45, 0],
            y: [0, 70, -55, 0],
            scale: [1, 1.08, 0.96, 1],
          }}
          transition={{
            duration: 13,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />
      </div>

      {/* 실제 콘텐츠 */}
      <div
        className="
          relative mx-auto flex h-full w-full max-w-7xl flex-col
          items-center justify-center px-5 sm:px-6
          lg:flex-row lg:items-center lg:justify-between
        "
      >
        {/* Left (Text zone) */}
        <div
          className="
            flex flex-col
            items-center text-center
            sm:items-start sm:text-left
          "
        >
          {/* 서브 타이틀 */}
          <p
            className="
              mb-4 text-[13px] sm:text-sm md:text-base
              text-neutral-600 dark:text-neutral-300
            "
          >
            Sophisticated UI for Perfect Interactions
          </p>

          {/* 타이핑 타이틀 */}
          <div className="max-w-[320px] sm:max-w-[480px] md:max-w-[620px] lg:max-w-[680px]">
            <TypewriterEffect words={words} />
          </div>

          {/* CTA 버튼 */}
          <div
            className="
              mt-10 sm:mt-14 md:mt-16
              flex w-full flex-col gap-3
              sm:w-auto sm:flex-row sm:items-center sm:gap-4
            "
          >
            <Button className="w-full sm:w-auto">이력서 다운로드</Button>
            <Button className="w-full sm:w-auto">제안 하기</Button>
          </div>
        </div>

        {/* Right (여백 + 오브 영역, 데스크톱에서만 레이아웃용) */}
        <div className="hidden w-[260px] md:w-[340px] lg:w-[420px] lg:block" />

        {/* Scroll arrow */}
        <button
          onClick={() => {
            const next = document.getElementById("section-2");
            next?.scrollIntoView({ behavior: "smooth" });
          }}
          className="
            absolute bottom-4 left-1/2 -translate-x-1/2
            flex h-8 w-14 items-center justify-center
            text-blue-400 hover:text-blue-700
            dark:text-blue-300 dark:hover:text-blue-200
            transition-all duration-300 cursor-pointer
          "
        >
          <ChevronDown className="h-8 w-8" strokeWidth={2.2} />
        </button>
      </div>
    </section>
  );
}
