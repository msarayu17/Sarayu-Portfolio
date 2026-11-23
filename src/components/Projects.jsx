import React from 'react';
import { ExternalLink, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import './Projects.css';

const projects = [
    {
        number: '01',
        category: 'FRONTEND DEVELOPMENT',
        title: 'Vowera',
        subtitle: 'Responsive Web Application',
        description:
            'Designed and developed a responsive frontend web application focused on creating an intuitive and interactive user experience. Used semantic HTML, custom CSS and JavaScript to build structured layouts, smooth navigation and consistent styling across devices.',
        technologies: ['HTML', 'CSS', 'JavaScript'],
        image: '/images/vowera.png',
        status: 'Web Project',
        github: 'https://github.com/msarayu17/Vowera',
        live: 'https://vowera.vercel.app/'
    },
    {
        number: '02',
        category: 'HEALTH & NUTRITION',
        title: 'NutriGuide',
        subtitle: 'Nutrition Guidance Platform',
        description:
            'Developed a web-based nutrition guidance platform using Flask for backend routing and responsive design principles for cross-device usability. Built structured user workflows to deliver tailored dietary recommendations and nutritional information.',
        technologies: ['Python', 'Flask', 'HTML', 'CSS'],
        image: '/images/nutriguide.png',
        status: 'Web Project',
        github: 'https://github.com/msarayu17/NutriGuide',
        live: 'https://nutri-guide-rho.vercel.app/'
    },
    {
        number: '03',
        category: 'FINTECH / PRODUCTIVITY',
        title: 'AlgoBudget',
        subtitle: 'Student Expense & Budget Tracker',
        description:
            'Developed a student-focused expense and budget-tracking application with categorized spending analytics and interactive financial summaries. Integrated a React and Tailwind CSS frontend with Flask REST APIs and MySQL to persist and manage transaction records.',
        technologies: ['React', 'Tailwind CSS', 'Flask', 'MySQL'],
        image: '/images/algobudget.png',
        status: 'Web Application',
        github: 'https://github.com/msarayu17/AlgoBudget',
        live: 'https://algo-budget.vercel.app/'
    },
    {
        number: '04',
        category: 'PRODUCTIVITY',
        title: 'Task Manager',
        subtitle: 'Daily Task Management Application',
        description:
            'Built a task-management web application that enables users to create, organize, filter and track daily tasks in real time. Used modular React components and responsive Bootstrap layouts to support smooth task status updates across desktop and mobile screens.',
        technologies: ['React', 'JavaScript', 'Bootstrap'],
        image: '/images/taskmanager.png',
        status: 'Web Application',
        github: 'https://github.com/msarayu17/Task-Manager',
        live: 'https://task-manager-rosy-omega-32.vercel.app/'
    }
];

function Projects() {
    return (
        <section className="projects" id="projects">
            <div className="projects-container">

                <div className="projects-heading">
                    <div className="projects-label">
                        <span></span>
                        A SELECTION OF MY WORK
                    </div>

                    <h2>
                        Selected <span>Works.</span>
                    </h2>

                    <p>
                        A glimpse into the ideas I've explored,
                        problems I've worked on and experiences
                        I've built through technology.
                    </p>
                </div>

                <div className="projects-list">
                    {projects.map((project, index) => (
                        <motion.article
                            className="project-card"
                            key={project.number}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.7, delay: index * 0.1 }}
                        >
                            <div className="project-image">
                                <img
                                    src={project.image}
                                    alt={`${project.title} project preview`}
                                />

                                <span className="project-number">
                                    {project.number}
                                </span>

                                <span className="project-status">
                                    {project.status}
                                </span>
                            </div>

                            <div className="project-info">
                                <span className="project-category">
                                    {project.category}
                                </span>

                                <h3>{project.title}</h3>

                                <h4>{project.subtitle}</h4>

                                <p className="project-description">
                                    {project.description}
                                </p>

                                <div className="project-tech">
                                    {project.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a
                                        href={project.github}
                                        className="project-github"
                                        target="_blank"
                                        rel="noreferrer"
                                        aria-label={`GitHub repository for ${project.title}`}
                                    >
                                        <Code2 size={17} />
                                        Source Code
                                    </a>

                                    {project.live && (
                                        <a
                                            href={project.live}
                                            className="project-live"
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={`Live preview of ${project.title}`}
                                        >
                                            Live Preview
                                            <ExternalLink size={16} />
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>

                <div className="projects-bottom">
                    <span>04 — PROJECTS</span>
                    <span>IDEAS INTO REALITY.</span>
                </div>

            </div>
        </section>
    );
}

export default Projects;