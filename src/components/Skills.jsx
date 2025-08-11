import React, { useEffect, useRef, useState } from 'react';

// The Redesigned, Modern Skills Component
export default function Skills() {
    
    const skillsData = {
        frontend: ["JavaScript", "React", "Vite", "HTML5 & CSS3", "Framer Motion", "GSAP",],
        backend: ["Node.js", "Python", "REST APIs", "FastAPI", "Java","PHP"],
        databases: ["PostgreSQL", "MySQL", "Firebase", "Supabase"],
        tools: ["Git & GitHub", "CI/CD", "Figma","Canva", "Vercel", "Netlify"]
    };

    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);
    
    // Mouse move effect for the glowing border
    useEffect(() => {
        const handleMouseMove = (e) => {
            const cards = document.querySelectorAll('.skill-card');
            for (const card of cards) {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            }
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);


    const renderSkillCard = (title, skills, icon, delayIndex) => (
        <div 
            className="skill-card"
            style={{ '--delay-index': delayIndex }}
        >
            <div className="skill-card-header">
                <div className="skill-card-icon">{icon}</div>
                <h3>{title}</h3>
            </div>
            <div className="skills-list">
                {skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
            </div>
            <div className="skill-card-border"></div>
        </div>
    );

    return (
        <section id="skills" ref={sectionRef} className={`skills-section ${isVisible ? 'is-visible' : ''}`}>
            <style>{`
                /* --- SKILLS SECTION STYLES --- */
                .skills-section {
                    min-height: 100vh;
                    background-color: #1A1A17;
                    padding: 6rem 2rem;
                    border-top: 1px solid #3a3a35;
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    overflow: hidden;
                }
                
                .skills-background-glow {
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    width: 800px;
                    height: 800px;
                    background: radial-gradient(circle, rgba(196, 191, 184, 0.05) 0%, rgba(26, 26, 23, 0) 70%);
                    transform: translate(-50%, -50%);
                    z-index: 0;
                    transition: opacity 1s ease;
                }
                .skills-section:not(.is-visible) .skills-background-glow {
                    opacity: 0;
                }

                .skills-header {
                    text-align: center;
                    margin-bottom: 4rem;
                    position: relative;
                    z-index: 1;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }
                .skills-section.is-visible .skills-header {
                    opacity: 1;
                    transform: translateY(0);
                }
                .skills-header h1 {
                    font-family: 'Playfair Display', serif;
                    font-size: 3.5rem;
                    color: #EAE8E3;
                    margin: 0;
                }
                .skills-header p {
                    font-size: 1.1rem;
                    color: #C4BFB8;
                    max-width: 600px;
                    margin: 1rem auto 0;
                    line-height: 1.7;
                }
                
                .skills-grid {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(2, auto);
                    gap: 1rem;
                    width: 100%;
                    max-width: 72rem; /* 1152px */
                    position: relative;
                    z-index: 1;
                }

                .skill-card {
                    background-color: rgba(41, 41, 37, 0.5); /* Semi-transparent */
                    backdrop-filter: blur(10px);
                    border: 1px solid #3a3a35;
                    border-radius: 1.5rem;
                    padding: 2.5rem;
                    position: relative;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(30px) scale(0.98);
                    transition: transform 0.5s ease, box-shadow 0.5s ease, opacity 0.6s ease, background-color 0.5s ease;
                    transition-delay: calc(var(--delay-index) * 100ms);
                }

                .skills-section.is-visible .skill-card {
                    opacity: 1;
                    transform: translateY(0) scale(1);
                }

                .skill-card::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: inherit;
                    background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(196, 191, 184, 0.1), transparent 40%);
                    opacity: 0;
                    transition: opacity 0.5s;
                    z-index: 0;
                }

                .skill-card:hover::before {
                    opacity: 1;
                }

                .skill-card-border {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border-radius: inherit;
                    background: radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), rgba(196, 191, 184, 0.3), transparent 40%);
                    z-index: 2;
                    opacity: 0;
                    transition: opacity 0.5s;
                }

                .skill-card:hover .skill-card-border {
                    opacity: 1;
                }
                
                .skill-card-header {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1.5rem;
                    position: relative;
                    z-index: 1;
                }
                .skill-card-icon {
                    color: #C4BFB8;
                    transition: color 0.4s ease, transform 0.4s ease;
                }
                 .skill-card:hover .skill-card-icon {
                    color: #EAE8E3;
                    transform: scale(1.1) rotate(-5deg);
                }
                .skill-card-header h3 {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1.2rem;
                    font-weight: 600;
                    color: #EAE8E3;
                    margin: 0;
                }
                .skills-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.75rem;
                    position: relative;
                    z-index: 1;
                }
                .skill-tag {
                    background-color: rgba(26, 26, 23, 0.8);
                    color: #b0aba4;
                    padding: 0.5rem 1rem;
                    border-radius: 0.5rem;
                    font-size: 0.9rem;
                    font-weight: 500;
                    border: 1px solid #3a3a35;
                }
                
                /* Responsive */
                @media (max-width: 768px) {
                    .skills-grid {
                        grid-template-columns: 1fr;
                    }
                    .skills-header h1 { font-size: 2.8rem; }
                }
            `}</style>
            <div className="skills-background-glow"></div>
            <div className={`skills-header ${isVisible ? 'is-visible' : ''}`}>
                <h1>My Toolkit</h1>
                <p>I believe in using the right tools for the job. My expertise spans the full stack, allowing me to build robust, scalable, and beautiful applications from the ground up.</p>
            </div>
            <div className="skills-grid">
                {renderSkillCard("Frontend", skillsData.frontend, 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 11.08V8l-6-6H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h6"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="m18 21-4-4 4-4"/><path d="m14 21-4-4 4-4"/></svg>, 
                1)}
                {renderSkillCard("Backend", skillsData.backend, 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20V4"/><path d="M4 12H20"/></svg>, 
                2)}
                {renderSkillCard("Databases", skillsData.databases, 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>, 
                3)}
                {renderSkillCard("Tools & Platforms", skillsData.tools, 
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-9"/><path d="M14 17H5"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>, 
                4)}
            </div>
        </section>
    );
}