"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [date, setDate] = useState(new Date());
  const [is24Hour, set24Hour] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatDateTime = (date: Date, is24Hour: boolean) => {
    const dateSection = date.toLocaleDateString(undefined, {
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const timeSection = date.toLocaleTimeString([], {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: !is24Hour,
    });

    return `${dateSection} · ${timeSection}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-10 md:h-11 bg-[#567568] text-[#f0f0f0] flex justify-between items-center px-3 md:px-6 text-xs md:text-sm font-mono z-50 antialiased">
      <span className="font-medium md:text-base">danny mallya's portfolio</span>
      <div className="flex items-center gap-4">
        <span suppressHydrationWarning>{formatDateTime(date, is24Hour)}</span>
        <button
          className="cursor-pointer rounded-sm px-2 py-1 outline-1 hover:scale-[1.07] bg-[#FFEEDB] text-black transition-transform duration-100 ease-in-out"
          onClick={() => set24Hour(!is24Hour)}
        >
          {is24Hour ? "12h" : "24h"}
        </button>
      </div>
    </div>
  );
}