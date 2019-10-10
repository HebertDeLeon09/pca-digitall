import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faHeart, faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import '../assets/styles/components/Product.scss';

const Product = props => {
    return (
        <div className="Product">
            <div className="Product-Image">
                <img src={props.url} alt='Producto' />
            </div>
            <div className="Product-Desc">
                <h4>{props.name}</h4>
                <h4>Q. {props.price}</h4>
            </div>
            <div className="Product-Buttons">
                <button type="submit" className="product-add" ><FontAwesomeIcon icon={faCartPlus}/>&nbsp;Añadir</button>
                <button type="submit" className="product-favourite"><FontAwesomeIcon icon={faHeart}/></button>
                <button type="submit" className="product-compare"><FontAwesomeIcon icon={faExchangeAlt}/></button>
            </div>
        </div>
    );
}

export default Product;