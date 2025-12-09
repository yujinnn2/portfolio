"use client";

import { useMemo, useState } from "react";
import { Card } from "@/app/components/ui/Card";
import { ArrowUpRight , X } from "lucide-react";

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

// ============================
// 실제 기술 스택 데이터
// ============================
export const SKILLS: SkillItem[] = [
  // ===== 프런트엔드 기본 =====
  {
    id: 1,
    category: "frontend",
    title: "HTML5",
    description:
      "시맨틱 태그와 웹 표준을 기반으로 구조적인 마크업을 작성합니다.",
  },
  {
    id: 2,
    category: "frontend",
    title: "CSS3",
    description:
      "레이아웃, 타이포그래피, 트랜지션 등을 활용해 반응형 스타일을 구현합니다.",
  },
  {
    id: 3,
    category: "frontend",
    title: "JavaScript",
    description:
      "ES6+ 문법과 DOM 제어를 활용해 사용자 인터랙션 중심의 UI를 구현합니다.",
  },
  {
    id: 4,
    category: "frontend",
    title: "TypeScript",
    description:
      "타입 시스템을 활용해 대규모 컴포넌트의 안정성과 유지보수성을 높였습니다.",
  },

  // ===== 라이브러리 & 프레임워크 =====
  {
    id: 5,
    category: "library",
    title: "React",
    description:
      "컴포넌트 기반 설계와 Hook 중심으로 실제 서비스 화면을 개발했습니다.",
  },
  {
    id: 6,
    category: "library",
    title: "Next.js",
    description:
      "파일 기반 라우팅, 서버 컴포넌트, SEO를 고려한 SPA/SSR 환경을 구축했습니다.",
  },
  {
    id: 7,
    category: "library",
    title: "Sass(SCSS)",
    description:
      "변수, 믹스인, 중첩 등을 활용해 재사용성 높은 스타일 구조를 설계했습니다.",
  },
  {
    id: 8,
    category: "library",
    title: "Tailwind CSS",
    description:
      "디자인 토큰과 결합해 일관된 UI를 빠르게 구축하는 유틸리티 기반 스타일링을 사용합니다.",
  },
  {
    id: 9,
    category: "library",
    title: "jQuery",
    description:
      "레거시 프로젝트에서 DOM 조작과 이벤트 핸들링 중심으로 유지·보수 경험이 있습니다.",
  },
  {
    id: 10,
    category: "library",
    title: "Bootstrap 5",
    description:
      "그리드 시스템과 컴포넌트를 활용해 빠르게 반응형 레이아웃을 구성했습니다.",
  },
  {
    id: 11,
    category: "library",
    title: "emotion",
    description:
      "CSS-in-JS 방식으로 컴포넌트 단위 스타일을 관리하고 테마를 적용했습니다.",
  },
  {
    id: 12,
    category: "library",
    title: "styled-components",
    description:
      "컴포넌트 단위 스타일링과 props 기반 스타일 분기를 통해 재사용 가능한 UI를 만들었습니다.",
  },
  {
    id: 13,
    category: "library",
    title: "antd",
    description:
      "엔터프라이즈 UI 컴포넌트를 도입해 관리형 화면을 빠르게 구성한 경험이 있습니다.",
  },
  {
    id: 14,
    category: "library",
    title: "GSAP",
    description:
      "스크롤 트리거와 타임라인을 이용해 자연스러운 모션과 인터랙션을 구현했습니다.",
  },
  {
    id: 15,
    category: "library",
    title: "Radix UI",
    description:
      "접근성 기반 프리미티브를 활용해 Dialog, Dropdown, Checkbox 등 핵심 UI를 커스터마이징했습니다.",
  },
  {
    id: 16,
    category: "library",
    title: "shadcn/ui",
    description:
      "shadcn 패턴을 참고해 Button, Input, Dialog 등 재사용 가능한 디자인 시스템 컴포넌트를 구성했습니다.",
  },
  {
    id: 17,
    category: "library",
    title: "FullCalendar",
    description:
      "근태·일정·예약 데이터와 연동된 커스텀 이벤트 캘린더 화면을 구현했습니다.",
  },
  {
    id: 18,
    category: "library",
    title: "TanStack Table",
    description:
      "정렬·필터·선택·rowSpan 등 ERP 스타일의 데이터 테이블을 구성했습니다.",
  },
  {
    id: 19,
    category: "library",
    title: "React Hook Form",
    description:
      "폼 상태와 유효성 검사를 효율적으로 관리하는 입력 폼을 구현했습니다.",
  },
  // ===== 환경 · 배포 · 협업 도구 =====
  {
    id: 22,
    category: "devops",
    title: "Git",
    description:
      "브랜치 전략과 커밋 기록 관리를 통해 협업 가능한 히스토리를 유지합니다.",
  },
  {
    id: 23,
    category: "devops",
    title: "GitHub",
    description:
      "Pull Request 기반 코드 리뷰와 협업 워크플로를 경험했습니다.",
  },
  {
    id: 24,
    category: "devops",
    title: "Vercel",
    description:
      "Next.js 프로젝트를 연결해 자동 배포와 프리뷰 환경을 구성했습니다.",
  },
  {
    id: 25,
    category: "devops",
    title: "Netlify",
    description:
      "정적 사이트를 빠르게 배포하고 간단한 빌드 설정을 관리한 경험이 있습니다.",
  },
  {
    id: 26,
    category: "devops",
    title: "Node.js",
    description:
      "패키지 관리와 빌드 스크립트 실행 등 프론트엔드 개발 환경을 구성하는 데 사용했습니다.",
  },
  {
    id: 27,
    category: "devops",
    title: "Monorepo",
    description:
      "공통 UI·유틸 패키지를 분리한 Monorepo 구조에서 작업하며 재사용성을 높였습니다.",
  },
  {
    id: 28,
    category: "devops",
    title: "WordPress",
    description:
      "테마 커스터마이징과 플러그인 설정을 통해 CMS 기반 웹사이트를 구축한 경험이 있습니다.",
  },
  {
    id: 29,
    category: "devops",
    title: "Notion",
    description:
      "요구사항 정리, 회의록, 작업 이력을 문서화하여 팀 협업에 활용했습니다.",
  },
  {
    id: 30,
    category: "devops",
    title: "Trello",
    description:
      "보드·카드를 활용해 작업 우선순위와 일정 관리를 했습니다.",
  },
  {
    id: 31,
    category: "devops",
    title: "IntelliJ IDEA",
    description:
      "대규모 프로젝트 탐색, 리팩터링, 디버깅에 최적화된 IDE 환경에서 작업했습니다.",
  },

  // ===== 디자인 도구 =====
  {
    id: 32,
    category: "design",
    title: "Figma",
    description:
      "디자인 시스템과 컴포넌트 구조를 이해하고, 시안 기반으로 화면을 구현했습니다.",
  },
  {
    id: 33,
    category: "design",
    title: "Adobe Photoshop",
    description:
      "이미지 편집, 리터칭, 배너·썸네일 등 웹용 그래픽을 제작했습니다.",
  },
  {
    id: 34,
    category: "design",
    title: "Adobe XD",
    description:
      "와이어프레임과 UI 시안을 확인하고, 프로토타입 흐름을 기반으로 퍼블리싱했습니다.",
  },
];

// ============================
// 컴포넌트
// ============================
export function CoreSkills() {
  const [activeFilter, setActiveFilter] = useState<SkillCategoryKey | "all">(
    "all",
  );
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredSkills = useMemo(() => {
    if (activeFilter === "all") return SKILLS;
    return SKILLS.filter((s) => s.category === activeFilter);
  }, [activeFilter]);

  return (
    <>
      <section
        id="section-skills"
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
                  transition-all cursor-pointer
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
                      transition-all cursor-pointer
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
              const catMeta =
                SKILL_CATEGORIES[activeFilter as SkillCategoryKey];
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
      cursor-pointer
    "
            >
              <span>전체 기술 스택 보기</span>

              {/* Lucide 아이콘으로 교체 */}
              <ArrowUpRight
                size={16}
                strokeWidth={2}
                className="
        text-gray-700 dark:text-gray-200
        transition-transform duration-200
      "
              />
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
                  cursor-pointer
                  transition-all duration-150
                "
              >
                <X size={16} strokeWidth={2} />
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
