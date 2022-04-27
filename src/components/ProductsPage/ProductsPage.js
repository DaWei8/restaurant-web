import React from 'react';
import Img from '../assets/image.png';
import './ProductsPage.css';



const ProductsPage = () => {
    return (
        <div className='products-page'>
            <PageHeading title='Our Meals' />
            <div className='product-card-container'>
                <ProductCard price='50$' /><ProductCard price='50$' /><ProductCard price='50$' />
                <ProductCard price='50$' /><ProductCard price='50$' /><ProductCard price='50$' />
                <ProductCard price='50$' /><ProductCard price='50$' /><ProductCard price='50$' />
                <ProductCard price='50$' /><ProductCard price='50$' /><ProductCard price='50$' />
                <ProductCard price='50$' /><ProductCard price='50$' /><ProductCard price='50$' />
            </div>
        </div>
    );
}

// this is the product card
const ProductCard = (props) => {

    return (
        <div className='product-card' >
            <div className='product-card-contents'>
                <div className='product-card-price'>{props.price}</div>
                <img className='product-card-img' src={Img} alt='' />
                <div className='product-card-name'>Lorem Ipsum</div>
                <div className='product-card-buy-button'><div className='product-card-buy-button-text'>Buy now</div></div>
            </div>
            </div>
    );
}


// this is the page heading
const PageHeading = (props) => {
    return (
        <div className='page-heading'>
            <div className='page-heading-title'>{props.title}</div>
            <div className='page-heading-line'></div>
        </div>
    )
}

export default ProductsPage