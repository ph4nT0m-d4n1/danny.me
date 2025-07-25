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
      second: undefined,
      hour12: !is24Hour,
    });

    return `${dateSection} · ${timeSection}`;
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-11 md:h-20 bg-[var(--bg-dark)] text-[var(--foreground)] flex justify-between items-center px-3 md:px-6 text-xs md:text-sm shadow-sm border border-[var(--bg-border)] z-50">
      <span className="font-bold md:text-base">D.ME</span>
      <div className="flex items-center gap-4">
        <span className="font-medium md:text-base" suppressHydrationWarning>{formatDateTime(date, is24Hour)}</span>
        <br></br>
        <button
          className="cursor-pointer rounded-lg px-4 py-2 outline-[1.5] outline-black shadow-md hover:scale-[1.08] bg-[var(--primary-mute)] text-[var(--background)] transition-transform duration-200 ease-in-out"
          onClick={() => set24Hour(!is24Hour)}
        >
          {is24Hour ? "12H" : "24H"}
        </button>
      </div>
    </div>
  );
}