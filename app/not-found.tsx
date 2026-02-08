import Link from "next/link";

export default function NotFound() {
    return (
        <section className="w-full h-screen flex items-center justify-center bg-slate-950 px-4">
            <div className="text-center">
                <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">
                    404
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 mb-6">
                    Página não encontrada
                </h2>
                <p className="text-gray-400 mb-8">
                    A página que você está procurando não existe.
                </p>

                <Link
                    href="/"
                    className="px-6 py-3 bg-cyan-500 hover:bg-cyan-600 text-white rounded-2xl font-semibold transition"
                >
                    Voltar para a página inicial
                </Link>
            </div>
        </section>
    );
}
