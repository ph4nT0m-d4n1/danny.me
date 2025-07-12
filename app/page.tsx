"use client";

import Image from "next/image";
import { useState, useRef } from "react";
import Navbar from "@/components/navbar";
import DesktopIcon from "@/components/desktop-icon";
import Window from "@/components/window";
import About from "@/components/window-components/about";

export default function Desktop() {
  const desktopRef = useRef<HTMLDivElement>(null);

  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isPortfolioOpen, setIsPortfolioOpen] = useState(false);

  return (
    <div
      ref={desktopRef}
      className="flex flex-col min-h-screen font-[family-name:var(--font-geist-sans)] anti-aliased overscroll-none"
    >
      <Navbar />
      {/* main content */}
      <main className="flex flex-wrap justify-start items-start gap-x-16 gap-y-12 p-5 mt-15 ml-5">
        {/* left column */}
        <div className="flex flex-col gap-[45px]">
          <DesktopIcon
            title="about.pdf"
            icon={
              <Image src="/pdf.svg" alt="pixel pdf file icon" width={500} height={500} />
            }
            onClick={() => setIsAboutOpen(true)}
          />
          {isAboutOpen && (
            <Window
              title="about me"
              onClose={() => setIsAboutOpen(false)}
              dragContainerRef={desktopRef}
            >
              <About />
            </Window>
          )}
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
          {isPortfolioOpen && (
            <Window
              title="studio"
              onClose={() => setIsPortfolioOpen(false)}
              dragContainerRef={desktopRef}
            >
              <p className="text-black">the stuff i be doing n shiii</p>
            </Window>
          )}
        </div>
        {/* right column */}
        <div className="flex flex-col gap-[45px]">
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
          {isSettingsOpen && (
            <Window
              title="site preferences"
              onClose={() => setIsSettingsOpen(false)}
              dragContainerRef={desktopRef}
            >
              <p className="text-black anti-aliased">
                tweak the colors my bruva
              </p>
            </Window>
          )}
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
          {isStudioOpen && (
            <Window
              title="studio"
              onClose={() => setIsStudioOpen(false)}
              dragContainerRef={desktopRef}
            >
              <p className="text-black">la musica!</p>
            </Window>
          )}
        </div>
      </main>
    </div>
  );
}
