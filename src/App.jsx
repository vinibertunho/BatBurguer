import Carrinho from './pages/Carrinho'
import Checkout from './pages/Checkout'
import Home from './pages/Home'
import Login from './pages/Login'
import Menu from './pages/Menu'
import Produto from './pages/Produto'
import './App.css'

function App() {
  const produtoId = window.location.pathname.match(/^\/produto\/(\d+)$/)?.[1]
  const paginas = {
    '/menu': <Menu />,
    '/carrinho': <Carrinho />,
    '/checkout': <Checkout />,
    '/login': <Login />,
  }

  if (produtoId) return <Produto id={Number(produtoId)} />
  return paginas[window.location.pathname] ?? <Home />
}

export default App
