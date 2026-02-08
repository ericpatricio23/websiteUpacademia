import Link from "next/link"

export default function Hero() {
    return (
        <section className="w-full bg-[#05070d]">

            <div className="max-w-7xl mx-auto px-4 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">


                <div>

                    <h2 className="text-4xl md:text-5xl font-bold leading-tight text-white">

                        Eleve seu treino ao <br />

                        <span className="text-cyan-400">
                            próximo nível
                        </span>

                    </h2>

                    <p className="mt-6 text-gray-400 max-w-lg">
                        Estrutura completa, acompanhamento profissional e planos acessíveis
                        para você alcançar resultados reais.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        <a
                            href="https://wa.me/55996910672?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20a%20academia"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-6 py-3 bg-cyan-400 text-black font-semibold rounded-md text-center hover:bg-cyan-500 transition"
                        >
                            Agendar visita
                        </a>


                        <a
                            href="#planos"
                            className="px-6 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-md text-center hover:bg-cyan-400 hover:text-black transition"
                        >
                            Ver planos
                        </a>


                    </div>

                </div>


                <div className="bg-[#0f172a] p-7 rounded-xl shadow-2xl">

                    <h3 className="text-lg font-semibold text-white mb-5">
                        Por que treinar na UpAcademia?
                    </h3>

                    <ul className="space-y-3 text-gray-300 text-sm">

                        <li>✔️ Equipamentos modernos</li>
                        <li>✔️ Profissionais qualificados</li>
                        <li>✔️ Profissionais qualificados</li>
                        <li>✔️ Horários flexíveis</li>

                    </ul>
                    <Link
                        href="/sobre"
                        className="mt-6 block w-full px-5 py-3 bg-cyan-400 text-black font-semibold rounded-md text-center hover:bg-cyan-500 transition"
                    >
                        Conheça a Up
                    </Link>

                </div>

            </div>

        </section>
    )
}
