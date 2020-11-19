import React from 'react';
import './style.css';

const Home = () => (
  <div className='home-page'>
    <span data-testid='home-welcome' className='home-welcome'>
      Bem vindo ao QuickOps
    </span>
    <span className='home-tip'>Use o menu lateral para acessar a pagina de solictações</span>
  </div>
);

export default Home;
