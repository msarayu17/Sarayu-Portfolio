import React from 'react';
import { Megaphone, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import './Extracurriculars.css';

const activities = [
    {
        number: '01',
        role: 'Marketing Team Member',
        organization: 'TEDxMRUH',
        description:
            'Contributed to marketing initiatives, student outreach and event promotions as part of the TEDxMRUH team. Collaborated with team members to support event visibility, audience engagement and coordination.',
        responsibilities: [
            'Student outreach and engagement',
            'Event promotion and marketing',
            'Team collaboration',
            'Event coordination and logistics'
        ],
        period: 'EXTRACURRICULAR',
        certificate: '/certificates/TEDxMRUH.png'
    }
];

function Extracurriculars() {
    return (
        <section className="extracurriculars" id="extracurriculars">
            <div className="extracurriculars-container">

                <div className="extracurriculars-label">
                    <span></span>
                    BEYOND THE CLASSROOM
                </div>

                <div className="extracurriculars-heading">
                    <h2>
                        Extracurriculars<span>.</span>
                    </h2>

                    <p>
                        Experiences that shaped my communication,
                        collaboration and creative thinking beyond technology.
                    </p>
                </div>

                <div className="extracurriculars-list">
                    {activities.map((activity, index) => (
                        <motion.article
                            className="extracurricular-card"
                            key={activity.number}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >

                            <div className="extracurricular-icon">
                                <Megaphone size={22} />
                            </div>

                            <div className="extracurricular-content">

                                <span className="extracurricular-period">
                                    {activity.period}
                                </span>

                                <span className="extracurricular-number">
                                    {activity.number}
                                </span>

                                <h3>{activity.role}</h3>

                                <h4>{activity.organization}</h4>

                                <p className="extracurricular-description">
                                    {activity.description}
                                </p>

                                <div className="extracurricular-responsibilities">
                                    {activity.responsibilities.map((item, i) => (
                                        <span key={i}>{item}</span>
                                    ))}
                                </div>

                                <a
                                    href={activity.certificate}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="extracurricular-certificate"
                                >
                                    View Certificate <ArrowUpRight size={16} />
                                </a>

                            </div>

                        </motion.article>
                    ))}
                </div>

                <div className="extracurriculars-bottom">
                    <span>07 — EXTRACURRICULARS</span>
                    <span>COMMUNITY. CREATIVITY. COLLABORATION.</span>
                </div>

            </div>
        </section>
    );
}

export default Extracurriculars;