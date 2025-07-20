"use client";

import { motion, scale } from "framer-motion";
import { RefObject } from "react";
import styles from '@/styles/window.module.css'

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
      className="absolute bg-[var(--primary)] items-center md:top-1/4 md:left-1/4 w-[90vw] max-w-[500px] h-[80vh] max-h-[400px] md:max-h-[500px] rounded-sm border border-gray-400 shadow-xl z-[var(--proppy)] active:z-[calc(var(--proppy)+99)] "
      layout
      initial={{opacity: 0.25, scale: 0.85}}
      transition={{type: "tween", duration:0.2}}
      animate={{opacity: 1, scale: 1}}
      exit={{opacity: 0, scale: 0.5}}
      drag
      dragConstraints={dragContainerRef}
      dragElastic={false}
      dragMomentum={false}
    >
      {/* title bar FFEEDB */}
      <div className="h-8 text-[var(--foreground)] flex justify-between items-center rounded-sm px-2 py-1 cursor-grab active:cursor-grabbing">
        <span className="text-sm font-semibold">{title}</span>
        <button
          onClick={onClose}
          className="cursor-pointer w-8 -mr-2 h-8 hover:bg-red-400 text-sm font-light text-[var(--background)] rounded-r-sm font-bold flex items-center justify-center focus:outline-none transition-colors"
        >
          X
        </button>
      </div>
      {/* window content */}
      <div className={`${styles.windowContent} overflow-auto scrollbar-thin text-[var(--background)] border-x-5 border-b-5 rounded-b-sm`}>
        <div className="p-2">{children}</div>
      </div>
    </motion.div>
  );
}
