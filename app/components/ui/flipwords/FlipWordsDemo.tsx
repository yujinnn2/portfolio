import React from "react";
import { FlipWords } from "@/app/components/ui/flipwords/FlipWords";

export function FlipWordsDemo() {
  const words = ["더 쉽게", "더 명확하게", "더 편하게", "더 자연스럽게"];

  return (
    <section className="bg-white py-14 dark:bg-[#06091A]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          {/* philosophy */}
          <div
            className="
              mx-auto max-w-[52ch]
              text-[26px] sm:text-[26px]
              leading-[1.95]
              tracking-[-0.01em]
              text-neutral-700 dark:text-neutral-300
            "
          >
            <span>사용자를 위해 </span>
            <FlipWords words={words} />
            <br />
            사용자가 머무는 시간이 가벼워지도록 설계합니다.
          </div>

          {/* ending */}
          <div className="pt-14">
            <h2 className="text-[20px] sm:text-[22px] font-medium tracking-[-0.015em]">
              감사합니다.
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
