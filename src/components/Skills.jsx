import React from 'react';
import {
    Code2,
    Monitor,
    Server,
    Database,
    Brain
} from 'lucide-react';

import { motion } from 'framer-motion';
import './Skills.css';

const skillCategories = [
    {
        number: '01',
        title: 'Programming Languages',
        icon: <Code2 size={24} />,
        skills: ['Java', 'Python', 'C++', 'JavaScript']
    },
    {
        number: '02',
        title: 'Frontend Development',
        icon: <Monitor size={24} />,
        skills: ['HTML', 'CSS', 'React.js']
    },
    {
        number: '03',
        title: 'Backend Development',
        icon: <Server size={24} />,
        skills: ['Spring Boot', 'Java']
    },
    {
        number: '04',
        title: 'Databases',
        icon: <Database size={24} />,
        skills: ['MySQL']
    },
    {
        number: '05',
        title: 'Core Computer Science',
        icon: <Brain size={24} />,
        skills: ['Data Structure Fundamentals', 'OOPs', 'DBMS']
    },

    {
        number: '06',
        title: "Tools & DevOps",
        icon: <Monitor size={24} />,
        skills: ["Git", "GitHub", "VS Code", "Vercel"]
    }
];

function Skills() {
    return (
        <section className="skills" id="skills">

            <div className="skills-container">

                <div className="skills-heading">

                    <div className="skills-label">
                        <span></span>
                        MY EXPERTISE
                    </div>

                    <h2>
                        Things I <span>Work With.</span>
                    </h2>

                    <p>
                        A collection of technologies, tools and concepts
                        I use to bring ideas to life and continuously
                        expand my technical knowledge.
                    </p>

                </div>


                <div className="skills-grid">

                    {skillCategories.map((category, index) => (

                        <motion.div
                            className="skill-card"
                            key={category.number}
                            initial={{ opacity: 0, y: 35 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >

                            <div className="skill-card-top">

                                <span className="skill-number">
                                    {category.number}
                                </span>

                                <div className="skill-icon">
                                    {category.icon}
                                </div>

                            </div>

                            <h3>{category.title}</h3>

                            <div className="skill-tags">

                                {category.skills.map((skill) => (
                                    <span key={skill}>{skill}</span>
                                ))}

                            </div>

                        </motion.div>

                    ))}

                </div>


                <div className="skills-bottom">
                    <span>03 — SKILLS</span>
                    <span>LEARN. BUILD. REPEAT.</span>
                </div>

            </div>

        </section>
    );
}

export default Skills;