// Portfolio.jsx
import React from 'react';
import styles from './Portfolio.module.css';

const data = {
    personal: {
        name: "Pushpak Patil",
        email: "pushpakp53@gmail.com",
        phone: "(+91) 9545002870",
        linkedin: "linkedin.com/in/pushpak-patil-654219164/"
    },
    summary: "Experienced Software Engineer with background in build and release engineering, web development and technology. Skilled in C++, Python, ReactJS, and Ansible with a proven track record of developing tools and automating processes to enhance efficiency.",
    experience: [
        {
            company: "Adobe",
            role: "Member of Technical Staff",
            duration: "Aug 2022 - Present",
            points: [
                "Developed internal build status dashboard using React/Material UI/Next.js/MongoDB (30% time reduction)",
                "Automated build environment setup with Ansible (95% manual task elimination)",
                "Redesigned web applications using React and Adobe React Spectrum"
            ]
        },
        // Add other experiences similarly
    ],
    projects: [
        {
            title: "Typescript Model Project",
            description: "CLI application fetching GitHub user details",
            tech: ["TypeScript", "Node.js"],
            link: "https://github.com/Pushpakp53/TypescriptModelProject"
        },
        // Add other projects
    ],
    skills: {
        languages: ["C++", "Python", "Java", "TypeScript"],
        web: ["React", "Next.js", "MERN Stack"],
        tools: ["Ansible", "Docker", "Git"],
        blockchain: ["Ethereum", "Smart Contracts", "Web3.js"]
    },
    education: "B.Tech in Computer Science - National Institute Of Technology Raipur"
};

export default function Portfolio() {
    return (
        <div className={styles.container}>
            {/* Header Section */}
            <header className={styles.header}>
                <h1>{data.personal.name}</h1>
                <div className={styles.contact}>
                    <span>{data.personal.email}</span>
                    <span>{data.personal.phone}</span>
                    <a href={`https://${data.personal.linkedin}`} target="_blank" rel="noopener noreferrer">
                        LinkedIn
                    </a>
                </div>
            </header>

            {/* Summary Section */}
            <section className={styles.section}>
                <h2>Summary</h2>
                <p>{data.summary}</p>
            </section>

            {/* Experience Section */}
            <section className={styles.section}>
                <h2>Professional Experience</h2>
                {data.experience.map((exp, i) => (
                    <div key={i} className={styles.experience}>
                        <h3>{exp.role} @ {exp.company}</h3>
                        <div className={styles.duration}>{exp.duration}</div>
                        <ul>
                            {exp.points.map((point, j) => (
                                <li key={j}>{point}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            {/* Projects Section */}
            <section className={styles.section}>
                <h2>Key Projects</h2>
                <div className={styles.projects}>
                    {data.projects.map((project, i) => (
                        <div key={i} className={styles.projectCard}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            <div className={styles.techStack}>
                                {project.tech.map((t, j) => (
                                    <span key={j} className={styles.techPill}>{t}</span>
                                ))}
                            </div>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View on GitHub
                            </a>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section className={styles.section}>
                <h2>Technical Skills</h2>
                <div className={styles.skillsGrid}>
                    {Object.entries(data.skills).map(([category, items]) => (
                        <div key={category} className={styles.skillCategory}>
                            <h3>{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
                            <div className={styles.skillItems}>
                                {items.map((item, i) => (
                                    <span key={i} className={styles.skillPill}>{item}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}