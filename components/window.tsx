"use client";

import { motion } from "framer-motion";
import { RefObject } from "react";
import '@/styles/globals.css'

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
      className="absolute items-center md:top-1/4 md:left-1/4 w-[90vw] max-w-[500px] h-[80vh] max-h-[500px] bg-[#FFEEDB] rounded-sm border border-gray-300 shadow-xl z-40"
      drag
      dragConstraints={dragContainerRef}
      dragElastic={0.1}
      dragMomentum={false}
    >
      {/* title bar */}
      <div className="h-8 bg-[#567568] text-white flex justify-between items-center px-2 py-1 cursor-grab active:cursor-grabbing">
        <span className="text-sm font-semibold">{title}</span>
        <button
          onClick={onClose}
          className="cursor-pointer w-8 -mr-2 h-8 bg-red-400 hover:bg-red-500 text-xs text-white font-bold flex items-center justify-center rounded-none focus:outline-none transition-colors"
        >
          X
        </button>
      </div>
      {/* window content */}
      <div className="overflow-auto window-content">
        <div className="p-4">{children}</div>
      </div>
    </motion.div>
  );
}
