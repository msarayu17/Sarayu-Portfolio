import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';
import './Education.css';

const education = [
    {
        period: '2025 — 2029',
        degree: 'B.Tech — Computer Science & Engineering',
        institution: 'Malla Reddy University - Hyderabad',
        details: 'Currently pursuing undergraduate studies in Computer Science and Engineering.',
        status: 'IN PROGRESS'
    },
    {
        period: '2023 — 2025',
        degree: 'Intermediate — MPC',
        institution: 'Career Point Junior College - Tarnaka',
        details: 'Completed intermediate education with a focus on Mathematics, Physics, and Chemistry.',
        status: 'COMPLETED'
    },
    {
        period: '2023',
        degree: 'SSC — Secondary School Certificate',
        institution: 'Narayana High School - Tarnaka',
        details: 'Successfully completed secondary education with a strong academic record.',
        status: 'COMPLETED'
    }
];

function Education() {
    return (
        <section className="education" id="education">
            <div className="education-container">

                <div className="education-heading">
                    <div className="education-label">
                        <span></span>
                        MY ACADEMIC JOURNEY
                    </div>

                    <h2>
                        Education & <span>Learning.</span>
                    </h2>

                    <p>
                        Building a strong foundation in technology,
                        problem-solving and computer science.
                    </p>
                </div>

                <div className="education-timeline">
                    {education.map((item, index) => (
                        <motion.div
                            className="education-card"
                            key={index}
                            initial={{ opacity: 0, x: -35 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7 }}
                        >
                            <div className="education-icon">
                                <GraduationCap size={25} />
                            </div>

                            <div className="education-content">
                                <span className="education-period">
                                    {item.period}
                                </span>

                                <span className="education-status">
                                    {item.status}
                                </span>

                                <h3>{item.degree}</h3>

                                <h4>{item.institution}</h4>

                                <p>{item.details}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="education-bottom">
                    <span>05 — EDUCATION</span>
                    <span>KNOWLEDGE IS A JOURNEY.</span>
                </div>

            </div>
        </section>
    );
}

export default Education;