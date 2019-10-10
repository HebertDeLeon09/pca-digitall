/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../assets/styles/components/Navbar.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Ofertas</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Servicios</a></li>
        <li><a href="#">Ubicaciones</a></li>
        <li><a href="#">Nosotros</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <button type="submit">Más</button>
    </nav>
  );
}

export default Navbar;