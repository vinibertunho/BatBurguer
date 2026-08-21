import { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const CHAVE_USUARIOS = 'batburguer-usuarios'
const CHAVE_SESSAO = '123456'

const lerUsuarios = () => {
  try {
    const usuarios = JSON.parse(localStorage.getItem(CHAVE_USUARIOS) || '[]')
    return Array.isArray(usuarios) ? usuarios : []
  } catch {
    return []
  }
}

function Login() {
  const [modoCadastro, setModoCadastro] = useState(false)
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  const [mensagem, setMensagem] = useState('')
  const [erro, setErro] = useState('')

  const enviar = (evento) => {
    evento.preventDefault()
    const emailNormalizado = email.trim().toLowerCase()
    const usuarios = lerUsuarios()

    if (modoCadastro) {
      if (usuarios.some((usuario) => usuario.email === emailNormalizado)) {
        setErro('Este e-mail já possui uma conta.')
        return
      }
      const usuario = { nome: nome.trim(), email: emailNormalizado, senha }
      localStorage.setItem(CHAVE_USUARIOS, JSON.stringify([...usuarios, usuario]))
      sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify({ nome: usuario.nome, email: usuario.email }))
      setErro('')
      setMensagem(`Conta criada. Bem-vindo(a), ${usuario.nome}!`)
      return
    }

    const usuario = usuarios.find((item) => item.email === emailNormalizado && item.senha === senha)
    if (!usuario) {
      setErro('E-mail ou senha incorretos.')
      setMensagem('')
      return
    }
    sessionStorage.setItem(CHAVE_SESSAO, JSON.stringify({ nome: usuario.nome, email: usuario.email }))
    setErro('')
    setMensagem(`Login realizado. Bem-vindo(a), ${usuario.nome}!`)
  }

  return (
    <div className="min-h-screen bg-[#0A0D14] text-white">
      <Header />
      <main className="mx-auto flex max-w-md px-6 py-16 lg:py-24">
        <section className="w-full rounded-xl border border-slate-700 bg-[#161C24] p-7 shadow-xl">
          <p className="text-sm font-bold tracking-[0.3em] text-[#ECC94B]">ACESSO GOTHAM</p>
          <h1 className="mt-3 text-4xl font-black text-white">{modoCadastro ? 'Criar conta' : 'Entrar'}</h1>
          {mensagem && <p className="mt-6 rounded-lg border border-green-500/40 bg-green-500/10 p-4 text-green-300">{mensagem}</p>}
          {erro && <p role="alert" className="mt-6 rounded-lg border border-red-500/40 bg-red-500/10 p-4 text-red-300">{erro}</p>}
          <form onSubmit={enviar} className="mt-8 space-y-5">
              {modoCadastro && <label className="block text-sm font-semibold text-slate-300">Nome<input required value={nome} onChange={(evento) => setNome(evento.target.value)} type="text" className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" /></label>}
              <label className="block text-sm font-semibold text-slate-300">E-mail<input required value={email} onChange={(evento) => setEmail(evento.target.value)} type="email" className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" /></label>
              <label className="block text-sm font-semibold text-slate-300">Senha<input required value={senha} onChange={(evento) => setSenha(evento.target.value)} type="password" minLength="6" className="mt-2 w-full rounded-md border border-slate-600 bg-slate-900 px-4 py-3 text-white outline-none focus:border-[#ECC94B]" /></label>
              <button type="submit" className="w-full rounded-full bg-[#ECC94B] px-5 py-3 font-black text-[#0A0D14]">{modoCadastro ? 'CRIAR CONTA' : 'ENTRAR'}</button>
          </form>
          <button type="button" onClick={() => { setModoCadastro((atual) => !atual); setMensagem(''); setErro('') }} className="mt-6 w-full text-sm text-slate-300 hover:text-[#ECC94B]">{modoCadastro ? 'Já tenho uma conta' : 'Ainda não tenho conta'}</button>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Login
