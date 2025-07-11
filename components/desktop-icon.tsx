export default function DesktopIcon({title, icon, onClick}: {title: string; icon:React.ReactNode; onClick: () => void}) {
    return (
        <div onClick={onClick} className="cursor-pointer text-center">
            <div className="w-12 h-12 rounded mb-1">{icon}</div>
            <p className="text-sm text-white anti-aliased">{title}</p>
        </div>
    )
}