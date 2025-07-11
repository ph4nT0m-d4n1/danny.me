"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/navbar";
import DesktopIcon from "@/components/desktop-icon";
import Window from "@/components/window";

export default function Desktop() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-0 items-center sm:items-start">
        <DesktopIcon title="About Me" onClick={() => setIsAboutOpen(true)} />
          {isAboutOpen && (
            <Window title="About Me" onClose={() => setIsAboutOpen(false)}>
              <p>This is the part where I yap abt me</p>
            </Window>
          )}
      </main>
    </div>
  );
}
