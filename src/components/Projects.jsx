import React, { useState } from 'react';
import { ExternalLink, Code2, ArrowUpRight, X } from 'lucide-react';
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
        live: 'https://vowera.vercel.app/',
        caseStudy: {
            overview: 'Vowera is a responsive web project developed to explore frontend development, interface design and creating seamless browsing experiences across different screen sizes.',
            problem: 'Creating a website that feels visually consistent, intuitive to navigate and accessible across desktop and mobile devices.',
            solution: 'Developed a structured frontend using semantic HTML, custom CSS and JavaScript, focusing on responsive layouts, interactive elements and consistent styling.',
            features: [
                'Responsive layouts across devices',
                'Interactive user interface',
                'Structured navigation',
                'Custom styling and visual consistency'
            ],
            contribution: 'Designed and developed the frontend, implemented responsive layouts and interactive elements, and refined the overall user experience.',
            technologies: ['HTML', 'CSS', 'JavaScript']
        }
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
        live: 'https://nutri-guide-rho.vercel.app/',
        caseStudy: {
            overview: 'NutriGuide is a nutrition guidance platform designed to help users explore dietary information and make more informed food and nutrition choices.',
            problem: 'Finding nutrition information and dietary guidance in one organized, accessible platform can be overwhelming for users.',
            solution: 'Developed a web-based platform using Flask for backend routing and frontend technologies to organize nutrition-related information into accessible sections.',
            features: [
                'Nutrition and dietary guidance',
                'Diet plan exploration',
                'Calorie tracking',
                'Structured informational sections',
                'Responsive interface'
            ],
            contribution: 'Developed the web application, implemented Flask routing and created the frontend interface for presenting nutrition-related information.',
            technologies: ['Python', 'Flask', 'HTML', 'CSS']
        }
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
        live: 'https://algo-budget.vercel.app/',
        caseStudy: {
            overview: 'AlgoBudget is a student-focused budgeting and expense-tracking application designed to make personal money management easier and more organized.',
            problem: 'Students often struggle to monitor spending, stay within monthly budgets and understand where their money goes.',
            solution: 'Built an expense-tracking application with a React frontend, Flask REST APIs and MySQL database integration to manage budgets and categorized transactions.',
            features: [
                'Monthly budget management',
                'Expense tracking and categorization',
                'Spending summaries and analytics',
                'Budget threshold alerts',
                'Transaction data management'
            ],
            contribution: 'Worked on frontend development, API integration, database connectivity and implementing expense and budget-management workflows.',
            technologies: ['React', 'Tailwind CSS', 'Flask', 'MySQL']
        }
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
        live: 'https://task-manager-rosy-omega-32.vercel.app/',
        caseStudy: {
            overview: 'Task Manager is a productivity web application designed to help users organize daily activities, manage tasks and keep track of their progress.',
            problem: 'Keeping track of daily responsibilities and prioritizing tasks can become difficult when activities are scattered or unorganized.',
            solution: 'Created a React-based task management interface with reusable components and interactive task operations to simplify everyday task organization.',
            features: [
                'Create and manage tasks',
                'Update task status',
                'Organize daily activities',
                'Filter tasks',
                'Responsive interface'
            ],
            contribution: 'Developed the React interface, implemented task-management functionality and designed responsive layouts using Bootstrap.',
            technologies: ['React', 'JavaScript', 'Bootstrap']
        }
    }
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);
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

                                    <button
                                        className="project-case-study"
                                        onClick={() => setSelectedProject(project)}
                                    >
                                        View Case Study
                                        <ArrowUpRight size={16} />
                                    </button>

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

            {selectedProject && (
                <div
                    className="case-study-overlay"
                    onClick={() => setSelectedProject(null)}
                >
                    <motion.div
                        className="case-study-modal"
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ duration: 0.3 }}
                        onClick={(e) => e.stopPropagation()}
                    >

                        <button
                            className="case-study-close"
                            onClick={() => setSelectedProject(null)}
                            aria-label="Close case study"
                        >
                            <X size={20} />
                        </button>

                        <div className="case-study-header">

                            <span className="case-study-number">
                                PROJECT {selectedProject.number}
                            </span>

                            <span className="case-study-category">
                                {selectedProject.category}
                            </span>

                            <h2>
                                {selectedProject.title}
                                <span>.</span>
                            </h2>

                            <p>{selectedProject.subtitle}</p>

                        </div>

                        <div className="case-study-content">

                            <div className="case-study-section">
                                <span className="case-study-label">OVERVIEW</span>
                                <p>{selectedProject.caseStudy.overview}</p>
                            </div>

                            <div className="case-study-section">
                                <span className="case-study-label">THE PROBLEM</span>
                                <p>{selectedProject.caseStudy.problem}</p>
                            </div>

                            <div className="case-study-section">
                                <span className="case-study-label">THE SOLUTION</span>
                                <p>{selectedProject.caseStudy.solution}</p>
                            </div>

                            <div className="case-study-section">
                                <span className="case-study-label">KEY FEATURES</span>

                                <ul>
                                    {selectedProject.caseStudy.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="case-study-section">
                                <span className="case-study-label">MY CONTRIBUTION</span>
                                <p>{selectedProject.caseStudy.contribution}</p>
                            </div>

                            <div className="case-study-section">
                                <span className="case-study-label">TECH STACK</span>

                                <div className="case-study-tech">
                                    {selectedProject.caseStudy.technologies.map((tech) => (
                                        <span key={tech}>{tech}</span>
                                    ))}
                                </div>
                            </div>

                        </div>

                        <div className="case-study-footer">

                            <a
                                href={selectedProject.github}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Source Code <Code2 size={16} />
                            </a>

                            {selectedProject.live && (
                                <a
                                    href={selectedProject.live}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Live Project <ExternalLink size={16} />
                                </a>
                            )}

                        </div>
                        
                    </motion.div>
                </div>
            )}

        </section>
    );
}

export default Projects;