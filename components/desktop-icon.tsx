export default function DesktopIcon({
  title,
  icon,
  onClick,
}: {
  title: string;
  icon: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer p-3 rounded-md text-center flex flex-col items-center hover:scale-[1.05] hover:bg-[#333031] active:outline transition-all duration-200 ease-in-out"
    >
      <div className="w-12 h-12 md:w-15 md:h-15 rounded mb-2">{icon}</div>
      <p className="p-0.5 text-sm anti-aliased">{title}</p>
    </div>
  );
}
