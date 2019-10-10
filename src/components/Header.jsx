import React from 'react';
import Logo from '../assets/images/flat-logo.png';
import Navbar from './Navbar';
import '../assets/styles/components/Header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <div>
      <header>
        <div className="logo">
          <img src={Logo} alt="Logotipo de PCADigitall"/>
        </div>
        <div className="searchInput">
          <input type="text" placeholder="Buscar..."/>
          <button type="submit"><FontAwesomeIcon icon={faSearch}/></button>
        </div>
        <div className="buttons">
          <button type="submit"><FontAwesomeIcon icon={faShoppingCart}/> Carrito </button>
          <button type="submit"><FontAwesomeIcon icon={faUserCircle}/> Cuenta </button>
        </div>
      </header>
      <Navbar />
    </div>
  );
}

export default Header;