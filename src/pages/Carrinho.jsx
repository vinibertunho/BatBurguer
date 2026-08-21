import { FaMinus, FaPlus, FaTrash } from 'react-icons/fa'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useCart } from '../context/CartContext'

const formatarMoeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

function Carrinho() {
  const { itens, quantidade, total, alterarQuantidade, remover } = useCart()

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white">
      <Header quantidade={quantidade} />
      <main className="mx-auto max-w-5xl px-6 py-14 lg:px-10 lg:py-20">
        <p className="text-sm font-bold tracking-[0.3em] text-[#ECC94B]">SUA SELEÇÃO</p>
        <h1 className="mt-3 text-5xl font-black uppercase text-[#ECC94B]">Carrinho</h1>

        {itens.length === 0 ? (
          <div className="mt-10 rounded-xl border border-slate-700 bg-[#161C24] p-10 text-center">
            <p className="text-lg text-slate-300">Seu carrinho está vazio.</p>
            <a href="/menu" className="mt-6 inline-flex rounded-full bg-[#ECC94B] px-6 py-3 font-bold text-[#0A0D14]">VER MENU</a>
          </div>
        ) : (
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="space-y-4">
              {itens.map((item) => (
                <article key={item.id} className="flex gap-4 rounded-xl border border-slate-700 bg-[#161C24] p-4">
                  <img src={item.imagem} alt={item.nome} className="h-24 w-24 rounded-lg object-cover" />
                  <div className="min-w-0 flex-1">
                    <h2 className="font-bold text-white">{item.nome}</h2>
                    <p className="mt-1 text-[#ECC94B]">{item.preco}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <button type="button" aria-label="Diminuir quantidade" onClick={() => alterarQuantidade(item.id, item.quantidade - 1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-600 text-slate-200"><FaMinus size={11} /></button>
                      <span>{item.quantidade}</span>
                      <button type="button" aria-label="Aumentar quantidade" onClick={() => alterarQuantidade(item.id, item.quantidade + 1)} className="flex h-8 w-8 items-center justify-center rounded-full border border-[#ECC94B] text-[#ECC94B]"><FaPlus size={11} /></button>
                    </div>
                  </div>
                  <button type="button" aria-label={`Remover ${item.nome}`} onClick={() => remover(item.id)} className="self-start text-slate-400 hover:text-red-400"><FaTrash /></button>
                </article>
              ))}
            </div>
            <aside className="h-fit rounded-xl border border-slate-700 bg-[#161C24] p-6">
              <h2 className="text-xl font-bold">Resumo do pedido</h2>
              <div className="mt-6 flex justify-between border-t border-slate-700 pt-4 text-lg font-bold"><span>Total</span><span className="text-[#ECC94B]">{formatarMoeda(total)}</span></div>
              <a href="/checkout" className="mt-6 block rounded-full bg-[#ECC94B] px-5 py-3 text-center font-black text-[#0A0D14]">FINALIZAR COMPRA</a>
            </aside>
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Carrinho
