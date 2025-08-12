import React, { useState, useEffect, useRef } from 'react';

// The About Component with layout fix
export default function About() {
    const sectionRef = useRef(null);
    const terminalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    // Content data is correct
    const terminalContent = [
        {
            prompt: "$ AnitaGeorge:~$ who_am_i",
            content: [
                "> Full-Stack Developer & UI/UX Designer.",
                "> Specializing in creating seamless, data-driven web applications and intuitive user experiences.",
                "> My expertise spans the entire stack, from crafting robust back-end APIs to designing pixel-perfect, front-end interfaces.",
                "> I'm passionate about building products that are not just functional, but a joy to use."
            ]
        },
        {
            prompt: "$ AnitaGeorge:~$ core_philosophy",
            content: [
                "> Fusing Code with Design: My work is driven by the philosophy that technology and design are two sides of the same coin. I believe in writing clean, functional code that powers elegant and accessible design, creating a cohesive and delightful user journey.",
                "> Building for Impact: I focus on developing thoughtful, scalable systems that solve genuine user problems. My passion lies in real-world applications that improve people's lives.",
                "> People-First Approach: At the end of the day, great software is not just about features, but about the people who use it. My design and development process is always centered on user empathy and creating meaningful interactions."
            ]
        }
    ];
    const fullText = terminalContent.map(sec => sec.prompt + '\n' + sec.content.join('\n')).join('\n\n');

    // Optimized IntersectionObserver that runs once
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                setIsTyping(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.4 });

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef);
        }
        
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    // Typewriter effect logic
    useEffect(() => {
        if (!isTyping) return;
        let index = 0;
        const typeWriter = () => {
            if (index < fullText.length) {
                setCurrentText(fullText.slice(0, index + 1));
                if (terminalRef.current) {
                    terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
                }
                index++;
                setTimeout(typeWriter, 25);
            }
        };
        typeWriter();
    }, [isTyping, fullText]);

    // Text formatting for terminal output
    const formatText = (text) => {
        const lines = text.split('\n');
        return lines.map((line, index) => {
            if (line.startsWith('$')) {
                return <div key={index} className="term-prompt-line"><span className="term-prompt-symbol">$</span><span className="term-prompt-command">{line.substring(2)}</span></div>;
            } else if (line.startsWith('>')) {
                return <div key={index} className="term-content-line indented">
                    <span className="term-content-symbol">{'>'}</span>
                    <span className="term-content-text">{line.substring(1)}</span>
                </div>;
            } else if (line.trim() === '') {
                return <div key={index} className="term-line empty"></div>;
            }
            return <div key={index} className="term-line">{line}</div>;
        });
    };

    return (
        <section id="about" ref={sectionRef} className={`about-section ${isVisible ? 'is-visible' : ''}`}>
            <style>{`
                .about-section {
                    min-height: 100vh;
                    background-color: #121212;
                    background-image: radial-gradient(circle at top right, rgba(121, 68, 154, 0.15), transparent 40%);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 4rem 1rem;
                    box-sizing: border-box;
                    overflow: hidden;
                    opacity: 0;
                    transform: translateY(20px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }

                .about-section.is-visible {
                    opacity: 1;
                    transform: translateY(0);
                }

                .about-grid {
                    display: grid;
                    grid-template-columns: 1fr 2fr;
                    gap: 1.5rem;
                    width: 100%;
                    max-width: 1400px;
                    box-sizing: border-box;
                    /* FIX: Removed 'height: 85vh;' which caused content to be cut off. */
                    /* The grid is now flexible and will grow as needed. */
                }

                .about-card {
                    background: rgba(26, 26, 23, 0.9); 
                    border-radius: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
                }

                .about-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.25);
                }

                .left-column {
                    display: grid;
                    grid-template-rows: 1fr 1.5fr;
                    gap: 1.5rem;
                }

                .about-photo-card {
                    padding: 0;
                    overflow: hidden;
                    justify-content: center;
                    align-items: center;
                }

                .about-photo-card img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                    transition: transform 0.5s ease;
                }
                
                .about-photo-card:hover img {
                    transform: scale(1.05);
                }

                .about-philosophy-card {
                    padding: 2rem;
                    color: #EAE8E3;
                    /* This ensures the content inside is centered as it now has enough space */
                    justify-content: center;
                }

                .about-philosophy-card h3 {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1.1rem;
                    font-weight: 700;
                    margin: 0 0 1rem 0;
                    color: #ffffff;
                }

                .about-philosophy-card ul {
                    list-style: none;
                    padding: 0;
                    margin: 0;
                    font-size: 0.95rem;
                    line-height: 1.6;
                }

                .about-philosophy-card li {
                    position: relative;
                    padding-left: 1.5rem;
                    margin-bottom: 0.75rem;
                    color: #C4BFB8;
                }

                .about-philosophy-card li::before {
                    content: '✦';
                    position: absolute;
                    left: 0;
                    color: #888;
                    font-size: 1rem;
                }

                .about-main-card {
                    grid-column: 2 / 3;
                    padding: 0;
                    overflow: hidden;
                    display: flex;
                    flex-direction: column;
                }

                .terminal-header {
                    background-color: rgba(0, 0, 0, 0.3);
                    padding: 0.75rem 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
                    flex-shrink: 0; 
                }

                .dots { display: flex; gap: 0.5rem; }
                .dot { width: 0.75rem; height: 0.75rem; border-radius: 50%; }
                .dot.red { background-color: #ff5f56; }
                .dot.yellow { background-color: #ffbd2e; }
                .dot.green { background-color: #27c93f; }

                .terminal-title {
                    color: #C4BFB8;
                    font-size: 0.9rem;
                    margin-left: auto;
                    font-family: 'Fira Code', monospace;
                }

                .terminal-body {
                    padding: 1.5rem;
                    font-size: 1rem;
                    line-height: 1.8;
                    color: #EAE8E3;
                    font-family: 'Fira Code', monospace;
                    overflow-y: auto;
                    box-sizing: border-box;
                    flex: 1; 
                    min-height: 0;
                }
                
                .term-prompt-line { display: flex; align-items: center; margin-bottom: 1rem; }
                .term-prompt-symbol { color: #888; margin-right: 0.75rem; }
                .term-prompt-command { color: #EAE8E3; font-weight: 500; }
                
                .term-content-line { margin-bottom: 0.5rem; display: flex; align-items: flex-start; }
                .term-content-line.indented { margin-left: 1rem; }
                .term-content-symbol { color: #888; margin-right: 0.75rem; }
                .term-content-text { color: #C4BFB8; flex: 1; }
                .term-line.empty { height: 1.2rem; }

                .typing-cursor {
                    display: inline-block;
                    width: 10px;
                    height: 1.5rem;
                    background-color: #EAE8E3;
                    margin-left: 0.25rem;
                    animation: blink 1s infinite;
                    vertical-align: middle;
                }

                @keyframes blink { 50% { opacity: 0; } }

                @media (max-width: 1024px) {
                    .about-section { padding: 4rem 1rem; }
                    .about-grid {
                        grid-template-columns: 1fr;
                        grid-template-rows: auto;
                    }
                    .about-main-card { grid-column: 1 / -1; grid-row: 1; min-height: 450px; }
                    .left-column { grid-row: 2; grid-template-rows: auto; }
                    
                    .about-photo-card { display: none; }
                }

                @media (max-width: 768px) {
                    .terminal-body { font-size: 0.9rem; padding: 1.2rem; }
                    .about-philosophy-card { padding: 1.5rem; }
                }
            `}</style>

            <div className="about-grid">
                <div className="left-column">
                    <div className="about-card about-photo-card">
                        <img src="/assets/portrait.jpeg" alt="Anita George Portrait" />
                    </div>

                    <div className="about-card about-philosophy-card">
                        <h3>Core Philosophy</h3>
                        <ul>
                            <li>Crafting intuitive, user-centered experiences.</li>
                            <li>Building robust systems designed for growth.</li>
                            <li>Translating thoughtful design into performant code.</li>
                        </ul>
                    </div>
                </div>

                <div className="about-card about-main-card">
                    <div className="terminal-header">
                        <div className="dots">
                            <span className="dot red"></span>
                            <span className="dot yellow"></span>
                            <span className="dot green"></span>
                        </div>
                        <div className="terminal-title">~/bio.sh</div>
                    </div>
                    <div className="terminal-body" ref={terminalRef}>
                        <div className="terminal-output">
                            {formatText(currentText)}
                            {isTyping && currentText.length < fullText.length && <span className="typing-cursor"></span>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}