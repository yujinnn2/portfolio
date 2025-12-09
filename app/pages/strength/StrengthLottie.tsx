"use client";

import dynamic from "next/dynamic";

// SSR 비활성화된 Lottie 컴포넌트 로드
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

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
