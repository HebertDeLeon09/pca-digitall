import React from 'react';
import '../assets/styles/components/ProductsContainer.scss';

const ProductsContainer = props => {
    return (
        <div className="ProductsContainer">
            <div className="ProductsContainer-Desc">
                {props.listName}
            </div>
            <div className="ProductsContainer-List">
                {props.children}
            </div>
        </div>
    );
}

export default ProductsContainer;