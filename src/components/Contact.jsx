
import React from 'react';

// --- SVG Icons for the component ---

const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-45deg)' }}>
        <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

const LocationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle>
    </svg>
);

const SocialX = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
const SocialInstagram = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const SocialLinkedIn = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>;
const SocialGithub = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>;
const SocialGoogleDev = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M21.543 9.75h-9.543v4.5h5.456c-.273 1.594-1.685 4.305-5.456 4.305-3.283 0-5.957-2.68-5.957-6.055s2.674-6.055 5.957-6.055c1.865 0 3.135.79 3.86 1.49l3.118-3.003c-1.95-1.8-4.513-2.932-7.978-2.932-6.625 0-12 5.373-12 12s5.375 12 12 12c6.927 0 11.53-4.823 11.53-11.727 0-1.012-.084-1.65-.27-2.25h.283z"/></svg>;


// --- The Main Contact Component ---

export default function Contact() {
    return (
        <section id="contact" className="contact-section">
            <style>{`
                /* --- CONTACT SECTION STYLES --- */
                .contact-section {
                    min-height: 100vh;
                    background-color: #1A1A17;
                    padding: 4rem 2rem;
                    border-top: 1px solid #3a3a35;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                }
                .contact-header {
                    text-align: center;
                    margin-bottom: 4rem;
                }
                .contact-header h1 {
                    font-family: 'Playfair Display', serif;
                    font-size: 3.5rem;
                    color: #EAE8E3;
                    margin: 0;
                }
                .contact-header p {
                    font-size: 1.1rem;
                    color: #C4BFB8;
                    max-width: 500px;
                    margin: 1rem auto 0;
                    line-height: 1.6;
                }
                .contact-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 1rem;
                    width: 100%;
                    max-width: 64rem; /* 1024px */
                }
                .contact-card {
                    background-color: #292925;
                    border: 1px solid #3a3a35;
                    border-radius: 1.5rem;
                    padding: 2.5rem;
                    transition: transform 0.3s ease, box-shadow 0.3s ease;
                    display: flex; /* Using flex to manage content */
                    flex-direction: column;
                }
                .contact-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.3);
                }
                
                /* Main Contact Card (Left) */
                .contact-main {
                    justify-content: space-between;
                }
                .contact-main h2 {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.5rem;
                    color: #EAE8E3;
                    margin: 0 0 1rem 0;
                }
                .email-link {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1.5rem;
                    font-weight: 600;
                    color: #EAE8E3;
                    text-decoration: none;
                    display: inline-block;
                    margin-top: 2rem;
                    transition: color 0.3s ease;
                }
                .email-link:hover {
                    color: #C4BFB8;
                }

                /* Right Column Single Card */
                .right-column {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .contact-card h3 {
                    font-size: 1.1rem;
                    font-weight: 600;
                    color: #C4BFB8;
                    margin: 0 0 1.5rem 0;
                }
                .social-links-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .social-link {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    color: #b0aba4;
                    text-decoration: none;
                    transition: color 0.3s ease;
                }
                .social-link:hover { color: #EAE8E3; }
                .social-link-icon { display: flex; align-items: center; gap: 0.75rem; font-weight: 500;}

                /* --- NEW STYLES for combined card --- */
                .card-separator {
                    border-bottom: 1px solid #3a3a35;
                    margin: auto 0 1.5rem;
                    padding-top: 2rem;
                }
                .location-info {
                    display: flex;
                    align-items: flex-start;
                    gap: 0.75rem;
                    color: #b0aba4;
                }
                .location-info p {
                    margin: 0;
                    line-height: 1.5;
                }
                .location-phrase {
                    font-size: 0.9rem;
                    color: #EAE8E3;
                }
                
                .site-footer {
                    text-align: center;
                    margin-top: 5rem;
                    color: #888;
                    font-size: 0.9rem;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .contact-grid { grid-template-columns: 1fr; }
                    .contact-header h1 { font-size: 2.8rem; }
                }
            `}</style>
            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>Have a project in mind or just want to say hello? I'd love to hear from you. Let's create something amazing together.</p>
            </div>
            <div className="contact-grid">
                <div className="contact-card contact-main">
                    <div>
                        <h2>Let's start a conversation</h2>
                        <p style={{ color: '#b0aba4' }}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of an ambitious vision.</p>
                    </div>
                    <a href="mailto:georrgeanita404@gmail.com" className="email-link">
                        georgeanita404@gmail.com
                    </a>
                </div>
                <div className="right-column">
                    {/* --- SOCIALS AND LOCATION ARE NOW COMBINED IN ONE CARD --- */}
                    <div className="contact-card info-card">
                        <div>
                            <h3>Find me on</h3>
                            <div className="social-links-list">
                                <a href="https://www.linkedin.com/in/anita-george-8b8334326/" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <span className="social-link-icon"><SocialLinkedIn /> LinkedIn</span>
                                    <ArrowIcon />
                                </a>
                                <a href="https://github.com/AnitaGeorge404" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <span className="social-link-icon"><SocialGithub /> GitHub</span>
                                    <ArrowIcon />
                                </a>
                                <a href="https://developers.google.com/profile/u/111948759518898877846" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <span className="social-link-icon"><SocialGoogleDev /> Google Dev</span>
                                    <ArrowIcon />
                                </a>
                                <a href="https://x.com/AnitaGeorge1806" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <span className="social-link-icon"><SocialX /> X / Twitter</span>
                                    <ArrowIcon />
                                </a>
                                <a href="https://www.instagram.com/senorita._.anita/?next=%2F" target="_blank" rel="noopener noreferrer" className="social-link">
                                    <span className="social-link-icon"><SocialInstagram /> Instagram</span>
                                    <ArrowIcon />
                                </a>
                            </div>
                        </div>

                        <div className="card-separator"></div>
                        
                        <div className="location-info">
                             <LocationIcon />
                             <div>
                                <p className="location-phrase">Crafting code from the coast.</p>
                                <p>Based in Kollam, Kerala.</p>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="site-footer">
                <p>© 2025 Anita George. All Rights Reserved.</p>
            </footer>
        </section>
    );
}
