import { StrengthLottie } from '@/app/pages/strength/StrengthLottie'
import animationData from "./Analytics Character Animation.json";
import animationData2 from "./Calendar Character Animation.json";
import animationData3 from "./Setting Character Animation.json";


export default function Strength() {
  return (
    <main>
      <section
        id="section-strength"
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
              문제는 명확하게, 해결은 깔끔하게.
            </h2>
          </div>
          <div className="mt-14 flex flex-col gap-12 md:flex-row">
            {/* Card 01 */}
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
                <StrengthLottie className="h-52 w-52 sm:h-64 sm:w-64 -translate-x-2 " animation={animationData3}/>
              </div>

              {/* Text */}
              <p className="mt-6 text-[11px] font-semibold text-blue-600 dark:text-blue-300 uppercase tracking-[0.16em]">
                Modern Publishing
              </p>
              <h3 className="mt-2 text-[17px] font-semibold">
                시멘틱 기반으로 구조부터 단단하게
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-700 dark:text-white/70 max-w-[420px]">
                화면을 구현하는 데서 끝나지 않고, 먼저 구조를 이해하고 설계합니다.
                시멘틱 태그와 접근성 원칙을 기반으로 사용성과 검색 노출을 함께 고려한 마크업을 작성하며,
                컴포넌트화된 구조를 통해 재사용성과 유지보수 효율을 높입니다.
              </p>
            </div>
            {/* Card 02 */}
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
                <StrengthLottie className="h-52 w-52 sm:h-64 sm:w-64 translate-x-4" animation={animationData2}/>
              </div>

              <p className="mt-6 text-[11px] font-semibold text-blue-600 dark:text-blue-300 uppercase tracking-[0.16em]">
                Quality & Details
              </p>

              <h3 className="mt-2 text-[17px] font-semibold">
                디테일까지 책임지는 퍼블리셔
              </h3>

              <p className="mt-2 text-[14px] leading-relaxed text-gray-700 dark:text-white/70 max-w-[420px]">
                픽셀 단위 간격, 폰트 계층, 인터랙션 반응성 등 작은 요소들이
                최종 경험을 좌우한다고 생각합니다. 브라우저와 디바이스별로
                안정적으로 동작하도록 꼼꼼히 검수합니다. 완성도를 높이는 작업에 가장 많은 시간을 투자합니다.
              </p>
            </div>
            {/* Card 03 */}
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
                <StrengthLottie className="h-52 w-52 sm:h-64 sm:w-64 " animation={animationData}/>
              </div>

              <p className="mt-6 text-[11px] font-semibold text-blue-600 dark:text-blue-300 uppercase tracking-[0.16em]">
                Collaboration & Delivery
              </p>
              <h3 className="mt-2 text-[17px] font-semibold">
                같이 일하기 즐거운 사람
              </h3>
              <p className="mt-2 text-[14px] leading-relaxed text-gray-700 dark:text-white/70 max-w-[420px]">
                기획·디자인·개발이 각각 어떤 역할을 수행하는지 이해하고,
                피그마·노션 등의 협업 툴로 히스토리를 남겨 우선순위를 정리해
                마감일 안에 완성도 있는 결과물을 내는 것을 중요하게 생각합니다.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
