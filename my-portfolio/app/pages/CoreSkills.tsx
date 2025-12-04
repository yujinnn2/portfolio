"use client";

import { useMemo, useState } from "react";
import { Card } from "@/app/components/ui/Card";

export type SkillCategoryKey = "frontend" | "library" | "devops" | "design";

// 카테고리 메타 정보
export const SKILL_CATEGORIES: Record<
  SkillCategoryKey,
  { label: string; engLabel: string }
> = {
  frontend: { label: "프런트엔드", engLabel: "Frontend" },
  library: { label: "라이브러리", engLabel: "Library & Framework" },
  devops: { label: "환경 및 배포", engLabel: "Environment & Deploy" },
  design: { label: "디자인", engLabel: "Design & UX" },
};

export interface SkillItem {
  id: number;
  category: SkillCategoryKey;
  title: string;
  description: string;
}

const CATEGORY_ORDER: SkillCategoryKey[] = [
  "frontend",
  "library",
  "devops",
  "design",
];

const CATEGORY_BASE_DELAY: Record<SkillCategoryKey, number> = {
  frontend: 0.0,
  library: 0.06,
  devops: 0.12,
  design: 0.18,
};

// 실제 기술 스택 데이터
export const SKILLS: SkillItem[] = [
  // ===== 프런트엔드 =====
  {
    id: 1,
    category: "frontend",
    title: "JavaScript (ES6+)",
    description:
      "동적 UI 구현, 이벤트 처리, 비동기 흐름 제어 등 인터랙션 중심 개발 경험을 보유하고 있습니다.",
  },
  {
    id: 2,
    category: "frontend",
    title: "TypeScript",
    description:
      "타입 시스템을 활용해 컴포넌트 재사용성과 유지보수성을 높인 실무 경험이 있습니다.",
  },
  {
    id: 3,
    category: "frontend",
    title: "HTML5 · CSS3",
    description:
      "시맨틱 마크업과 구조적인 CSS 설계를 통해 접근성과 확장성을 고려한 화면을 만듭니다.",
  },
  {
    id: 4,
    category: "frontend",
    title: "Responsive Web",
    description:
      "모바일·데스크톱 대응 레이아웃 구성, 그리드/플렉스 기반 반응형 구현 경험.",
  },


  // ===== 라이브러리 =====
  {
    id: 5,
    category: "library",
    title: "React.js",
    description:
      "컴포넌트 설계, 상태 관리, Hook 기반 UI 개발 등 실 서비스 수준의 화면을 구현합니다.",
  },
  {
    id: 6,
    category: "library",
    title: "Next.js",
    description:
      "페이지 라우팅, 서버 컴포넌트, SEO 최적화 등 최신 Next.js 환경으로 개발하고 있습니다.",
  },
  {
    id: 7,
    category: "library",
    title: "Tailwind CSS",
    description:
      "디자인 시스템과 연동된 유틸리티 스타일링으로 일관된 UI를 빠르게 구축합니다.",
  },
  {
    id: 8,
    category: "library",
    title: "GSAP",
    description:
      "스크롤 및 트랜지션 모션을 활용해 자연스러운 인터랙션을 구현합니다.",
  },

  // ===== 환경 및 배포 =====
  {
    id: 9,
    category: "devops",
    title: "Git · Github",
    description:
      "브랜치 전략, PR 리뷰, 협업 중심 버전 관리 경험을 보유하고 있습니다.",
  },
  {
    id: 10,
    category: "devops",
    title: "Vercel",
    description:
      "Next.js 기반 자동 배포, 프리뷰 환경 구성, 간단한 도메인 설정 경험.",
  },
  {
    id: 11,
    category: "devops",
    title: "Node 환경 이해",
    description:
      "패키지 관리, 빌드 스크립트 이해 등 프론트엔드 개발 환경 구성 경험.",
  },

  // ===== 디자인 =====
  {
    id: 12,
    category: "design",
    title: "Figma",
    description:
      "컴포넌트 기반 디자인 시안 분석, 디자인 시스템 이해 및 협업 경험.",
  },
  {
    id: 13,
    category: "design",
    title: "UX / UI 관점",
    description:
      "실제 사용 흐름을 고려한 화면 구조와 인터랙션 설계를 중요하게 생각합니다.",
  },
  {
    id: 14,
    category: "design",
    title: "Design System Bridge",
    description:
      "디자인 시스템과 프론트엔드를 연결하는 퍼블리셔/FE 브릿지 역할에 관심이 있습니다.",
  },
];

