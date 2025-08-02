import React, { useState, useEffect, useRef } from 'react';

// The Redesigned Projects Component
export default function Projects() {
    const [activeProject, setActiveProject] = useState(0);

    // You can replace this with your actual project data
    const projects = [
        {
            id: 0,
            title: "Next Ventures",
            subtitle: "A platform for early-stage entrepreneurs to pitch, browse, and engage with startup ideas, built to impress with blazing speed and compelling visuals.",
            features: [
                "Leveraged Partial Prerendering for faster loading.",
                "Simplified idea submission with a clean, intuitive design.",
                "Enhanced Browse with seamless performance optimization."
            ],
            tech: ["Next.js", "React", "TypeScript", "Sanity", "Auth.js"],
            image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2232&auto=format&fit=crop"
        },
        {
            id: 1,
            title: "EcoTracker Pro",
            subtitle: "A comprehensive sustainability platform that helps businesses track their carbon footprint and implement eco-friendly practices with real-time analytics.",
            features: [
                "Real-time carbon footprint tracking and visualization.",
                "AI-powered sustainability recommendations.",
                "Comprehensive reporting and compliance tools."
            ],
            tech: ["React", "Node.js", "MongoDB", "D3.js", "AWS"],
            image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop"
        },
        {
            id: 2,
            title: "FinanceFlow",
            subtitle: "An advanced financial management platform for small to medium businesses, featuring automated bookkeeping, invoicing, and predictive cash flow analysis.",
            features: [
                "Automated transaction categorization and bookkeeping.",
                "Predictive cash flow analysis using machine learning.",
                "Seamless integration with major banking APIs."
            ],
            tech: ["Vue.js", "Python", "PostgreSQL", "Stripe", "Plaid"],
            image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1911&auto=format&fit=crop"
        }
    ];

    // This creates a ref for each project card
    const projectRefs = useRef([]);
    projectRefs.current = projects.map((_, i) => projectRefs.current[i] ?? React.createRef());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = projectRefs.current.findIndex(ref => ref.current === entry.target);
                        if (index !== -1) {
                            setActiveProject(index);
                        }
                    }
                });
            },
            {
                rootMargin: '-50% 0px -50% 0px', // Trigger when the card is in the middle of the viewport
                threshold: 0
            }
        );

        projectRefs.current.forEach(ref => {
            if (ref.current) {
                observer.observe(ref.current);
            }
        });

        return () => {
            projectRefs.current.forEach(ref => {
                if (ref.current) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);


    return (
        <section id="projects" className="projects-section">
            <style>{`
                /* --- PROJECTS SECTION STYLES --- */
                .projects-section {
                    min-height: 100vh;
                    background-color: #1A1A17;
                    padding: 4rem 2rem;
                    box-sizing: border-box;
                    border-top: 1px solid #3a3a35;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                }

                .projects-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .projects-header h1 {
                    font-family: 'Playfair Display', serif;
                    font-size: 3.5rem;
                    color: #EAE8E3;
                    margin: 0;
                }
                .projects-header p {
                    font-size: 1.1rem;
                    color: #C4BFB8;
                    max-width: 600px;
                    margin: 1rem auto 0;
                }

                .projects-layout {
                    display: grid;
                    grid-template-columns: 2fr 1fr; /* Left column is wider */
                    gap: 2rem;
                    width: 100%;
                    max-width: 90rem; /* 1440px */
                    margin: 0 auto;
                }

                /* Left side - Scrolling project cards */
                .projects-list {
                    display: flex;
                    flex-direction: column;
                    gap: 2rem; /* Provides spacing if JS is disabled */
                }

                .project-card {
                    height: 90vh;
                    border-radius: 1.5rem;
                    position: relative;
                    overflow: hidden;
                    border: 1px solid #3a3a35;
                    display: flex;
                    align-items: flex-end; /* Align content to the bottom */
                    padding: 2.5rem;
                    box-sizing: border-box;
                }
                
                .project-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: linear-gradient(180deg, rgba(26, 26, 23, 0) 50%, rgba(26, 26, 23, 0.9) 85%);
                    z-index: 1;
                    transition: background 0.5s ease;
                }

                .project-card:hover::before {
                    background: linear-gradient(180deg, rgba(26, 26, 23, 0.2) 0%, rgba(26, 26, 23, 1) 75%);
                }

                .project-card-image {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    z-index: 0;
                    transition: transform 0.6s ease;
                }
                
                .project-card:hover .project-card-image {
                    transform: scale(1.05);
                }

                .project-card-content {
                    position: relative;
                    z-index: 2;
                    color: #EAE8E3;
                    transform: translateY(20px);
                    opacity: 0;
                    transition: transform 0.6s ease, opacity 0.6s ease;
                }

                .project-card:hover .project-card-content {
                    transform: translateY(0);
                    opacity: 1;
                }

                .project-card-content h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.5rem;
                    margin: 0 0 0.5rem 0;
                }

                .project-card-content p {
                    font-size: 1rem;
                    line-height: 1.6;
                    max-width: 80%;
                    margin: 0;
                    color: #C4BFB8;
                }

                /* Right side - Sticky info panel */
                .project-info-panel {
                    position: sticky;
                    top: 100px;
                    height: calc(100vh - 140px);
                    background-color: #292925;
                    border-radius: 1.5rem;
                    padding: 2.5rem;
                    border: 1px solid #3a3a35;
                }

                .info-content-wrapper {
                     opacity: 0;
                     animation: fadeIn 0.6s ease forwards;
                }

                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }

                .info-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.5rem;
                    margin: 0 0 1.5rem 0;
                    color: #EAE8E3;
                }

                .info-subtitle {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: #C4BFB8;
                    margin-bottom: 2rem;
                }

                .info-features h3, .info-tech h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    margin: 0 0 1rem 0;
                    color: #C4BFB8;
                    border-bottom: 1px solid #3a3a35;
                    padding-bottom: 0.5rem;
                }

                .info-features ul {
                    list-style: none;
                    padding: 0;
                    margin: 0 0 2rem 0;
                }

                .info-features li {
                    position: relative;
                    padding-left: 1.5rem;
                    margin-bottom: 0.75rem;
                    color: #b0aba4;
                }

                .info-features li::before {
                    content: '+';
                    position: absolute;
                    left: 0;
                    color: #C4BFB8;
                }

                .info-tech-tags {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                }

                .info-tech-tags span {
                    background-color: #3a3a35;
                    padding: 0.4rem 0.8rem;
                    border-radius: 99px;
                    font-size: 0.8rem;
                    font-weight: 500;
                    color: #C4BFB8;
                }

                /* Responsive Design */
                @media (max-width: 1024px) {
                    .projects-layout {
                        grid-template-columns: 1fr;
                    }
                    .project-info-panel {
                        display: none; /* Hide sticky panel on smaller screens */
                    }
                    .project-card {
                        height: 70vh;
                    }
                    .project-card-content {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
            `}</style>
             <div className="projects-header">
                <h1>Featured Work</h1>
                <p>A curated selection of projects that showcase my passion for creating modern, functional, and beautiful digital experiences.</p>
            </div>
            <div className="projects-layout">
                <div className="projects-list">
                    {projects.map((project, index) => (
                        <div
                            key={project.id}
                            ref={projectRefs.current[index]}
                            className="project-card"
                        >
                            <img src={project.image} alt={project.title} className="project-card-image" />
                            <div className="project-card-content">
                                <h2>{project.title}</h2>
                                <p>{project.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <aside className="project-info-panel">
                    {/* The key prop on the wrapper div makes the content re-animate on change */}
                    <div key={activeProject} className="info-content-wrapper">
                        <h2 className="info-title">{projects[activeProject].title}</h2>
                        <p className="info-subtitle">{projects[activeProject].subtitle}</p>
                        <div className="info-features">
                            <h3>Key Features</h3>
                            <ul>
                                {projects[activeProject].features.map((feature, i) => (
                                    <li key={i}>{feature}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="info-tech">
                            <h3>Technologies</h3>
                            <div className="info-tech-tags">
                                {projects[activeProject].tech.map(tag => (
                                    <span key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </section>
    );
}