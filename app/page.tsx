"use client";

import { AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

import {
  AboutIcon,
  HeartIcon,
  PortfolioIcon,
  SettingsIcon,
  StudioIcon,
  TicTacIcon,
} from "@/components/icon-library";

import Navbar from "@/components/navbar";
import Window from "@/components/window";
import About from "@/components/window-contents/about/about";
import Portfolio from "@/components/window-contents/portfolio";
import Settings from "@/components/window-contents/settings";
import Studio from "@/components/window-contents/studio";

export default function Page() {
  const desktopRef = useRef<HTMLDivElement>(null);

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <div className="flex flex-col flex-wrap min-h-screen font-[family-name:var(--font-geist-mono)] overscroll-hidden">
      <Navbar />
      <div
        ref={desktopRef}
        className="relative desktop-content-mobile md:desktop-content"
      >
        {/* main content */}
        <main className="flex flex-wrap justify-start items-start gap-x-15 gap-y-10 p-5 ml-5">
          {/* left column */}
          <div className="flex flex-col gap-[2rem] font-semibold">
            {/* left desktop icons */}
            <AboutIcon onClick={() => setIsAboutOpen(true)} />
            <PortfolioIcon onClick={() => setIsPortfolioOpen(true)} />
            <StudioIcon onClick={() => setIsStudioOpen(true)} />
            {/* left window functions */}
            <AnimatePresence>
              {isAboutOpen && (
                <Window
                  key="about"
                  title="about"
                  onClose={() => setIsAboutOpen(false)}
                  dragContainerRef={desktopRef}
                >
                  <About />
                </Window>
              )}
              {isPortfolioOpen && (
                <Window
                  key="portfolio"
                  title="portfolio"
                  onClose={() => setIsPortfolioOpen(false)}
                  dragContainerRef={desktopRef}
                >
                  <Portfolio />
                </Window>
              )}
              {isStudioOpen && (
                <Window
                  key="studio"
                  title="studio"
                  onClose={() => setIsStudioOpen(false)}
                  dragContainerRef={desktopRef}
                >
                  <Studio />
                </Window>
              )}
            </AnimatePresence>
          </div>
          {/* right column */}
          <div className="flex flex-col gap-[2rem] font-mono font-semibold">
            {/* right desktop icons */}
            <SettingsIcon onClick={() => setIsSettingsOpen(true)} />
            {/* right window functions */}
            <AnimatePresence>
              {isSettingsOpen && (
                <Window
                  key="site-preferences"
                  title="site preferences"
                  onClose={() => setIsSettingsOpen(false)}
                  dragContainerRef={desktopRef}
                >
                  <Settings />
                </Window>
              )}
            </AnimatePresence>
          </div>
          <div className="flex flex-col gap-[2rem] font-mono font-semibold ml-auto">
            {/* right desktop icons */}
            <HeartIcon onClick={() => setIsSettingsOpen(true)} />
            <TicTacIcon onClick={() => setIsSettingsOpen(true)} />
            {/* right window functions */}
            <AnimatePresence>
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
