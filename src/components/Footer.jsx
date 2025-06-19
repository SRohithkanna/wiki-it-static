import React from 'react';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-container">
            <div className="footer-content">
                <div className="footer-section">
                    <h3>About Mayvel</h3>
                    <p>
                    </p>
                </div>
                <div className="footer-section">
                    <h3>Contact Us</h3>
                    <p>Email: </p>
                    <p>Phone: </p>
                    <p>Address:</p>
                </div>
                
            </div>
            <div className="footer-bottom">
                <p>&copy;Mayvel. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;