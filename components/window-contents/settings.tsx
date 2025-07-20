import Image from "next/image";
import Link from "next/link";

export default function Settings() {
  return (
    <div className="p-4 space-y-6 font-mono">
      <div className="flex flex-col rounded-xl shadow-lg border border-[var(--accent-warm)] items-center md:items-start gap-3 mt-5 px-3 py-5">
        <h3 className="font-bold text-lg">settings</h3>
        <ul className="list-inside"> 
          <li>dark mode</li>
          <li>motion on/off</li>
        </ul>
      </div>
    </div>
  ) 
}