import React from 'react';
import './App.css';
import Tabela from './tabela'

function App() {
  const autores = [
    {
      nome: 'Paulo',
      livro: 'React',
      preco: '1000',
    },
    {
      nome: 'José',
      livro: 'Java',
      preco: '1000',
    },
    {
      nome: 'Anônio',
      livro: 'Python',
      preco: '1000',
    },
    {
      nome: 'Ricardo',
      livro: 'Java Script',
      preco: '1000'
    }
  ];

  return (
    <div className="App">
     <Tabela autores = { autores }/>
    </div>
  );
}




export default App;
