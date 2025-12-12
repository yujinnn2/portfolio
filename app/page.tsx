"use client";

import { Cover } from '@/app/components/ui/typewriter/Cover'
import { Intro } from "@/app/pages/Intro";
import { CoreSkills } from '@/app/pages/CoreSkills'
import ThemeToggle from '@/app/components/ui/themtoggle/ThemeToggle'
import Strength from '@/app/pages/strength/Strength'
import { Career } from '@/app/pages/Career'
import { Project } from '@/app/pages/Project'
import { FloatingNav } from '@/app/components/ui/FloatingNav'
import { ScrollToTopButton } from '@/app/components/ui/ScrollToTopButton'
import { ScrollProgressBar } from '@/app/components/ui/ScrollProgressBar'
import { FlipWordsDemo } from '@/app/components/ui/flipwords/FlipWordsDemo'
import FooterContacts from '@/app/components/ui/FooterContants'



export default function Home() {
  return (
    <>
      <ScrollProgressBar
        height={3}
        zIndex={9999}
        className="bg-black/5 dark:bg-white/[0.06]"
        barClassName="
          bg-gradient-to-r
          from-sky-500 via-indigo-500 to-cyan-400
          shadow-[0_0_12px_rgba(56,189,248,0.25)]
        "
      />
      <main
      className="min-h-screen transition-colors duration-300">
      <header className="fixed top-5 right-5 z-100">
        <ThemeToggle/>
      </header>
      <FloatingNav/>
      {/* section01 KV */}
        <Cover />
      {/* section02 intro text */}
        <Intro />
      {/* section03 Strength*/}
        <Strength />
      {/* section04 Skills */}
        <CoreSkills />
      {/* section05 Career */}
        <Career />
      {/* section06 Projects */}
        <Project />
      {/* section07 Ending */}
        <FlipWordsDemo />
        <FooterContacts />
        <ScrollToTopButton />
    </main>
      </>
  );
}
