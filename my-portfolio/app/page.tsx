"use client";

import { SectionDashboard } from "@/app/pages/Kase"
import { Cover } from '@/app/components/ui/typeWriter/Cover'
import { Intro } from "@/app/pages/Intro";
import { CoreSkills } from '@/app/pages/CoreSkills'
import ThemeToggle from '@/app/components/ui/themToggle/ThemeToggle'
import { ExpandableCardDemo } from '@/app/components/ui/ExpandableCardDemo'
import Strength from '@/app/pages/Strength'
import { Career } from '@/app/pages/Career'
import { Project } from '@/app/pages/Project'
import { FloatingNav } from '@/app/components/ui/FloatingNav'


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
      {/*<ExpandableCardDemo />*/}
      {/*<SectionDashboard />*/}
    </main>
  );
}
