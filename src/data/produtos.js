import lanche from '../assets/lanche.png'
import lanche2 from '../assets/lanche2.png'

const produtos = [
  {
    id: 1,
    nome: 'The Dark Knight Burger',
    descricao: 'Blend bovino, queijo cheddar, bacon crocante e molho especial da casa.',
    preco: 'R$ 39,90',
    tag: 'DESTAQUE',
    imagem:
      'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 2,
    nome: 'The Joker Clown Burger',
    descricao: 'Blend bovino, queijo prato, cebola caramelizada e molho agridoce.',
    preco: 'R$ 34,90',
    tag: 'NOVO',
    imagem:
      'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 3,
    nome: 'Gotham Smoke Burger',
    descricao: 'Carne defumada, queijo gouda, picles e maionese de alho tostado.',
    preco: 'R$ 37,90',
    tag: 'DESTAQUE',
    imagem:
      'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=900&q=85',
  },
  {
    id: 4,
    nome: 'Poison Ivy Burger',
    descricao: 'Blend bovino, queijo cremoso, coleslaw roxo e folhas frescas no pão brioche.',
    preco: 'R$ 36,90',
    tag: 'NOVO',
    imagem: lanche,
  },
  {
    id: 5,
    nome: 'The Dark Knight Double',
    descricao: 'Dois blends bovinos, cheddar derretido, bacon crocante e picles artesanais.',
    preco: 'R$ 44,90',
    tag: 'DESTAQUE',
    imagem: lanche2,
  },
]

export default produtos