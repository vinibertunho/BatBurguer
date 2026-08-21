import { useState } from 'react'
import { FiChevronLeft, FiChevronRight, FiArrowRight } from 'react-icons/fi'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import produtos from '../data/produtos'
import gotham from '../assets/gotham.png'
import { useCart } from '../context/CartContext'

function Home() {
  const { quantidade, adicionar } = useCart()
  const [inicio, setInicio] = useState(0)
  const produtosNovos = produtos.filter((produto) => produto.tag === 'NOVO')
  const produtosVisiveis = Array.from({ length: Math.min(3, produtosNovos.length) }, (_, indice) => (
    produtosNovos[(inicio + indice) % produtosNovos.length]
  ))

  const avancar = () => setInicio((atual) => (atual + 1) % produtosNovos.length)
  const voltar = () => setInicio((atual) => (atual - 1 + produtosNovos.length) % produtosNovos.length)

    return (
        <div id="topo" className="min-h-screen bg-[#0A0D14] text-white">
            <Header quantidade={quantidade} mudarPagina={mudarPagina} paginaAtual="home" />

      <main>
        <section className="relative flex min-h-170 items-end overflow-hidden pb-20 pt-36 lg:min-h-190 lg:pb-28">
          <img src={gotham} alt="Gotham City à noite" className="absolute inset-0 h-full w-full object-cover opacity-75 blur-[1px]" />
          <div className="absolute inset-0 bg-linear-to-r from-[#0A0D14]/85 via-[#0A0D14]/50 to-[#0A0D14]/15" />
          <div className="absolute inset-0 bg-linear-to-t from-[#0A0D14]/75 via-transparent to-[#0A0D14]/35" />

          <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="max-w-3xl animate-[fade-in_700ms_ease-out]">
              <p className="mb-5 text-sm font-bold tracking-[0.35em] text-[#ECC94B]">A HAMBURGUERIA DO CAVALEIRO</p>
              <h1 className="max-w-2xl text-5xl font-black uppercase leading-[0.95] tracking-tight text-[#ECC94B] sm:text-6xl lg:text-8xl">
                O HAMBÚRGUER QUE GOTHAM MERECE
              </h1>
              <p className="mt-7 max-w-xl text-lg leading-8 text-slate-200">
                Ingredientes artesanais, combinações lendárias e um sabor vigilante para enfrentar qualquer noite na cidade.
              </p>
              <a href="/menu" className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#ECC94B] px-7 py-4 text-sm font-black tracking-wider text-[#0A0D14] transition-transform hover:scale-105">
                VER MENU LENDÁRIO <FiArrowRight size={19} aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        <section id="menu" className="bg-[#161C24] px-6 py-20 lg:px-10 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-bold tracking-[0.3em] text-[#ECC94B]">ESCOLHA SEU DESTINO</p>
                <h2 className="text-4xl font-black uppercase text-[#ECC94B] sm:text-5xl">MENU LENDÁRIO</h2>
                <p className="mt-3 text-slate-300">Escolha seu lado na batalha dos sabores.</p>
              </div>
              <div className="flex shrink-0 gap-2">
                <button type="button" onClick={voltar} aria-label="Produtos anteriores" className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-500 text-slate-200 transition-colors hover:border-[#ECC94B] hover:text-[#ECC94B]"><FiChevronLeft size={24} /></button>
                <button type="button" onClick={avancar} aria-label="Próximos produtos" className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ECC94B] text-[#ECC94B] transition-colors hover:bg-[#ECC94B] hover:text-[#0A0D14]"><FiChevronRight size={24} /></button>
              </div>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {produtosVisiveis.map((produto) => (
                <Card key={produto.id} {...produto} onAdicionar={() => adicionar(produto)} onDetalhes={(id) => { window.location.href = `/produto/${id}` }} />
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home;
