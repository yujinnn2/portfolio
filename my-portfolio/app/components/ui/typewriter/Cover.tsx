"use client";

import { TypewriterEffect } from "./Typewriter-effect";
import type { TypewriterWord } from "./Typewriter-effect";
import { Button } from "@/app/components/ui/Button";
import { ChevronDown } from "lucide-react";

export function Cover() {
  const words: TypewriterWord[] = [
    { text: "UX/UI" },
    { text: "WEB" },
    { text: "Publisher" },
    { text: "Portfolio" },
    { text: "YUJIN.", className: "text-blue-500 dark:text-blue-400" },
  ];

  return (
    <section
      id="section-1"
      className="
        relative h-[100vh] snap-start w-full overflow-hidden
        bg-gray-50 text-gray-900
        dark:bg-[#050816] dark:text-white max-h-[1080px]
      "
    >
      <div className="flex h-full w-full flex-col items-center justify-center">
        {/* Subtitle */}
        <p className="mb-10 text-base text-neutral-600 dark:text-neutral-300">
          Sophisticated UI for Perfect Interactions
        </p>

        {/* Typewriter */}
        <TypewriterEffect words={words} />

        {/* CTA buttons */}
        <div className="mt-[100px] flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
          <Button>이력서 다운로드</Button>
          <Button>제안 하기</Button>
        </div>

        {/* Scroll down arrow */}
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
