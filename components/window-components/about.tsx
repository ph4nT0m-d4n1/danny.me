import Image from "next/image";

export default function About() {
  return (
    <div className="p-4 font-mono text-black space-y-6 antialiased">
      {/* image + bio */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
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
        <div className="flex flex-col space-y-2 text-center md:text-left]">
          <h3 className="text-xl font-bold">Danny I. Mallya</h3>
          <p className="text-gray-800 max-w-sm">
            Information Science & Immersive Media Design student at the University of Maryland.
          </p>
        </div>
      </div>

      {/* experience section */}
      <div>
        <h3 className="underline font-semibold text-lg mb-2">experience</h3>
        <ul className="list-disc list-inside space-y-1 text-sm text-gray-900">
          <li>soundscape</li>
          <li>clarice tech shop</li>
        </ul>
      </div>
    </div>
  );
}
