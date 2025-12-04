export default function About() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.16)_0,_transparent_55%),_linear-gradient(180deg,#05011a_0%,#020010_55%,#02000a_100%)] text-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-6 pb-24 pt-28 md:flex-row md:items-start">
        {/* 왼쪽 프로필 카드 */}
        <section className="w-full md:w-[34%]">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 px-6 pb-8 pt-7 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.45)]">
            {/* 작은 라벨 */}
            <span className="inline-flex items-center rounded-full border border-white/15 bg-black/20 px-3 py-1 text-[10px] uppercase tracking-[0.22em] text-white/70">
              Profile
            </span>

            {/* 이름 / 역할 */}
            <div className="mt-5 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-purple-400 via-indigo-300 to-cyan-200 text-[20px] font-semibold text-[#050113] shadow-[0_0_25px_rgba(129,140,248,0.8)]">
                N
              </div>
              <div>
                <p className="text-sm text-white/60">노유진</p>
                <p className="text-lg font-semibold">Web Publisher</p>
              </div>
            </div>

            {/* 간단 소개 */}
            <p className="mt-5 text-[13px] leading-relaxed text-white/70">
              디테일과 구조를 중시하는 웹 퍼블리셔입니다.
              <br />
              토스·카카오 스타일의 깨끗한 UI와 실무형 마크업을 좋아하고,
              <br />
              인터랙션이 자연스럽게 느껴지는 화면을 만듭니다.
            </p>

            {/* 태그들 */}
            <div className="mt-6 flex flex-wrap gap-2 text-[11px]">
              <span className="rounded-full bg-white/8 px-3 py-1 text-white/80">
                정교한 마크업
              </span>
              <span className="rounded-full bg-white/6 px-3 py-1 text-white/70">
                관리자 화면(ERP · Dashboard)
              </span>
              <span className="rounded-full bg-white/6 px-3 py-1 text-white/70">
                반응형 · 컴포넌트 설계
              </span>
              <span className="rounded-full bg-white/6 px-3 py-1 text-white/70">
                협업 중심 워크플로우
              </span>
            </div>

            {/* 하단 정보 */}
            <div className="mt-7 border-t border-white/10 pt-4 text-[11px] text-white/55">
              <p>현재 포지션 · 웹 퍼블리셔</p>
              <p>관심사 · 실무형 UI 구조, 인터랙션, 디자인 시스템</p>
            </div>

            {/* 뒤쪽 글로우 */}
            <div className="pointer-events-none absolute -right-20 -top-24 h-40 w-40 rounded-full bg-purple-400/30 blur-3xl" />
          </div>
        </section>

        {/* 오른쪽 내용 섹션 */}
        <section className="w-full md:w-[66%] space-y-6">
          {/* 섹션 타이틀 */}
          <header className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.24em] text-white/40">
              About · Introduction
            </p>
            <h2 className="text-2xl sm:text-3xl font-semibold">
              화면을 설계하고, 디테일을 채우는 퍼블리셔
            </h2>
            <p className="max-w-xl text-[13px] sm:text-[14px] text-white/65">
              단순히 예쁜 화면이 아니라,{" "}
              <span className="text-white/90 font-medium">
                실제 서비스에서 바로 쓸 수 있는 구조
              </span>
              를 고민합니다.
              컴포넌트 단위로 생각하고, 협업하기 좋은 마크업을 지향합니다.
            </p>
          </header>

          {/* 카드: 어떤 작업을 하는지 */}
          <div className="grid gap-4 md:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-xs font-medium text-white/60">What I Do</p>
              <h3 className="mt-2 text-[15px] font-semibold">
                UI 구조 설계 & 실무형 퍼블리싱
              </h3>
              <ul className="mt-3 space-y-1.5 text-[13px] text-white/70">
                <li>· 관리자/대시보드 화면 구조 설계 (ERP, 통계, 스케줄 등)</li>
                <li>· 시멘틱 마크업과 접근성을 고려한 HTML/CSS 작성</li>
                <li>· 컴포넌트 기반 레이아웃 구성 및 재사용성 높은 구조 설계</li>
                <li>· 디자인 시안과 실제 화면 사이의 간극을 줄이는 디테일 조정</li>
              </ul>
              <div className="pointer-events-none absolute -right-10 -bottom-10 h-28 w-28 rounded-full bg-cyan-300/25 blur-2xl" />
            </div>

            <div className="relative overflow-hidden rounded-3xl border border-white/8 bg-white/5 p-5 backdrop-blur-xl">
              <p className="text-xs font-medium text-white/60">How I Work</p>
              <h3 className="mt-2 text-[15px] font-semibold">
                협업과 유지보수를 생각하는 작업 방식
              </h3>
              <ul className="mt-3 space-y-1.5 text-[13px] text-white/70">
                <li>· 기획·디자인·백엔드와의 협업을 전제로 한 구조 설계</li>
                <li>· 네이밍 규칙, 폴더 구조, 컴포넌트 분리 기준을 명확히 정의</li>
                <li>· 실서비스 운영 관점에서의 예외 케이스와 엣지 상황 확인</li>
                <li>· “나만 아는 코드”가 되지 않도록, 팀이 이해하기 쉬운 구현 추구</li>
              </ul>
              <div className="pointer-events-none absolute -left-10 -top-10 h-28 w-28 rounded-full bg-indigo-400/25 blur-2xl" />
            </div>
          </div>

          {/* 카드: 스택 / 관심 분야 */}
          <div className="relative mt-2 overflow-hidden rounded-3xl border border-white/8 bg-white/5 p-5 backdrop-blur-xl">
            <p className="text-xs font-medium text-white/60">Skills & Focus</p>

            <div className="mt-3 grid gap-4 md:grid-cols-[1.3fr_minmax(0,1fr)]">
              <div className="space-y-2 text-[13px] text-white/75">
                <p>
                  퍼블리싱을 중심으로 하지만,{" "}
                  <span className="font-medium text-white">
                    React/Next 기반의 프론트 구조
                  </span>
                  도 이해하고 있습니다.
                  디자인 시스템과 컴포넌트 라이브러리에 관심이 많고,
                  토스·카카오 같은 대기업 실무 스타일을 꾸준히 공부하고 있습니다.
                </p>
                <p>
                  “어떤 화면을 만들 것인가” 뿐 아니라,
                  <span className="font-medium text-white">
                    “어떻게 유지보수하고 확장할 것인가”
                  </span>
                  를 함께 고민합니다.
                </p>
              </div>

              <div className="space-y-3 text-[12px]">
                <div>
                  <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/50">
                    Main Stack
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["HTML5", "CSS(SCSS)", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Next.js"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full bg-black/30 px-2.5 py-1 text-[11px] text-white/80"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>

                <div>
                  <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-white/50">
                    Interested In
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {["Design System", "Admin UI / Dashboard", "Animation & Interaction", "UX Writing", "팀 협업 구조"].map(
                      (item) => (
                        <span
                          key={item}
                          className="rounded-full bg-black/25 px-2.5 py-1 text-[11px] text-white/75"
                        >
                          {item}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute right-[-40px] top-[-40px] h-32 w-32 rounded-full bg-purple-400/25 blur-3xl" />
            <div className="pointer-events-none absolute left-[-20px] bottom-[-40px] h-28 w-28 rounded-full bg-blue-400/25 blur-3xl" />
          </div>

          {/* 아래 한 줄 요약 */}
          <footer className="pt-4 text-[12px] text-white/55">
            앞으로의 커리어는 “퍼블리셔”에 머무르지 않고,{" "}
            <span className="text-white/80">
              프론트엔드와 디자인 시스템 사이를 잇는 역할
            </span>
            로 확장해 나가고 싶습니다.
          </footer>
        </section>
      </div>
    </main>
  );
}
