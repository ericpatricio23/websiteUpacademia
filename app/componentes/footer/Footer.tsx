import Link from 'next/link'

import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaClock
} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer id='contatos' className="w-full bg-[#05070d] text-white">


            <div className="max-w-7xl mx-auto px-4 py-14 grid grid-cols-1 md:grid-cols-3 gap-12">


                <div>

                    <h3 className="text-lg font-semibold mb-5">
                        Contatos
                    </h3>

                    <ul className="space-y-4 text-gray-400 text-sm">


                        <li className="flex items-start gap-3">

                            <FaPhoneAlt className="text-cyan-400 mt-1" />

                            <span>(55) 99901-0032</span>

                        </li>


                        <li className="flex items-start gap-3">

                            <FaEnvelope className="text-cyan-400 mt-1" />

                            <span>upacademia@gmail.com</span>

                        </li>


                        <li className="flex items-start gap-3">

                            <FaMapMarkerAlt className="text-cyan-400 mt-1" />

                            <span>
                                Avenida Assis Brasil, 300 <br />
                                Alegrete - RS, 97545-000
                            </span>

                        </li>

                        <li className="flex items-start gap-3">

                            <FaClock className="text-cyan-400 mt-1" />

                            <span>
                                Seg a Sex: 06:00 às 22:00 <br />
                                Sáb e Dom: 08:00 às 15:00
                            </span>

                        </li>

                    </ul>

                </div>


                <div>

                    <h3 className="text-lg font-semibold mb-5">
                        Mapa do Site
                    </h3>

                    <ul className="space-y-3 text-gray-400 text-sm">

                        <li>
                            <Link href="/" className="hover:text-cyan-400 transition">
                                Página inicial
                            </Link>
                        </li>

                        <li>
                            <Link href="/sobre" className="hover:text-cyan-400 transition">
                                Quem somos
                            </Link>
                        </li>

                        <li>
                            <Link href="/#planos" className="hover:text-cyan-400 transition">
                                Planos
                            </Link>
                        </li>

                        <li>
                            <Link href={''} className="hover:text-cyan-400 transition">
                                Contato
                            </Link>
                        </li>

                    </ul>

                </div>


                <div>

                    <h3 className="text-lg font-semibold mb-5">
                        Redes Sociais
                    </h3>

                    <div className="flex gap-4">


                        <a
                            href="https://www.instagram.com/upacademia.alegrete/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-black transition"
                        >
                            <FaInstagram size={18} />
                        </a>


                        <a
                            href="https://www.facebook.com/photo/?fbid=122093054324733910&set=a.122093054360733910"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-black transition"
                        >
                            <FaFacebookF size={18} />
                        </a>

                        <a
                            href="https://wa.me/55996910672"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="WhatsApp"
                            className="w-10 h-10 flex items-center justify-center rounded-full bg-slate-800 hover:bg-cyan-400 hover:text-black transition"
                        >
                            <FaWhatsapp size={18} />
                        </a>

                    </div>

                </div>

            </div>


            <div className="border-t border-white/10 text-center py-5 text-sm text-gray-500">

                © 2026 upacademia — Todos os direitos reservados

            </div>

        </footer>
    )
}
