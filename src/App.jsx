import { useState } from 'react';
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import './App.css';

function App() {
    const [paginaAtual, setPaginaAtual] = useState('home');

    return (
        <div className="bg-[#0A0D14] min-h-screen">
            {paginaAtual === 'home' && <Home mudarPagina={setPaginaAtual} />}
            {paginaAtual === 'sobre' && <Sobre mudarPagina={setPaginaAtual} />}
            {paginaAtual === 'contato' && <Contato mudarPagina={setPaginaAtual} />}
        </div>
    );
}

export default App;