export function CoreSkills() {
  const [activeFilter, setActiveFilter] = useState<SkillCategoryKey | "all">(
    "frontend",
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredSkills = useMemo(() => {
    if (activeFilter === "all") return SKILLS;
    return SKILLS.filter((s) => s.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section
        id="skills"
        className="
          py-24
          bg-gray-50 text-gray-900
          dark:bg-[#050816] dark:text-white
          transition-colors duration-300
        "
      >
        <div className="mx-auto max-w-6xl px-6">
          {/* 🔹 상단 헤더 - 가운데 정렬 */}
          <header className="mb-8 text-center">
            <p className="text-[13px] font-semibold text-blue-500 dark:text-blue-400">
              Skills
            </p>
            <h2 className="mt-1 text-[24px] sm:text-[28px] font-bold leading-tight">
              기술 스택
            </h2>
            <p className="mt-2 text-[13px] text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              메인에는 대표 기술만 노출하고, 전체 기술 스택은 별도의 보기로
              정리했습니다.
            </p>
          </header>

          {/* 🔹 필터 탭 - 가운데 정렬 + 텍스트 길이만큼 버튼 */}
          <div className="mb-8 flex w-full flex-wrap items-center justify-center gap-2">
            <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full bg-gray-100/70 px-2 py-1.5 dark:bg-white/[0.03]">
              <button
                type="button"
                onClick={() => setActiveFilter("all")}
                className={`
                  inline-flex items-center justify-center
                  rounded-full px-3.5 py-1.5 text-[12px]
                  transition-all
                  ${
                  activeFilter === "all"
                    ? "bg-white text-blue-600 shadow-sm dark:bg-blue-500/20 dark:text-blue-200"
                    : "text-gray-600 hover:bg-white/70 dark:text-gray-300 dark:hover:bg-white/[0.06]"
                }
                `}
              >
                전체
              </button>

              {CATEGORY_ORDER.map((key) => {
                const cat = SKILL_CATEGORIES[key];
                const isActive = activeFilter === key;
                return (
                  <button
                    key={key}
                    type="button"
                    onClick={() => setActiveFilter(key)}
                    className={`
                      inline-flex items-center justify-center
                      rounded-full px-3.5 py-1.5 text-[12px]
                      transition-all
                      ${
                      isActive
                        ? "bg-white text-blue-600 shadow-sm dark:bg-blue-500/20 dark:text-blue-200"
                        : "text-gray-600 hover:bg-white/70 dark:text-gray-300 dark:hover:bg-white/[0.06]"
                    }
                    `}
                  >
                    {cat.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 🔹 컨텐츠 영역 */}
          {activeFilter === "all" ? (
            // 전체 보기: 카테고리별 "대표 스택"만 (최대 4개)
            <div className="space-y-10">
              {CATEGORY_ORDER.map((catKey) => {
                const catSkills = filteredSkills.filter(
                  (s) => s.category === catKey,
                );
                if (!catSkills.length) return null;

                const previewSkills = catSkills.slice(0, 4); // 대표 4개
                let indexInCategory = 0;

                return (
                  <section key={catKey}>
                    {/* 카테고리 헤더 */}
                    <div className="mb-3 flex items-baseline justify-between">
                      <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white">
                        {SKILL_CATEGORIES[catKey].engLabel}
                      </h3>
                      <span className="text-[11px] text-gray-500 dark:text-gray-400">
                        {SKILL_CATEGORIES[catKey].label}
                      </span>
                    </div>

                    {/* 카드 그리드: 대표 스택 4개 */}
                    <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                      {previewSkills.map((skill) => {
                        const delay =
                          CATEGORY_BASE_DELAY[skill.category] +
                          indexInCategory * 0.04;
                        indexInCategory += 1;

                        return (
                          <Card
                            key={skill.id}
                            badge={SKILL_CATEGORIES[skill.category].label}
                            title={skill.title}
                            description={skill.description}
                            delay={delay}
                          />
                        );
                      })}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            // 단일 카테고리 필터일 때: 해당 카테고리 전체 스택
            (() => {
              const catMeta = SKILL_CATEGORIES[activeFilter as SkillCategoryKey];
              let indexInCategory = 0;

              const catSkills = filteredSkills; // 이미 필터된 상태

              return (
                <section>
                  {/* 선택된 카테고리 헤더 */}
                  <div className="mb-3 flex items-baseline justify-between">
                    <h3 className="text-[14px] font-semibold text-gray-900 dark:text-white">
                      {catMeta.engLabel}
                    </h3>
                    <span className="text-[11px] text-gray-500 dark:text-gray-400">
                      {catMeta.label}
                    </span>
                  </div>

                  <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
                    {catSkills.map((skill) => {
                      const delay =
                        CATEGORY_BASE_DELAY[skill.category] +
                        indexInCategory * 0.05;
                      indexInCategory += 1;

                      return (
                        <Card
                          key={skill.id}
                          badge={catMeta.label}
                          title={skill.title}
                          description={skill.description}
                          delay={delay}
                        />
                      );
                    })}
                  </div>
                </section>
              );
            })()
          )}

          {/* 🔹 전체 보기 버튼 */}
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="
                inline-flex items-center gap-2
                rounded-full border border-gray-300/80 dark:border-white/15
                bg-white/80 dark:bg-white/[0.03]
                px-5 py-2.5
                text-[13px] font-medium
                text-gray-800 dark:text-gray-100
                shadow-[0_4px_14px_rgba(15,23,42,0.08)]
                hover:shadow-[0_10px_30px_rgba(15,23,42,0.18)]
                hover:border-blue-400/70 dark:hover:border-blue-400/40
                transition-all duration-200
              "
            >
              <span>전체 기술 스택 보기</span>
              <span className="text-[15px]">↗</span>
            </button>
          </div>
        </div>
      </section>

      {/* ======================
          전체 스택 모달
      ======================= */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
          {/* DIM */}
          <button
            type="button"
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />

          {/* MODAL */}
          <div
            className="
              relative z-10 w-full max-w-3xl
              rounded-2xl
              bg-white dark:bg-[#050816]
              shadow-[0_24px_80px_rgba(0,0,0,0.65)]
              border border-gray-200/80 dark:border-white/10
              px-6 pt-5 pb-6
              max-h-[80vh]
              flex flex-col
            "
          >
            {/* 헤더 */}
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-blue-500/80 dark:text-blue-300/80">
                  Full Tech Stack
                </p>
                <h3 className="mt-1 text-[20px] font-semibold text-gray-900 dark:text-white">
                  전체 기술 스택 한눈에 보기
                </h3>
                <p className="mt-1 text-[12px] text-gray-600 dark:text-gray-400">
                  카테고리별로 사용해 본 기술들을 태그 형태로 정리했습니다.
                </p>
              </div>

              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="
                  inline-flex h-8 w-8 items-center justify-center
                  rounded-full
                  bg-gray-100/80 hover:bg-gray-200
                  dark:bg-white/5 dark:hover:bg-white/10
                  text-gray-600 dark:text-gray-300
                  text-sm
                "
              >
                ✕
              </button>
            </div>

            {/* 내용 영역 */}
            <div className="mt-4 flex-1 overflow-y-auto pr-1">
              <div className="space-y-6">
                {CATEGORY_ORDER.map((catKey) => {
                  const catSkills = SKILLS.filter(
                    (s) => s.category === catKey,
                  );
                  if (!catSkills.length) return null;

                  return (
                    <section key={catKey}>
                      <h4 className="text-[13px] font-semibold text-gray-900 dark:text-white">
                        {SKILL_CATEGORIES[catKey].engLabel}
                        <span className="ml-2 text-[11px] font-normal text-gray-500 dark:text-gray-400">
                          ({SKILL_CATEGORIES[catKey].label})
                        </span>
                      </h4>

                      <div className="mt-3 flex flex-wrap gap-2">
                        {catSkills.map((skill) => (
                          <span
                            key={skill.id}
                            className="
                              inline-flex items-center
                              rounded-full
                              border border-gray-200 dark:border-white/15
                              bg-gray-50 dark:bg-white/[0.02]
                              px-3 py-1.5
                              text-[12px]
                              text-gray-800 dark:text-gray-100
                            "
                          >
                            {skill.title}
                          </span>
                        ))}
                      </div>
                    </section>
                  );
                })}
              </div>
            </div>

            {/* 하단 안내 텍스트 */}
            <div className="mt-4 border-t border-gray-100 dark:border-white/10 pt-3">
              <p className="text-[11px] text-gray-500 dark:text-gray-400">
                * 대표적인 사용 스택 위주로 정리했으며, 프로젝트별 상세 사용
                기술은 포트폴리오 섹션에서 함께 확인하실 수 있습니다.
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
