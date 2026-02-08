import PlanCard from "./PlanCard"

export default function Plans() {
    return (
        <section
            id="planos"
            className="w-full bg-[#020617] text-white py-20"
        >
            <div className="max-w-7xl mx-auto px-4">


                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold mb-3">
                        Nossos Planos
                    </h2>

                    <p className="text-gray-400 max-w-xl mx-auto">
                        Escolha o plano ideal para seu objetivo.
                    </p>
                </div>


                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">


                    <PlanCard
                        title="Plano Mensal"
                        period="mês"
                        whatsappNumber="55996910672"
                        features={[

                            'Acesso livre',
                            'Treinos personalizados',
                            'Supervisão dos instrutores'
                        ]}
                    />


                    <PlanCard
                        title="Plano Semestral"
                        period="mês"
                        highlight
                        whatsappNumber="55996910672"
                        features={[
                            'Acesso às turmas coletivas de gap, funcional e ritmos',
                            'Acesso livre',
                            'Treinos personalizados',
                            'Supervisão dos instrutores'
                        ]}
                    />


                    <PlanCard
                        title="Plano Trimestral"
                        period="mês"
                        whatsappNumber="55996910672"
                        features={[
                            'Acesso livre',
                            'Treinos personalizados',
                            'Supervisão dos instrutores'
                        ]}
                    />

                </div>
            </div>
        </section>
    )
}
