import React, { useState, useEffect, useRef } from "react";

// The About Component with final layout and portrait fix
export default function About() {
  const sectionRef = useRef(null);
  const terminalRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentText, setCurrentText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // FIX: Cleaned up the terminal content data structure for reliability.
  const terminalContent = [
    {
      prompt: "$ AnitaGeorge:~$ who_am_i",
      content: [
        "> Full-Stack Developer & UI/UX Designer.",
        "> Specializing in creating seamless, data-driven web applications and intuitive user experiences.",
        "> My expertise spans the entire stack, from crafting robust back-end APIs to designing pixel-perfect, front-end interfaces.",
        "> I'm passionate about building products that are not just functional, but a joy to use.",
      ],
    },
    {
      prompt: "$ AnitaGeorge:~$ core_philosophy",
      content: [
        "> Fusing Code with Design: My work is driven by the philosophy that technology and design are two sides of the same coin. I believe in writing clean, functional code that powers elegant and accessible design, creating a cohesive and delightful user journey.",
        "> Building for Impact: I focus on developing thoughtful, scalable systems that solve genuine user problems. My passion lies in real-world applications that improve people's lives.",
        "> People-First Approach: At the end of the day, great software is not just about features, but about the people who use it. My design and development process is always centered on user empathy and creating meaningful interactions.",
      ],
    },
  ];
  const fullText = terminalContent
    .map((sec) => sec.prompt + "\n" + sec.content.join("\n"))
    .join("\n\n");

  // Using an optimized IntersectionObserver
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setIsTyping(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.4 }
    );

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

  const formatText = (text) => {
    const lines = text.split("\n");
    return lines.map((line, index) => {
      if (line.startsWith("$")) {
        return (
          <div key={index} className="term-prompt-line">
            <span className="term-prompt-symbol">$</span>
            <span className="term-prompt-command">{line.substring(2)}</span>
          </div>
        );
      } else if (line.startsWith(">")) {
        return (
          <div key={index} className="term-content-line indented">
            <span className="term-content-symbol">{">"}</span>
            <span className="term-content-text">{line.substring(1)}</span>
          </div>
        );
      } else if (line.trim() === "") {
        return <div key={index} className="term-line empty"></div>;
      }
      return (
        <div key={index} className="term-line">
          {line}
        </div>
      );
    });
  };

return (
    <section
        id="about"
        ref={sectionRef}
        className={`about-section ${isVisible ? "is-visible" : ""}`}
    >
        <style>{`
                            .about-section {
                                    min-height: 100vh;
                                    background-color: #1A1A17; 
                                    display: flex;
                                    align-items: center;
                                    justify-content: center;
                                    padding: 2rem 1rem;
                                    box-sizing: border-box;
                                    border-top: 1px solid #3a3a35;
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
                                    grid-template-columns: 1fr 2.5fr; 
                                    gap: 1rem;
                                    width: 90%;
                                    /* CHANGE: Reduced max-width to make the entire component and all cards smaller. */
                                    box-sizing: border-box;
                            }

                            .about-card {
                                    border-radius: 1.5rem;
                                    display: flex;
                                    flex-direction: column;
                                    border: 1px solid #3a3a35;
                                    transition: transform 0.4s ease, box-shadow 0.4s ease;
                                    background-color: #292925;
                            }
                            .about-card:hover {
                                    transform: translateY(-8px);
                                    box-shadow: 0 12px 30px rgba(0,0,0,0.2);
                            }

                            .left-column {
                                    display: grid;
                                    grid-template-rows: 0.85fr 0.5fr; 
                                    gap: 1rem;
                            }
                            
                            .about-photo-card {
                                    padding: 0; 
                                    overflow: hidden;
                                    color: #888;
                                    align-items: center;
                                    justify-content: center;
                            }
                            
                            .about-photo-card img {
                                    width: 100%;
                                    height: 100%;
                                    object-fit: cover;
                                    object-position: center; 
                                    transition: transform 0.4s ease;
                            }

                            .about-photo-card:hover img {
                                    transform: scale(1.05);
                            }

                            .about-philosophy-card {
                                    padding: 1.5rem;
                                    color: #EAE8E3;
                                    justify-content: center;
                            }

                            .about-philosophy-card h3 {
                                    font-family: 'Plus Jakarta Sans', sans-serif;
                                    font-size: 1.1rem;
                                    font-weight: 600;
                                    margin: 0 0 1rem 0;
                                    color: #C4BFB8;
                            }

                            .about-philosophy-card ul { list-style: none; padding: 0; margin: 0; font-size: 0.9rem; }
                            .about-philosophy-card li { 
                                    position: relative; 
                                    padding-left: 1.25rem; 
                                    margin-bottom: 0.4rem; 
                            }
                            .about-philosophy-card li::before { content: '•'; position: absolute; left: 0; color: #C4BFB8; }

                            .about-main-card {
                                    grid-column: 2 / 4;
                                    padding: 0; 
                                    overflow: hidden;
                                    display: flex;
                                    flex-direction: column;
                                    height:auto;   
                            }

                            .terminal-header { background-color: #3a3a35; padding: 0.75rem 1rem; display: flex; align-items: center; gap: 0.5rem; flex-shrink: 0; }
                            .dots { display: flex; gap: 0.5rem; }
                            .dot { width: 0.75rem; height: 0.75rem; border-radius: 50%; }
                            .dot.red { background-color: #ff5f56; } .dot.yellow { background-color: #ffbd2e; } .dot.green { background-color: #27c93f; }
                            .terminal-title { color: #C4BFB8; font-size: 0.9rem; margin-left: 1rem; font-family: 'Fira Code', monospace; }

                            .terminal-body {
                                    padding: 1.25rem; 
                                    font-size: 1rem; 
                                    line-height: 1.7;
                                    color: #EAE8E3; font-family: 'Fira Code', monospace;
                                    overflow-y: auto; box-sizing: border-box;
                                    flex: 1;
                                    min-height: 0;
                            }

                            .term-prompt-line { display: flex; align-items: center; margin-bottom: 1rem; }
                            .term-prompt-symbol { color: #C4BFB8; margin-right: 0.75rem; }
                            .term-prompt-command { color: #EAE8E3; font-weight: 600; }
                            .term-content-line { margin-bottom: 0.5rem; display: flex; align-items: flex-start; }
                            .term-content-line.indented { margin-left: 1rem; }
                            .term-content-symbol { color: #C4BFB8; margin-right: 0.75rem; }
                            .term-content-text { color: rgba(234, 232, 227, 0.7); flex: 1; }
                            .term-line.empty { height: 1rem; }
                            .typing-cursor { display: inline-block; width: 10px; height: 1.5rem; background-color: #C4BFB8; margin-left: 0.25rem; animation: blink 1s infinite; }
                            @keyframes blink { 50% { opacity: 0; } }

                            @media (max-width: 1024px) {
                                    .about-grid { 
                                            /* On smaller screens, allow the grid to be narrower */
                                            max-width: 95%;
                                            grid-template-columns: 1fr; 
                                            grid-template-rows: auto; 
                                    }
                                    .about-main-card { grid-column: 1 / -1; grid-row: 1; min-height: 400px; }
                                    .left-column { grid-row: 2; grid-template-rows: auto; }
                                    .about-photo-card { min-height: 300px; }
                            }
                            @media (max-width: 768px) {
                                    .terminal-body { font-size: 0.9rem; padding: 1rem; }
                                    .about-philosophy-card { padding: 1.25rem; }
                                    .about-photo-card { display: none; }
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
                        {isTyping && currentText.length < fullText.length && (
                            <span className="typing-cursor"></span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    </section>
);
}
