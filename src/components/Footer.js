import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <h3>Binayak Bishnu</h3>
                <div className="quick-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Projects</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="contact-info">
                    <h4>Contact Information</h4>
                    <p>Email: binayakbishnu@example.com</p>
                </div>
                <div className="social-media">
                    <h4>Follow Me</h4>
                    <a href="https://www.linkedin.com/in/binayakbishnu">LinkedIn</a>
                    <a href="https://twitter.com/binayakbishnu">Twitter</a>
                    <a href="https://github.com/binayakbishnu">GitHub</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;