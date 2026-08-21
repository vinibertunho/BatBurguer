import Card from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import produtos from '../data/produtos'
import { useCart } from '../context/CartContext'

function Menu() {
  const { quantidade, adicionar } = useCart()

  return (
    <div id="menu" className="min-h-screen bg-[#0A0D14] text-white">
      <Header quantidade={quantidade} />

      <main className="mx-auto max-w-7xl px-6 py-16 lg:px-10 lg:py-24">
        <header className="mb-12 max-w-2xl">
          <p className="mb-3 text-sm font-bold tracking-[0.3em] text-[#ECC94B]">ESCOLHA SEU DESTINO</p>
          <h1 className="text-5xl font-black uppercase text-[#ECC94B] sm:text-6xl">MENU LENDÁRIO</h1>
          <p className="mt-4 text-lg text-slate-300">Todos os lanches preparados para a sua próxima missão em Gotham.</p>
        </header>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {produtos.map((produto) => (
            <Card key={produto.id} {...produto} onAdicionar={() => adicionar(produto)} onDetalhes={(id) => { window.location.href = `/produto/${id}` }} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Menu
