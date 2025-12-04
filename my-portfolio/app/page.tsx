"use client";

import { SectionDashboard } from "@/app/pages/Kase"
import { Cover } from '@/app/components/ui/typeWriter/Cover'
import { Intro } from "@/app/pages/Intro";
import { CoreSkills } from '@/app/pages/CoreSkills'
import ThemeToggle from '@/app/components/ui/themToggle/ThemeToggle'
import { ExpandableCardDemo } from '@/app/components/ui/ExpandableCardDemo'
import Strength from '@/app/pages/Strength'
import { Career } from '@/app/pages/Career'


export default function Home() {
  return (
    <main
      className="min-h-screen bg-white text-black dark:bg-[#0D0D0E] dark:text-white transition-colors duration-300">
      <header className="fixed top-5 right-5 z-100">
        <ThemeToggle/>
      </header>
      {/* section01 KV */}
      <section className="relative h-screen snap-start flex items-center justify-center px-6 w-full overflow-hidden">
        <Cover />
      </section>
      {/* section02 intro text */}
      <Intro />
      {/* section03 Strength*/}
      <Strength />
      {/* section04 Skills */}
      <CoreSkills />
      {/* section05 */}
      {/*<ExpandableCardDemo />*/}
      <Career />
      {/*<SectionDashboard />*/}
    </main>
  );
}
