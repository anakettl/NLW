import React from 'react';

import logo from '../../assets/logo.svg'
import './style.css'

const Home = () => {
  return (
    <div id="page-home">
      <div className="content">
        <header>
          <img src={logo} alt="Ecoleta"/>
        </header>
        <main>
          <h1>Seu marketplace de coleta de resíduos</h1>
          <p>Ajudamos pessoas a escontrarem pontos de coleta de forma eficiente</p>
        </main>
      </div>
    </div>
  )
}

export default Home;