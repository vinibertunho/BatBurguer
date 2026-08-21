import { FaPlus } from 'react-icons/fa'
import Button from './Button'

function Card({ nome, descricao, preco, tag, imagem, onAdicionar }) {
	return (
		<article className="flex h-full flex-col overflow-hidden rounded-xl border border-slate-700 bg-slate-900/80 shadow-lg shadow-black/20">
			<div className="relative aspect-4/3 overflow-hidden bg-slate-800">
				<img
					src={imagem}
					alt={nome}
					className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
				/>
				<span className="absolute left-3 top-3 rounded-md bg-[#ECC94B] px-3 py-1 text-xs font-extrabold tracking-wider text-slate-950">
					{tag}
				</span>
			</div>

			<div className="flex flex-1 flex-col p-5">
				<h2 className="text-xl font-bold text-white">{nome}</h2>
				<p className="mt-2 flex-1 text-sm leading-6 text-slate-300">{descricao}</p>
				<p className="mt-4 text-2xl font-extrabold text-[#ECC94B]">{preco}</p>

				<div className="mt-5 flex flex-wrap gap-3">
					<Button variant="outline">VER DETALHES</Button>
					<Button onClick={onAdicionar}>
						<FaPlus aria-hidden="true" />
						ADICIONAR
					</Button>
				</div>
			</div>
		</article>
	)
}

export default Card
