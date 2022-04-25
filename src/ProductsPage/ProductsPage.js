import React from 'react';

const ProductsPage = () => {
    return (
        <div className='products-page'>

        </div>
    );
}

const ProductCard = (props) => {
    return (
        <div className='product-card-container'>
        <div>{props.price}</div>
        <div><img src=''></img></div>
        </div>
    );
}

export default ProductsPage