import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {
    return (
        <div className='navbar'>
            <div className='Logo'>
                <div className="reactaurant" href='#homepage'>
                    <span className="span0">React</span><span className="span1">aurant</span>
                </div>
            </div>

            <div className='navbar-items'>
            <div className='navbar-items'>
                <div className='Home'><Link to='/' >Home</Link></div>
                <div className='About'><Link to='/about'>About</Link></div>
                <div className='Products'><Link to='/products'>Products</Link></div>
                <div id='item' className='Contact-button'><div id='item-contact' className='Contact'><Link to='contact'>Contact</Link></div></div>
            </div>

            </div>
        </div>
    );
};


export default NavBar;