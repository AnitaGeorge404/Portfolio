import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowIcon, DecorativeIcon, SocialX, SocialInstagram, SocialGithub, SocialGoogle, SocialLinkedIn } from './icons';
import SpotlightCard from './animations/SpotlightCard';

const projectData = [
    { id: 1, title: 'LawGorithm', imageUrl: '/assets/law.png', imageAlt: 'Screenshot of LawGorithm', linkUrl: 'https://github.com/LestlinRobins/LawGorithm' },
    { id: 2, title: 'DelAI', imageUrl: '/assets/delai.png', imageAlt: 'Screenshot of DelAI', linkUrl: 'https://github.com/LestlinRobins/AIVentures' },
    { id: 3, title: 'VantaAI', imageUrl: '/assets/vantaai.png', imageAlt: 'Screenshot of VantaAI', linkUrl: 'https://github.com/AnitaGeorge404/VantaAI' },
];

export default function Home() {

    const scrollTo = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    const DropdownIcon = () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );

    const HoverAccordion = () => {
        const [openProject, setOpenProject] = useState(null);

        return (
            <div className="w-full h-full mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-gray-700 text-gray-50 flex flex-col">
                <h2 className="text-xl font-semibold pl-3 mb-2">Featured Work</h2>
                <div className="sidebar-content space-y-2 flex-grow">
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            className="project-accordion-item rounded-lg overflow-hidden"
                            onMouseEnter={() => setOpenProject(project.id)}
                            onMouseLeave={() => setOpenProject(null)}
                        >
                            <motion.div className="sidebar-item flex justify-between items-center p-3 cursor-pointer" whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}>
                                <span className="font-medium text-gray-200">{project.title}</span>
                                <motion.div animate={{ rotate: openProject === project.id ? 180 : 0 }}>
                                    <DropdownIcon />
                                </motion.div>
                            </motion.div>
                            <AnimatePresence>
                                {openProject === project.id && (
                                    <motion.div
                                        className="sidebar-image-container"
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
                                    >
                                        <div className="p-3 pt-0">
                                            <img src={project.imageUrl} alt={project.imageAlt} className="rounded-md w-full object-cover" />
                                            <motion.a href={project.linkUrl} className="view-more-btn block text-center w-full mt-3 bg-blue-600 text-white py-2 rounded-lg font-semibold" whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }} whileTap={{ scale: 0.95 }} onClick={(e) => e.stopPropagation()}>
                                                View Details
                                            </motion.a>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        );
    };

    const gridVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { when: "beforeChildren", staggerChildren: 0.1 } },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120 } },
    };

    const interactiveAnimations = {
        whileHover: { scale: 1.03, y: -5, zIndex: 10 },
        whileTap: { scale: 0.97 },
        transition: { type: "spring", stiffness: 300, damping: 15 },
    };

    return (
        <section id="home">
            <motion.div
                className="bento-grid"
                variants={gridVariants}
                initial="hidden"
                animate="visible"
            >
                {/* --- Visible on All Screens --- */}
                <SpotlightCard className="bento-item item-1" onClick={() => scrollTo('about')} variants={itemVariants} {...interactiveAnimations}>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2, type: 'spring' } }} className="decorative-icon"><DecorativeIcon /></motion.div>
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}>Crafting thoughtful products from pixel to production</motion.h1>
                </SpotlightCard>

                <SpotlightCard className="bento-item item-2 relative" variants={itemVariants}>
                    <motion.img src="/assets/portrait.jpeg" alt="Portrait of Anita George" className="w-full h-full object-cover" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 200, damping: 10 }} />
                    <motion.a
                        href="/assets/RESUME.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            position: 'absolute',
                            bottom: '1rem',
                            right: '1rem',
                            backgroundColor: 'rgba(17, 24, 39, 0.7)',
                            backdropFilter: 'blur(4px)',
                            color: 'white',
                            fontSize: '0.75rem',
                            fontWeight: '600',
                            padding: '0.5rem 1rem',
                            borderRadius: '9999px',
                            border: '1px solid #4B5563',
                            boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
                            textDecoration: 'none',
                        }}
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(17, 24, 39, 0.9)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Resume
                    </motion.a>
                </SpotlightCard>

                {/* --- These items will be hidden on mobile via app.css --- */}
                <SpotlightCard className="bento-item item-3" variants={itemVariants}>
                    <HoverAccordion />
                </SpotlightCard>

                <SpotlightCard className="bento-item item-socials" onClick={() => scrollTo('contact')} variants={itemVariants} {...interactiveAnimations}>
                                        <a style={{position:'fixed', top:0, left:0, zIndex:100, backgroundColor:'transparent', height:'100em', width:'100em'}} onClick={() => scrollTo('contact')}/>

                    <div className="social-links-card">
                        <motion.a href="https://x.com/anitageorge1806" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} whileHover={{ y: -4, scale: 1.1 }} transition={interactiveAnimations.transition}><SocialX /></motion.a>
                        <motion.a href="https://www.instagram.com/senorita._.anita/?next=%2F" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} whileHover={{ y: -4, scale: 1.1 }} transition={interactiveAnimations.transition}><SocialInstagram /></motion.a>
                        <motion.a href="https://www.linkedin.com/in/anita-george-8b8334326/" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} whileHover={{ y: -4, scale: 1.1 }} transition={interactiveAnimations.transition}><SocialLinkedIn /></motion.a>
                        <motion.a href="https://developers.google.com/profile/u/111948759518898877846" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} whileHover={{ y: -4, scale: 1.1 }} transition={interactiveAnimations.transition}><SocialGoogle /></motion.a>
                        <motion.a href="https://github.com/AnitaGeorge404" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} whileHover={{ y: -4, scale: 1.1 }} transition={interactiveAnimations.transition}><SocialGithub /></motion.a>
                    </div>
                </SpotlightCard>

                <SpotlightCard className="bento-item item-4" onClick={() => scrollTo('about')} variants={itemVariants} {...interactiveAnimations}>
                    <div className="decorative-icon-small"><DecorativeIcon size={40} /></div>
                    
                    <p>Full-stack developer and engineering student at IIITK, building clean, user-focused digital experiences.</p>
                </SpotlightCard>

                <SpotlightCard className="bento-item item-5" onClick={() => scrollTo('skills')} variants={itemVariants} {...interactiveAnimations}>
                                        <a style={{position:'fixed', top:0, left:0, zIndex:100, backgroundColor:'transparent', height:'100em', width:'100em'}} onClick={() => scrollTo('skills')}/>

                    <p style={{ fontSize: "1.5rem", marginTop: "-0.3rem", color: 'white' }}>The How</p>
                    <h2 style={{ fontSize: "3rem", marginTop: "-0.3rem", color: 'white', fontFamily: 'Playfair Display' }}>Skills</h2>
                    <motion.div className="icon-link" animate={{ x: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}><ArrowIcon /></motion.div>
                </SpotlightCard>

                <SpotlightCard className="bento-item item-6" onClick={() => scrollTo('contact')} variants={itemVariants} {...interactiveAnimations}>
                    <motion.h2 className="contact-headline-visual" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}>
                        Let's work together on your next project
                    </motion.h2>
                    <motion.div className="contact-email-visual" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.7 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <span className="icon-copy-placeholder"></span>
                        <p>georgeanita404@gmail.com</p>
                    </motion.div>
                </SpotlightCard>

            </motion.div>
        </section>
    );
}