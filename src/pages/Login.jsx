import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Login() {
  const [modoCadastro, setModoCadastro] = useState(false)
  const [enviado, setEnviado] = useState(false)

  const enviar = (evento) => {
    evento.preventDefault()
    setEnviado(true)
  }

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white">
      <Header />
      <main className="mx-auto flex max-w-md px-6 py-16 lg:py-24">
        <section className="w-full rounded-xl border border-slate-700 bg-[#161C24] p-7 shadow-xl">
          <p className="text-sm font-bold tracking-[0.3em] text-[#ECC94B]">ACESSO GOTHAM</p>
          <h1 className="mt-3 text-4xl font-black text-white">{modoCadastro ? 'Criar conta' : 'Entrar'}</h1>
          {enviado ? <p className="mt-6 rounded-lg border border-green-500/40 bg-green-500/10 p-4 text-green-300">Tudo certo. Sua solicitação foi recebida.</p> : (
            <form onSubmit={enviar} className="mt-8 space-y-5">
              {modoCadastro && <label className="block text-sm font-semibold text-slate-300">Nome<input required type="text" className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" /></label>}
              <label className="block text-sm font-semibold text-slate-300">E-mail<input required type="email" className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" /></label>
              <label className="block text-sm font-semibold text-slate-300">Senha<input required type="password" minLength="6" className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" /></label>
              <button type="submit" className="w-full rounded-full bg-[#ECC94B] px-5 py-3 font-black text-[#0A0D14]">{modoCadastro ? 'CRIAR CONTA' : 'ENTRAR'}</button>
            </form>
          )}
          <button type="button" onClick={() => { setModoCadastro((atual) => !atual); setEnviado(false) }} className="mt-6 w-full text-sm text-slate-300 hover:text-[#ECC94B]">{modoCadastro ? 'Já tenho uma conta' : 'Ainda não tenho conta'}</button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Login
