"use client";

import React, { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/app/lib/utils";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";

/* =========================
 * 타입 정의
 * ========================= */

interface CarouselProps {
  items: React.ReactNode[];
}

type Card = {
  src: string;
  title: string;
  category: string;
  description?: string;
  content: React.ReactNode;
};

/* =========================
 * 섹션 헤더 (형광펜 느낌)
 * ========================= */

function SectionHeader({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-8 mb-3">
      <span
        className="
          inline-block rounded-[6px]
          px-2.5 py-1
          text-[11px] font-semibold tracking-[0.16em]
          text-sky-800
          bg-sky-50/90
          dark:text-cyan-100
          dark:bg-cyan-900/40
        "
      >
        {children}
      </span>
    </div>
  );
}

/* =========================
 * 링크 Pill (공통 버튼 스타일)
 * ========================= */

function LinkPill({
                    href,
                    children,
                  }: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center
        rounded-full
        px-3 py-1
        text-[11px] font-medium
        text-neutral-700 dark:text-neutral-100
        bg-neutral-100 dark:bg-white/5
        hover:bg-neutral-200 dark:hover:bg-white/10
        transition-all duration-200
      "
    >
      {children}
    </a>
  );
}

/* =========================
 * 카드 데이터
 * ========================= */

const cards: Card[] = [
  {
    src: "/tourmin.png",
    title: "TourMin Admin ERP",
    category: "Admin · ERP",
    description:
      "여행사 업무 전반(예약·입금·정산·근태)을 한 화면에서 관리할 수 있는 Admin·ERP UI를 설계하고 퍼블리싱했습니다.",
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
        {/* 메타 */}
        <div className="border-y border-neutral-200 py-3 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
          <p>
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Client
            </span>
            TourMin (사내 프로젝트)
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Period
            </span>
            2025.10 – 진행 중
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Type
            </span>
            Admin · ERP · Internal Tool
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Role
            </span>
            Frontend · Web Publishing
          </p>

          {/* 링크 pill (예정 자리 확보용) */}
          <div className="mt-3 flex flex-wrap gap-2">
            <span
              className="
                inline-flex items-center
                rounded-full
                px-3 py-1
                text-[11px] font-medium
                text-neutral-500 dark:text-neutral-400
                bg-neutral-100 dark:bg-white/5
                cursor-default
              "
            >
              Admin 데모 (예정)
            </span>
            <span
              className="
                inline-flex items-center
                rounded-full
                px-3 py-1
                text-[11px] font-medium
                text-neutral-500 dark:text-neutral-400
                bg-neutral-100 dark:bg-white/5
                cursor-default
              "
            >
              Notion 문서 (예정)
            </span>
          </div>
        </div>

        {/* 개요 */}
        <section>
          <SectionHeader>프로젝트 개요</SectionHeader>
          <p>
            여행사 내부에서 사용되는 예약·입금·정산·근태 관리 화면을 하나의
            Admin ERP로 통합한 프로젝트입니다.{" "}
            <span className="font-semibold">
              “담당자가 하루 종일 띄워 놓고 써도 피로하지 않은 UI”
            </span>
            를 목표로 리스트, 상세, 모달, 통계 카드 구조를 정리했습니다.
          </p>
        </section>

        {/* 주요 작업 */}
        <section>
          <SectionHeader>주요 작업</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 예약/입금/정산 상태를 한눈에 볼 수 있는 태그·컬러 시스템 정의</li>
            <li>· FullCalendar 기반 근무·일정 캘린더 UI 커스터마이징</li>
            <li>· React-Table + Radix UI 조합으로 데이터 테이블 컴포넌트 구축</li>
            <li>· Tailwind Design Token을 활용한 공통 버튼/폼/배지 스타일 작업</li>
          </ul>
        </section>

        {/* 팀 구성 */}
        <section>
          <SectionHeader>팀 구성</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 기획 1명, 디자이너 1명, 프론트엔드 1명</li>
            <li>· 퍼블리셔 겸 FE로, 디자인·기획 의도를 컴포넌트 구조에 녹이는 역할</li>
          </ul>
        </section>

        {/* 핵심 성과 */}
        <section>
          <SectionHeader>핵심 성과</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 출퇴근/휴가/스케줄 정보를 한 대시보드에서 확인 가능하도록 UX 재구성</li>
            <li>· 업무 담당자 기준으로 “필터 → 정렬 → 엑셀 내보내기” 흐름을 최적화</li>
            <li>· Admin 전반에 재사용 가능한 UI 컴포넌트/토큰 체계를 구축</li>
          </ul>
        </section>

        {/* 사용 기술 */}
        <section>
          <SectionHeader>사용 기술</SectionHeader>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              "TypeScript",
              "React",
              "Next.js",
              "Tailwind CSS",
              "Radix UI",
              "React Table",
              "Zustand",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    src: "/carmore1.png",
    title: "중고차·렌트카 랜딩페이지",
    category: "Landing · Marketing",
    description:
      "차량 검색·상담 문의까지 이어지는 흐름을 중심으로 설계한 중고차·렌트카 랜딩 페이지입니다.",
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
        {/* 메타 */}
        <div className="border-y border-neutral-200 py-3 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
          <p>
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Client
            </span>
            개인 사이드 프로젝트
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Period
            </span>
            2025.03 – 2025.04
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Type
            </span>
            Landing · Responsive · Marketing
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Role
            </span>
            기획 · 디자인 · 퍼블리싱
          </p>

          {/* 링크 pill */}
          <div className="mt-3 flex flex-wrap gap-2">
            <LinkPill href="https://carmore.netlify.app">Website</LinkPill>
            <LinkPill href="https://github.com/yujinnn2/Carmore">Github</LinkPill>
            <LinkPill href="https://www.figma.com/design/9BmQWx02HVXZIP1GCveXkF/Carmore_Portfolio?node-id=0-1&t=Dj2jNYuwokjgc9bQ-1">
              Figma
            </LinkPill>
          </div>
        </div>

        {/* 개요 */}
        <section>
          <SectionHeader>프로젝트 개요</SectionHeader>
          <p>
            중고차/렌트카 상품은 정보량이 많고 조건이 복잡합니다. 따라서{" "}
            <span className="font-semibold">
              “사용자가 고민하는 지점을 최소화하는 검색·상담 플로우”
            </span>
            를 목표로, 차량 카드·필터·상담 폼까지 한 흐름으로 이어지는 랜딩
            페이지를 구성했습니다.
          </p>
        </section>

        {/* 주요 작업 */}
        <section>
          <SectionHeader>주요 작업</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 차량 리스트/상세 요약 정보를 카드형 UI로 정리</li>
            <li>· 예산, 차종, 연식, 주행거리 등 주요 필터를 상단 한 줄로 배치</li>
            <li>· 상담 CTA 버튼을 스크롤 위치에 따라 고정해 전환 동선 축소</li>
            <li>· 모바일 기준으로 한 손 조작이 가능한 버튼 크기 및 간격 설정</li>
          </ul>
        </section>

        {/* 팀 구성 */}
        <section>
          <SectionHeader>팀 구성</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 개인 작업 (기획 · 디자인 레퍼런스 수집 · 퍼블리싱까지 수행)</li>
          </ul>
        </section>

        {/* 핵심 성과 */}
        <section>
          <SectionHeader>핵심 성과</SectionHeader>
          <ul className="space-y-1.5">
            <li>· “검색 → 리스트 → 상담 요청”까지 3단계 이내로 동선 정리</li>
            <li>· 다양한 차량 정보를 통일된 카드 레이아웃으로 가독성 향상</li>
            <li>· 랜딩 구성 경험을 통해 이후 TourMin 랜딩/마케팅 화면에도 응용</li>
          </ul>
        </section>

        {/* 사용 기술 */}
        <section>
          <SectionHeader>사용 기술</SectionHeader>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "Responsive Web",
              "GSAP(스크롤 모션)",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    src: "/bpmarket.png",
    title: "부평종합시장 웹 페이지 리뉴얼",
    category: "Website · Renewal",
    description:
      "시장 상인과 방문객 모두가 정보를 쉽게 찾을 수 있도록 정보 구조와 UI를 재설계한 리뉴얼 프로젝트입니다.",
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
        {/* 메타 정보 */}
        <div className="border-y border-neutral-200 py-3 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
          <p>
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Client
            </span>
            부평종합시장
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Period
            </span>
            2025.05 – 2025.07
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Type
            </span>
            Website · Responsive · Renewal
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Role
            </span>
            Web Publishing · UI 구현
          </p>

          {/* 링크 pill */}
          <div className="mt-3 flex flex-wrap gap-2">
            <LinkPill href="https://bupyeongmarket.netlify.app/">
              Website
            </LinkPill>
            <LinkPill href="https://github.com/yujinnn2/Bupyeong_market">
              Github
            </LinkPill>
            <LinkPill href="https://www.figma.com/design/8KRz3xBKJsv8dRlbHLVDmh/%ED%98%91%EC%97%85%EA%B3%BC%EC%A0%9C?node-id=0-1&t=wdbMp5GAAg16xXSa-1">
              Figma
            </LinkPill>
          </div>
        </div>

        {/* 프로젝트 개요 */}
        <section>
          <SectionHeader>프로젝트 개요</SectionHeader>
          <p>
            노후된 부평종합시장 홈페이지를{" "}
            <span className="font-semibold">
              “트렌디하게 리뉴얼 해 누구나 쉽게 사용할 수 있는 사이트”
            </span>
            로 만드는 것이 목표였습니다. 메인 히어로, 이벤트, 상점 리스트,
            오시는 길 등 핵심 섹션의 우선순위를 다시 정리하고, 모바일 기준으로
            정보가 자연스럽게 내려가도록 레이아웃을 설계했습니다.
          </p>
        </section>

        {/* 주요 작업 */}
        <section>
          <SectionHeader>주요 작업</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 메인/상점/이벤트/공지 영역 전체 레이아웃 재구성 및 반응형 구현</li>
            <li>· 배너, 카드, 리스트 등 공통 컴포넌트 단위로 HTML · CSS 구조 정리</li>
            <li>· 시장 분위기를 살리는 컬러 팔레트와 타이포그래피 가이드 적용</li>
            <li>· 모바일에서 한 손으로 조작 가능한 버튼/탭 크기 및 간격 조정</li>
          </ul>
        </section>

        {/* 팀 구성 */}
        <section>
          <SectionHeader>팀 구성</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 기획 1명, 디자이너 1명, 프론트엔드 1명</li>
            <li>· 퍼블리싱 담당으로 디자인 시안과 실제 화면 사이의 브릿지 역할 수행</li>
          </ul>
        </section>

        {/* 핵심 성과 */}
        <section>
          <SectionHeader>핵심 성과</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 메인에서 행사·이벤트·오시는 길까지의 클릭 수를 최소 단계로 축소</li>
            <li>· 상점 상세 정보(위치, 전화번호, 대표 메뉴)를 카드형 UI로 통일</li>
            <li>· 텍스트 대비, 버튼 크기 등 기본 접근성 기준을 고려한 UI 설계</li>
          </ul>
        </section>

        {/* 사용 기술 */}
        <section>
          <SectionHeader>사용 기술</SectionHeader>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              "HTML5",
              "CSS3",
              "JavaScript",
              "jQuery",
              "Responsive Web",
              "Figma 협업",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    src: "/liv_on.png",
    title: "가구·인테리어 사이트 기획 및 구현",
    category: "Website · UX/UI",
    description:
      "가상 브랜드를 설정하고 상품 리스트·상세·컬렉션 페이지를 설계한 인테리어 웹사이트입니다.",
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
        {/* 메타 */}
        <div className="border-y border-neutral-200 py-3 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
          <p>
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Client
            </span>
            개인 프로젝트 (가상 브랜드 LIVON)
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Period
            </span>
            2025.05 – 2025.06
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Type
            </span>
            Website · E-commerce 스타일
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Role
            </span>
            기획 · UI 설계 · 퍼블리싱
          </p>

          {/* 링크 pill */}
          <div className="mt-3 flex flex-wrap gap-2">
            <LinkPill href="https://liveon1018.netlify.app">Website</LinkPill>
            <LinkPill href="https://github.com/yujinnn2/Liv-ON">Github</LinkPill>
            <LinkPill href="https://www.figma.com/design/eR9iJ2wgtY0Nvv6b4VWatf/Liv-ON_Portfolio?node-id=0-1&t=DhRIqltyz7KiOkpU-1">
              Figma
            </LinkPill>
          </div>
        </div>

        {/* 개요 */}
        <section>
          <SectionHeader>프로젝트 개요</SectionHeader>
          <p>
            실제 가구 브랜드를 사용하는 느낌으로,{" "}
            <span className="font-semibold">
              컬렉션 중심의 감도 있는 쇼핑 경험
            </span>
            을 목표로 한 웹사이트입니다. 홈·카테고리·상품 상세·룩북 스타일
            섹션 등을 설계하며, 상품 정보와 이미지 비율을 맞추는 데 신경 썼습니다.
          </p>
        </section>

        {/* 주요 작업 */}
        <section>
          <SectionHeader>주요 작업</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 컬렉션/카테고리/상품 상세 3단 구조로 정보 설계</li>
            <li>· 카드·그리드·모듈형 배너를 재사용 가능한 컴포넌트로 구현</li>
            <li>· 여백과 타이포그래피를 활용한 미니멀한 레이아웃 구현</li>
            <li>· 반응형 기준으로 2단/3단/1단 레이아웃 자연스럽게 전환</li>
          </ul>
        </section>

        {/* 팀 구성 */}
        <section>
          <SectionHeader>팀 구성</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 개인 작업 (기획부터 UI 구현까지 단독 진행)</li>
          </ul>
        </section>

        {/* 핵심 성과 */}
        <section>
          <SectionHeader>핵심 성과</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 쇼핑몰 스타일 레이아웃과 컴포넌트 구조 설계 경험 확보</li>
            <li>· 브랜드 톤앤매너를 UI에 녹여내는 연습을 통해 디자인 감도 향상</li>
            <li>· 이후 포트폴리오 사이트의 레이아웃 구성에도 직접적인 참고가 됨</li>
          </ul>
        </section>

        {/* 사용 기술 */}
        <section>
          <SectionHeader>사용 기술</SectionHeader>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {[
              "HTML5",
              "SCSS",
              "JavaScript",
              "Responsive Web",
              "Figma 와이어프레임",
            ].map((t) => (
              <span
                key={t}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    src: "/toss.png",
    title: "Toss 홈페이지 클론 퍼블리싱",
    category: "Clone · Publishing",
    description:
      "Toss 메인 페이지를 클론하며, 토스 스타일의 여백·타이포·모션을 퍼블리싱 관점에서 분석·구현했습니다.",
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
        {/* 메타 */}
        <div className="border-y border-neutral-200 py-3 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
          <p>
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Client
            </span>
            개인 학습용 클론 프로젝트
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Period
            </span>
            2025.08 – 2025.08
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Type
            </span>
            Landing · Clone · Study
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Role
            </span>
            Web Publishing · Interaction 구현
          </p>

          {/* 링크 pill */}
          <div className="mt-3 flex flex-wrap gap-2">
            <LinkPill href="https://yujintoss.netlify.app">Website</LinkPill>
            <LinkPill href="https://github.com/yujinnn2/Carmore">Github</LinkPill>
          </div>
        </div>

        {/* 개요 */}
        <section>
          <SectionHeader>프로젝트 개요</SectionHeader>
          <p>
            토스 메인 페이지의{" "}
            <span className="font-semibold">
              “담백하지만 임팩트 있는 레이아웃·타이포·모션”
            </span>
            을 클론하면서, 실제 대기업 서비스가 어떻게 UI를 구성하는지
            분석했습니다. 스크롤에 따라 자연스럽게 전환되는 섹션 구조와
            히어로/CTA 배치를 구현했습니다.
          </p>
        </section>

        {/* 주요 작업 */}
        <section>
          <SectionHeader>주요 작업</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 토스 메인 섹션 구조 분석 및 시맨틱 마크업으로 재구성</li>
            <li>· 큰 타이포와 넓은 여백을 중심으로 한 레이아웃 퍼블리싱</li>
            <li>· 스크롤 기반 페이드/슬라이드 모션을 GSAP 없이 CSS/JS로 구현</li>
            <li>· 다크 모드 대응을 염두에 둔 컬러 토큰 설계 연습</li>
          </ul>
        </section>

        {/* 팀 구성 */}
        <section>
          <SectionHeader>팀 구성</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 개인 작업, 디자인 레퍼런스는 Toss 공식 사이트 기반</li>
          </ul>
        </section>

        {/* 핵심 성과 */}
        <section>
          <SectionHeader>핵심 성과</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 토스 특유의 타이포/여백/컬러 사용 방식을 퍼블리싱 관점에서 이해</li>
            <li>· 섹션 단위로 재사용 가능한 레이아웃 패턴 정리</li>
            <li>· 포트폴리오 사이트 메인 히어로 영역 설계에 직접적인 인사이트 제공</li>
          </ul>
        </section>

        {/* 사용 기술 */}
        <section>
          <SectionHeader>사용 기술</SectionHeader>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["HTML5", "CSS3", "JavaScript", "Responsive Web"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    ),
  },
  {
    src: "/apple.png",
    title: "Apple 홈페이지 클론 퍼블리싱",
    category: "Clone · Publishing",
    description:
      "애플 메인 페이지의 대형 비주얼·제품 강조 레이아웃을 분석하고, 반응형으로 재구성한 클론 퍼블리싱 작업입니다.",
    content: (
      <div className="space-y-6 text-sm leading-relaxed text-neutral-800 dark:text-neutral-100">
        {/* 메타 */}
        <div className="border-y border-neutral-200 py-3 text-xs text-neutral-600 dark:border-neutral-700 dark:text-neutral-300">
          <p>
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Client
            </span>
            개인 학습용 클론 프로젝트
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Period
            </span>
            2025.08 – 2025.08
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Type
            </span>
            Landing · Clone · Visual
          </p>
          <p className="mt-1">
            <span className="inline-block w-24 font-semibold text-neutral-900 dark:text-white">
              Role
            </span>
            Web Publishing · Responsive Layout
          </p>

          {/* 링크 pill */}
          <div className="mt-3 flex flex-wrap gap-2">
            <LinkPill href="https://yujinappple.netlify.app">Website</LinkPill>
          </div>
        </div>

        {/* 개요 */}
        <section>
          <SectionHeader>프로젝트 개요</SectionHeader>
          <p>
            Apple 메인 페이지의 큰 비주얼과 간결한 카피 구조를{" "}
            <span className="font-semibold">
              시멘틱 마크업과 반응형 레이아웃으로 그대로 옮기는 것
            </span>
            을 목표로 진행한 클론 작업입니다. 섹션별로 이미지 비율, 텍스트
            계층, 여백을 세밀하게 맞추는 데 집중했습니다.
          </p>
        </section>

        {/* 주요 작업 */}
        <section>
          <SectionHeader>주요 작업</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 메인 히어로·제품 섹션의 레이아웃을 Grid/Flex 조합으로 구현</li>
            <li>· 데스크톱/태블릿/모바일 브레이크포인트별 이미지 비율 조정</li>
            <li>· Retina 이미지, 반응형 폰트 사이즈 등 디테일 퍼블리싱 연습</li>
            <li>· 다크·라이트 테마에 자연스럽게 어울리는 배경/텍스트 대비 설계</li>
          </ul>
        </section>

        {/* 팀 구성 */}
        <section>
          <SectionHeader>팀 구성</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 개인 작업, Apple 공식 사이트 레이아웃을 참고하여 구조 분석</li>
          </ul>
        </section>

        {/* 핵심 성과 */}
        <section>
          <SectionHeader>핵심 성과</SectionHeader>
          <ul className="space-y-1.5">
            <li>· 대형 비주얼 중심 랜딩 페이지를 구조적으로 쪼개서 이해하는 경험</li>
            <li>· 이미지/텍스트/여백 간 균형을 맞추는 시각적인 감각 향상</li>
            <li>· 이후 포트폴리오 프로젝트 카드/히어로 섹션 설계에 directly 활용</li>
          </ul>
        </section>

        {/* 사용 기술 */}
        <section>
          <SectionHeader>사용 기술</SectionHeader>
          <div className="flex flex-wrap gap-2 text-[11px]">
            {["HTML5", "CSS3", "JavaScript", "Responsive Web"].map((t) => (
              <span
                key={t}
                className="rounded-full border border-neutral-200 bg-neutral-50 px-2 py-1 text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    ),
  },
];

/* =========================
 * Carousel (카드 위, 세로 정중앙 양 끝)
 * ========================= */

export const Carousel = ({ items }: CarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const [step, setStep] = useState<number>(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  useEffect(() => {
    const measure = () => {
      if (!innerRef.current) return;
      const children = innerRef.current.children;
      if (children.length < 2) return;

      const first = children[0] as HTMLElement;
      const second = children[1] as HTMLElement;

      const firstRect = first.getBoundingClientRect();
      const secondRect = second.getBoundingClientRect();

      const distance = secondRect.left - firstRect.left;
      if (distance > 0) {
        setStep(distance);
      }
    };

    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const updateScrollState = () => {
    const el = scrollRef.current;
    if (!el) return;
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  useEffect(() => {
    updateScrollState();
  }, [step, items.length]);

  const handleScroll = () => {
    updateScrollState();
  };

  const handlePrev = () => {
    const el = scrollRef.current;
    if (!el || step <= 0) return;
    el.scrollBy({ left: -step, behavior: "smooth" });
  };

  const handleNext = () => {
    const el = scrollRef.current;
    if (!el || step <= 0) return;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <div className="relative w-full">
      {/* 카드 리스트 */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
      >
        {/* 오른쪽 페이드 */}
        <div
          className={cn(
            "pointer-events-none absolute inset-y-0 right-0 h-full w-[12%] bg-gradient-to-l",
            "from-gray-50 via-gray-50/60 to-transparent",
            "dark:from-[#050816] dark:via-[#050816]/60 dark:to-transparent",
            "z-10",
          )}
        />

        <div
          ref={innerRef}
          className={cn(
            "flex flex-row justify-start gap-6 pl-4 pr-6",
            "mx-auto max-w-7xl",
          )}
        >
          {items.map((item, index) => (
            <motion.div
              key={"card" + index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * index,
                ease: "easeOut",
              }}
              className="rounded-3xl"
            >
              {item}
            </motion.div>
          ))}
        </div>
      </div>

      {/* 좌우 버튼 - 카드 세로 정중앙, 양 끝 (ON CARD) */}
      <div
        className="
          pointer-events-none
          absolute inset-y-0 left-0 right-0
          z-20
        "
      >
        <div
          className="
            mx-auto max-w-7xl
            flex h-full items-center justify-between
            px-4 md:px-8
          "
        >
          <button
            type="button"
            onClick={handlePrev}
            disabled={!canScrollLeft}
            className="
              pointer-events-auto
              flex h-12 w-12 items-center justify-center
              rounded-full bg-gray-100 text-gray-500 shadow-sm
              dark:bg-[#111827] dark:text-gray-300
              disabled:opacity-40 disabled:cursor-not-allowed
              transition-all duration-200
              hover:bg-gray-200 dark:hover:bg-[#1a2232]
              cursor-pointer
            "
          >
            <ChevronLeft className="h-6 w-6" strokeWidth={2.2} />
          </button>

          <button
            type="button"
            onClick={handleNext}
            disabled={!canScrollRight}
            className="
              pointer-events-auto
              flex h-12 w-12 items-center justify-center
              rounded-full bg-gray-100 text-gray-500 shadow-sm
              dark:bg-[#111827] dark:text-gray-300
              disabled:opacity-40 disabled:cursor-not-allowed
              transition-all duration-200
              hover:bg-gray-200 dark:hover:bg-[#1a2232]
              cursor-pointer
            "
          >
            <ChevronRight className="h-6 w-6" strokeWidth={2.2} />
          </button>
        </div>
      </div>
    </div>
  );
};

/* =========================
 * 프로젝트 카드
 * ========================= */

export const ProjectCard = ({
                              card,
                              index,
                              layout = false,
                            }: {
  card: Card;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  useOutsideClick(containerRef, () => {
    if (open) handleClose();
  });

  useEffect(() => {
    if (!open) {
      document.body.style.overflow = "auto";
      return;
    }
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* 모달 */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="
                relative z-[60]
                mx-auto my-6
                w-[92vw] max-w-5xl
                max-h-[85vh]
                overflow-y-auto
                rounded-3xl
                bg-white font-sans shadow-xl
                p-4 pt-10
                md:my-10 md:p-10 md:pt-12
                md:w-[80vw] md:max-h-[80vh]
                dark:bg-[#020617]
              "
            >
              {/* 닫기 버튼 */}
              <button
                type="button"
                onClick={handleClose}
                className="
                  pointer-events-auto
                  absolute right-4 top-4 md:right-6 md:top-6
                  inline-flex h-9 w-9 items-center justify-center
                  rounded-full
                  bg-white/80
                  border border-black/5
                  shadow-[0_10px_30px_rgba(15,23,42,0.20)]
                  backdrop-blur-md
                  text-gray-700
                  hover:bg-white hover:shadow-[0_14px_40px_rgba(15,23,42,0.28)]
                  dark:bg-white/5 dark:border-white/15
                  dark:text-gray-200
                  dark:hover:bg-white/10
                  transition-all duration-200
                  cursor-pointer
                "
              >
                <X size={16} strokeWidth={2} />
              </button>

              <motion.p
                layoutId={layout ? `category-${card.title}` : undefined}
                className="text-sm font-medium text-blue-600 dark:text-blue-400"
              >
                {card.category}
              </motion.p>

              <motion.p
                layoutId={layout ? `title-${card.title}` : undefined}
                className="mt-3 text-2xl font-semibold text-neutral-800 md:text-4xl dark:text-white"
              >
                {card.title}
              </motion.p>

              <div className="py-8">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* 리스트 카드 */}
      <motion.button
        type="button"
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className={cn(
          "group relative flex h-[360px] w-[260px] flex-col overflow-hidden",
          "rounded-[18px] text-left shadow-[0_4px_16px_rgba(15,23,42,0.08)]",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-[6px] hover:shadow-[0_10px_30px_rgba(15,23,42,0.16)]",
          "md:h-[460px] md:w-[340px]",
          "bg-white dark:bg-[#030610]",
        )}
      >
        <div className="flex flex-1 flex-col bg-white px-6 pt-6 pb-4 dark:bg-[#030610]">
          <p className="text-[11px] font-medium text-neutral-500 dark:text-neutral-400">
            {card.category}
          </p>
          <p className="mt-2 text-[18px] font-semibold text-neutral-900 leading-snug dark:text-neutral-50">
            {card.title}
          </p>
          {card.description && (
            <p className="mt-2 text-[13px] leading-relaxed text-neutral-600 dark:text-neutral-400">
              {card.description}
            </p>
          )}
        </div>

        <div className="relative h-[280px] w-full overflow-hidden bg-neutral-100 dark:bg-[#050816]">
          <BlurImage
            src={card.src}
            alt={card.title}
            className="h-full w-full object-cover object-top transition duration-300"
          />
        </div>
      </motion.button>
    </>
  );
};

/* =========================
 * 섹션
 * ========================= */

export const Project = () => {
  const items = cards.map((card, index) => (
    <ProjectCard key={card.title} card={card} index={index} layout />
  ));

  return (
    <section
      id="section-project"
      className="py-28 bg-gray-50 dark:bg-[#050816] transition-colors duration-300"
    >
      <div className="mx-auto max-w-6xl">
        <div className="text-center">
          <p className="text-[13px] font-semibold text-blue-500">Projects</p>
          <h2 className="mt-3 text-[24px] sm:text-[26px] font-bold leading-tight text-gray-900 dark:text-white">
            사용하는 사람이 가장 적게 고민하도록
          </h2>
          <p className="mt-3 text-[13px] text-gray-500 dark:text-gray-400">
            사용 흐름을 먼저 이해하고, 누구나 편하게 사용할 수 있는 UI를
            설계합니다.
          </p>
        </div>

        <Carousel items={items} />
      </div>
    </section>
  );
};

/* =========================
 * BlurImage
 * ========================= */

type BlurImageProps = {
  src: string;
  alt?: string;
  className?: string;
};

export const BlurImage = ({ src, className, alt }: BlurImageProps) => {
  return (
    <img
      className={cn("h-full w-full transition duration-300", className)}
      src={src}
      loading="lazy"
      decoding="async"
      alt={alt ?? "Background image"}
    />
  );
};
