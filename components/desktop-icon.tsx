export default function DesktopIcon({title, onClick}: {title: string; onClick: () => void}) {
    return (
        <div onClick={onClick} className="cursor-pointer text-center">
            <div className="w-12 h-12 bg-gray-700 rounded mb-1"/>
            <p className="text-sm text-white">{title}</p>
        </div>
    )
}