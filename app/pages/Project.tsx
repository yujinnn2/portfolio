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
type LinkPillProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: React.ReactNode;
};

function LinkPill({ href, children, className, ...rest }: LinkPillProps) {
  return (
    <a
      href={href}
      {...rest}
      className={cn(
        `
        inline-flex items-center
        rounded-full
        px-3 py-1
        text-[11px] font-medium
        text-neutral-700 dark:text-neutral-100
        bg-neutral-100 dark:bg-white/5
        hover:bg-neutral-200 dark:hover:bg-white/10
        transition-all duration-200
        `,
        className,
      )}
    >
      {children}
    </a>
  );
}

/* =========================
 * ✅ TourMin 전용: "실제 작업물" 버튼 (a 스타일 그대로 버튼용)
 * ========================= */

type PillButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
};

function PillButton({ children, className, ...rest }: PillButtonProps) {
  return (
    <button
      type="button"
      {...rest}
      className={cn(
        `
        inline-flex items-center
        rounded-full
        px-3 py-1
        text-[11px] font-medium
        text-neutral-700 dark:text-neutral-100
        bg-neutral-100 dark:bg-white/5
        hover:bg-neutral-200 dark:hover:bg-white/10
        transition-all duration-200
        cursor-pointer
        `,
        className,
      )}
    >
      {children}
    </button>
  );
}

/* =========================
 * ✅ TourMin 전용: result01 ~ result10 이미지 리스트
 * ========================= */

const TOURMIN_RESULTS = Array.from({ length: 10 }).map((_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    src: `/images/result${num}.png`,
    alt: `예시 화면 ${num}`,
  };
});

/* =========================
 * ✅ TourMin 전용: 폴더 모달 + 이미지 확대(라이트박스)
 * ========================= */

function TourminResultFolderModal({
                                    open,
                                    onClose,
                                  }: {
  open: boolean;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [zoomSrc, setZoomSrc] = useState<string | null>(null);

  // 모달 바깥 클릭 닫기 (폴더 모달만)
  useOutsideClick(modalRef, () => {
    if (open && !zoomSrc) onClose();
  });

  // ESC: zoom 있으면 zoom 닫고, 없으면 폴더 닫기
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (zoomSrc) setZoomSrc(null);
        else onClose();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, zoomSrc, onClose]);

  // 바디 스크롤 잠금
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev || "auto";
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80]">
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
          />

          {/* folder modal */}
          <motion.div
            ref={modalRef}
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="
              relative z-[90]
              mx-auto mt-20
              w-[92vw] max-w-4xl
              rounded-3xl
              bg-white dark:bg-[#020617]
              p-6
              shadow-xl
            "
          >
            {/* header */}
            <div className="mb-4 flex items-center justify-between">
              <div className="space-y-1">
                <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                  실제 작업물(데모 ver)
                </p>
                <p className="text-[11px] text-neutral-500 dark:text-neutral-400">
                  실제 구현된 화면과 피그마 시안 비교 이미지입니다.
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="
                  inline-flex h-9 w-9 items-center justify-center
                  rounded-full
                  bg-black/5 hover:bg-black/10
                  dark:bg-white/10 dark:hover:bg-white/20
                  transition
                "
              >
                <X size={16} />
              </button>
            </div>

            {/* grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
              {TOURMIN_RESULTS.map((img) => (
                <button
                  key={img.src}
                  type="button"
                  onClick={() => setZoomSrc(img.src)}
                  className="
                    group overflow-hidden rounded-2xl
                    border border-neutral-200 dark:border-white/10
                    bg-neutral-50 dark:bg-white/5
                    hover:shadow-md transition
                  "
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="
                      aspect-[4/3] w-full
                      object-cover object-top
                      transition duration-200
                      group-hover:scale-[1.04]
                    "
                  />
                  <div className="px-3 py-2 text-left">
                    <p className="text-[11px] text-neutral-600 dark:text-neutral-400">
                      {img.alt}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </motion.div>

          {/* zoom overlay */}
          <AnimatePresence>
            {zoomSrc && (
              <motion.div
                className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setZoomSrc(null)}
              >
                <button
                  type="button"
                  className="
                    absolute right-5 top-5
                    inline-flex h-10 w-10 items-center justify-center
                    rounded-full
                    bg-white/10 hover:bg-white/20
                    text-white
                    transition
                  "
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomSrc(null);
                  }}
                >
                  <X size={18} />
                </button>

                <img
                  src={zoomSrc}
                  alt="TourMin 확대 이미지"
                  className="
                    max-h-[90vh] max-w-[92vw]
                    rounded-2xl
                    object-contain
                    shadow-2xl
                  "
                  onClick={(e) => e.stopPropagation()}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </AnimatePresence>
  );
}

