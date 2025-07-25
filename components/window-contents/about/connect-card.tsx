import Link from "next/link";

export default function ConnectCard({
  icon,
  title,
  link,
}: {
  icon: React.ReactNode;
  title: string;
  link: string;
}) {
  return (
    <Link href={link}>
      <div className="flex flex-row mb-1">
        <div className="w-13 h-16 ml-3 relative ml-5">
          {icon}
        </div>
        <div className="mt-7 ml-2">
          <h4 className="text-lg font-semibold">{title}</h4>
        </div>
      </div>
    </Link>
  );
}
