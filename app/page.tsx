"use client";

import { Cover } from '@/app/components/ui/typewriter/Cover'
import { Intro } from "@/app/pages/Intro";
import { CoreSkills } from '@/app/pages/CoreSkills'
import ThemeToggle from '@/app/components/ui/themtoggle/ThemeToggle'
import Strength from '@/app/pages/strength/Strength'
import { Career } from '@/app/pages/Career'
import { Project } from '@/app/pages/Project'
import { FloatingNav } from '@/app/components/ui/FloatingNav'
import { FlipWordsDemo } from '@/app/components/ui/flipwords/FlipWordsDemo'
import { ScrollToTopButton } from '@/app/components/ui/ScrollToTopButton'



export default function Home() {
  return (
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
      {/* section05 */}
        <Career />
      {/* section06 Projects */}
      <Project />
      <FlipWordsDemo />
      <ScrollToTopButton />
    </main>
  );
}
