import React from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
    return (
        <section className="contact" id="contact">
            <div className="contact-container">

                <div className="contact-label">
                    <span></span>
                    LET'S CONNECT
                </div>

                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="contact-small-title">
                        HAVE A PROJECT OR OPPORTUNITY?
                    </p>

                    <h2>
                        Let's Create <br />
                        Something <span>Meaningful.</span>
                    </h2>

                    <p className="contact-description">
                        I'm always open to connecting with people,
                        exploring opportunities and learning about
                        exciting projects. Feel free to reach out!
                    </p>

                    <a
                        href="mailto:macherlasarayu.04@gmail.com"
                        className="contact-button"
                    >
                        <Mail size={18} />
                        Say Hello
                        <ArrowUpRight size={18} />
                    </a>
                </motion.div>

                <div className="contact-socials">
                    <a href="https://github.com/msarayu17"
                        target="_blank" rel="noreferrer">
                        GitHub ↗
                    </a>

                    <a href="https://www.linkedin.com/in/sarayu-macherla-473774382"
                        target="_blank" rel="noreferrer">
                        LinkedIn ↗
                    </a>

                    <a href="mailto:macherlasarayu.04@gmail.com">
                        Email ↗
                    </a>
                </div>

                <div className="contact-bottom">
                    <span>06 — CONTACT</span>
                    <span>OPEN TO OPPORTUNITIES.</span>
                </div>

            </div>
        </section>
    );
}

export default Contact;