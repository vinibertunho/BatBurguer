import { useState } from 'react';
import { FaMoon, FaShoppingBag } from 'react-icons/fa';
import { FiMenu, FiSearch, FiX } from 'react-icons/fi';

function Header({ quantidade = 0, mudarPagina, paginaAtual = 'home' }) {
    const [menuAberto, setMenuAberto] = useState(false);

    const links = [
        { label: 'Início', pagina: 'home' },
        { label: 'Menu', pagina: 'home', hash: '#menu' },
        { label: 'Sobre Nós', pagina: 'sobre' },
        { label: 'Contato', pagina: 'contato' },
    ];

    const fecharMenu = () => setMenuAberto(false);

    const handleNavegacao = (pagina, hash) => {
        if (mudarPagina) {
            mudarPagina(pagina);
        }
        fecharMenu();

        if (hash) {
            setTimeout(() => {
                const elem = document.querySelector(hash);
                if (elem) elem.scrollIntoView({ behavior: 'smooth' });
            }, 100);
        }
    };

    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
            <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
                <button
                    type="button"
                    onClick={() => handleNavegacao('home')}
                    aria-label="BatBurger - início"
                    className="flex shrink-0 items-center gap-2 text-[#ECC94B] cursor-pointer">
                    <FaMoon size={27} aria-hidden="true" />
                    <span className="text-xl font-black tracking-[0.12em]">BATBURGER</span>
                </button>

                <nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
                    {links.map(({ label, pagina, hash }) => {
                        const isAtivo = paginaAtual === pagina && !hash;
                        return (
                            <button
                                key={label}
                                type="button"
                                onClick={() => handleNavegacao(pagina, hash)}
                                className={`relative py-2 text-sm font-bold tracking-wide transition-colors hover:text-[#ECC94B] cursor-pointer ${
                                    isAtivo
                                        ? 'text-[#ECC94B] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#ECC94B]'
                                        : 'text-slate-200'
                                }`}>
                                {label}
                            </button>
                        );
                    })}
                </nav>

                <div className="flex items-center gap-5">
                    <label className="hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-slate-400 lg:flex">
                        <FiSearch aria-hidden="true" />
                        <span className="sr-only">Buscar no menu</span>
                        <input
                            type="search"
                            placeholder="Buscar..."
                            className="w-32 bg-transparent text-sm text-white outline-none placeholder:text-slate-500"
                        />
                    </label>
                    <button
                        type="button"
                        aria-label={`${quantidade} itens no carrinho`}
                        className="relative text-[#ECC94B] transition-colors hover:text-white cursor-pointer">
                        <FaShoppingBag size={20} aria-hidden="true" />
                        {quantidade > 0 && (
                            <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ECC94B] px-1 text-xs font-extrabold text-slate-950">
                                {quantidade}
                            </span>
                        )}
                    </button>
                    <button
                        type="button"
                        className="text-[#ECC94B] md:hidden cursor-pointer"
                        aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
                        onClick={() => setMenuAberto((aberto) => !aberto)}>
                        {menuAberto ? <FiX size={25} /> : <FiMenu size={25} />}
                    </button>
                </div>
            </div>

            {menuAberto && (
                <nav
                    className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden"
                    aria-label="Navegação mobile">
                    {links.map(({ label, pagina, hash }) => {
                        const isAtivo = paginaAtual === pagina && !hash;
                        return (
                            <button
                                key={label}
                                type="button"
                                onClick={() => handleNavegacao(pagina, hash)}
                                className={`block w-full text-left border-b border-white/5 py-3 text-sm font-bold cursor-pointer ${
                                    isAtivo ? 'text-[#ECC94B]' : 'text-slate-200'
                                }`}>
                                {label}
                            </button>
                        );
                    })}
                </nav>
            )}
        </header>
    );
}

export default Header;
