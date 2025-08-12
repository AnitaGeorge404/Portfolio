import React, { useState, useEffect, useRef } from 'react';

// The Redesigned About Component with Integrated Terminal
export default function About() {
    const sectionRef = useRef(null);
    const terminalRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const [currentText, setCurrentText] = useState('');
    const [isTyping, setIsTyping] = useState(false);

    const terminalContent = [
        { prompt: "$ AnitaGeorge:~$ who_am_i", content: [">Full-Stack Developer & UI/UX Designer.\n>Specializing in creating seamless, data-driven web applications and intuitive user experiences.\n>My expertise spans the entire stack, from crafting robust back-end APIs to designing pixel-perfect, front-end interfaces.\n>I'm passionate about building products that are not just functional, but a joy to use."] },
        { prompt: "$ AnitaGeorge:~$ core_philosophy", content: [">Fusing Code with Design: My work is driven by the philosophy that technology and design are two sides of the same coin. I believe in writing clean, functional code that powers elegant and accessible design, creating a cohesive and delightful user journey.\n>Building for Impact: I focus on developing thoughtful, scalable systems that solve genuine user problems. My passion lies in real-world applications that improve people's lives.\n>People-First Approach: At the end of the day, great software is not just about features, but about the people who use it. My design and development process is always centered on user empathy and creating meaningful interactions."] }
    ];
    const fullText = terminalContent.map(sec => sec.prompt + '\n' + sec.content.join('\n')).join('\n\n');

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !isTyping) {
                setIsVisible(true);
                setIsTyping(true);
            }
        }, { threshold: 0.4 });

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }
        return () => {
            if (sectionRef.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(sectionRef.current);
            }
        };
    }, [isTyping]);

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

    const formatText = (text) => {
        const lines = text.split('\n');
        return lines.map((line, index) => {
            if (line.startsWith('$')) {
                return <div key={index} className="term-prompt-line"><span className="term-prompt-symbol">$</span><span className="term-prompt-command">{line.replace('$ ', '')}</span></div>;
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
            {/* --- 🎨 MODERN UI STYLES (SINGLE FILE) --- */}
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
                    height: 85vh;
                    box-sizing: border-box;
                }

                .about-card {
                    background: rgba(26, 26, 23, 0.7);
                    backdrop-filter: blur(10px);
                    -webkit-backdrop-filter: blur(10px);
                    border-radius: 1.5rem;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    display: flex;
                    flex-direction: column;
                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
                }

                .about-card:hover {
                    transform: translateY(-10px);
                    box-shadow: 0 0 25px 5px rgba(180, 149, 218, 0.15);
                }

                .left-column {
                    display: grid;
                    grid-template-rows: 2fr 1fr;
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
                    color: #b495da;
                    font-size: 1rem;
                }

                .about-main-card {
                    grid-column: 2 / 3;
                    padding: 0;
                    overflow: hidden;
                }

                .terminal-header {
                    background-color: rgba(0, 0, 0, 0.3);
                    padding: 0.75rem 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
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
                    height: 100%;
                    overflow-y: auto;
                    box-sizing: border-box;
                }
                
                .term-prompt-line { display: flex; align-items: center; margin-bottom: 1rem; }
                .term-prompt-symbol { color: #b495da; margin-right: 0.75rem; }
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
                    background-color: #b495da;
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
                        height: auto;
                    }
                    .about-main-card { grid-column: 1 / -1; grid-row: 1; min-height: 450px; }
                    .left-column { grid-row: 2; }
                    .about-photo-card { min-height: 350px; }
                }

                @media (max-width: 768px) {
                    .terminal-body { font-size: 0.9rem; padding: 1.2rem; }
                    .about-philosophy-card { padding: 1.5rem; }
                }
            `}</style>

            {/* --- JSX STRUCTURE --- */}
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