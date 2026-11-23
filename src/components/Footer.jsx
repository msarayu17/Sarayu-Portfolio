import React from 'react';
import { ArrowUp } from 'lucide-react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">

                <a href="#home" className="footer-logo">
                    MS<span>.</span>
                </a>

                <p className="footer-message">
                    Designed & developed with curiosity.
                </p>

                <a href="#home" className="back-to-top">
                    BACK TO TOP <ArrowUp size={15} />
                </a>

            </div>

            <div className="footer-bottom">
                <span>© {new Date().getFullYear()} MACHERLA SARAYU</span>
                <span>MADE WITH PASSION & CODE.</span>
            </div>
        </footer>
    );
}

export default Footer;