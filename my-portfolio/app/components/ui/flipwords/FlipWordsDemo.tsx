import React from "react";
import { FlipWords } from "@/app/components/ui/flipwords/FlipWords";

export function FlipWordsDemo() {
  const words = ["더 쉽게", "더 명확하게", "더 편하게", "더 자연스럽게"];

  return (
    <div
      className="
        h-[18rem] flex justify-center items-center px-4
        bg-gray-50        /* 라이트 */
        dark:bg-[#050816]   /* 다크 */
      "
    >
      <div className="text-3xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
        사용자를 위해 <br />
        <FlipWords words={words} /> <br />
        사용자가 머무는 시간이 가벼워지도록 설계합니다.
      </div>
    </div>
  );
}
