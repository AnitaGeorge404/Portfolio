import React, { useState, useEffect, useRef } from 'react';

// The Redesigned Certificates Component
export default function Projects() {
    const [activeIndex, setActiveIndex] = useState(0);

    const certificates = [
        {
            title: "AWS Certified Cloud Practitioner",
            issuer: "Amazon Web Services",
            description: "Validated foundational, high-level understanding of AWS Cloud, services, and terminology. This certification is a good starting point for individuals seeking to build a career in cloud computing.",
            tech: ["Cloud Concepts", "Security & Compliance", "AWS Services", "Billing & Pricing"],
            imageUrl: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=2069&auto=format&fit=crop"
        },
        {
            title: "Certified Professional in UX Design",
            issuer: "Nielsen Norman Group",
            description: "Demonstrated expertise in user experience research, interaction design, and usability testing. This certification covers the full lifecycle of UX, from user needs analysis to high-fidelity prototyping.",
            tech: ["User Research", "Interaction Design", "Wireframing", "Prototyping", "Usability Testing"],
            imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=1974&auto=format&fit=crop"
        },
        {
            title: "Advanced React & GraphQL",
            issuer: "Wes Bos Academy",
            description: "Completed an intensive course on building modern, full-stack JavaScript applications using advanced React patterns, GraphQL APIs, and server-side rendering.",
            tech: ["React.js", "GraphQL", "Apollo Client", "Node.js", "Prisma", "Next.js"],
            imageUrl: "https://images.unsplash.com/photo-1599658880436-c61792e70672?q=80&w=2070&auto=format&fit=crop"
        }
    ];

    const refs = useRef([]);
    refs.current = certificates.map((_, i) => refs.current[i] ?? React.createRef());

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = refs.current.findIndex(ref => ref.current === entry.target);
                        setActiveIndex(index);
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
                if (ref.current) {
                    // eslint-disable-next-line react-hooks/exhaustive-deps
                    observer.unobserve(ref.current);
                }
            });
        };
    }, []);

    return (
        <section id="certificates" className="certificates-section">
            <style>{`
                /* --- CERTIFICATES SECTION STYLES --- */
                .certificates-section {
                    background-color: #1A1A17;
                    padding: 4rem 2rem;
                    border-top: 1px solid #3a3a35;
                }
                .certificates-container {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 4rem;
                    max-width: 80rem; /* 1280px */
                    margin: 0 auto;
                }
                /* Left Column - Sticky Image */
                .certs-left {
                    position: sticky;
                    top: 100px;
                    height: calc(100vh - 140px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .certs-image-preview {
                    position: relative;
                    width: 100%;
                    height: 80%;
                    border-radius: 1.5rem;
                    overflow: hidden;
                    border: 1px solid #3a3a35;
                }
                .certs-image {
                    position: absolute;
                    top: 0; left: 0;
                    width: 100%; height: 100%;
                    object-fit: cover;
                }
                /* Right Column - Scrollable Details */
                .certs-right {
                    display: flex;
                    flex-direction: column;
                }
                .cert-card {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    min-height: 80vh;
                    padding: 2rem 0;
                    opacity: 0.4;
                    transition: opacity 0.5s ease;
                }
                .cert-card.is-active { opacity: 1; }
                .cert-title {
                    font-family: 'Playfair Display', serif;
                    font-size: 2.5rem;
                    margin-bottom: 1rem;
                    color: #EAE8E3;
                }
                .cert-issuer {
                    font-family: 'Plus Jakarta Sans', sans-serif;
                    font-size: 1rem;
                    font-weight: 500;
                    color: #C4BFB8;
                    margin-bottom: 1.5rem;
                }
                .cert-description {
                    font-size: 1rem;
                    line-height: 1.7;
                    color: #b0aba4;
                    max-width: 90%;
                }
                .cert-tech-list {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 0.5rem;
                    margin-top: 2rem;
                    padding: 0;
                    list-style-type: none;
                }
                .cert-tech-item {
                    background-color: #292925;
                    color: #C4BFB8;
                    padding: 0.5rem 1rem;
                    border-radius: 9999px;
                    font-size: 0.875rem;
                    border: 1px solid #3a3a35;
                    font-weight: 500;
                }

                /* Responsive */
                @media (max-width: 768px) {
                    .certificates-container { grid-template-columns: 1fr; }
                    .certs-left { position: relative; top: 0; height: 50vh; order: 1; }
                    .certs-right { order: 2; }
                    .cert-card { min-height: auto; padding: 4rem 0; opacity: 1; }
                }
            `}</style>
            <div className="certificates-container">
                <div className="certs-left">
                    <div className="certs-image-preview">
                        {certificates.map((cert, index) => (
                            <img
                                key={cert.imageUrl}
                                src={cert.imageUrl}
                                alt={cert.title}
                                className="certs-image"
                                style={{ opacity: index === activeIndex ? 1 : 0, transition: 'opacity 0.6s ease' }}
                            />
                        ))}
                    </div>
                </div>
                <div className="certs-right">
                    {certificates.map((cert, index) => (
                        <div key={cert.title} ref={refs.current[index]} className={cert-card ${index === activeIndex ? 'is-active' : ''}}>
                            <h2 className="cert-title">{cert.title}</h2>
                            <p className="cert-issuer">Issued by: {cert.issuer}</p>
                            <p className="cert-description">{cert.description}</p>
                            <ul className="cert-tech-list">
                                {cert.tech.map((tech) => <li key={tech} className="cert-tech-item">{tech}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}