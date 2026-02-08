import Link from "next/link"

export default function Header() {
    return (
        <header className="w-full bg-[#0b5ed7] border-b border-white">

            <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">

                <h1 className="text-white text-xl font-bold">
                    <Link href={'/'}>upacademia</Link>
                </h1>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-8 text-sm text-white">
                        <li className="hover:text-cyan-200 transition">
                            <Link href={'/'}>Página Inicial</Link>
                        </li>

                        <li className="hover:text-cyan-200 transition">
                            <Link href={'/sobre'}>Quem Somos</Link>
                        </li>

                        <li className="hover:text-cyan-200 transition">
                            <a href="#map" className="hover:text-cyan-200 transition">
                                Localização
                            </a>
                        </li>

                        <li className="hover:text-cyan-200 transition">
                            <a href="#contatos" className="hover:text-cyan-200 transition">
                                Contatos
                            </a>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}
