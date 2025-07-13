"use client";

import Image from "next/image";
import { AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import DesktopIcon from "@/components/desktop-icon";
import Window from "@/components/window";
import About from "@/components/window-components/about";
import Portfolio from "@/components/window-components/portfolio";
import Settings from "@/components/window-components/settings";
import Studio from "@/components/window-components/studio";
import Game from "@/components/window-components/game";

export default function Desktop() {
  const desktopRef = useRef<HTMLDivElement>(null);

  const [isGameOpen, setIsGameOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);
  

  return (
    <div className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] anti-aliased overscroll-none">
      <Navbar />
      <div
        ref={desktopRef}
        className="relative desktop-content-mobile md:desktop-content"
      >
        {/* main content */}
        <main className="flex flex-wrap justify-start items-start gap-x-16 gap-y-12 p-5 mt-5 ml-5">
          {/* left column */}
          <div className="flex flex-col gap-[45px]">
            {/* left desktop icons */}
            <DesktopIcon
              title="about.pdf"
              icon={
                <Image
                  src="/pdf.svg"
                  alt="pixel pdf file icon"
                  width={500}
                  height={500}
                />
              }
              onClick={() => setIsAboutOpen(true)}
            />
            <DesktopIcon
              title="portfolio"
              icon={
                <Image
                  src="/portfolio.svg"
                  alt="window icon"
                  width={500}
                  height={500}
                />
              }
              onClick={() => setIsPortfolioOpen(true)}
            />
            <DesktopIcon
              title="tictactoe.app"
              icon={
                <Image 
                  src="/game.svg"
                  alt="arcade icon"
                  width={500}
                  height={500}
                  />
              }
              onClick={() => setIsGameOpen(true)}
            />
            {/* left window functions */}
            <AnimatePresence>
              {isAboutOpen && (
                <Window
                  title="about"
                  onClose={() => setIsAboutOpen(false)}
                  dragContainerRef={desktopRef}
                >
                  <About />
                </Window>
              )}

              {isPortfolioOpen && (
                <Window
                  title="studio"
                  onClose={() => setIsPortfolioOpen(false)}
                  dragContainerRef={desktopRef}
                >
                  <Portfolio />
                </Window>
              )}

              {isGameOpen && (
                <Window
                  title="tictactoe"
                  onClose={() => setIsGameOpen(false)}
                  dragContainerRef={desktopRef}
                >
                  <Game />
                </Window>
              )}
            </AnimatePresence>
          </div>
          {/* right column */}
          <div className="flex flex-col gap-[45px]">
            {/* right desktop icons */}
            <DesktopIcon
              title="settings.app"
              icon={
                <Image
                  src="/settings.svg"
                  alt="file icon"
                  width={500}
                  height={500}
                />
              }
              onClick={() => setIsSettingsOpen(true)}
            />
            <DesktopIcon
              title="studio.app"
              icon={
                <Image
                  src="/studio.svg"
                  alt="window icon"
                  width={500}
                  height={500}
                />
              }
              onClick={() => setIsStudioOpen(true)}
            />
            {/* right window functions */}
            <AnimatePresence>
              {isSettingsOpen && (
                <Window
                  title="site preferences"
                  onClose={() => setIsSettingsOpen(false)}
                  dragContainerRef={desktopRef}
                >
                  <Settings />
                </Window>
              )}
              {isStudioOpen && (
                <Window
                  title="portfolio"
                  onClose={() => setIsStudioOpen(false)}
                  dragContainerRef={desktopRef}
                >
                  <Studio />
                </Window>
              )}
            </AnimatePresence>
          </div>
        </main>
      </div>
    </div>
  );
}
