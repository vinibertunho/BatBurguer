import Header from '../components/Header';
import Footer from '../components/Footer';
import beco from '../assets/beco.png';
import { FaShieldAlt, FaBalanceScale, FaTachometerAlt, FaUtensils } from 'react-icons/fa';

export default function Sobre({ mudarPagina }) {
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
        <div className="min-h-screen bg-[#0A0D14] text-slate-300 font-sans">
            <Header mudarPagina={mudarPagina} paginaAtual="sobre" />

            {/* Hero Section */}
            <section className="relative bg-[url('https://images.unsplash.com/photo-1509822929063-6b6cfc9b42f2?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center py-28 px-6 text-center">
                <div className="absolute inset-0 bg-[#0A0D14]/85"></div>
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl text-[#ECC94B] font-black uppercase tracking-wider mb-6">
                        A Lenda Por Trás Do Sabor
                    </h1>
                    <p className="text-slate-300 text-base md:text-lg">
                        Nas sombras de Gotham, forjamos hambúrgueres que não são apenas uma
                        refeição, mas uma experiência definitiva.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-20 px-6 md:px-12 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/2">
                    <img
                        src={beco}
                        alt="Beco escuro de Gotham"
                        className="w-full rounded-lg shadow-2xl border border-slate-800 object-cover"
                    />
                </div>
                <div className="w-full md:w-1/2">
                    <h2 className="text-3xl text-[#ECC94B] font-black uppercase mb-6">
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
            <section className="bg-[#161C24] py-20 px-6 text-center border-y border-slate-800">
                <div className="text-[#ECC94B] text-4xl mb-6 flex justify-center">
                    <FaUtensils />
                </div>
                <blockquote className="max-w-4xl mx-auto text-2xl md:text-3xl text-white font-black italic uppercase tracking-wide">
                    "Nossa missão é servir o hambúrguer que Gotham{' '}
                    <span className="text-[#ECC94B]">merece</span>, não o que ela precisa agora."
                </blockquote>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <h2 className="text-3xl md:text-4xl text-[#ECC94B] font-black uppercase text-center mb-16 tracking-wider">
                    Nosso Código
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {codigoFeatures.map((feature) => (
                        <div
                            key={feature.id}
                            className="bg-[#161C24] border border-slate-800 p-8 rounded-lg flex flex-col items-center text-center shadow-lg hover:border-[#ECC94B]/50 transition-colors">
                            <div className="text-[#ECC94B] text-3xl mb-4">{feature.icon}</div>
                            <h3 className="text-white font-black uppercase tracking-wide mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 text-sm leading-relaxed">{feature.text}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer />
        </div>
    );
}
