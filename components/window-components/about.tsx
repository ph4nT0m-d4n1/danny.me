import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="p-4 font-mono text-black space-y-6 antialiased">
      {/* image + bio */}
      <div className="flex flex-col md:flex-row rounded-xl shadow-lg border border-[var(--accent-warm)] items-center md:items-start gap-6 px-3 py-5">
        {/* avatar */}
        <div className="w-32 h-32 shrink-0">
          {
            <Image
              className="rounded-full object-cover w-full h-full"
              src={"/cool.jpeg"}
              alt="profile pic"
              height={500}
              width={500}
            />
          }
        </div>
        {/* name + short desc */}
        <div className="flex flex-col space-y-2 text-center md:text-left px-3 py-3">
          <h3 className="text-xl font-bold">Danny I. Mallya</h3>
          <p className="text-gray-900 max-w-sm">
            Information Science & Immersive Media Design student at the University of Maryland.
          </p>
        </div>
      </div>
      {/* experience section */}
      <div className="flex flex-col rounded-xl shadow-lg border border-[var(--accent-warm)] text-center md:text-left px-4 py-5">
        <h3 className="font-semibold text-lg underline mb-2">Projects</h3>
        <ul className="list-image-[url(/link.svg)] list-inside space-y-1 text-sm text-gray-900 border-left">
          <li>
            <Link href={"https://github.com/ph4nT0m-d4n1/IMDM290_Soundscape"}>
            Soundscape {" "}
            </Link>
            <span className="inline md:hidden"> ------------- 2025</span>
            <span className="hidden md:inline"> ---------------------------- 2025</span>
          </li>
          <li>
            <Link href={"https://github.com/ph4nT0m-d4n1/INST326_WeatherFIT"}>
            WeatherFIT {" "}
            </Link>
            <span className="inline md:hidden"> ------------- 2025</span>
            <span className="hidden md:inline"> ---------------------------- 2025</span>
          </li>
          <li>
            <Link href={"https://github.com/ph4nT0m-d4n1/IMDM227_Tokkari"}>
            Tokkari 2D {" "}
            </Link>
            <span className="inline md:hidden"> ------------- 2024</span>
            <span className="hidden md:inline"> ---------------------------- 2024</span>
          </li>
          <li>
            <Link href={"https://youtu.be/dQw4w9WgXcQ?si=oUxv28QRZpJtXK-n"}>
            Project BEE VR {" "}
            </Link>
            <span className="inline md:hidden"> --------- 2023</span>
            <span className="hidden md:inline"> ------------------------ 2023</span>
          </li>
        </ul>
      </div>
      {/* connections */}
      <div className="flex flex-col rounded-xl shadow-lg border border-[var(--accent-warm)] text-center md:text-left px-4 py-5">
        <h3 className="font-semibold text-lg underline mb-2">Let's Connect!</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-900 border-left">
          <li>
            <Link href={"https://www.linkedin.com/in/daniel-mallya-71b928235/"}>
            LinkedIn {" "}
            </Link>
          </li>
          <li>
            <Link href={"https://github.com/ph4nT0m-d4n1"}>
            GitHub {" "}
            </Link>
          </li>
          <li>
            <Link href={""}>
            Steam {" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex flex-col rounded-xl shadow-lg border border-[var(--accent-warm)] text-center md:text-left px-4 py-5">
        <h3 className="font-semibold text-lg underline mb-2">About</h3>
        <p>my portfolio site, inspired by retro desktop UIs</p>
      </div>
      <div className="flex flex-col rounded-xl shadow-lg border border-[var(--accent-warm)] text-center md:text-left px-4 py-5">
        <h3 className="font-semibold text-lg underline mb-2">Changelog</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-900 border-left">
          <li>bleep and maybe bloop</li>
        </ul>
      </div>
    </div>
  );
}
