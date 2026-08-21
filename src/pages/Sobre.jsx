import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FeatureCard } from '../components/FeatureCard';
import { FaShieldAlt, FaBalanceScale, FaTachometerAlt, FaUtensils } from 'react-icons/fa';

export const Sobre = () => {
    // Array de dados para renderização dinâmica (Requisito 5)
    const codigoFeatures = [
        {
            id: 1,
            title: 'QUALIDADE VIGILANTE',
            text: 'Monitoramos cada ingrediente. Carnes selecionadas, vegetais frescos e um rigoroso controle que não descansa.',
            icon: <FaShieldAlt />,
        },
        {
            id: 2,
            title: 'JUSTIÇA NO SABOR',
            text: 'Equilíbrio perfeito em cada mordida. Onde o pão encontra a carne em uma harmonia inquestionável.',
            icon: <FaBalanceScale />,
        },
        {
            id: 3,
            title: 'VELOCIDADE',
            text: 'Entrega rápida, silenciosa e eficiente, como o próprio Batmóvel cortando a noite de Gotham.',
            icon: <FaTachometerAlt />,
        },
    ];

    return (
        <div className="min-h-screen bg-slate-900 font-sans selection:bg-yellow-500 selection:text-black">
            <Header />

            {/* Hero Section */}
            <section className="relative bg-[url('https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center py-32 px-6 text-center">
                <div className="absolute inset-0 bg-slate-950/80"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-5xl md:text-6xl text-yellow-500 font-black uppercase tracking-wider mb-6 text-shadow-lg">
                        A Lenda Por Trás Do Sabor
                    </h1>
                    <p className="text-slate-300 text-lg">
                        Nas sombras de Gotham, forjamos hambúrgueres que não são apenas uma
                        refeição, mas uma experiência definitiva.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    {/* Simulação da imagem do beco */}
                    <img
                        src="https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=2070&auto=format&fit=crop"
                        alt="Beco escuro de Gotham"
                        className="rounded-lg shadow-2xl grayscale contrast-125 border border-slate-700"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl text-yellow-500 font-black uppercase mb-6">
                        Nascido nas Sombras
                    </h2>
                    <p className="text-slate-300 mb-4 leading-relaxed">
                        Quando a fome ameaça as noites de Gotham, a BatBurguer emerge como a
                        resposta definitiva. Fundada nos becos escuros de uma metrópole que nunca
                        dorme, nossa jornada começou com um propósito claro: combater a mediocridade
                        culinária com ingredientes premium e técnicas implacáveis.
                    </p>
                    <p className="text-slate-300 leading-relaxed">
                        Não somos apenas mais uma lanchonete; somos a sentinela do sabor. Cada blend
                        é cuidadosamente arquitetado, cada molho é um segredo guardado a sete
                        chaves. Operamos nas sombras para que, quando a luz revelar sua refeição, a
                        experiência seja nada menos que lendária.
                    </p>
                </div>
            </section>

            {/* Quote Section */}
            <section className="bg-slate-950 py-24 px-6 text-center border-y border-slate-800">
                <div className="text-yellow-500 text-4xl mb-6 flex justify-center">
                    <FaUtensils />
                </div>
                <blockquote className="max-w-4xl mx-auto text-2xl md:text-4xl text-white font-black italic uppercase tracking-wide">
                    "Nossa missão é servir o hambúrguer que Gotham{' '}
                    <span className="text-yellow-500">merece</span>, não o que ela precisa agora."
                </blockquote>
            </section>

            {/* Features Section (Nosso Código) */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-4xl text-yellow-500 font-black uppercase text-center mb-16 tracking-wider">
                    Nosso Código
                </h2>

                {/* Aqui usamos o Map e responsividade (Grid) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {codigoFeatures.map((feature) => (
                        <FeatureCard
                            key={feature.id}
                            icon={feature.icon}
                            title={feature.title}
                            text={feature.text}
                        />
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};
