"use client";

import dynamic from "next/dynamic";

// SSR 비활성화된 Lottie 컴포넌트 로드
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

// Strength에서 사용하는 애니메이션 JSON 불러오기
import animationData from "./Analytics Character Animation.json";
import animationData2 from "./Calendar Character Animation.json";
import animationData3 from "./Setting Character Animation.json";
// ↑ JSON 파일도 Strength.tsx 옆에 두면 됨

interface StrengthLottieProps {
  className?: string;
  animation: any; // Lottie JSON
}

export function StrengthLottie({ className, animation }: StrengthLottieProps) {
  return (
    <Lottie
      animationData={animation}
      loop
      autoplay
      className={className}
    />
  );
}
