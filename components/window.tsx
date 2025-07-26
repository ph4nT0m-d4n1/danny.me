"use client";

import { motion, scale } from "framer-motion";
import { RefObject } from "react";
import styles from "@/styles/window.module.css";
import Image from "next/image";

export default function Window({
  title,
  onClose,
  children,
  dragContainerRef,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  dragContainerRef: RefObject<HTMLElement | null>;
}) {
  return (
    <motion.div
      className="fixed bg-[var(--bg-darker)] items-center md:top-1/4 md:left-1/4 w-[90vw] max-w-[500px] h-[80vh] max-h-[400px] md:max-h-[500px] rounded-lg shadow-xl]"
      initial={{ opacity: 0.25, scale: 0.85 }}
      transition={{ type: "tween", duration: 0.2 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.5 }}
      drag
      dragConstraints={dragContainerRef}
      dragElastic={false}
      dragMomentum={false}
    >
      {/* title bar FFEEDB */}
      <div className="h-12 text-[var(--foreground)] flex flex-row justify-between items-center rounded-t-lg px-4 py-3 cursor-grab active:cursor-grabbing border-[1.5] border-b-1 border-[var(--window-border)]">
        <span className="text-sm font-mono font-semibold">{title}</span>
        <div className="px-3 py-2 cursor-default -mr-4">
          <button
            onClick={onClose}
            className="cursor-pointer w-8 h-8 bg-[var(--accent-exit)] border border-[var(--window-border)] text-sm font-light text-black rounded-lg font-bold flex items-center justify-center focus:outline-none transition-colors"
          >
            <Image
              src={"/window/exit.svg"}
              alt="exit button"
              height={100}
              width={100}
            />
          </button>
        </div>
      </div>
      {/* window content */}
      <div
        className={`${styles.windowContent} overflow-auto scrollbar-thin text-[var(--foreground)] rounded-b-lg border-[1.5] border-t-0 border-[var(--window-border)]`}
      >
        <div className="p-2">{children}</div>
      </div>
    </motion.div>
  );
}
