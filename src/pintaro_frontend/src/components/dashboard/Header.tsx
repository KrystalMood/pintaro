export default function Header(): JSX.Element {
    return (
        <header className="bg-[#2c2c2c] h-[25dvh] mt-16 w-full">
            <div className="container mx-auto px-4 h-full">
                <div className="flex justify-between items-center h-full">
                    <div className="text-white">
                        <h1 className="text-6xl font-bold mb-2">Selamat Datang, User!</h1>
                        <p className="text-xl text-gray-300">Mulai petualangan belajarmu hari ini</p>
                    </div>
                </div>
            </div>
        </header>
    )
}