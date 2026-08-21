import { useState } from 'react';
import { z } from 'zod';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaClock } from 'react-icons/fa';

// 1. Definição do Schema de Validação com Zod
const contatoSchema = z.object({
    nome: z.string().min(3, 'Digite um nome com pelo menos 3 caracteres.'),
    email: z.string().email('Informe um e-mail válido.'),
    mensagem: z.string().min(10, 'A mensagem precisa ter pelo menos 10 caracteres.'),
});

export const Contato = () => {
    // 2. Estado para os campos do formulário
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        mensagem: '',
    });

    // 3. Estado para os erros de validação
    const [errors, setErrors] = useState({});
    const [sucesso, setSucesso] = useState(false);

    // 4. Função para atualizar os dados enquanto o usuário digita
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        // Limpa o erro do campo quando o usuário volta a digitar
        setErrors({ ...errors, [name]: null });
        setSucesso(false);
    };

    // 5. Função de submissão e validação
    const handleSubmit = (e) => {
        e.preventDefault();

        // Testa os dados contra o schema do Zod
        const resultado = contatoSchema.safeParse(formData);

        if (!resultado.success) {
            // Se falhar, extrai os erros e coloca no estado
            const fieldErrors = {};
            resultado.error.issues.forEach((issue) => {
                fieldErrors[issue.path[0]] = issue.message;
            });
            setErrors(fieldErrors);
        } else {
            // Se der certo, limpa os erros, mostra sucesso e zera o form
            setErrors({});
            setSucesso(true);
            setFormData({ nome: '', email: '', mensagem: '' });
        }
    };

    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-300 flex flex-col">
            <Header />

            <main className="flex-grow max-w-6xl mx-auto w-full px-6 py-16">
                {/* Título da Seção */}
                <div className="border-l-4 border-yellow-500 pl-4 mb-12">
                    <h1 className="text-4xl text-yellow-500 font-black uppercase tracking-wider mb-2">
                        Mandar Bat-Sinal
                    </h1>
                    <p className="text-slate-400 max-w-2xl">
                        Tem alguma dúvida, sugestão ou precisa de ajuda com seu pedido? Nossa equipe
                        em Gotham está pronta para responder.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {/* Coluna da Esquerda: Informações de Contato */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex items-center gap-4">
                            <div className="text-yellow-500 text-2xl bg-slate-950 p-3 rounded-md">
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

                        <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex items-center gap-4">
                            <div className="text-yellow-500 text-2xl bg-slate-950 p-3 rounded-md">
                                <FaEnvelope />
                            </div>
                            <div>
                                <h3 className="font-bold text-white text-sm uppercase">E-mail</h3>
                                <p className="text-sm text-slate-400">suporte@batburguer.com</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex flex-col items-start gap-4">
                                <div className="text-yellow-500 text-2xl bg-slate-950 p-3 rounded-md">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h3 className="font-bold text-white text-sm uppercase">
                                        Telefone/WhatsApp
                                    </h3>
                                    <p className="text-sm text-slate-400">(11) 9999-BATMAN</p>
                                </div>
                            </div>

                            <div className="bg-slate-900 border border-slate-800 p-6 rounded-lg flex flex-col items-start gap-4">
                                <div className="text-yellow-500 text-2xl bg-slate-950 p-3 rounded-md">
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

                    {/* Coluna da Direita: Formulário */}
                    <div className="bg-slate-900 border border-slate-800 p-8 rounded-lg">
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
                                    className={`w-full bg-slate-950 border ${errors.nome ? 'border-red-500' : 'border-slate-800'} rounded p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors`}
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
                                    className={`w-full bg-slate-950 border ${errors.email ? 'border-red-500' : 'border-slate-800'} rounded p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors`}
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
                                    className={`w-full bg-slate-950 border ${errors.mensagem ? 'border-red-500' : 'border-slate-800'} rounded p-3 text-white focus:outline-none focus:border-yellow-500 transition-colors`}></textarea>
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
                                className="bg-yellow-500 text-black font-black uppercase py-4 rounded hover:bg-yellow-400 transition-colors mt-2">
                                Enviar Sinal {'>'}
                            </button>
                        </form>
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};
