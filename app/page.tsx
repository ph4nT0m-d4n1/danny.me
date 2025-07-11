"use client";

import Image from "next/image";
import { useState } from "react";
import Navbar from "@/components/navbar";
import DesktopIcon from "@/components/desktop-icon";
import Window from "@/components/window";

export default function Desktop() {
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isStudioOpen, setIsStudioOpen] = useState(false);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-[32px] row-start-0 mt-40 p-5 sm:items-start">
        <DesktopIcon title="About Me" icon={<Image src="/file.svg" alt="file icon" width={500} height={500} />} onClick={() => setIsAboutOpen(true)} />
          {isAboutOpen && (
            <Window title="About Me" onClose={() => setIsAboutOpen(false)}>
              <p className="text-black">this is the part where I yap abt me</p>
            </Window>
          )}
          <DesktopIcon title="studio" icon={<Image src="/window.svg" alt="window icon" width={500} height={500} />} onClick={() => setIsStudioOpen(true)} />
          {isStudioOpen && (
            <Window title="studio" onClose={() => setIsStudioOpen(false)}>
              <p className="text-black">la musica!</p>
            </Window>
          )}
      </main>
    </div>
  );
}
