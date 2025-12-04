"use client";

export function Intro() {
  return (
    <section
      id="section-2"
      className="
        h-[480px]
        bg-white text-black
        dark:bg-[#0D0E10] dark:text-gray-200
        transition-colors duration-300
        flex items-center justify-center
      "
    >
      <div className="mx-auto max-w-3xl px-6 text-center">

        {/* 서브 헤드라인 */}
        <p
          className="
            text-[18px] sm:text-[22px]
            font-semibold
            leading-[1.5]
            text-gray-900 dark:text-gray-100
          "
        >
          내가 만든 UI와 인터랙션을 한눈에 보고,
          <br className="hidden sm:block" />
          실제 서비스에 가까운 화면들을 한 곳에서 살펴보세요.
        </p>

        {/* 설명 */}
        <p
          className="
            mt-4
            text-[15px] sm:text-[20px]
            leading-[1.7]
            text-gray-600 dark:text-gray-400
          "
        >
          구조적인 마크업과 디테일한 UI 구현,
          <br className="hidden sm:block" />
          토스 · 카카오 감성을 담은 웹 퍼블리셔 노유진의 작업을 소개합니다.
        </p>
      </div>
    </section>
  );
}
