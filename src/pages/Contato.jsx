import { useState } from 'react';
import { z } from 'zod';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

const contatoSchema = z.object({
    nome: z.string().min(3, 'Digite um nome com pelo menos 3 caracteres.'),
    email: z.string().email('Informe um e-mail válido.'),
    mensagem: z.string().min(10, 'A mensagem precisa ter pelo menos 10 caracteres.'),
});

export default function Contato({ mudarPagina }) {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });

    const [errors, setErrors] = useState({});
    const [sucesso, setSucesso] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setErrors({ ...errors, [name]: null });
        setSucesso(false);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const resultado = contatoSchema.safeParse(formData);

        if (!resultado.success) {
            const fieldErrors = {};
            resultado.error.issues.forEach((issue) => {
                fieldErrors[issue.path[0]] = issue.message;
            });
            setErrors(fieldErrors);
        } else {
            setErrors({});
            setSucesso(true);
            setFormData({ nome: '', email: '', mensagem: '' });
        }
    };

    return (
        <div className="min-h-screen bg-[#0A0D14] font-sans text-slate-300 flex flex-col pt-20">
            <Header mudarPagina={mudarPagina} paginaAtual="contato" />

            <main className="grow max-w-6xl mx-auto w-full px-6 py-16">
                <div className="border-l-4 border-[#ECC94B] pl-4 mb-12">
                    <h1 className="text-4xl text-[#ECC94B] font-black uppercase tracking-wider mb-2">
                        Mandar Bat-Sinal
                    </h1>
                    <p className="text-slate-400 max-w-2xl">
                        Tem alguma dúvida, sugestão ou precisa de ajuda com seu pedido? Nossa equipe
                        em Gotham está pronta para responder.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    <div className="flex flex-col gap-6">
                        <div className="bg-[#161C24] border border-slate-800 p-6 rounded-lg flex items-center gap-4">
                            <div className="text-[#ECC94B] text-2xl bg-[#0A0D14] p-3 rounded-md">
                                <FaMapMarkerAlt />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm uppercase">
                                    Localização
                                </h3>
                                <p className="text-sm text-slate-400">
                                    Av. Crime Alley, 1939
                                    <br />
                                    Gotham City, GC 00100
                                </p>
                            </div>
                        </div>

                        <div className="bg-[#161C24] border border-slate-800 p-6 rounded-lg flex items-center gap-4">
                            <div className="text-[#ECC94B] text-2xl bg-[#0A0D14] p-3 rounded-md">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm uppercase">E-mail</h3>
                                <p className="text-sm text-slate-400">suporte@batburguer.com</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-[#161C24] border border-slate-800 p-6 rounded-lg flex flex-col items-start gap-4">
                                <div className="text-[#ECC94B] text-2xl bg-[#0A0D14] p-3 rounded-md">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm uppercase">
                                        Telefone/WhatsApp
                                    </h3>
                                    <p className="text-sm text-slate-400">(11) 9999-BATMAN</p>
                                </div>
                            </div>

                            <div className="bg-[#161C24] border border-slate-800 p-6 rounded-lg flex flex-col items-start gap-4">
                                <div className="text-[#ECC94B] text-2xl bg-[#0A0D14] p-3 rounded-md">
                                    <FaClock />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm uppercase">
                                        Horário
                                    </h3>
                                    <p className="text-sm text-slate-400">
                                        Apenas à noite
                                        <br />
                                        18:00 - 04:00
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#161C24] border border-slate-800 p-8 rounded-lg">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                            <div>
                                <label className="block text-xs font-bold text-white uppercase mb-2">
                                    Nome Completo
                                </label>
                                <input
                                    type="text"
                                    name="nome"
                                    value={formData.nome}
                                    onChange={handleChange}
                                    placeholder="Bruce Wayne"
                                    className={`w-full bg-[#0A0D14] border ${errors.nome ? 'border-red-500' : 'border-slate-800'} rounded p-3 text-white focus:outline-none focus:border-[#ECC94B] transition-colors`}
                                />
                                {errors.nome && (
                                    <p className="text-red-500 text-xs mt-1">{errors.nome}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-white uppercase mb-2">
                                    E-mail
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="bruce@wayneenterprises.com"
                                    className={`w-full bg-[#0A0D14] border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded p-3 text-white focus:outline-none focus:border-[#ECC94B] transition-colors`}
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-xs font-bold text-white uppercase mb-2">
                                    Mensagem
                                </label>
                                <textarea
                                    name="mensagem"
                                    value={formData.mensagem}
                                    onChange={handleChange}
                                    placeholder="Preciso de reforços no beco..."
                                    rows="4"
                                    className={`w-full bg-[#0A0D14] border ${errors.mensagem ? 'border-red-500' : 'border-slate-800'} rounded p-3 text-white focus:outline-none focus:border-[#ECC94B] transition-colors`}></textarea>
                                {errors.mensagem && (
                                    <p className="text-red-500 text-xs mt-1">{errors.mensagem}</p>
                                )}
                            </div>

                            {sucesso && (
                                <div className="bg-green-900/50 border border-green-500 text-green-400 p-3 rounded text-sm text-center">
                                    Bat-sinal enviado com sucesso! Aguarde o retorno.
                                </div>
                            )}

                            <button
                                type="submit"
                                className="bg-[#ECC94B] text-[#0A0D14] font-black uppercase py-4 rounded hover:bg-[#d4b443] transition-colors mt-2 cursor-pointer">
                                Enviar Sinal {'>'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
