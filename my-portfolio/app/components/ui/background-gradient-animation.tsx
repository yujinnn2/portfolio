"use client";

import { cn } from "@/app/lib/utils";
import { useEffect, useRef, useState } from "react";

type BackgroundGradientAnimationProps = {
  gradientBackgroundStart?: string;
  gradientBackgroundEnd?: string;
  firstColor?: string;
  secondColor?: string;
  thirdColor?: string;
  fourthColor?: string;
  fifthColor?: string;
  pointerColor?: string;
  size?: string;
  blendingValue?: string;
  children?: React.ReactNode;
  className?: string;
  interactive?: boolean;
  containerClassName?: string;
};

export const BackgroundGradientAnimation = ({
                                              gradientBackgroundStart = "rgb(108, 0, 162)",
                                              gradientBackgroundEnd = "rgb(0, 17, 82)",

                                              firstColor = "18, 113, 255",
                                              secondColor = "221, 74, 255",
                                              thirdColor = "100, 220, 255",
                                              fourthColor = "200, 50, 50",
                                              fifthColor = "180, 180, 50",

                                              pointerColor = "140, 100, 255",

                                              size = "80%",
                                              blendingValue = "hard-light",
                                              children,
                                              className,
                                              interactive = true,
                                              containerClassName,
                                            }: BackgroundGradientAnimationProps) => {
  const pointerRef = useRef<HTMLDivElement>(null);
  const [isSafari, setIsSafari] = useState(false);

  // CSS 변수 세팅
  useEffect(() => {
    document.body.style.setProperty(
      "--gradient-background-start",
      gradientBackgroundStart
    );
    document.body.style.setProperty(
      "--gradient-background-end",
      gradientBackgroundEnd
    );
    document.body.style.setProperty("--first-color", firstColor);
    document.body.style.setProperty("--second-color", secondColor);
    document.body.style.setProperty("--third-color", thirdColor);
    document.body.style.setProperty("--fourth-color", fourthColor);
    document.body.style.setProperty("--fifth-color", fifthColor);
    document.body.style.setProperty("--pointer-color", pointerColor);
    document.body.style.setProperty("--size", size);
    document.body.style.setProperty("--blending-value", blendingValue);
  }, [
    gradientBackgroundStart,
    gradientBackgroundEnd,
    firstColor,
    secondColor,
    thirdColor,
    fourthColor,
    fifthColor,
    pointerColor,
    size,
    blendingValue,
  ]);

  useEffect(() => {
    setIsSafari(/^((?!chrome|android).)*safari/i.test(navigator.userAgent));
  }, []);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!pointerRef.current) return;

    const rect = pointerRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    pointerRef.current.style.background = `radial-gradient(circle at ${x}px ${y}px, rgba(var(--pointer-color), 0.85) 0, rgba(var(--pointer-color), 0) 55%)`;
  };

  return (
    <div
      className={cn(
        "relative top-0 left-0 h-screen w-screen overflow-hidden",
        "bg-[linear-gradient(40deg,var(--gradient-background-start),var(--gradient-background-end))]",
        containerClassName
      )}
    >
      {/* 중앙 히어로 카피 */}
      <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
        <div className="flex flex-col items-center text-center gap-6 px-6">
          <div className="rounded-full border border-white/15 bg-white/5 backdrop-blur-sm px-4 py-1.5 text-[10px] tracking-[0.22em] uppercase text-white/70 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Web Publisher Portfolio
          </div>

          <h1 className="font-semibold leading-[1.15] text-white text-4xl sm:text-5xl md:text-6xl drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
            <span className="opacity-80">정교한 UI로</span>
            <br />
            <span className="font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-blue-200 to-cyan-200 animate-pulse-slow">
              인터랙션을 완성하는
            </span>
            <br />
            <span className="opacity-90">웹 퍼블리셔 노유진입니다.</span>
          </h1>

          <p className="max-w-[560px] text-[14px] sm:text-[15px] text-white/70 leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.25)]">
            디테일한 마크업과 부드러운 인터랙션,&nbsp;
            <span className="text-white/90 font-medium">
              대기업 실무 기반 UI/UX
            </span>
            를 중심으로 작업합니다.
          </p>

          {children && (
            <div className={cn("mt-6 pointer-events-auto", className)}>
              {children}
            </div>
          )}
        </div>
      </div>

      {/* SVG 필터 */}
      <svg className="hidden">
        <defs>
          <filter id="blurMe">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      {/* 그라디언트 애니메이션 레이어 */}
      <div
        className={cn(
          "gradients-container h-full w-full blur-lg",
          isSafari ? "blur-2xl" : "[filter:url(#blurMe)_blur(40px)]"
        )}
      >
        <div className="absolute top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [background:radial-gradient(circle_at_center,_var(--first-color)_0,_var(--first-color)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:center_center] animate-first opacity-100" />
        <div className="absolute top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [background:radial-gradient(circle_at_center,_rgba(var(--second-color),_0.8)_0,_rgba(var(--second-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-400px)] animate-second opacity-100" />
        <div className="absolute top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [background:radial-gradient(circle_at_center,_rgba(var(--third-color),_0.8)_0,_rgba(var(--third-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%+400px)] animate-third opacity-100" />
        <div className="absolute top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [background:radial-gradient(circle_at_center,_rgba(var(--fourth-color),_0.8)_0,_rgba(var(--fourth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-200px)] animate-fourth opacity-70" />
        <div className="absolute top-[calc(50%-var(--size)/2)] left-[calc(50%-var(--size)/2)] h-[var(--size)] w-[var(--size)] [background:radial-gradient(circle_at_center,_rgba(var(--fifth-color),_0.8)_0,_rgba(var(--fifth-color),_0)_50%)_no-repeat] [mix-blend-mode:var(--blending-value)] [transform-origin:calc(50%-800px)_calc(50%+800px)] animate-fifth opacity-100" />

        {interactive && (
          <div
            ref={pointerRef}
            onMouseMove={handleMouseMove}
            className="absolute inset-0 h-full w-full [mix-blend-mode:var(--blending-value)] opacity-70"
            // 초기값
            style={{
              background:
                "radial-gradient(circle at 50% 50%, rgba(var(--pointer-color), 0.7) 0, rgba(var(--pointer-color), 0) 55%)",
            }}
          />
        )}
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
    text-white/70
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
};
