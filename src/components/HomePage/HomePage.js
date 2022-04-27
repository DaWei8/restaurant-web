import React from 'react';
import logo from '../assets/logo.svg'
import bigPlate from '../assets/pp3.jpg'
import plate from '../assets/pp4.jpg'
import cutlery from '../assets/cutlery.svg'
import flower from '../assets/flower.svg'
import './HomePage.css';

const Homepage = () => {
    return (
        <div className='home'>
            <div className='hero'>
                <div className='hero__left'>
                    <img src={logo} alt={logo} />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button>Order your meal</button>
                </div>
                <div className='hero__right'>
                    <img src={bigPlate} alt={bigPlate} />
                </div>
            </div>
            {/* ===========CUTLERY============= */}
            <div className='mid-hero'>
                <Cutlery image={flower} />
                <Cutlery image={cutlery} />
                <Cutlery image={flower} />
            </div>
            <div className='our-meals'>
                <PageHeading title='Our Meals'/>
                <OurMeals />
                <OurMeals />
                <OurMeals />
                <OurMeals />
            </div>

        </div>
    )
}


const Cutlery = (props) => {
    return (
        <div className='mid--hero'>
            <img src={props.image} alt={props.image} />
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
        </div>
    );
}
const OurMeals = () => {
    return (
        <div className='our-meals'>
            <div className='one-meal'>
                <img src={plate} alt={plate} />
                <div className='meal-details'>
                    <h3>Lorem Ipsum</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <span>$40.00</span>
                    <button>Order Now</button>
                </div>
            </div>
        </div>
    );
}

const PageHeading = (props) => {
    return (
        <div className='page-heading'>
            <div className='page-heading-title'>{props.title}</div>
            <div className='page-heading-line'></div>
        </div>
    )
}

export default Homepage;