import React from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import twitter from "../assets/twitter.svg";
import facebook from "../assets/facebook.svg";
import instagram from "../assets/instagram.svg";
import backToTop from "../assets/backToTop.svg";

const Footer = () => {
    return (
        <footer>
            <img src={logo} alt={logo} />
            <div className="footer">
                <div className="footer-links">
                    <h2>Links</h2>
                    <div>
                        <Link to="/">Home</Link>
                        <Link to="/about">About Us</Link>
                        <Link to="/products">Products</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                    <img id="top" src={backToTop} alt={backToTop} />
                </div>
                <div className="footer-contact">
                    <h2>Contact Us</h2>
                    <p>+234 123 456 7890</p>
                    <p>group19@gmail.com</p>
                    <div className="footer-socials">
                        <ul>
                            <img src={twitter} alt={twitter} />
                            <img src={facebook} alt={facebook} />
                            <img src={instagram} alt={instagram} />
                        </ul>

                    </div>
                </div>
            </div>
        </footer>
    );
};



export default Footer;
