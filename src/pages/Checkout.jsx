import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useCart } from '../context/CartContext'

const formatarMoeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

function Checkout() {
  const { quantidade, total, itens, limpar } = useCart()
  const [cep, setCep] = useState('')
  const [buscandoCep, setBuscandoCep] = useState(false)
  const [mensagemCep, setMensagemCep] = useState('')
  const [endereco, setEndereco] = useState({ logradouro: '', bairro: '', localidade: '', uf: '' })
  const [finalizado, setFinalizado] = useState(false)

  const buscarCep = async (valor) => {
    const cepLimpo = valor.replace(/\D/g, '')
    setCep(cepLimpo)
    setMensagemCep('')
    if (cepLimpo.length !== 8) return

    setBuscandoCep(true)
    try {
      const resposta = await fetch(`https://viacep.com.br/ws/${cepLimpo}/json/`)
      const dados = await resposta.json()
      if (dados.erro) {
        setMensagemCep('CEP não encontrado.')
        return
      }
      setEndereco({ logradouro: dados.logradouro, bairro: dados.bairro, localidade: dados.localidade, uf: dados.uf })
    } catch {
      setMensagemCep('Não foi possível consultar o CEP agora.')
    } finally {
      setBuscandoCep(false)
    }
  }

  const finalizar = (evento) => {
    evento.preventDefault()
    limpar()
    setFinalizado(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white">
      <Header quantidade={quantidade} />
      <main className="mx-auto max-w-5xl px-6 py-14 lg:px-10 lg:py-20">
        <p className="text-sm font-bold tracking-[0.3em] text-[#ECC94B]">ÚLTIMA ETAPA</p>
        <h1 className="mt-3 text-5xl font-black uppercase text-[#ECC94B]">Finalizar compra</h1>
        {finalizado ? <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 px-6" role="dialog" aria-modal="true" aria-labelledby="pedido-confirmado"><div className="w-full max-w-md rounded-2xl border border-[#ECC94B]/40 bg-[#161C24] p-8 text-center shadow-2xl"><div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#ECC94B] text-2xl text-[#0A0D14]">✓</div><h2 id="pedido-confirmado" className="mt-5 text-2xl font-black text-white">Pedido recebido!</h2><p className="mt-3 text-slate-300">A BatBurguer já está preparando sua missão.</p><button type="button" onClick={() => { window.location.href = '/' }} className="mt-7 w-full rounded-full bg-[#ECC94B] px-5 py-3 font-black text-[#0A0D14]">OK</button></div></div> : (
          <form onSubmit={finalizar} className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
            <section className="space-y-5 rounded-xl border border-slate-700 bg-[#161C24] p-6">
              <h2 className="text-xl font-bold">Endereço de entrega</h2>
              <label className="block text-sm font-semibold text-slate-300">CEP<input required value={cep} onChange={(evento) => buscarCep(evento.target.value)} maxLength="8" inputMode="numeric" placeholder="00000-000" className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" />{buscandoCep && <span className="mt-1 block text-xs text-[#ECC94B]">Consultando ViaCEP...</span>}{mensagemCep && <span className="mt-1 block text-xs text-red-300">{mensagemCep}</span>}</label>
              <label className="block text-sm font-semibold text-slate-300">Rua<input required value={endereco.logradouro} onChange={(evento) => setEndereco({ ...endereco, logradouro: evento.target.value })} className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" /></label>
              <div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-semibold text-slate-300">Número<input required type="text" className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" /></label><label className="block text-sm font-semibold text-slate-300">Bairro<input required value={endereco.bairro} onChange={(evento) => setEndereco({ ...endereco, bairro: evento.target.value })} className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" /></label></div>
              <div className="grid gap-5 sm:grid-cols-2"><label className="block text-sm font-semibold text-slate-300">Cidade<input required value={endereco.localidade} onChange={(evento) => setEndereco({ ...endereco, localidade: evento.target.value })} className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" /></label><label className="block text-sm font-semibold text-slate-300">UF<input required value={endereco.uf} onChange={(evento) => setEndereco({ ...endereco, uf: evento.target.value })} maxLength="2" className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white uppercase outline-none focus:border-[#ECC94B]" /></label></div>
              <button disabled={itens.length === 0} type="submit" className="w-full rounded-full bg-[#ECC94B] px-5 py-3 font-black text-[#0A0D14] disabled:cursor-not-allowed disabled:opacity-50">CONFIRMAR PEDIDO</button>
            </section>
            <aside className="h-fit rounded-xl border border-slate-700 bg-[#161C24] p-6"><h2 className="text-xl font-bold">Resumo</h2><p className="mt-4 text-slate-300">{quantidade} item(ns)</p><p className="mt-4 border-t border-slate-700 pt-4 text-xl font-bold text-[#ECC94B]">{formatarMoeda(total)}</p></aside>
          </form>
        )}
      </main>
      <Footer />
    </div>
  )
}

export default Checkout
