import React, { useState, useEffect, useRef } from 'react';

// The Redesigned Projects Component with Updated Mobile View
export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    // --- YOUR PROJECTS ADDED HERE ---
    const projects = [
        {
            title: "DelAI - Dynamic Route Optimization",
            description: "An award-winning AI platform that optimizes last-mile delivery by integrating real-time geospatial data with predictive analytics. The system dynamically adjusts routes based on live traffic, reducing delivery times by 22%.",
            tech: ["React.js", "Leaflet.js", "Gemini API", "OpenStreetMap", "OSRM"],
            imageUrl: "/assets/2.png",
            link: "https://github.com/LestlinRobins/AIVentures"
        },
        {
            title: "LawGorithm - Public Safety Platform",
            description: "An AI-powered PWA that enhances public safety with real-time threat detection, predictive crime heatmaps, and automated emergency alerts. It also provides on-demand legal guidance via an AI chatbot.",
            tech: ["Next.js", "React.js", "Gemini AI", "GCP", "Supabase", "OpenCV", "Computer Vision"],
            imageUrl: "/assets/1.png",
            link: "https://github.com/LestlinRobins/LawGorithm"
        },
        {
            title: "VantaAI - Digital Guardian",
            description: "A 2nd-place winning web app designed to combat image-based abuse like deepfakes. It empowers users with proactive protection via watermarking, AI-powered web scanning, and automated complaint generation.",
            tech: ["React.js", "Node.js", "Python", "Gemini API", "Supabase", "OpenCV"],
            imageUrl: "/assets/3.png",
            link: "https://github.com/AnitaGeorge404/VantaAI"
        }
    ];

    const refs = useRef([]);
    refs.current = projects.map((_, i) => refs.current[i] ?? React.createRef());

    // This hook preloads all project images on component mount.
    useEffect(() => {
        projects.forEach(project => {
            const img = new Image();
            img.src = project.imageUrl;
        });
    }, []); 

    // This hook handles the scroll-based active state change for desktop.
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const mostVisibleEntry = entries.reduce(
                    (prev, current) => {
                        return prev.intersectionRatio > current.intersectionRatio ? prev : current;
                    }
                );

                if (mostVisibleEntry.isIntersecting) {
                    const index = refs.current.findIndex(ref => ref.current === mostVisibleEntry.target);
                    if (index !== -1) {
                        setActiveIndex(index);
                    }
                }
            },
            {
                rootMargin: "-50% 0px -50% 0px",
                threshold: [0, 0.25, 0.5, 0.75, 1],
            }
        );
        
        const currentRefs = refs.current;
        currentRefs.forEach(ref => {
            if (ref.current) observer.observe(ref.current);
        });

        return () => {
            currentRefs.forEach(ref => {
                if (ref.current) observer.unobserve(ref.current);
            });
        };
    }, []);

    return (
        <section id="projects" className="projects-section">
            <style>{`
                .projects-section {
                    background-color: #1A1A17;
                    padding: 6rem 2rem;
                    border-top: 1px solid #2a2a2a;
                    font-family: 'Inter', sans-serif;
                }
                
                .section-heading {
                    max-width: 50rem;
                    margin: 0 auto 5rem auto;
                    text-align: center;
                }
                .section-heading h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 3.5rem;
                    color: #F5F5F5;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }
                .section-heading p {
                    font-size: 1.125rem;
                    line-height: 1.8;
                    color: #a0a0a0;
                }

                .projects-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 5rem;
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
                    height: 85%;
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
                    transform: scale(1.05);
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
                    min-height: 90vh;
                    padding: 2rem 0;
                    opacity: 0.35;
                    transform: translateY(20px);
                    transition: opacity 0.5s ease, transform 0.5s ease;
                }
                .project-card.is-active { 
                    opacity: 1; 
                    transform: translateY(0);
                }

                /* ✨ NEW: Style for the mobile-only image, hidden on desktop by default */
                .project-image-mobile {
                    display: none;
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

                .project-link {
                    display: inline-flex;
                    align-items: center;
                    margin-top: 2.5rem;
                    margin-bottom: 1.5rem;
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
                
                /* ✨ NEW: Updated mobile styles */
                @media (max-width: 768px) {
                    .projects-container {
                        display: flex; /* Override grid */
                        flex-direction: column;
                        gap: 7rem; /* MODIFIED: Increased space between cards for better mobile separation */
                    }

                    /* Hide the desktop sticky image container */
                    .projects-left {
                        display: none;
                    }

                    /* Reset the project card for a static list view */
                    .project-card {
                        min-height: auto;
                        padding: 0;
                        opacity: 1;
                        transform: none;
                        transition: none;
                    }
                    
                    /* The .is-active class will still be applied by JS, but we make it do nothing on mobile */
                    .project-card.is-active {
                        transform: none;
                    }

                    /* Show and style the image inside each card on mobile */
                    .project-image-mobile {
                        display: block;
                        width: 100%;
                        height: auto;
                        object-fit: cover;
                        border-radius: 1rem;
                        margin-bottom: 2rem;
                        border: 1px solid #2a2a2a;
                    }
                    
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
                {/* This container is for the DESKTOP sticky image. It will be hidden on mobile by CSS. */}
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
                
                {/* This container holds the text content. On mobile, it becomes the main list. */}
                <main className="projects-right">
                    {projects.map((project, index) => (
                        <article key={project.title} ref={refs.current[index]} className={`project-card ${index === activeIndex ? 'is-active' : ''}`}>
                            {/* ✨ NEW: This image is added for the mobile view. It's hidden on desktop by CSS. */}
                            <img src={project.imageUrl} alt={project.title} className="project-image-mobile" />
                            
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