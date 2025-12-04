export default function Strength() {
  return (
    <main>
      <section
        id="section-3"
        className="
          bg-gray-50 text-gray-900
          dark:bg-[#050816] dark:text-white
          py-20
        "
      >
        <div className="mx-auto max-w-6xl px-6">
          {/* Title */}
          <div className="text-center">
            <p className="text-[12px] font-semibold text-blue-500 dark:text-blue-400">
              핵심 역량
            </p>
            <h2 className="mt-3 text-[22px] sm:text-[26px] font-bold leading-tight">
              유연하게 소통하고 견고하게 개발합니다.
            </h2>
          </div>

          {/* 가로 배치 */}
          <div className="mt-14 flex flex-col gap-12 md:flex-row">
            {/* ============================
                BLOCK 1
              ============================ */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              {/* 이미지 박스 */}
              <div
                className="
                  w-full h-56 sm:h-64
                  flex items-center justify-center
                  rounded-3xl
                  bg-gradient-to-br from-blue-500/10 to-blue-700/5
                  dark:from-blue-500/20 dark:to-blue-700/10
                  shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                  dark:shadow-[0_18px_40px_rgba(0,0,0,0.55)]
                "
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-600 text-white">
                    ⚛️
                  </span>
                  <div className="flex gap-2">
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400 text-black text-xs font-bold">
                      JS
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500 text-white text-xs font-bold">
                      TS
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-black text-white text-xs font-bold">
                      N
                    </span>
                  </div>
                </div>
              </div>

              {/* Text */}
              <p className="mt-6 text-[11px] font-semibold text-blue-600 dark:text-blue-300 uppercase tracking-[0.16em]">
                Modern Frontend
              </p>
              <h3 className="mt-2 text-[17px] font-semibold">
                모던 프론트엔드 개발
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-700 dark:text-white/70 max-w-[420px]">
                React와 Next.js 기반으로 재사용성과 타입 안정성을 고려한 UI를 설계하며,
                구조적이고 접근성 높은 마크업을 작성합니다.
              </p>
            </div>

            {/* ============================
                BLOCK 2
              ============================ */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div
                className="
                  w-full h-56 sm:h-64
                  flex items-center justify-center
                  rounded-3xl
                  bg-gradient-to-br from-blue-500/10 to-blue-700/5
                  dark:from-blue-500/20 dark:to-blue-700/10
                  shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                  dark:shadow-[0_18px_40px_rgba(0,0,0,0.55)]
                  px-5
                "
              >
                <div className="w-full space-y-3 text-[11px]">
                  <div className="flex items-center justify-between rounded-xl bg-white/70 px-3 py-2 dark:bg-white/5">
                    <span className="text-gray-700 dark:text-white/70">
                      First Contentful Paint
                    </span>
                    <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-600 dark:text-blue-300">
                      0.59s
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white/70 px-3 py-2 dark:bg-white/5">
                    <span className="text-gray-700 dark:text-white/70">
                      Largest Contentful Paint
                    </span>
                    <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-600 dark:text-blue-300">
                      1.81s
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-white/70 px-3 py-2 dark:bg-white/5">
                    <span className="text-gray-700 dark:text-white/70">
                      Interaction to Next Paint
                    </span>
                    <span className="rounded-full bg-blue-500/10 px-2 py-0.5 text-blue-600 dark:text-blue-300">
                      64ms
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[11px] font-semibold text-blue-600 dark:text-blue-300 uppercase tracking-[0.16em]">
                Performance & UX
              </p>
              <h3 className="mt-2 text-[17px] font-semibold">
                웹사이트 개선 및 최적화
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-700 dark:text-white/70 max-w-[420px]">
                실제 사용자가 체감하는 렌더링 속도를 개선하고 지표 기반으로 before/after를
                측정하며 페이지를 최적화합니다.
              </p>
            </div>

            {/* ============================
                BLOCK 3
              ============================ */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left">
              <div
                className="
                  w-full h-56 sm:h-64
                  flex items-center justify-center
                  rounded-3xl
                  bg-gradient-to-br from-blue-500/10 to-blue-700/5
                  dark:from-blue-500/20 dark:to-blue-700/10
                  shadow-[0_8px_24px_rgba(0,0,0,0.06)]
                  dark:shadow-[0_18px_40px_rgba(0,0,0,0.55)]
                  px-6
                "
              >
                <div className="w-full space-y-3 text-[11px] max-w-[300px]">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                      📝 기획
                    </span>
                    <span className="h-px flex-1 mx-2 bg-blue-300/30 dark:bg-blue-200/10" />
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                      🎨 디자인
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                      🧑‍💻 FE
                    </span>
                    <span className="h-px flex-1 mx-2 bg-blue-300/30 dark:bg-blue-200/10" />
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-blue-600 dark:bg-blue-500/20 dark:text-blue-300">
                      🗄️ BE
                    </span>
                  </div>
                </div>
              </div>

              <p className="mt-6 text-[11px] font-semibold text-blue-600 dark:text-blue-300 uppercase tracking-[0.16em]">
                Collaboration
              </p>
              <h3 className="mt-2 text-[17px] font-semibold">
                커뮤니케이션 및 협업
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-700 dark:text-white/70 max-w-[420px]">
                기획·디자인·개발과 명확한 커뮤니케이션을 통해 문제를 빠르게 파악하고
                실행합니다. 협업 도구 기반으로 이력을 투명하게 관리합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
