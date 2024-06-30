import React from 'react';
import './styles2.css';

const Header_gallery = () => {
    return (
        <header className="container">
            <span className="logo">EXPLORE U</span>
            <div className="info">
                <a href="1_main.html#about-site" className="active">ПРО САЙТ</a>
                <a href="http://localhost:3000/2_gallery">ГАЛЕРЕЯ</a>
                <a href="1_main.html#news">НОВИНИ</a>
                <a href="#" id="contacts-link">КОНТАКТИ</a>
                <a href="3_registr.html">ЗАРЕЄСТРУВАТИСЯ</a>
            </div> 
            <div className="hamburger-menu">
                <img src="image/hamburger-icon.png" alt="Menu" />
            </div>  
        </header>
    );
};

export default Header_gallery;