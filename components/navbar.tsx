'use client';

import { useState, useEffect } from "react";

export default function Navbar() {
    const [date, setDate] = useState(new Date())
    const [is24Hour, set24Hour] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setDate (new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const formatTime = (date: Date) => {
        return is24Hour ? date.toLocaleDateString ([], {hour:"numeric", minute: "numeric", second: "numeric", hour12: false})
        : date.toLocaleDateString([], {hour:"numeric", minute: "numeric", second: "numeric", hour12: true})
    };

    return (
        <div className="fixed top-0 left-0 right-0 h-11 bg-[#567568] text-black flex justify-between items-center px-4 text-sm font-mono z-50">
            <span>danny mallya's portfolio</span>
            <div className = "flex items-center gap-4">
                <span>{formatTime(date)}</span>
                <button className="rounded-sm pr-2 pl-2 p-0.5 outline-1 hover:scale-[1.07] bg-[#FFEEDB] text-black" onClick={() => set24Hour(!is24Hour)}>
                    {is24Hour ? "12h" : "24h"}
                </button>
            </div>
        </div>
    )
}