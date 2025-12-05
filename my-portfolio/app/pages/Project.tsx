"use client";

import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import {
  IconArrowNarrowLeft,
  IconArrowNarrowRight,
  IconX,
} from "@tabler/icons-react";
import { cn } from "@/app/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/app/hooks/useOutsideClick";

/* =========================
 * 타입 정의
 * ========================= */

interface CarouselProps {
  items: React.ReactNode[];
  initialScroll?: number;
}

type Card = {
  src: string;
  title: string;
  category: string;
  content: React.ReactNode;
  description?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

/* =========================
 * 카드 데이터
 * ========================= */

const cards: Card[] = [
  {
    // 지금 구조 기준: public/car_more.png
    src: "/car_more.png",
    title: "유진잉",
    category: "Reservation · Settlement",
    description: "예약, 입금, 정산까지 이어지는 여행사 업무 플로우를 설계했습니다.",
    content: (
      <div className="space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
        <p>
          여행 상품 예약부터 입금 확인, 정산까지 이어지는 플로우를 하나의 모듈로
          설계했습니다.
        </p>
        <ul className="list-disc space-y-1 pl-4">
          <li>예약 상태별 태그/컬러 시스템</li>
          <li>정산 대기/완료 필터링 테이블</li>
        </ul>
      </div>
    ),
  },
  {
    src: "/bpmarket.png",
    title: "TourMin Admin ERP",
    category: "Admin · ERP",
    description: "여행사 업무용 ERP로 근태·일정·예약·정산을 한 화면에서 관리해요.",
    content: (
      <div className="space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
        <p>
          여행사 전용 ERP 어드민으로, 근태 · 일정 · 예약 · 정산 기능을 한 화면에서
          관리할 수 있도록 설계한 프로젝트입니다.
        </p>
        <ul className="list-disc space-y-1 pl-4">
          <li>FullCalendar 기반 일정/근무 스케줄 UI 커스터마이징</li>
          <li>React-Table + Radix UI를 활용한 데이터 테이블 시스템</li>
          <li>Tailwind Design Token으로 통일된 디자인 시스템 구축</li>
        </ul>
      </div>
    ),
  },
  {
    src: "/images/project-landing.png",
    title: "TourMin Landing / Marketing",
    category: "Landing · Web",
    description: "B2B 고객에게 서비스 가치를 전달하는 랜딩·마케팅용 웹 화면입니다.",
    content: (
      <div className="space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
        <p>
          여행사 B2B 고객을 타겟으로 한 랜딩 페이지로, 제품의 핵심 가치와 기능을
          쉽게 이해할 수 있도록 인터랙션과 레이아웃을 구성했습니다.
        </p>
        <ul className="list-disc space-y-1 pl-4">
          <li>스크롤 기반 인터랙션 및 섹션 전환 모션 설계</li>
          <li>반응형 레이아웃 및 다크 모드 지원</li>
        </ul>
      </div>
    ),
  },
  {
    src: "/images/project-dashboard.png",
    title: "근태·일정 대시보드",
    category: "Dashboard · UI",
    description: "출퇴근, 휴가, 부서별 스케줄을 한눈에 보는 관리자용 대시보드입니다.",
    content: (
      <div className="space-y-4 text-sm leading-relaxed text-neutral-700 dark:text-neutral-200">
        <p>
          출퇴근 현황, 휴가 사용량, 부서별 스케줄을 한눈에 볼 수 있는
          대시보드형 화면 구성입니다.
        </p>
        <ul className="list-disc space-y-1 pl-4">
          <li>실시간 API 연동을 고려한 카드형 위젯 레이아웃</li>
          <li>상태별 컬러 토큰(지각, 조퇴, 휴가 등) 설계</li>
        </ul>
      </div>
    ),
  },
];

/* =========================
 * Carousel
 * ========================= */

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      const cardWidth = isMobile() ? 260 : 320;
      const gap = 24;
      const scrollPosition = (cardWidth + gap) * (index + 1);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: "smooth",
      });
      setCurrentIndex(index);
    }
  };

  const isMobile = () => {
    return typeof window !== "undefined" && window.innerWidth < 768;
  };

  return (
    <CarouselContext.Provider
      value={{ onCardClose: handleCardClose, currentIndex }}
    >
      <div className="relative w-full">
        <div
          className="flex w-full overflow-x-scroll overscroll-x-auto scroll-smooth py-10 [scrollbar-width:none] md:py-20"
          ref={carouselRef}
          onScroll={checkScrollability}
        >
          {/* 오른쪽 페이드 */}
          <div
            className={cn(
              "pointer-events-none absolute inset-y-0 right-0 h-full w-[8%] bg-gradient-to-l",
              "from-gray-50 via-gray-50/60 to-transparent",
              "dark:from-[#050816] dark:via-[#050816]/60 dark:to-transparent",
              "z-10",
            )}
          />

          <div
            className={cn(
              "flex flex-row justify-start gap-6 pl-4",
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
                  delay: 0.2 * index,
                  ease: "easeOut",
                }}
                className="rounded-3xl last:pr-[10%] md:last:pr-[30%]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        {/* 좌우 버튼 */}
        <div className="mr-10 flex justify-end gap-2">
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 shadow-sm dark:bg-[#111827] dark:text-gray-300 disabled:opacity-40"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
          >
            <IconArrowNarrowLeft className="h-6 w-6" />
          </button>
          <button
            className="relative z-40 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-gray-500 shadow-sm dark:bg-[#111827] dark:text-gray-300 disabled:opacity-40"
            onClick={scrollRight}
            disabled={!canScrollRight}
          >
            <IconArrowNarrowRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

/* =========================
 * 카드 하나
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
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") handleClose();
    }
    document.body.style.overflow = open ? "hidden" : "auto";
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  // 바깥 클릭 시 닫기
  useOutsideClick(containerRef, () => {
    if (open) handleClose();
  });

  const isFullImageCard = card.title === "유진잉"; // 이 카드만 전체 이미지 카드

  return (
    <>
      {/* 모달 */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            {/* 딤 */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/70 backdrop-blur-md"
            />

            {/* 모달 컨텐츠 */}
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              layoutId={layout ? `card-${card.title}` : undefined}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-3xl bg-white p-4 font-sans shadow-xl md:p-10 dark:bg-[#020617]"
            >
              <button
                className="sticky top-4 right-0 ml-auto flex h-8 w-8 items-center justify-center rounded-full bg-black/80 dark:bg-white/90"
                onClick={handleClose}
              >
                <IconX className="h-5 w-5 text-white dark:text-black" />
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
        layoutId={layout ? `card-${card.title}` : undefined}
        onClick={handleOpen}
        className={cn(
          "group relative flex h-[360px] w-[260px] flex-col overflow-hidden",
          "rounded-[18px] text-left shadow-[0_4px_16px_rgba(15,23,42,0.08)]",
          "transition-all duration-300 ease-out",
          "hover:-translate-y-[6px] hover:shadow-[0_10px_30px_rgba(15,23,42,0.16)]",
          "md:h-[460px] md:w-[340px]",
          !isFullImageCard && "bg-white dark:bg-[#0B0D10]",
        )}
      >
        {isFullImageCard ? (
          /* ✅ 유진잉: 전체 이미지 + 텍스트 오버레이 (텍스트 상단 정렬) */
          <div className="relative h-full w-full">
            <BlurImage
              src={card.src}
              alt={card.title}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col justify-start p-5 text-black">
              {/* 카테고리 */}
              <p className="text-[11px] font-medium opacity-80">
                {card.category}
              </p>

              {/* 제목 + 설명 */}
              <div className="mt-3">
                <p className="text-[20px] font-semibold leading-snug">
                  {card.title}
                </p>
                {card.description && (
                  <p className="mt-2 text-[13px] leading-relaxed opacity-90">
                    {card.description}
                  </p>
                )}
              </div>
            </div>
          </div>
        ) : (
          /* ✅ 나머지 카드: 상단 텍스트, 하단 이미지 (Apple 스타일) */
          <>
            <div className="flex flex-1 flex-col bg-white px-6 pt-6 pb-4 dark:bg-[#0B0D10]">
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
                className="
    h-full w-full
    object-cover object-top
    transition duration-300
  "
              />
            </div>
          </>
        )}
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
          <p className="text-[15px] font-semibold text-blue-500">Projects</p>
          <h2 className="mt-3 text-[26px] sm:text-[32px] font-bold leading-tight text-gray-900 dark:text-white">
            실제 서비스에 가까운 작업물
          </h2>
          <p className="mt-3 text-[14px] sm:text-[16px] text-gray-600 dark:text-gray-400">
            ERP와 어드민 UI 중심으로 진행한 프로젝트들을 카드로 살펴볼 수 있어요.
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
