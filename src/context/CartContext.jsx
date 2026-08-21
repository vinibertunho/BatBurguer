import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const CartContext = createContext(null)

const valorNumerico = (preco) => Number(preco.replace('R$', '').replace('.', '').replace(',', '.').trim())

function CartProvider({ children }) {
  const [itens, setItens] = useState(() => {
    try {
      const salvo = localStorage.getItem('batburguer-carrinho')
      const itensSalvos = salvo ? JSON.parse(salvo) : []
      return Array.isArray(itensSalvos) ? itensSalvos : []
    } catch {
      localStorage.removeItem('batburguer-carrinho')
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('batburguer-carrinho', JSON.stringify(itens))
  }, [itens])

  const adicionar = (produto) => {
    setItens((atuais) => {
      const existente = atuais.find((item) => item.id === produto.id)
      if (existente) {
        return atuais.map((item) => item.id === produto.id ? { ...item, quantidade: item.quantidade + 1 } : item)
      }
      return [...atuais, { ...produto, quantidade: 1 }]
    })
  }

  const remover = (id) => setItens((atuais) => atuais.filter((item) => item.id !== id))

  const alterarQuantidade = (id, quantidade) => {
    if (quantidade < 1) {
      remover(id)
      return
    }
    setItens((atuais) => atuais.map((item) => item.id === id ? { ...item, quantidade } : item))
  }

  const limpar = () => setItens([])
  const quantidade = itens.reduce((total, item) => total + item.quantidade, 0)
  const total = itens.reduce((soma, item) => soma + valorNumerico(item.preco) * item.quantidade, 0)

  const valor = useMemo(() => ({ itens, quantidade, total, adicionar, remover, alterarQuantidade, limpar }), [itens, quantidade, total])

  return <CartContext.Provider value={valor}>{children}</CartContext.Provider>
}

const useCart = () => useContext(CartContext)

export { CartProvider, useCart, valorNumerico }
