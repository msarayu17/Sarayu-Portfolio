import React from 'react';
import { ArrowUpRight, Code2, Lightbulb, Laptop } from 'lucide-react';
import { motion } from 'framer-motion';
import './About.css';

function About() {
    return (
        <section className="about" id="about">

            <div className="about-container">

                {/* Section Label */}
                <div className="about-label">
                    <span></span>
                    GET TO KNOW ME
                </div>

                {/* Main Content */}
                <div className="about-content">

                    <motion.div
                        className="about-heading"
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="about-small-title">A LITTLE</p>

                        <h2>
                            About <br />
                            <span>Myself.</span>
                        </h2>

                        <div className="about-line"></div>

                        <p className="about-caption">
                            Curious mind. Creative soul. <br />
                            Forever learning.
                        </p>
                    </motion.div>


                    <motion.div
                        className="about-description"
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >

                        <p className="about-intro">
                            Hello! I'm <span>Sarayu</span>,
                            a Computer Science and Engineering student
                            passionate about technology, creativity and innovation.
                        </p>

                        <p>
                            I enjoy exploring the world of software development,
                            understanding how things work and transforming
                            ideas into meaningful digital experiences.
                        </p>

                        <p>
                            From designing interfaces to developing applications,
                            I'm constantly learning, experimenting and challenging
                            myself to become a better developer.
                        </p>

                        <a href="#projects" className="about-link">
                            Explore my journey <ArrowUpRight size={18} />
                        </a>

                    </motion.div>

                </div>


                {/* Interest Cards */}
                <div className="about-cards">

                    <div className="about-card">
                        <Code2 size={25} />
                        <h3>Development</h3>
                        <p>Building functional and meaningful applications.</p>
                    </div>

                    <div className="about-card">
                        <Lightbulb size={25} />
                        <h3>Creativity</h3>
                        <p>Turning ideas into thoughtful digital experiences.</p>
                    </div>

                    <div className="about-card">
                        <Laptop size={25} />
                        <h3>Exploration</h3>
                        <p>Learning new technologies and exploring possibilities.</p>
                    </div>

                </div>

                <div className="about-bottom">
                    <span>02 — ABOUT</span>
                    <span>ALWAYS EVOLVING.</span>
                </div>

            </div>

        </section>
    );
}

export default About;