import React from 'react';
import './styles2.css';

const Footer_gallery = () => {
    return (
        <div className="footer">
            <p className="footer-text">Made by ANASTASIIA KURYLEKH
                <br />POLTAVA 2024
            </p>
            <div className="image_icons">
                <a href="https://www.facebook.com/?locale=uk_UA"><img src="image/facebook.png" alt="Facebook" width="35" height="35" /></a>
                <a href="https://www.instagram.com/ukrainer_net/"><img src="image/instagram.png" alt="Instagram" width="30" height="30" /></a>
                <a href="https://www.youtube.com/@ukrainernet"><img src="image/youtube.png" alt="YouTube" width="35" height="35" /></a>
            </div>
        </div>
    );
};

export default Footer_gallery;