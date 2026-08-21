import { FiArrowLeft } from 'react-icons/fi'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useCart } from '../context/CartContext'
import produtos from '../data/produtos'

function Produto({ id }) {
  const produto = produtos.find((item) => item.id === id)
  const { quantidade, adicionar } = useCart()

  if (!produto) {
    return (
      <div className="min-h-screen bg-[#0A0D14] text-white">
        <Header quantidade={quantidade} />
        <main className="mx-auto max-w-5xl px-6 py-20"><h1 className="text-3xl font-bold">Lanche não encontrado.</h1><a href="/menu" className="mt-6 inline-block text-[#ECC94B]">Voltar ao menu</a></main>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white">
      <Header quantidade={quantidade} />
      <main className="mx-auto max-w-6xl px-6 py-14 lg:px-10 lg:py-20">
        <a href="/menu" className="inline-flex items-center gap-2 text-sm font-bold text-slate-300 hover:text-[#ECC94B]"><FiArrowLeft /> VOLTAR AO MENU</a>
        <section className="mt-10 grid overflow-hidden rounded-xl border border-slate-700 bg-[#161C24] lg:grid-cols-2">
          <img src={produto.imagem} alt={produto.nome} className="h-full min-h-80 w-full object-cover" />
          <div className="flex flex-col justify-center p-8 lg:p-12">
            <span className="w-fit rounded-md bg-[#ECC94B] px-3 py-1 text-xs font-extrabold tracking-wider text-slate-950">{produto.tag}</span>
            <h1 className="mt-5 text-4xl font-black text-white lg:text-5xl">{produto.nome}</h1>
            <p className="mt-5 text-lg leading-8 text-slate-300">{produto.descricao}</p>
            <p className="mt-8 text-3xl font-black text-[#ECC94B]">{produto.preco}</p>
            <button type="button" onClick={() => adicionar(produto)} className="mt-8 rounded-full bg-[#ECC94B] px-6 py-4 font-black text-[#0A0D14] transition-transform hover:scale-105">ADICIONAR AO CARRINHO</button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Produto
