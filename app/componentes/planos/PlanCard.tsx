interface PlanCardProps {
    title: string
    period: string
    features: string[]
    whatsappNumber: string
    highlight?: boolean
}

export default function PlanCard({
    title,
    period,
    features,
    whatsappNumber,
    highlight
}: PlanCardProps) {
    const message = encodeURIComponent(
        'Olá! Gostaria de consultar os valores do plano.'
    )

    return (
        <div
            className={`
        group relative
        w-full max-w-sm rounded-2xl p-6 border
        transition-all duration-300 ease-out
        transform-gpu

        hover:-translate-y-2
        hover:scale-[1.03]

        ${highlight
                    ? `
              bg-gradient-to-b from-cyan-400/20 to-slate-950
              border-cyan-400
              shadow-[0_0_35px_rgba(34,211,238,0.45)]
              scale-105
            `
                    : `
              bg-slate-950
              border-slate-800
              hover:border-cyan-400/60
              hover:shadow-[0_0_25px_rgba(34,211,238,0.2)]
            `
                }
      `}
        >
            {/* Glow fundo */}
            {highlight && (
                <div className="absolute inset-0 rounded-2xl bg-cyan-400/10 blur-2xl -z-10" />
            )}

            {/* Título */}
            <h3 className="text-xl font-semibold mb-2 text-center tracking-wide">
                {title}
            </h3>

            {/* Período */}
            <div className="text-center mb-6">
                <span className="text-sm text-gray-400">
                    /{period}
                </span>
            </div>

            {/* Benefícios */}
            <ul className="space-y-3 mb-6 text-sm">
                {features.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center gap-2 text-gray-200"
                    >
                        <span
                            className={`
                w-2 h-2 rounded-full
                ${highlight
                                    ? 'bg-cyan-400'
                                    : 'bg-cyan-500/70'
                                }
              `}
                        />
                        {item}
                    </li>
                ))}
            </ul>

            {/* CTA */}
            <a
                href={`https://wa.me/${whatsappNumber}?text=${message}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`
          block text-center py-2 rounded-lg font-medium
          transition-all duration-300

          ${highlight
                        ? `
                bg-black text-cyan-400
                border border-cyan-400
                hover:bg-cyan-400 hover:text-black
              `
                        : `
                bg-cyan-500 text-black
                hover:bg-cyan-400
              `
                    }
        `}
            >
                Consulte os valores
            </a>
        </div>
    )
}
