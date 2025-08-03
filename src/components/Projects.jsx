import React, { useState, useEffect, useRef } from 'react';

// The Redesigned Projects Component with your data
export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    // --- YOUR PROJECTS ADDED HERE ---
    const projects = [
        {
            title: "DelAI - Dynamic Route Optimization",
            description: "An award-winning AI platform that optimizes last-mile delivery by integrating real-time geospatial data with predictive analytics. The system dynamically adjusts routes based on live traffic, reducing delivery times by 22%.",
            tech: ["React.js", "Leaflet.js", "Gemini API", "OpenStreetMap", "OSRM"],
            imageUrl: "/assets/2.png",
            link: "#"
        },
        {
            title: "LawGorithm - Public Safety Platform",
            description: "An AI-powered PWA that enhances public safety with real-time threat detection, predictive crime heatmaps, and automated emergency alerts. It also provides on-demand legal guidance via an AI chatbot.",
            tech: ["Next.js", "React.js", "Gemini AI", "GCP", "Supabase", "OpenCV", "Computer Vision"],
            imageUrl: "/assets/1.png",
            link: "#"
        },
        {
            title: "VantaAI - Digital Guardian",
            description: "A 2nd-place winning web app designed to combat image-based abuse like deepfakes. It empowers users with proactive protection via watermarking, AI-powered web scanning, and automated complaint generation.",
            tech: ["React.js", "Node.js", "Python", "Gemini API", "Supabase", "OpenCV"],
            imageUrl: "/assets/3.png",
            link: "#"
        }
    ];

    const refs = useRef([]);
    refs.current = projects.map((_, i) => refs.current[i] ?? React.createRef());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = refs.current.findIndex(ref => ref.current === entry.target);
                        if (index !== -1) {
                            setActiveIndex(index);
                        }
                    }
                });
            },
            { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
        );

        refs.current.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            refs.current.forEach(ref => {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <section id="projects" className="projects-section">
            <style>{`
                .projects-section {
                    background-color: #121212; /* Slightly darker background */
                    padding: 6rem 2rem;
                    border-top: 1px solid #2a2a2a;
                    font-family: 'Inter', sans-serif; /* Using a modern sans-serif font */
                }
                
                .section-heading {
                    max-width: 50rem;
                    margin: 0 auto 5rem auto; /* Increased bottom margin */
                    text-align: center;
                }
                .section-heading h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 3.5rem; /* Larger heading */
                    color: #F5F5F5;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }
                .section-heading p {
                    font-size: 1.125rem; /* Slightly larger text */
                    line-height: 1.8;
                    color: #a0a0a0;
                }

                .projects-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem; /* Increased gap */
                    max-width: 80rem;
                    margin: 0 auto;
                }
                
                .projects-left {
                    position: sticky;
                    top: 120px;
                    height: calc(100vh - 160px);
                    display: flex;
                    align-items: center;
                }
                .projects-image-preview {
                    position: relative;
                    width: 100%;
                    height: 85%; /* Increased height */
                    border-radius: 1rem;
                    overflow: hidden;
                    border: 1px solid #2a2a2a;
                    background: #1a1a1a;
                }
                .projects-image {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    object-fit: cover;
                    transition: opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
                    transform: scale(1.05); /* Slight zoom for active image */
                }
                .projects-image.is-active {
                    opacity: 1;
                    transform: scale(1);
                }
                
                .projects-right {
                    display: flex;
                    flex-direction: column;
                }
                .project-card {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 90vh; /* Increased min-height */
                    padding: 2rem 0;
                    opacity: 0.35;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
                .project-card.is-active { 
                    opacity: 1; 
                    transform: translateY(0);
                }
                .project-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.75rem;
                    margin-bottom: 1.5rem;
                    color: #EAE8E3;
                    font-weight: 500;
                }
                .project-description {
                    font-size: 1.05rem;
                    line-height: 1.8;
                    color: #a0a0a0;
                    max-width: 95%;
                    margin-bottom: 2rem;
                }
                .project-tech-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    margin: 0;
                    padding: 0;
                    list-style-type: none;
                }
                .project-tech-item {
                    background-color: rgba(255, 255, 255, 0.05);
                    color: #c4c4c4;
                    padding: 0.6rem 1.2rem;
                    border-radius: 9999px;
                    font-size: 0.875rem;
                    border: 1px solid #333;
                    font-weight: 500;
                    transition: all 0.2s ease;
                }
                .project-tech-item:hover {
                    background-color: rgba(255, 255, 255, 0.1);
                    border-color: #555;
                    color: #fff;
                }

                /* --- NEW: Link Button --- */
                .project-link {
                    display: inline-flex;
                    align-items: center;
                    margin-top: 2.5rem;
                    color: #F5F5F5;
                    text-decoration: none;
                    font-weight: 600;
                    font-size: 1rem;
                    transition: color 0.3s ease;
                }
                .project-link:hover {
                    color: #fff;
                }
                .project-link .arrow {
                    margin-left: 0.5rem;
                    transition: transform 0.3s ease;
                }
                .project-link:hover .arrow {
                    transform: translateX(5px);
                }

                @media (max-width: 992px) {
                    .projects-container { gap: 2rem; }
                    .project-title { font-size: 2.25rem; }
                }

                @media (max-width: 768px) {
                    .projects-container { grid-template-columns: 1fr; }
                    .projects-left { position: relative; top: 0; height: 50vh; order: 1; }
                    .projects-right { order: 2; }
                    .project-card { min-height: auto; padding: 4rem 0; opacity: 1; transform: translateY(0); }
                    .section-heading h2 { font-size: 2.75rem; }
                }
            `}</style>

            <div className="section-heading">
                <h2>Crafted with Code</h2>
                <p>
                    I believe the best way to learn is by building. This section showcases a selection of my work, demonstrating my ability to transform ideas into functional, user-friendly, and performant applications.
                </p>
            </div>

            <div className="projects-container">
                <aside className="projects-left">
                    <div className="projects-image-preview">
                        {projects.map((project, index) => (
                            <img
                                key={project.imageUrl}
                                src={project.imageUrl}
                                alt={project.title}
                                className={`projects-image ${index === activeIndex ? 'is-active' : ''}`}
                                style={{ opacity: index === activeIndex ? 1 : 0 }}
                            />
                        ))}
                    </div>
                </aside>
                <main className="projects-right">
                    {projects.map((project, index) => (
                        <article key={project.title} ref={refs.current[index]} className={`project-card ${index === activeIndex ? 'is-active' : ''}`}>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <ul className="project-tech-list">
                                {project.tech.map((tech) => <li key={tech} className="project-tech-item">{tech}</li>)}
                            </ul>
                            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                                View Project
                                <span className="arrow">→</span>
                            </a>
                        </article>
                    ))}
                </main>
            </div>
        </section>
    );
}