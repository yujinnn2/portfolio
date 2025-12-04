import { BackgroundGradientAnimation } from "@/app/components/ui/background-gradient-animation";
import { SectionDashboard } from "@/app/pages/Kase"
import { TypewriterEffect } from '@/app/components/ui/typewriter/typewriter-effect'
import { Cover } from '@/app/components/ui/typewriter/TypewriterEffectDemo'


const CORE_SKILLS = [
  {
    id: 1,
    badge: "Modern Frontend",
    title: "모던 프론트엔드 개발",
    description:
      "React와 Next.js를 중심으로 타입 안정성과 재사용성을 고려한 컴포넌트를 설계합니다. 구조적인 마크업과 접근성을 신경 쓰며, 실제 서비스 수준의 UI를 구현합니다.",
    // 나중에 이미지/아이콘 넣을 자리
  },
  {
    id: 2,
    badge: "Performance & UX",
    title: "웹사이트 개선 및 최적화",
    description:
      "레이아웃 재구성, DOM 구조 정리, 불필요한 렌더링 제거 등을 통해 사용자가 체감하는 속도를 개선합니다. 퍼포먼스 지표와 함께 before/after를 비교하며 작업합니다.",
  },
  {
    id: 3,
    badge: "Collaboration",
    title: "커뮤니케이션 및 협업",
    description:
      "기획, 디자인, 개발, 운영과 긴밀하게 소통하며 요구사항을 명확히 정리합니다. Jira, Notion, Slack, Github 등 협업 도구를 활용해 이력을 남기고 공유합니다.",
  },
]


export default function Home() {
  return (
    <main className="min-h-screen text-white">
      {/* section01 KV */}
      <section className="relative h-screen snap-start flex items-center justify-center px-6 w-full overflow-hidden">
        <Cover />
      </section>
      {/* section02 text */}
      <section id="section-2" className="bg-gray-50 h-[500px] text-black">
        <div className="mx-auto flex h-full max-w-4xl flex-col items-center justify-center px-4 text-center">
          <p className="text-[20px] sm:text-[28px] font-semibold leading-relaxed text-gray-900">
            내가 만든 UI와 인터랙션을 한눈에 보고,
            <br />
            실제 서비스에 가까운 화면들을 한 곳에서 살펴보세요.
          </p>
          <p className="mt-4 text-[16px] sm:text-[24px] leading-relaxed text-gray-700">
            디테일한 마크업과 구조적인 레이아웃,
            <br />
            토스·카카오 감성을 담은 웹 퍼블리셔 노유진의 작업을 소개합니다.
          </p>
        </div>
      </section>
      {/* section03 핵심 역량 카드 섹션 */}
      <section id="section-3" className="bg-white py-28">
        <div className="mx-auto max-w-6xl px-6">
          {/* 섹션 타이틀 */}
          <div className="text-center">
            <p className="text-[15px] font-semibold text-blue-500">
              핵심 역량
            </p>
            <h2 className="mt-3 text-[26px] sm:text-[32px] font-bold leading-tight text-[#181818]">
              유연하게 소통하고 견고하게 개발합니다.
            </h2>
          </div>

          {/* 카드 그리드 */}
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {CORE_SKILLS.map((item) => (
              <article
                key={item.id}
                className="
            flex flex-col
            rounded-2xl
            bg-white
            border border-[#E5E7EB]
            shadow-[0_4px_14px_rgba(0,0,0,0.05)]
            transition-all
            hover:-translate-y-1.5
            hover:shadow-[0_10px_25px_rgba(0,0,0,0.08)]
          "
              >
                {/* 상단 비주얼 영역 */}
                <div className="flex items-center justify-center rounded-t-2xl bg-gray-100 px-8 pt-10 pb-8">
                  <div className="h-16 w-16 rounded-xl bg-white border border-[#E5E7EB] flex items-center justify-center text-sm text-blue-600 font-semibold">
                    {item.badge}
                  </div>
                </div>

                {/* 텍스트 영역 */}
                <div className="flex flex-1 flex-col px-8 pt-6 pb-8">
                  <h3 className="text-[18px] font-semibold text-[#111827]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-[14px] leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section>
        <SectionDashboard />
      </section>
    </main>
  );
}
