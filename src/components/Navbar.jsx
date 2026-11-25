import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const closeMenu = () => setMenuOpen(false);

    return (
        <nav className="navbar">
            <a href="#home" className="nav-logo" onClick={closeMenu}>
                MS<span>.</span>
            </a>

            <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
                <a href="#home" onClick={closeMenu}>Home</a>
                <a href="#about" onClick={closeMenu}>About</a>
                <a href="#skills" onClick={closeMenu}>Skills</a>
                <a href="#projects" onClick={closeMenu}>Projects</a>
                <a href="#certifications" onClick={closeMenu}>Certifications</a>
                <a href="#education" onClick={closeMenu}>Education</a>
                <a href="#extracurriculars" onClick={closeMenu}>Extracurriculars</a>
            </div>

            <a href="#contact" className="nav-contact" onClick={closeMenu}>
                Let's Talk <span>↗</span>
            </a>

            <button
                className="menu-toggle"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                aria-expanded={menuOpen}
            >
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
        </nav>
    );
}

export default Navbar;