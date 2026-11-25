import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Certifications.css';

const certifications = [
    {
        title: "Programming in Java",
        issuer: "NPTEL · IIT Kharagpur",
        details: "Elite · 99% Score · Top 2%",
        image: "/certificates/nptel-java.pdf",
        link: "/certificates/nptel-java.pdf"
    },
    {
        title: "Cloud Computing Foundations",
        issuer: "Google Cloud",
        details: "Certificate",
        image: "/certificates/google-cloud.pdf",
        link: "/certificates/google-cloud.pdf"
    },
    {
        title: "Cloud Cybersecurity",
        issuer: "Google Cloud",
        details: "Certificate",
        image: "/certificates/google-cybersecurity.pdf",
        link: "/certificates/google-cybersecurity.pdf"
    },
    {
        title: "AI Fundamentals",
        issuer: "IBM SkillsBuild",
        details: "Certificate",
        image: "/certificates/ibm-ai-fundamentals.pdf",
        link: "/certificates/ibm-ai-fundamentals.pdf"
    },
    {
        title: "Getting Started with AI",
        issuer: "IBM SkillsBuild",
        details: "Certificate",
        image: "/certificates/ibm-ai-getting-started.pdf",
        link: "/certificates/ibm-ai-getting-started.pdf"
    }
];

function Certifications() {
    return (
        <section className="certifications section" id="certifications">

            <div className="certifications-container">

                <motion.div
                    className="certifications-heading"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                >
                    <div className="certifications-label">
                        <span></span>
                        LEARNING & GROWTH
                    </div>

                    <div className="certifications-heading">
                        <h2>Certifications<span>.</span></h2>
                        <p>
                            Credentials earned through continuous learning and exploration of technology.
                        </p>
                    </div>
                </motion.div>

                <div className="certifications-grid">

                    {certifications.map((cert, index) => (
                        <motion.div
                            className="certification-card"
                            key={cert.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1
                            }}
                        >

                            <div className="certification-image">
                                <iframe
                                    src={`${cert.image}#toolbar=0&navpanes=0&scrollbar=0`}
                                    title={`${cert.title} certificate preview`}
                                />

                                <div className="certification-image-overlay">
                                    <a href={cert.link} target="_blank" rel="noreferrer">
                                        View Certificate <ArrowUpRight size={16} />
                                    </a>
                                </div>
                            </div>

                            <div className="certification-info">

                                <p className="certification-issuer">
                                    {cert.issuer}
                                </p>

                                <h3>{cert.title}</h3>

                                <p className="certification-details">
                                    {cert.details}
                                </p>

                                <a
                                    href={cert.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="certification-link"
                                >
                                    View Certificate
                                    <ArrowUpRight size={15} />
                                </a>

                            </div>

                        </motion.div>
                    ))}

                </div>

                <div className="certifications-bottom">
                    <span>05 — CERTIFICATIONS</span>
                    <span>LEARNING NEVER STOPS.</span>
                </div>

            </div>

        </section>
    );
}

export default Certifications;