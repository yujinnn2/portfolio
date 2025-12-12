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
        relative h-[100svh] max-h-[1080px] w-full snap-start overflow-hidden
        bg-gray-50 text-gray-900
        dark:bg-[#050816] dark:text-white
      "
    >
      {/* 🔵 움직이는 그라디언트 오브들 */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">

        {/* 🟦 큰 메인 오브 (오른쪽, 훨씬 적극적) */}
        <motion.div
          className="
            absolute right-[-260px] top-1/2 -translate-y-1/2
            h-[880px] w-[880px]
            rounded-full
            bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.55),_rgba(191,219,254,0)_70%)]
            blur-[95px] opacity-85
            dark:bg-[radial-gradient(circle_at_center,_rgba(96,165,250,0.7),_rgba(15,23,42,0)_70%)]
          "
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: [-120, 80, -60, 0],
            y: [0, -120, 70, 0],
            scale: [1, 1.15, 0.92, 1],
          }}
          transition={{
            duration: 10, // 더 빠르게 돌아감
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
        />

        {/* 🔵 작은 보조 오브 (왼쪽 위, 더 크고 더 많이 움직임) */}
        <motion.div
          className="
            absolute left-[-180px] top-[-120px]
            h-[520px] w-[520px]
            rounded-full
            bg-[radial-gradient(circle_at_center,_rgba(129,140,248,0.55),_rgba(219,234,254,0)_70%)]
            blur-[85px] opacity-80
            dark:bg-[radial-gradient(circle_at_center,_rgba(59,130,246,0.55),_rgba(15,23,42,0)_70%)]
          "
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: [70, -90, 60, 0],
            y: [0, 95, -65, 0],
            scale: [1, 1.12, 0.94, 1],
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
    relative mx-auto flex min-h-[100svh] w-full max-w-7xl flex-col
    items-center justify-center px-6
    text-center
    lg:min-h-[100vh]
    lg:flex-row lg:justify-between
    lg:items-center lg:text-left
  "
      >
        {/* Left (Text zone) */}
        <div className="flex flex-col items-center lg:items-start">
          <p className="mb-6 text-base text-neutral-600 dark:text-neutral-300">
            Sophisticated UI for Perfect Interactions
          </p>

          <div className="max-w-[680px]">
            <TypewriterEffect words={words} />
          </div>

          <div className="mt-[80px] flex flex-col items-start gap-3 sm:flex-row sm:gap-4">
            <Button className="cursor-pointer"
              onClick={() => {
                // public/resume.pdf
                window.open("/resume.pdf", "_blank");
              }}
            >
              이력서 다운로드
            </Button>
            <Button className="cursor-pointer"
              onClick={() => {
                const to = "yujinee111@gmail.com";
                const subject = "[퍼블리셔] 퍼블리셔 직무 제안 드립니다";
                const body = [
                  "안녕하세요, 노유진님.",
                  "",
                  "포트폴리오 잘 보았습니다.",
                  "아래와 같은 제안을 드리고 싶어 연락드립니다.",
                  "",
                  "- 회사 / 브랜드명:",
                  "- 담당자 성함:",
                  "- 제안 내용:",
                  "",
                  "감사합니다.",
                ].join("\n");

                const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
                  to
                )}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

                window.open(gmailUrl, "_blank"); // 크롬 기준 Gmail 새 창 혹은 새 탭으로 열림
              }}
            >
              제안 하기
            </Button>
          </div>
        </div>

        <div className="hidden w-[420px] lg:block" />

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
