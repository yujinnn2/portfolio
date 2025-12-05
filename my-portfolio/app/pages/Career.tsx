"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type TimelineItem = {
  id: string;
  period: string;
  title: string;
  company: string;
  role?: string;
  skills: string[];
  details: string[];
};

const experiences: TimelineItem[] = [
  {
    id: "exp-1",
    period: "2025.10 - 현재",
    title: "투어민",
    company: "여행·레저 산업의 예약·운영을 통합 관리하는 기업 · 웹서비스팀",
    role: "Publishing & Frontend",
    skills: ["HTML", "CSS", "JS/TS", "Tailwind", "React", "Git"],
    details: [
      "사내 ERP 서비스(admin) / 서비스 페이지 신규 개발",
      "디자인 시스템 기반 공통 컴포넌트 설계 및 퍼블리싱",
      "운영 중인 서비스의 성능 및 접근성 개선",
    ],
  },
  {
    id: "exp-2",
    period: "2025.08 - 2025.09",
    title: "삼성전자",
    company: "전자·IT 분야에서 혁신적인 제품과 서비스를 개발하는 글로벌 기업 · eCommerceInfra팀",
    role: "회계/행정 담당",
    skills: ["ERP", "SAP", "Invoice", "세금계산서", "예산", "정산"],
    details: [
      "SAP, ERP 회계 담당",
      "DTI, Invoice 처리 및 예산, 정산 업무",
      "인사, 복지, 총무, IT 등 전반적인 행정 업무",
    ],
  },
  {
    id: "exp-3",
    period: "2022.02 - 2022.05",
    title: "현대제철",
    company: "철강 제조와 솔루션을 제공하는 국내 대표 철강 기업 · 상생소통팀",
    role: "회사 홍보 및 마케팅",
    skills: ["영어 담당", "회사소개", "현장견학", "총무"],
    details: [
      "국내외 내방객 및 투자자 회사소개 및 사업장 견학",
      "총무 업무",
    ],
  },
];

const projects: TimelineItem[] = [
  {
    id: "proj-1",
    period: "2023 - 2024",
    title: "티끌",
    company: "가게 특화 공유 플랫폼 개발 프로젝트",
    skills: ["TS", "React", "Redux", "React Query", "React Hook Form"],
    details: [
      "TypeScript 기반 SPA 구조 설계 및 메인 화면 퍼블리싱",
      "Redux · React Query 이용한 상태 관리 및 데이터 패칭 구조 설계",
      "React-Hook-Form 기반 폼 상태 관리 및 Validation 구현",
    ],
  },
  {
    id: "proj-2",
    period: "2023 - 2024",
    title: "티끌",
    company: "가게 특화 공유 플랫폼 개발 프로젝트",
    skills: ["TS", "React", "Redux", "React Query", "React Hook Form"],
    details: [
      "TypeScript 기반 SPA 구조 설계 및 메인 화면 퍼블리싱",
      "Redux · React Query 이용한 상태 관리 및 데이터 패칭 구조 설계",
      "React-Hook-Form 기반 폼 상태 관리 및 Validation 구현",
    ],
  },
  {
    id: "proj-3",
    period: "2023 - 2024",
    title: "티끌",
    company: "가게 특화 공유 플랫폼 개발 프로젝트",
    skills: ["TS", "React", "Redux", "React Query", "React Hook Form"],
    details: [
      "TypeScript 기반 SPA 구조 설계 및 메인 화면 퍼블리싱",
      "Redux · React Query 이용한 상태 관리 및 데이터 패칭 구조 설계",
      "React-Hook-Form 기반 폼 상태 관리 및 Validation 구현",
    ],
  },
];

// 리스트 모션
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

// 아이템 모션
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

