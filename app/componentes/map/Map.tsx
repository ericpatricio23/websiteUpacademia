export default function Map() {
    return (
        <section className="w-full bg-slate-950 py-16">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2 text-white">
                        Nosso endereço está localizado na rua
                    </h2>

                    <p className="text-gray-300">
                        Av. Assis Brasil, 336 - Cidade Alta, Alegrete - RS, 97545-081
                    </p>
                </div>

                {/* Container do mapa */}
                <div className="w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-slate-800 shadow-lg hover:border-cyan-400/60 transition">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3462.514304045336!2d-55.7995672!3d-29.791682700000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95aab9d37f5b1abb%3A0x4fa2e4b5a3115eb7!2sAv.%20Assis%20Brasil%2C%20336%20-%20Centro%2C%20Alegrete%20-%20RS%2C%2097543-001!5e0!3m2!1spt-BR!2sbr!4v1770493102030!5m2!1spt-BR!2sbr"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>

            </div>
        </section>
    )
}

