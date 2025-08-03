import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowIcon, DecorativeIcon, DropdownIcon, SocialX, SocialInstagram, SocialLinkedIn } from './icons';

const projectData = [
    {
        id: 1,
        title: 'LawGorithm',
        imageUrl: '/assets/law.png',
        imageAlt: 'Screenshot of LawGorithm',
    },
    {
        id: 2,
        title: 'DelAI',
        imageUrl: '/assets/delai.png',
        imageAlt: 'Screenshot of DelAI',
    },
    {
        id: 3,
        title: 'VantaAI',
        imageUrl: '/assets/vantaai.png',
        imageAlt: 'Screenshot of VantaAI',
    },
];

export default function Home({ scrollTo }) {
    const DropdownIcon = () => (
        <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-transform duration-300"
        >
            <path
                d="M6 9L12 15L18 9"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );

    const HoverAccordion = () => {
        // State to track which project is open. Default to the first project's ID.
        const [openProject, setOpenProject] = useState(projectData[0].id);

        return (
            <div className="w-full max-w-sm mx-auto bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl p-4 border border-gray-700 text-gray-50">
                <h2 style={{ paddingLeft: '1.5rem' }}>Featured Work</h2>
                <div className="sidebar-content space-y-2">
                    {projectData.map((project) => (
                        <div
                            key={project.id}
                            className="project-accordion-item rounded-lg overflow-hidden cursor-pointer"
                            onMouseEnter={() => setOpenProject(project.id)}
                            onMouseLeave={() => setOpenProject(null)}
                        >
                            <motion.div
                                className="sidebar-item flex justify-between items-center p-3"
                                whileHover={{ backgroundColor: 'rgba(255, 255, 255, 0.05)' }}
                            >
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
                                            <motion.a
                                                href="#"
                                                className="view-more-btn block text-center w-full mt-3 bg-blue-600 text-white py-2 rounded-lg font-semibold"
                                                whileHover={{ scale: 1.05, backgroundColor: '#2563EB' }} // bg-blue-700
                                                whileTap={{ scale: 0.95 }}
                                            >
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

    // Animation variants for the main grid container
    const gridVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
    };

    // Animation variants for each item in the grid
    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { type: 'spring', stiffness: 120 }
        },
    };

    // Hover/Tap animations for interactive items
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
                {/* Item 1 */}
                <motion.div className="bento-item item-1" onClick={() => scrollTo('about')} variants={itemVariants} {...interactiveAnimations}>
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1, transition: { delay: 0.2, type: 'spring' } }} className="decorative-icon"><DecorativeIcon /></motion.div>
                    <motion.h1 initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.3 } }}>Crafting thoughtful products from pixel to production</motion.h1>
                </motion.div>

                {/* Item 2 - Image with a subtle zoom on hover and Resume button */}
                <motion.div className="bento-item item-2 relative" variants={itemVariants} whileHover={{ scale: 1.03 }} transition={interactiveAnimations.transition}>
                    <motion.img
                        src="/assets/portrait.jpeg"
                        alt="Portrait of Anita George"
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    />
                    {/* --- RESUME BUTTON --- */}
                    <motion.a
                        href="/path-to-your/resume.pdf" /* <-- ❗️ UPDATE THIS PATH */
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute bottom-4 right-4 bg-gray-900/70 backdrop-blur-sm text-white text-xs font-semibold py-2 px-4 rounded-full border border-gray-600 shadow-lg"
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(17, 24, 39, 0.9)' }}
                        whileTap={{ scale: 0.95 }}
                    >
                        View Resume
                    </motion.a>
                </motion.div>

                {/* Item 3 - Functional Projects Accordion */}
                <motion.div className="bento-item item-3" variants={itemVariants} >
                    <HoverAccordion />
                </motion.div>

                {/* Socials Card */}
                <motion.div className="bento-item item-socials" onClick={() => scrollTo('contact')} variants={itemVariants} {...interactiveAnimations}>
                    <div className="social-links-card">
                        <motion.a href="#" whileHover={{ y: -4, scale: 1.1 }} transition={interactiveAnimations.transition}><SocialX /></motion.a>
                        <motion.a href="#" whileHover={{ y: -4, scale: 1.1 }} transition={interactiveAnimations.transition}><SocialInstagram /></motion.a>
                        <motion.a href="#" whileHover={{ y: -4, scale: 1.1 }} transition={interactiveAnimations.transition}><SocialLinkedIn /></motion.a>
                    </div>
                </motion.div>

                {/* Bio Card */}
                <motion.div className="bento-item item-4" onClick={() => scrollTo('about')} variants={itemVariants} {...interactiveAnimations}>
                    <div className="decorative-icon-small"><DecorativeIcon size={40} /></div>
                    <p>Full-stack developer and engineering student at IIITK, building clean, user-focused digital experiences.</p>
                </motion.div>

                {/* Certificates Card */}
                <motion.div className="bento-item item-5" onClick={() => scrollTo('skills')} variants={itemVariants} {...interactiveAnimations}>
                    <p>The How</p>
                    <h2 className="contact-text">Skills</h2>
                    <motion.div className="icon-link" animate={{ x: [-2, 2, -2] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}><ArrowIcon /></motion.div>
                </motion.div>

                {/* Contact Card */}
                <motion.div className="bento-item item-6" onClick={() => scrollTo('contact')} variants={itemVariants} {...interactiveAnimations}>
                    <motion.h2 className="contact-headline-visual" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}>
                        Let's work together on your next project
                    </motion.h2>
                    <motion.div className="contact-email-visual" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1, transition: { delay: 0.7 } }} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                        <span className="icon-copy-placeholder"></span>
                        <p>georgeanita404@gmail.com</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}