"use client";

import { useEffect, useRef } from "react";

export function Intro() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const target = ref.current;
    if (!target) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const items =
            entry.target.querySelectorAll<HTMLElement>(".intro-item");

          if (entry.isIntersecting) {
            // 들어올 때
            items.forEach((item, index) => {
              item.style.transitionDelay = `${index * 350}ms`;
              item.classList.add("intro-visible");
            });
          } else {
            // 나갈 때 → 다시 초기화
            items.forEach((item) => {
              item.style.transitionDelay = `0ms`;
              item.classList.remove("intro-visible");
            });
          }
        });
      },
      {
        threshold: 0.6, // 살짝 낮추는 게 자연스러움
      }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="section-2"
      className="
        h-[480px]
        bg-gray-50 text-gray-900
        dark:bg-[#050816] dark:text-white
        transition-colors duration-300
        flex items-center justify-center
        py-20
      "
    >
      <div ref={ref}>
        <div className="mx-auto max-w-3xl px-6 text-center">
          {/* 서브 헤드라인 */}
          <p
            className={`
              intro-item
              text-[18px] sm:text-[22px]
              font-semibold
              leading-[1.5]
              text-gray-900 dark:text-gray-100
            `}
          >
            안녕하세요, 웹 표준과 접근성을 지켜
            <br className="hidden sm:block" />
            누구나 편하게 쓸 수 있는 웹/앱을 만드는 퍼블리셔입니다.
          </p>

          {/* 설명 */}
          <p
            className={`
              intro-item
              mt-4
              text-[15px] sm:text-[20px]
              leading-[1.7]
              text-gray-600 dark:text-gray-400
            `}
          >
            트렌디한 디자인은 물론 안정적인 기능까지,
            <br className="hidden sm:block" />
            최고의 사용자 경험을 제공하기 위해 끊임없이 노력하고 있습니다.
          </p>
        </div>
      </div>
    </section>
  );
}
