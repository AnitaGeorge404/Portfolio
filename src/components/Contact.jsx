import React from 'react';

// SVG Icons for the component
const ArrowIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(-45deg)' }}>
        <line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline>
    </svg>
);

const SocialX = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path></svg>;
const SocialInstagram = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>;
const SocialLinkedIn = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>;


// The Contact Component
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
                }
                .contact-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 12px 30px rgba(0,0,0,0.3);
                }
                /* Main Contact Card (Left) */
                .contact-main {
                    display: flex;
                    flex-direction: column;
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
                /* Right Column Cards */
                .right-column {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .socials-card, .availability-card {
                    display: flex;
                    flex-direction: column;
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
                
                .availability-card p {
                    margin: 0;
                    line-height: 1.6;
                    color: #b0aba4;
                }
                .availability-status {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    margin-top: 1rem;
                }
                .status-dot {
                    width: 10px;
                    height: 10px;
                    background-color: #22C55E; /* Green dot */
                    border-radius: 50%;
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
                    <a href="mailto:hello@mirachen.design" className="email-link">
                        hello@mirachen.design
                    </a>
                </div>
                <div className="right-column">
                    <div className="contact-card socials-card">
                        <h3>Find me on</h3>
                        <div className="social-links-list">
                            <a href="#" className="social-link">
                                <span className="social-link-icon"><SocialLinkedIn /> LinkedIn</span>
                                <ArrowIcon />
                            </a>
                            <a href="#" className="social-link">
                                <span className="social-link-icon"><SocialInstagram /> Instagram</span>
                                <ArrowIcon />
                            </a>
                            <a href="#" className="social-link">
                                <span className="social-link-icon"><SocialX /> X / Twitter</span>
                                <ArrowIcon />
                            </a>
                        </div>
                    </div>
                    <div className="contact-card availability-card">
                        <h3>Current Status</h3>
                        <p>Based in Kollam, Kerala, India.</p>
                        <div className="availability-status">
                            <span className="status-dot"></span>
                            <span>Open to new opportunities</span>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="site-footer">
                <p>© 2025 Mira Chen. All Rights Reserved.</p>
            </footer>
        </section>
    );
}