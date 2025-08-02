import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const Certificates = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  
  // Sample projects data (gradient property removed)
  const projects = [
    {
      id: 1,
      title: "Full-Stack AI Development",
      period: "Jan 2025 - Apr 2025",
      description: "Engineered an award-winning AI-powered animal breed recognition platform that integrated Google Cloud Vision, Wikipedia, and GBIF APIs for dynamic wildlife exploration.",
      category: "AI Development"
    },
    {
      id: 2,
      title: "Full-Stack Development",
      period: "August 2024 - January 2025",
      description: "Built a comprehensive full-stack application using modern technologies including React, Node.js, and cloud services for scalable web solutions.",
      category: "Web Development"
    },
    {
      id: 3,
      title: "Future of Data Hackathon 2024",
      period: "August 2024 - September 2024",
      description: "Developed innovative data visualization tools and machine learning models to solve real-world data challenges in a competitive hackathon environment.",
      category: "Data Science"
    },
    {
      id: 4,
      title: "RevUC Hackathon 2024",
      period: "February 2024",
      description: "Created a revolutionary fintech solution that streamlines payment processes and enhances user experience through innovative UI/UX design.",
      category: "Fintech"
    },
    {
      id: 5,
      title: "MakeUC Hackathon 2023",
      period: "October 2023",
      description: "FaunaFinder: AI-Powered Animal Breed Recognition - Winner Best Use of AI in Education at MakeUC Hackathon 2023.",
      category: "AI/ML"
    },
    {
      id: 6,
      title: "First Personal Portfolio Website",
      period: "June 2023 - August 2023",
      description: "Built a personal portfolio website using FARM stack technologies that marked my first large-scale full-stack development project.",
      category: "Portfolio"
    }
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Re-usable Card Component
  const Card = ({ project, index, progress, range, targetScale }) => {
    const cardRef = useRef(null);
    const { scrollYProgress: cardProgress } = useScroll({
      target: cardRef,
      offset: ["start end", "start start"],
    });

    const scale = useTransform(progress, range, [1, targetScale]);
    const cardScale = useTransform(cardProgress, [0, 1], [0.8, 1]);
    const cardOpacity = useTransform(cardProgress, [0, 0.5, 1], [0, 0.5, 1]);
    const cardY = useTransform(cardProgress, [0, 1], [100, 0]);
    const stackOffset = index * 60;

    return (
      <div 
        ref={cardRef}
        style={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'sticky',
          top: `${stackOffset}px`,
        }}
      >
        <motion.div
          className="project-card"
          style={{
            scale: scale,
            opacity: cardOpacity,
            y: cardY,
          }}
          onClick={() => setSelectedProject(project)}
          whileHover={{ 
            scale: targetScale * 1.05,
            boxShadow: '0 25px 50px rgba(0, 0, 0, 0.4)',
          }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          <div className="card-header">
            <div>
              <h2 className="project-title">{project.title}</h2>
              <p className="project-period">{project.period}</p>
            </div>
            <span className="project-category">{project.category}</span>
          </div>
          <p className="project-description">{project.description}</p>
          <div className="card-footer">
            <button className="learn-more-btn">Learn More →</button>
            <button className="like-btn">
              <svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.3651 1.35C15.3651 -0.65 12.0651 -0.35 10.0651 1.65C8.06506 -0.35 4.76506 -0.65 2.76506 1.35C0.765064 3.35 0.765064 6.65 2.76506 8.65L10.0651 15.95L17.3651 8.65C19.3651 6.65 19.3651 3.35 17.3651 1.35Z" fill="currentColor"/>
              </svg>
            </button>
          </div>
        </motion.div>
      </div>
    );
  };

  // Main Component Return
  return (
    <>
      {/* Styles are now self-contained and updated for a dark/black card theme */}
      <style jsx>{`
        .projects-container {
          position: relative;
          /* Set a height for the scroll container. 
             Adjust this based on your bento grid layout. 
             For example, '200vh' means the scroll animation will complete over twice the viewport height.
          */
          height: ${projects.length * 100}vh; 
        }

        .project-card {
          width: 90%;
          max-width: 800px;
          height: 420px;
          border-radius: 20px;
          padding: 2.5rem;
          cursor: pointer;
          
          /* --- KEY CHANGE: Black glassmorphism background for dark bento theme --- */
          background: rgba(20, 20, 20, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          
          color: white; /* Ensure text is readable */
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform-origin: center;
          position: relative;
          overflow: hidden;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
        }

        .project-title {
          font-size: 1.8rem;
          font-weight: 700;
          color: white;
          margin-bottom: 0.5rem;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        }

        .project-period {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.8);
          font-weight: 500;
        }

        .project-category {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.6rem 1.2rem;
          border-radius: 25px;
          font-size: 0.85rem;
          font-weight: 600;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .project-description {
          font-size: 1.1rem;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.95);
          flex-grow: 1;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 2rem;
        }

        .learn-more-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          padding: 0.9rem 2rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          font-size: 1rem;
        }

        .learn-more-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.2);
        }

        .like-btn {
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 50%;
          width: 55px;
          height: 55px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .like-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: scale(1.1) rotate(5deg);
        }

        /* --- MODAL STYLES --- */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.8);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 2rem;
          backdrop-filter: blur(5px);
        }

        .modal-content {
          /* --- KEY CHANGE: Updated modal background to match dark card theme --- */
          background: rgba(30, 30, 30, 0.8);
          border-radius: 20px;
          padding: 3rem;
          max-width: 600px;
          width: 100%;
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: white;
          font-size: 1.5rem;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        @media (max-width: 768px) {
          .project-card {
            width: 95%;
            height: 450px;
            padding: 2rem;
          }
          .project-title { font-size: 1.4rem; }
          .project-description { font-size: 1rem; }
        }
      `}</style>

      {/* The component now starts directly with the scroll container */}
      <div ref={container} className="projects-container">
        {projects.map((project, i) => {
          const targetScale = 1 - ((projects.length - i - 1) * 0.03);
          return (
            <Card
              key={project.id}
              project={project}
              index={i}
              progress={scrollYProgress}
              range={[i * 0.15, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
      
      {/* Modal for displaying project details */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{type: 'spring', damping: 20, stiffness: 200}}
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                className="close-btn"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>
              <div>
                <h2 className="project-title">{selectedProject.title}</h2>
                <p className="project-period" style={{marginBottom: '1rem'}}>{selectedProject.period}</p>
                <span className="project-category" style={{marginBottom: '2rem', display: 'inline-block'}}>{selectedProject.category}</span>
                <p className="project-description" style={{fontSize: '1.1rem', lineHeight: '1.8'}}>{selectedProject.description}</p>
                <div style={{marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap'}}>
                  <button className="learn-more-btn">View Project</button>
                  <button className="learn-more-btn">Source Code</button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Certificates;