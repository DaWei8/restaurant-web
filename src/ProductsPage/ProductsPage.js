import React from 'react';

const ProductsPage = () => {
    return (
        <div className='products-page'>
            <PageHeading title='Our Meals' />
            <ProductCard price='50$' />
        </div>
    );
}
//Styling for the product card

const style = {
    background: 'red',
    height: '406px',
    weight: '345px',
    color: 'white',
    fontSize: '16px',
    border: '1px solid blue',
    cursor: 'pointer',
    borderRadius: '10px',
};

const ProductCard = (props) => {
    return (
        <div className='product-card-container' style={style}>
            <div>{props.price}</div>
            <div><img src='src\ProductsPage\baiq-daling-ykThMylLsbY-unsplash.png' /></div>
            <div className='product-name'>Lorem Ipsum</div>
            <div className='product-buy-button'>Buy now</div>
        </div>
    );
}


const PageHeading = (props) => {
    return (
        <div className='page-heading-title'>
            {props.title}
            <div className='page-heading-line'></div>
        </div>)
}


export default ProductsPage