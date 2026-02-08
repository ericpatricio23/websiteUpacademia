// pages/about.tsx
import Image from 'next/image'
import React from 'react'

export default function About() {
    return (
        <div className="flex flex-col items-center w-full">

            {/* TÍTULO E APRESENTAÇÃO */}
            <section className="w-full bg-blue-600 text-white text-center py-16 px-4 md:px-0">
                <h1 className="text-3xl md:text-5xl font-bold mb-6">Quem Somos</h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto">
                    Somos uma academia dedicada a transformar corpo e mente, oferecendo treinos personalizados, equipamentos modernos e profissionais altamente qualificados.
                    Motivação, disciplina e resultados reais esperam por você!
                </p>
            </section>

            {/* SEÇÃO EQUIPE COM FUNDO CIANO E RESPONSIVA */}
            <section className="w-full px-4 md:px-0 py-16 bg-slate-50 flex flex-col md:flex-row items-center justify-center gap-12">

                {/* Texto sobre a equipe */}
                <div className="flex flex-col justify-center items-center md:items-start max-w-lg text-center md:text-left">
                    <p className="text-gray-800 text-base md:text-lg">
                        Nossa equipe é formada por profissionais experientes e apaixonados pelo que fazem. Cada treinador domina técnicas de musculação, funcional, pilates e nutrição esportiva,
                        garantindo orientação personalizada, motivação contínua e acompanhamento completo do seu progresso. Estamos aqui para tornar seus objetivos realidade com segurança e eficiência.
                    </p>
                </div>

                {/* Foto da equipe MAIOR */}
                <div className="flex justify-center md:justify-center">
                    <div className="w-72 h-72 md:w-96 md:h-96 relative rounded-lg overflow-hidden shadow-lg bg-cyan-700">
                        <Image
                            src="/academia/IMG_3081.JPG.jpeg"
                            alt="Nossa equipe"
                            fill
                            className="object-cover object-center"
                            priority
                        />
                    </div>
                </div>

            </section>

            {/* GALERIA DE EQUIPAMENTOS */}
            <section className="w-full bg-black py-16 px-4 md:px-0">
                <h2 className="text-2xl md:text-4xl font-semibold text-center text-white mb-4">Conheça nossa Estrutura</h2>

                {/* FRASE ABAIXO DO TÍTULO */}
                <div className="max-w-4xl mx-auto text-center text-white mb-12">
                    <h3 className="text-xl md:text-3xl font-semibold mb-4">Equipamentos Modernos</h3>
                    <p className="text-base md:text-lg">
                        Contamos com equipamentos de última geração para garantir treinos eficientes, seguros e completos.
                    </p>
                </div>

                {/* GALERIA */}
                <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                    {[
                        "img_8414.jpg", "img_8415.jpg", "img_8416.jpg", "img_8417.jpg",
                        "img_8418.jpg", "img_8422.jpg", "img_8424.jpg", "img_8428.jpg",
                        "img_8429.jpg", "img_8430.jpg", "img_8432.jpg", "img_8435.jpg", "img_8436.jpg"
                    ].map((foto, index) => (
                        <div key={index} className="w-full relative rounded-lg overflow-hidden shadow-md bg-black">
                            <Image
                                src={`/academia/${foto}`}
                                alt={`Estrutura ${index + 1}`}
                                width={360}
                                height={300}
                                className="object-contain"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                            />
                        </div>
                    ))}
                </div>
            </section>

        </div>
    )
}
