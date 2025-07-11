export default function Window ({title, onClose, children}: 
    {title: string; onClose: () => void; children : React.ReactNode}) {
        return (
            <div className="absolute top-20 left-20 w-[500px] h-[400px] bg-white border border-gray-300 shadow-xl z-40">
                <div className="bg-gray-800 text-white flex justify-between items-center px-2 py-1">
                    <span>{title}</span>
                    <button onClick={onClose}>X</button>
                </div>
                <div className="p-4 overflow-auto">{children}</div>
            </div>
        );
}