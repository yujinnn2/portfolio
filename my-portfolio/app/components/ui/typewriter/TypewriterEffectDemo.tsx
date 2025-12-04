"use client";
import { TypewriterEffect } from "./typewriter-effect";

export function Cover() {
  const words = [
    {
      text: "UX/UI",
    },
    {
      text: "WEB",
    },
    {
      text: "Publisher",
    },
    {
      text: "Portfolio",
    },
    {
      text: "YUJIN.",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-full ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Sophisticated UI for Perfect Interactions
      </p>
      <TypewriterEffect words={words} />
      {/* 👉 토스 스타일 버튼 영역 */}
      <div className="mt-15 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
        {/* Primary CTA - Blue only */}
        <button
          className="
            inline-flex items-center justify-center
            h-11 px-6
            rounded-full
            bg-[#3182F6]
            text-sm font-semibold text-white
            shadow-[0_6px_14px_rgba(49,130,246,0.22)]
            transition
            hover:bg-[#1B64DA]
            active:translate-y-[1px]
          "
        >
          포트폴리오 바로 보기
        </button>

        {/* Secondary CTA - Gray line */}
        <button
          className="
            inline-flex items-center justify-center
            h-11 px-6
            rounded-full
            border border-gray-300
            bg-white
            text-sm font-medium text-gray-700
            transition
            hover:bg-gray-50
            active:bg-gray-100
          "
        >
          이력서 다운로드
        </button>

      </div>
      {/* 아래로 스크롤 버튼 */}
      <button
        onClick={() => {
          const next = document.getElementById("section-2");
          if (next) next.scrollIntoView({ behavior: "smooth" });
        }}
        className="
    absolute bottom-12 left-1/2 -translate-x-1/2 z-30
    flex items-center justify-center
    w-14 h-8
    text-blue-800
    hover:text-white hover:brightness-110
    transition-all duration-300 cursor-pointer
  "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="w-10 h-10"
        >
          <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  );
}
