"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

// -------------------------
// 타입 정의
// -------------------------
type TimelineItem = {
  id: string;
  period: string;
  title: string;
  company: string;
  role?: string;
  skills: string[];
  details: string[];
};

// -------------------------
// 데이터 (업무 경력)
// -------------------------
const experiences: TimelineItem[] = [
  {
    id: "exp-1",
    period: "2025.10 - 현재",
    title: "투어민",
    company: "여행·레저 산업의 예약·운영을 통합 관리하는 기업 · 웹서비스팀",
    role: "Publishing",
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
    title: "잼퍼블릭",
    company: "모바일 게임을 개발·운영하는 게임 콘텐츠 기업 · 개발팀",
    role: "Publishing",
    skills: ["HTML", "CSS", "JS/TS", "Tailwind", "React", "Git"],
    details: [
      "모바일/앱 게임 유지보수 및 빌드",
      "회사 홈페이지 및 admin 페이지 유지보수",
    ],
  },
  {
    id: "exp-3",
    period: "2022.07 - 2024.07",
    title: "삼성전자",
    company:
      "전자·IT 분야에서 혁신적인 제품과 서비스를 개발하는 글로벌 기업 · eCommerceInfra팀",
    role: "회계/행정 담당",
    skills: ["ERP", "SAP", "Invoice", "세금계산서", "예산", "정산"],
    details: [
      "SAP, ERP 회계 담당",
      "DTI, Invoice 처리 및 예산, 정산 업무",
      "인사, 복지, 총무, IT 등 전반적인 행정 업무",
    ],
  },
  {
    id: "exp-4",
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

// -------------------------
// 데이터 (교육·어학)
// -------------------------
const educations: TimelineItem[] = [
  {
    id: "edu-1",
    period: "2025.02 - 2025.07",
    title: "이젠아카데미",
    company: "프론트엔드 웹 퍼블리셔·개발자 양성과정 수료",
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Redux"],
    details: [
      "반응형 웹 퍼블리싱과 SPA 구조를 중심으로 한 실습 프로젝트 수행",
      "Redux · React Query 기반 상태 관리 및 데이터 패칭 패턴 학습",
      "포트폴리오용 개인·팀 프로젝트 설계 및 코드 리뷰 경험",
    ],
  },
  {
    id: "edu-2",
    period: "2018 - 2022",
    title: "동양미래대학교",
    company: "전공 수업 및 팀 프로젝트를 통한 IT·웹 분야 기초 역량 확보",
    skills: ["전공 프로젝트", "팀 협업", "문서화", "프레젠테이션"],
    details: [
      "전공 프로젝트를 통해 기본적인 서비스 기획·설계·구현 흐름 경험",
      "발표·문서화 중심의 협업 경험으로 커뮤니케이션 역량 강화",
    ],
  },
  {
    id: "edu-3",
    period: "2019 - 2020",
    title: "호주 워킹홀리데이",
    company: "현지 생활과 업무 경험을 통한 커뮤니케이션·적응력 향상",
    skills: ["영어 커뮤니케이션", "적응력", "문제 해결"],
    details: [
      "다양한 국적의 사람들과 협업하며 실무 영어 커뮤니케이션 경험",
      "낯선 환경에서의 생활·업무를 통해 셀프 매니징 및 문제 해결 능력 강화",
    ],
  },
];

// -------------------------
// Motion Variants
// -------------------------
const listVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

// -------------------------
// Career Component
// -------------------------
export function Career() {
  const [openId, setOpenId] = useState<string | null>(null);

  const expLineRef = useRef<HTMLDivElement | null>(null);
  const eduLineRef = useRef<HTMLDivElement | null>(null);
  const [expProgress, setExpProgress] = useState(0);
  const [eduProgress, setEduProgress] = useState(0);

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  // 스크롤 진행도 계산
  useEffect(() => {
    const calcProgress = (el: HTMLDivElement | null): number => {
      if (!el) return 0;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      const center = rect.top + rect.height / 2;
      const start = vh * 0.2;
      const end = vh * 0.8;
      const range = end - start;
      const raw = (end - center) / range;
      return Math.min(1, Math.max(0, raw));
    };

    const handleScroll = () => {
      setExpProgress(calcProgress(expLineRef.current));
      setEduProgress(calcProgress(eduLineRef.current));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const expActiveIndex = Math.round(
    expProgress * Math.max(0, experiences.length - 1),
  );
  const eduActiveIndex = Math.round(
    eduProgress * Math.max(0, educations.length - 1),
  );

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
        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="space-y-2 text-center"
        >
          <p className="text-[13px] font-semibold text-blue-400">경력 사항</p>
          <h2 className="text-[26px] sm:text-[23px] font-bold leading-tight">
            경험을 연결해 더 나은 UI를 만듭니다.
          </h2>
          <p className="text-[13px] text-gray-500 dark:text-gray-400">
            다양한 경험의 폭을 기술의 깊이로 전환하고 있습니다.
          </p>
        </motion.div>

        {/* ==================== 업무 경력 ==================== */}
        <div className="mt-14">
          <div className="flex items-center justify-between">
            <span className="text-[14px] font-semibold text-blue-400 dark:text-blue-400">
              업무 경력
            </span>
            <span className="text-[12px] text-blue-400">Work Experience</span>
          </div>

          <div className="mt-8 relative" ref={expLineRef}>
            {/* 세로선 + 진행도 (블루) */}
            <div className="pointer-events-none absolute left-[10px] top-0 bottom-0 flex justify-center">
              <div className="h-full w-[2px] rounded-full bg-gray-300 dark:bg-gray-700/70" />
              <div
                className="
                  absolute left-0 top-0
                  w-[2px] rounded-full
                  bg-gradient-to-b
                  from-blue-500 via-blue-400 to-sky-400
                  shadow-[0_0_10px_rgba(59,130,246,0.6)]
                  transition-all duration-300
                "
                style={{
                  height: `calc(${expProgress * 100}% + 8px)`,
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
                const isActiveDot = idx <= expActiveIndex;

                return (
                  <motion.li
                    key={item.id}
                    variants={itemVariants}
                    className="relative pl-10"
                  >
                    {/* 아이콘 */}
                    <div className="absolute left-[2px] top-[2px] flex items-center justify-center">
                      <div
                        className={`h-4 w-4 rounded-full flex items-center justify-center ${
                          isActiveDot
                            ? "bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.9)]"
                            : "bg-gray-400 dark:bg-gray-600"
                        }`}
                      >
                        <span className="text-[8px] text-white">●</span>
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

                    {/* 상세 내용 */}
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

        {/* ==================== 교육 및 어학 ==================== */}
        <div className="mt-14">
          <div className="flex items-center justify-between">
            {/* 타이틀 컬러 → 민트 5방울 */}
            <span className="text-[14px] font-semibold text-[#1fbfaf] dark:text-[#27d5c3]">
      교육 및 어학
    </span>
            <span className="text-[12px] text-[#1fbfaf] dark:text-[#27d5c3]">
      Education & Learning
    </span>
          </div>

          <div className="mt-8 relative" ref={eduLineRef}>
            {/* 세로 라인 */}
            <div className="pointer-events-none absolute left-[10px] top-0 bottom-0 flex justify-center">
              <div className="h-full w-[2px] rounded-full bg-gray-300 dark:bg-gray-700/70" />

              {/* ⭐ 민트 5방울: blue → cyan → emerald 조합 */}
              <div
                className="
          absolute left-0 top-0
          w-[2px] rounded-full
          bg-gradient-to-b
          from-blue-500 via-cyan-500 to-emerald-400
          shadow-[0_0_12px_rgba(34,211,238,0.55)]
          transition-all duration-300
        "
                style={{ height: `calc(${eduProgress * 100}% + 8px)` }}
              />
            </div>

            <motion.ul
              variants={listVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              className="space-y-12"
            >
              {educations.map((item, idx) => {
                const isOpen = openId === item.id;
                const isActiveDot = idx <= eduActiveIndex;

                return (
                  <motion.li
                    key={item.id}
                    variants={itemVariants}
                    className="relative pl-10"
                  >
                    {/* 아이콘 */}
                    <div className="absolute left-[2px] top-[2px] flex items-center justify-center">
                      <div
                        className={`h-4 w-4 rounded-full flex items-center justify-center ${
                          isActiveDot
                            ? "bg-gradient-to-br from-blue-500 via-cyan-500 to-emerald-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                            : "bg-gray-400 dark:bg-gray-600"
                        }`}
                      >
                        <span className="text-[9px] text-white">◆</span>
                      </div>
                    </div>

                    {/* 기본 텍스트 */}
                    <p className="text-[12px] text-gray-400">{item.period}</p>

                    <p className="mt-1 text-[15px] font-semibold">{item.title}</p>

                    <p className="text-[13px] text-gray-500 dark:text-gray-400">
                      {item.company}
                    </p>

                    {/* 태그는 경력 동일 */}
                    <div className="mt-3 flex flex-wrap gap-2">
                      {item.skills.map((sk) => (
                        <span
                          key={sk}
                          className="
                    px-2 py-1 text-[11px] font-medium
                    bg-white dark:bg-white/10
                    border border-gray-200 dark:border-white/10
                    text-gray-700 dark:text-gray-200
                    rounded-md
                  "
                        >
                  {sk}
                </span>
                      ))}
                    </div>

                    {/* ⭐ 토글 버튼 민트 5방울로 통일 */}
                    <button
                      className="
                mt-3 text-[12px] font-medium
                text-[#1fbfaf] hover:text-[#27d5c3]
                flex items-center gap-1
              "
                      onClick={() => toggle(item.id)}
                    >
                      {isOpen ? "상세 내용 가리기" : "상세 내용 보기"}
                      <span
                        className={`transition-transform ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      >
                ▾
              </span>
                    </button>

                    {/* 상세 내용 박스 */}
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
                  mt-3 rounded-xl
                  border border-gray-200 dark:border-gray-700/70
                  bg-white dark:bg-white/5
                  p-4 text-[13px]
                "
                      >
                        <ul className="space-y-1">
                          {item.details.map((d, i) => (
                            <li key={i} className="flex gap-2">
                              {/* 상세 내용 점은 블루 유지 */}
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
