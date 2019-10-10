import React from 'react';
import testImage from '../assets/images/square.png';
import '../assets/styles/components/MainContent.scss';

const MainContent = () => {
    return(
        <div className="Main">
            <div className="Main-Carrousel"><img src={testImage} alt="Imagen de prueba"/></div>
            <div className="Main-Side1"><img src={testImage} alt="Imagen de prueba"/></div>
            <div className="Main-Side2"><img src={testImage} alt="Imagen de prueba"/></div>
            <div className="Main-Botttom"><img src={testImage} alt="Imagen de prueba"/></div>
        </div>
    );
}

export default MainContent;