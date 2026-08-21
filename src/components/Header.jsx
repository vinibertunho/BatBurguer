import { useState } from 'react'
import logo from '../assets/logo.png'
import { FaShoppingBag } from 'react-icons/fa'
import { FiMenu, FiSearch, FiX } from 'react-icons/fi'

function Header({ quantidade = 0 }) {
	const [menuAberto, setMenuAberto] = useState(false)
	const paginaMenu = window.location.pathname === '/menu'

	const links = [
		{ label: 'Início', href: '/', ativo: !paginaMenu },
		{ label: 'Menu', href: '/menu', ativo: paginaMenu },
		{ label: 'Sobre Nós', href: '#sobre' },
		{ label: 'Contato', href: '#contato' },
		{ label: 'Login', href: '/login' },
	]

	const fecharMenu = () => setMenuAberto(false)

	return (
		<header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/95 backdrop-blur-md">
			<div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 lg:px-10">
				<a href="/" aria-label="BatBurger - início" className="flex shrink-0 items-center gap-2 text-[#ECC94B]">
					<img src={logo} alt="BatBurger" className="h-10 w-auto object-contain" />
					<span className="text-xl font-black tracking-[0.12em]">BATBURGER</span>
				</a>

				<nav className="hidden items-center gap-8 md:flex" aria-label="Navegação principal">
					{links.map(({ label, href, ativo }) => (
						<a key={href} href={href} className={`relative py-2 text-sm font-bold tracking-wide transition-colors hover:text-[#ECC94B] ${ativo ? 'text-[#ECC94B] after:absolute after:inset-x-0 after:-bottom-1 after:h-0.5 after:bg-[#ECC94B]' : 'text-slate-200'}`}>
							{label}
						</a>
					))}
				</nav>

				<div className="flex items-center gap-5">
					<label className="hidden items-center gap-2 rounded-full border border-slate-700 bg-slate-900/80 px-4 py-2 text-slate-400 lg:flex">
						<FiSearch aria-hidden="true" />
						<span className="sr-only">Buscar no menu</span>
						<input type="search" placeholder="Buscar..." className="w-32 bg-transparent text-sm text-white outline-none placeholder:text-slate-500" />
					</label>
					<a href="/carrinho" aria-label={`${quantidade} itens no carrinho`} className="relative text-[#ECC94B] transition-colors hover:text-white">
						<FaShoppingBag size={20} aria-hidden="true" />
						{quantidade > 0 && <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ECC94B] px-1 text-xs font-extrabold text-slate-950">{quantidade}</span>}
					</a>
					<button type="button" className="text-[#ECC94B] md:hidden" aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'} onClick={() => setMenuAberto((aberto) => !aberto)}>
						{menuAberto ? <FiX size={25} /> : <FiMenu size={25} />}
					</button>
				</div>
			</div>

			{menuAberto && (
				<nav className="border-t border-white/10 bg-slate-950 px-6 py-4 md:hidden" aria-label="Navegação mobile">
					{links.map(({ label, href, ativo }) => (
						<a key={href} href={href} onClick={fecharMenu} className={`block border-b border-white/5 py-3 text-sm font-bold ${ativo ? 'text-[#ECC94B]' : 'text-slate-200'}`}>
							{label}
						</a>
					))}
				</nav>
			)}
		</header>
	)
}

export default Header;
