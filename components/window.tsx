"use client";

import { motion } from "framer-motion";

export default function Window({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="absolute top-20 left-20 w-[500px] h-[400px] bg-[#FFEEDB] border border-gray-300 shadow-xl z-40"
      drag
      dragConstraints={{ top: 0, left: 0, right: 1000, bottom: 1000 }}
      dragElastic={0.2}
      dragMomentum={false}
    >
      <motion.div className="bg-gray-800 text-white flex justify-between items-center px-2 py-1">
        <span>{title}</span>
        <button
          className="bg-red-400 pr-2 pl-2 p-1 text-xs hover:bg-red-500 cursor-pointer"
          onClick={onClose}
        >
          X
        </button>
      </motion.div>
      <div className="p-4 overflow-auto">{children}</div>
    </motion.div>
  );
}
