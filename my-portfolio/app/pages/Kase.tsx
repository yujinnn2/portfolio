// src/app/components/sections/section-dashboard.tsx

export function SectionDashboard() {
  return (
    <section
      id="overview"
      className="relative bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18)_0,_transparent_55%),_linear-gradient(180deg,#05011a_0%,#020010_45%,#02000a_100%)]"
    >
      <div className="mx-auto max-w-6xl px-6 sm:px-6">
        <header className="mb-8 flex items-end justify-between gap-4">
          <div>
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/45">
              Section 4 · Overview
            </p>
            <h2 className="mt-1 text-xl sm:text-2xl font-semibold text-white">
              한 화면에서 보는 노유진의 작업 스냅샷
            </h2>
          </div>
          <p className="text-[12px] text-white/55 max-w-xs">
            주요 경험, 작업 수, 관심사 등을 한 번에 보여주는 대시보드입니다.
          </p>
        </header>

        {/* === 대시보드 그리드 === */}
        <div className="grid auto-rows-[160px] gap-4 md:auto-rows-[190px] md:grid-cols-4">
          {/* 태그 / 역할 클라우드 */}
          <div className="relative overflow-hidden rounded-3xl bg-neutral-900/70 p-4 sm:p-5 shadow-[0_18px_50px_rgba(0,0,0,0.6)]">
            <p className="text-[11px] font-medium text-white/55 mb-2">
              Keywords
            </p>
            <div className="flex flex-wrap gap-2 text-[11px] sm:text-[12px]">
              {[
                "UI/UX",
                "Web Publishing",
                "Admin Dashboard",
                "Design System",
                "Interaction",
                "Semantic Markup",
                "Responsive",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-white/8 px-2.5 py-1 text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="pointer-events-none absolute -right-10 bottom-[-24px] h-24 w-24 rounded-full bg-purple-500/25 blur-2xl" />
          </div>

          {/* 총 작업 수 카드 */}
          <div className="flex flex-col justify-between rounded-3xl bg-neutral-50/95 p-5 text-neutral-900 shadow-[0_18px_40px_rgba(15,23,42,0.35)]">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-neutral-500">
                Projects
              </p>
              <span className="inline-flex h-6 items-center rounded-full bg-neutral-900 text-[11px] px-3 text-white">
                In Progress
              </span>
            </div>
            <div>
              <p className="text-3xl sm:text-[32px] font-semibold leading-none">
                12+
              </p>
              <p className="mt-2 text-[12px] text-neutral-500">
                실제 서비스 기반 퍼블리싱 & 토이 프로젝트 포함
              </p>
            </div>
          </div>

          {/* 근무/커리어 위치 느낌의 카드 (맵 자리) */}
          <div className="relative overflow-hidden rounded-3xl bg-neutral-100/95 p-5 text-neutral-900 shadow-[0_18px_40px_rgba(15,23,42,0.35)]">
            <p className="text-[11px] font-medium text-neutral-500">
              Career Track
            </p>
            <p className="mt-2 text-[13px] font-semibold">
              관광·이벤트 &gt; 마케팅 &gt; 웹 퍼블리싱
            </p>
            <p className="mt-2 text-[12px] text-neutral-500">
              다양한 도메인 경험을 바탕으로, 실제 업무 플로우를 이해하는
              퍼블리셔입니다.
            </p>

            {/* 맵 대신 경로 다이어그램 느낌 */}
            <div className="mt-4 flex items-center gap-2 text-[11px] text-neutral-600">
              <span className="h-[2px] flex-1 rounded-full bg-neutral-300" />
              <span className="rounded-full bg-neutral-900 px-2 py-1 text-white">
                Now
              </span>
              <span className="text-neutral-400">Tour / Admin</span>
            </div>

            <div className="pointer-events-none absolute -left-8 -bottom-10 h-24 w-24 rounded-full bg-emerald-400/20 blur-2xl" />
          </div>

          {/* Culture / Work style */}
          <div className="flex flex-col justify-between rounded-3xl bg-neutral-200/90 p-5 text-neutral-900 shadow-[0_18px_40px_rgba(15,23,42,0.35)]">
            <div>
              <p className="text-[11px] font-medium text-neutral-500">
                Work Style
              </p>
              <p className="mt-2 text-[14px] font-semibold">
                팀과 함께 자라는 퍼블리셔
              </p>
            </div>
            <p className="text-[12px] text-neutral-600">
              “코드만 예쁜 것”이 아니라,
              기획·디자인·백엔드와 대화가 되는 구조를 중요하게 생각합니다.
            </p>
          </div>

          {/* 좌측 큰 이미지 카드 (Members/Who am I 대체) */}
          <div className="relative col-span-2 row-span-2 overflow-hidden rounded-3xl bg-gradient-to-br from-neutral-950 via-neutral-900 to-neutral-800 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.75)]">
            <div className="flex items-center justify-between">
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/55">
                Who I am
              </p>
              <span className="h-[2px] w-8 rounded-full bg-white/30" />
            </div>

            <div className="mt-4">
              <h3 className="text-2xl sm:text-3xl font-semibold">
                디테일에 집착하는
                <br />
                웹 퍼블리셔 노유진입니다.
              </h3>
              <p className="mt-3 max-w-md text-[13px] text-white/70">
                화면을 “예쁘게” 만드는 것보다,
                서비스를 실제로 운영하는 사람과 사용하는 사람 모두에게
                자연스러운 UI를 만드는 데 집중합니다.
              </p>
            </div>

            {/* 이미지/배경 자리 */}
            <div className="pointer-events-none absolute inset-x-6 bottom-4 h-40 rounded-3xl bg-[radial-gradient(circle_at_top,_rgba(129,140,248,0.45)_0,_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(16,185,129,0.4)_0,_transparent_55%)] opacity-70 blur-lg" />
          </div>

          {/* 오른쪽 세로 스택 카드 (Career · Contact · etc) */}
          <div className="row-span-3 flex flex-col overflow-hidden rounded-3xl bg-neutral-900/90 text-white shadow-[0_18px_50px_rgba(0,0,0,0.7)]">
            <div className="flex-1 border-b border-white/10 px-5 py-4">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                Career
              </p>
              <p className="mt-1 text-[14px] font-semibold">
                함께 일할 팀을 찾고 있습니다
              </p>
              <p className="mt-2 text-[12px] text-white/55">
                퍼블리셔 포지션 및 프론트엔드와 맞닿아 있는 역할에 관심이
                있습니다.
              </p>
            </div>
            <div className="flex-1 border-b border-white/10 px-5 py-4 bg-neutral-800/80">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                Contact
              </p>
              <p className="mt-1 text-[14px] font-semibold">Contact &amp; CV</p>
              <p className="mt-2 text-[12px] text-white/55">
                이메일, 이력서, 깃허브, 노션 포트폴리오 링크를 한 곳에서 볼 수
                있도록 구성할 예정입니다.
              </p>
            </div>
            <div className="flex-1 px-5 py-4 bg-neutral-700/80">
              <p className="text-[11px] uppercase tracking-[0.18em] text-white/60">
                Next Step
              </p>
              <p className="mt-1 text-[14px] font-semibold">
                Design System &amp; FE Bridge
              </p>
              <p className="mt-2 text-[12px] text-white/55">
                퍼블리셔를 넘어, 디자인 시스템과 프론트엔드를 잇는 포지션으로
                성장하는 것이 목표입니다.
              </p>
            </div>
          </div>

          {/* Astronaut 자리 느낌: “대표 프로젝트” 썸네일 */}
          <div className="relative row-span-2 overflow-hidden rounded-3xl bg-neutral-950/90 p-5 shadow-[0_18px_60px_rgba(0,0,0,0.75)]">
            <p className="text-[11px] font-medium text-white/55">
              Feature Project
            </p>
            <p className="mt-2 text-[14px] font-semibold">
              TourMin Admin · 근태 &amp; 일정 대시보드
            </p>
            <p className="mt-2 text-[12px] text-white/60">
              FullCalendar 기반 일정 관리, 출퇴근 카드, 요약 통계 등
              실제 사내에서 사용하는 ERP 스타일 화면입니다.
            </p>

            <div className="pointer-events-none absolute inset-x-4 bottom-4 h-32 rounded-2xl bg-gradient-to-br from-slate-700 via-slate-900 to-black" />
          </div>

          {/* 날짜 / 시계 카드 */}
          <div className="flex items-center justify-between rounded-3xl bg-neutral-100/95 p-4 text-neutral-900 shadow-[0_18px_40px_rgba(15,23,42,0.35)]">
            <div>
              <p className="text-[11px] font-medium text-neutral-500">
                Today
              </p>
              <p className="mt-1 text-[18px] font-semibold">Wed 03</p>
            </div>
            <div className="text-right">
              <p className="text-[11px] font-medium text-neutral-500">
                Local Time (KST)
              </p>
              <p className="mt-1 text-[18px] font-semibold">16:33</p>
            </div>
          </div>

          {/* 현재 소속/클라이언트 느낌 카드 */}
          <div className="rounded-3xl bg-neutral-50/95 p-4 text-neutral-900 shadow-[0_18px_40px_rgba(15,23,42,0.35)] flex flex-col justify-between">
            <p className="text-[11px] font-medium text-neutral-500">
              Current
            </p>
            <div>
              <p className="text-[13px] font-semibold">TourMin</p>
              <p className="text-[12px] text-neutral-600">
                Admin 웹 퍼블리셔 · 사내 서비스
              </p>
            </div>
          </div>

          {/* 다크 모드 / 인터랙션 티저 카드 */}
          <div className="relative rounded-3xl bg-neutral-950/95 p-4 text-white shadow-[0_18px_50px_rgba(0,0,0,0.75)] flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <p className="text-[11px] font-medium text-white/60">
                Interaction
              </p>
              <span className="text-[18px]">🌙</span>
            </div>
            <div>
              <p className="text-[14px] font-semibold">Dark Mode Ready</p>
              <p className="mt-2 text-[12px] text-white/60">
                토스·카카오 스타일의 다크 테마 인터랙션도
                별도 섹션에서 확인할 수 있습니다.
              </p>
            </div>
            <div className="pointer-events-none absolute inset-x-4 bottom-3 h-10 rounded-2xl bg-[radial-gradient(circle_at_center,_rgba(248,250,252,0.18)_0,_transparent_60%)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