export function Career() {
  const [openId, setOpenId] = useState<string | null>(null);

  // 세로선 스크롤 프로그레스용
  const expLineRef = useRef<HTMLDivElement | null>(null);
  const projLineRef = useRef<HTMLDivElement | null>(null);
  const [expProgress, setExpProgress] = useState(0);   // 0 ~ 1
  const [projProgress, setProjProgress] = useState(0); // 0 ~ 1

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  useEffect(() => {
    const calcProgress = (el: HTMLDivElement | null): number => {
      if (!el) return 0;

      const rect = el.getBoundingClientRect();
      const vh =
        window.innerHeight || document.documentElement.clientHeight;

      // 이 섹션의 "중심" 위치
      const center = rect.top + rect.height / 2;

      // 뷰포트 안에서 0% ~ 100% 구간을 어느 정도로 쓸지
      // start: 화면 위에서 20% 지점
      // end  : 화면 위에서 80% 지점
      const start = vh * 0.2;
      const end = vh * 0.8;
      const range = end - start;

      // center가 start보다 위에 있으면 0, end보다 아래면 1
      const raw = (end - center) / range; // center가 위로 갈수록 값이 커짐
      const clamped = Math.min(1, Math.max(0, raw));

      return clamped;
    };

    const handleScroll = () => {
      setExpProgress((prev) => {
        const next = calcProgress(expLineRef.current);
        return next === prev ? prev : next;
      });
      setProjProgress((prev) => {
        const next = calcProgress(projLineRef.current);
        return next === prev ? prev : next;
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <section
      id="section-career"
      className="
        bg-gray-50 text-gray-900
        dark:bg-[#050816] dark:text-white
        py-24 transition-colors duration-300
      "
    >
      <div className="mx-auto max-w-5xl px-6">
        {/* INTRO - 가운데 정렬 */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-2 text-center"
        >
          <p className="text-[13px] font-semibold text-blue-400">경력 사항</p>
          <h2 className="text-[26px] sm:text-[30px] font-bold leading-tight">
            경험을 연결해 더 나은 UI를 만듭니다.
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">
            다양한 경험의 폭을 기술의 깊이로 전환하고 있습니다
          </p>
        </motion.div>

        {/* ==================== 경험 ==================== */}
        <div className="mt-14">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-semibold text-gray-400 dark:text-gray-500">
              업무 경력
            </span>
            <span className="text-[12px] text-gray-400">Work Experience</span>
          </div>

          <div className="mt-8 relative" ref={expLineRef}>
            {/* 세로선 + 스크롤 프로그레스 (위에서 아래로 채워짐) */}
            <div className="pointer-events-none absolute left-[10px] top-0 bottom-0 flex justify-center">
              {/* 기본 라인 (배경) */}
              <div className="h-full w-[2px] rounded-full bg-gray-300 dark:bg-gray-700/70" />

              {/* 채워지는 gradient 라인 */}
              <div
                className="
      absolute left-0 top-0
      w-[2px] rounded-full
      bg-gradient-to-b
      from-blue-500
      via-blue-400
      to-blue-300
      shadow-[0_0_8px_rgba(59,130,246,0.5)]
      transition-all duration-300
    "
                style={{
                  height: `${expProgress * 100}%`,
                }}
              />
            </div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-12"
            >
              {experiences.map((item, idx) => {
                const isOpen = openId === item.id;

                return (
                  <motion.li
                    key={item.id}
                    variants={itemVariants}
                    className="relative pl-10"
                  >
                    {/* 아이콘 */}
                    <div className="absolute left-[2px] top-[2px] flex items-center justify-center">
                      <div
                        className={`
                          h-4 w-4 rounded-full flex items-center justify-center
                          ${
                          idx === 0
                            ? "bg-blue-500"
                            : "bg-gray-400 dark:bg-gray-600"
                        }
                        `}
                      >
                        <span className="text-[9px] text-white">●</span>
                      </div>
                    </div>

                    <p className="text-[12px] text-gray-400">{item.period}</p>

                    <p className="mt-1 text-[15px] font-semibold">
                      {item.title}
                    </p>

                    <p className="text-[13px] text-gray-500 dark:text-gray-400">
                      {item.company}
                      {item.role && (
                        <span className="text-gray-400"> · {item.role}</span>
                      )}
                    </p>

                    {/* 스킬 태그 */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((sk) => (
                        <span
                          key={sk}
                          className="
                            px-2 py-1 text-[11px] font-medium
                            bg-white dark:bg-white/10
                            border border-gray-200 dark:border-white/10
                            rounded-md
                          "
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                    {/* 토글 버튼 */}
                    <button
                      className="
                        mt-3 text-[12px] font-medium
                        text-blue-400 hover:text-blue-300
                        flex items-center gap-1
                      "
                      onClick={() => toggle(item.id)}
                    >
                      {isOpen ? "주요 업무 내용 가리기" : "주요 업무 내용 보기"}
                      <span
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    {/* 상세 내용 패널 (height + opacity 애니메이션) */}
                    <motion.div
                      initial={false}
                      animate={isOpen ? "open" : "collapsed"}
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                          mt-3 rounded-xl border border-gray-200 dark:border-gray-700/70
                          bg-white dark:bg-white/5
                          p-4 text-[13px]
                        "
                      >
                        <ul className="space-y-1">
                          {item.details.map((d, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-blue-400 mt-[3px]">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>

        {/* ==================== 프로젝트 ==================== */}
        <div className="mt-14">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-semibold text-gray-400 dark:text-gray-500">
              프로젝트
            </span>
            <span className="text-[12px] text-gray-400">
              Side / Personal Projects
            </span>
          </div>

          <div className="mt-8 relative" ref={projLineRef}>
            {/* 프로젝트용 세로선 + 스크롤 프로그레스 */}
            <div className="pointer-events-none absolute left-[10px] top-0 bottom-0 flex justify-center">
              <div className="h-full w-[2px] rounded-full bg-gray-300 dark:bg-gray-700/70" />

              <div
                className="
      absolute left-0 top-0
      w-[2px] rounded-full
      bg-gradient-to-b
      from-blue-500
      via-blue-400
      to-blue-300
      shadow-[0_0_8px_rgba(59,130,246,0.5)]
      transition-all duration-300
    "
                style={{
                  height: `${projProgress * 100}%`,
                }}
              />
            </div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-12"
            >
              {projects.map((item) => {
                const isOpen = openId === item.id;

                return (
                  <motion.li
                    key={item.id}
                    variants={itemVariants}
                    className="relative pl-10"
                  >
                    {/* 아이콘 (프로젝트) */}
                    <div className="absolute left-[2px] top-[2px] flex items-center justify-center">
                      <div className="h-4 w-4 rounded-full bg-blue-400 flex items-center justify-center">
                        <span className="text-[9px] text-white">◆</span>
                      </div>
                    </div>

                    <p className="text-[12px] text-gray-400">{item.period}</p>

                    <p className="mt-1 text-[15px] font-semibold">
                      {item.title}
                    </p>

                    <p className="text-[13px] text-gray-500 dark:text-gray-400">
                      {item.company}
                    </p>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((sk) => (
                        <span
                          key={sk}
                          className="
                            px-2 py-1 text-[11px] font-medium
                            bg-white dark:bg-white/10
                            border border-gray-200 dark:border-white/10
                            rounded-md
                          "
                        >
                          {sk}
                        </span>
                      ))}
                    </div>

                    <button
                      className="
                        mt-3 text-[12px] font-medium
                        text-blue-400 hover:text-blue-300
                        flex items-center gap-1
                      "
                      onClick={() => toggle(item.id)}
                    >
                      {isOpen ? "주요 업무 내용 가리기" : "주요 업무 내용 보기"}
                      <span
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                        ▾
                      </span>
                    </button>

                    <motion.div
                      initial={false}
                      animate={isOpen ? "open" : "collapsed"}
                      variants={{
                        open: { opacity: 1, height: "auto" },
                        collapsed: { opacity: 0, height: 0 },
                      }}
                      transition={{ duration: 0.22, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <div
                        className="
                          mt-3 rounded-xl border border-gray-200 dark:border-gray-700/70
                          bg-white dark:bg-white/5
                          p-4 text-[13px]
                        "
                      >
                        <ul className="space-y-1">
                          {item.details.map((d, i) => (
                            <li key={i} className="flex gap-2">
                              <span className="text-blue-400 mt-[3px]">•</span>
                              <span>{d}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </motion.div>
                  </motion.li>
                );
              })}
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