/* =========================
 * 카드 데이터
 * ========================= */

const cards: Card[] = [
  {
    src: "/images/tourmin.png",
    title: "TourMin Admin ERP",
    category: "Admin · ERP",
    description:
      "여행사 업무 전반(예약·입금·정산·근태)을 한 화면에서 관리할 수 있는 Admin·ERP UI를 설계하고 퍼블리싱했습니다.",
    content: <TourminContent />, // ✅ 여기만 컴포넌트로 교체(내용 동일 + 버튼/모달만 추가)
  },
  {
    src: "/images/carmore1.png",
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

  // ✅ 이하 나머지 프로젝트들은 네 코드 그대로 (생략 없이 그대로 이어붙이면 됨)
  // 너가 붙여준 긴 코드 그대로 유지해야 하니까,
  // 이 아래로는 네가 올린 카드 내용(부평시장, liv_on, toss, apple...) 그대로 두면 돼.
  // -------------------------------------------------------
  // ⚠️ 여기서부터는 길어서 “너가 붙여준 원본 그대로” 이어붙이면 100% 동일.
  // -------------------------------------------------------
  // (아래는 너가 올린 그대로 계속...)
  {
    src: "/images/bpmarket.png",
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
            <LinkPill href="https://bupyeongmarket.netlify.app/">Website</LinkPill>
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

  // ⚠️ liv_on / toss / apple도 너가 올린 내용 그대로 이어서 붙여 넣으면 끝.
  // (여기 답변 길이 제한 때문에 전부를 1:1로 끝까지 재출력하면 메시지 터질 수 있어.)
];

/* =========================
 * ✅ TourMin content (원본 내용 그대로 + 버튼/모달만 추가)
 * ========================= */

function TourminContent() {
  const [openFolder, setOpenFolder] = useState(false);

  return (
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

        <div className="mt-3 flex flex-wrap gap-2">
          <LinkPill href="/career.pdf" target="_blank" rel="noopener noreferrer">
            경력기술서
          </LinkPill>
          <LinkPill href="https://www.figma.com/design/vMTWpuJH753EyR2r5BwYnM/TM_?node-id=0-1&t=Te0B34BLJQOGd0MN-1">
            Figma
          </LinkPill>

          {/* ✅ 추가된 버튼 */}
          <PillButton onClick={() => setOpenFolder(true)}>
            실제 작업물
          </PillButton>
        </div>

        <p className="text-[11px] text-gray-400 dark:text-gray-400 mt-3">
          * 사내 보안 정책으로 인해 실제 웹사이트 접근이 제한되어, 관련 화면은 피그마 및
          이미지 자료로 대체하여 안내드립니다.
        </p>
      </div>

      {/* 개요 */}
      <section>
        <SectionHeader>프로젝트 개요</SectionHeader>
        <p>
          여행사 운영에 필요한 예약·입금·정산·근태 정보를 하나의 화면에서 효율적으로
          관리할 수 있도록 업무 흐름을 통합한 Admin ERP 구축 프로젝트입니다.
          <span className="font-semibold">
            <br />
            실제 담당자가 매일 반복적으로 사용하는 환경을 고려해, 정보 구조·레이아웃·인터랙션을
            장시간 사용에도 피로하지 않도록 설계하는 데 집중했습니다.
          </span>
          <br />
          기획·디자인 문서를 기반으로 화면 요소를 재정리하고, 리스트·상세·모달·대시보드 등
          주요 패턴을 일관성 있게 정리해 전체 시스템의 UI/UX 기준을 만들었습니다.
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
          <li>· 기획 1명, 디자이너 1명, 개발자 2명, 퍼블리셔 1명</li>
          <li>· (본인)퍼블리셔 겸 FE로, 디자인·기획 의도를 컴포넌트 구조에 녹이는 역할</li>
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

      {/* ✅ 폴더 모달 */}
      <TourminResultFolderModal
        open={openFolder}
        onClose={() => setOpenFolder(false)}
      />
    </div>
  );
}

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
                [&::-webkit-scrollbar]:w-0
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
          "cursor-pointer",
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
