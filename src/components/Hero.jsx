import React from 'react';
import { ArrowUpRight, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import './Hero.css';

function Hero() {
    return (
        <section className="hero" id="home">

            <div className="hero-content">

                <motion.p
                    className="hero-tag"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    ✦ COMPUTER SCIENCE & ENGINEERING STUDENT
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Hello, I'm <br />
                    <span>Macherla Sarayu</span>
                </motion.h1>

                <p className="hero-description">
                    Building meaningful digital experiences through
                    creativity, technology and curiosity.
                </p>

                <div className="hero-buttons">

                    <a href="#projects" className="primary-btn">
                        Explore My Work <ArrowUpRight size={17} />
                    </a>

                    <a href="#contact" className="secondary-btn">
                        Get In Touch
                    </a>

                    <a
                        href="/Sarayu_Macherla_Resume.pdf"
                        download="Macherla_Sarayu_Resume.pdf"
                        className="resume-btn"
                    >
                        Download Resume <Download size={16} />
                    </a>

                </div>

                <div className="hero-socials">
                    <a
                        href="https://github.com/msarayu17"
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub ↗
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sarayu-macherla-473774382"
                        target="_blank"
                        rel="noreferrer"
                    >
                        LinkedIn ↗
                    </a>
                    <a
                        href="https://www.credly.com/users/sarayu-macherla"
                        target="_blank"
                        rel="noreferrer"
                    >
                        Credly ↗
                    </a>
                </div>

            </div>

            <motion.div
                className="hero-visual"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
            >
                <div className="hero-circle">
                    <span>MS</span>
                </div>

                <p>DESIGN. DEVELOP. DISCOVER.</p>
            </motion.div>

            <div className="hero-bottom">
                <span>SCROLL TO EXPLORE</span>
                <span>01 / 06</span>
            </div>

        </section>
    );
}

export default Hero;