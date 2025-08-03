import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

const Certificates = () => {
  const [selectedCertificate, setSelectedCertificate] = useState(null);

  const certificates = [
    {
      "id": 1,
      "title": "IBM Full Stack Software Developer",
      "issuer": "IBM",
      "period": "May 15, 2025",
      "description": "A professional certificate awarded for completing 15 courses on Cloud Native Applications, including hands-on experience with React, Node.js, Python, Containers, and Microservices.",
      "category": "Full Stack",
      // --- FIX: Added a placeholder link. The button now appears for this certificate. ---
      "verificationLink": "https://coursera.org/verify/professional-cert/YOUR_ID_HERE"
    },
    {
      "id": 2,
      "title": "Google Data Analytics",
      "issuer": "Google",
      "period": "May 16, 2025",
      "description": "Completed eight courses designed to prepare for introductory-level roles in Data Analytics, gaining competency in spreadsheets, SQL, Tableau, and R.",
      "category": "Data Analytics",
      "verificationLink": "https://coursera.org/verify/professional-cert/QTF4JGCQJENT"
    },
    {
      "id": 3,
      "title": "Meta Front-End Developer",
      "issuer": "Meta",
      "period": "May 12, 2025",
      "description": "A 9-course program preparing for an entry-level career as a front-end developer, covering JavaScript, HTML, CSS, advanced React, and version control.",
      "category": "Front-End",
      "verificationLink": "https://coursera.org/verify/professional-cert/WJH5G1ZEP6OB"
    },
    {
      "id": 4,
      "title": "Data Science with Python",
      "issuer": "Finlatics",
      "period": "July 31, 2025",
      "description": "Gained work experience in Data Science with Python. Use Credential ID: DS-9150648d3d2d106c.",
      "category": "Data Science",
      "verificationLink": "https://finlatics.com/credentialscheck"
    }
  ];

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Re-usable Card Component
  const Card = ({ certificate, index, progress }) => {
    const cardRef = useRef(null);
    const { scrollYProgress: cardScrollProgress } = useScroll({
        target: cardRef,
        offset: ["start end", "start 0.75"],
    });
    
    const scale = useTransform(
      progress,
      [index * 0.25, 1],
      [1, 1 - (certificates.length - index) * 0.05]
    );
    
    const opacity = useTransform(cardScrollProgress, [0, 0.5], [0, 1]);
    const y = useTransform(cardScrollProgress, [0, 0.5], [100, 0]);

    return (
      <motion.div
        ref={cardRef}
        className="card-container"
        style={{ 
          top: `calc(15vh + ${index * 50}px)`,
          scale,
          opacity,
          y,
        }}
      >
        <motion.div
          className="certificate-card"
          onClick={() => setSelectedCertificate(certificate)}
          whileHover={{
            translateY: -8,
            boxShadow: '0 0 40px rgba(255, 255, 255, 0.1), 0 20px 40px rgba(0, 0, 0, 0.4)',
          }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <div className="card-header">
            <div>
              <h2 className="certificate-title">{certificate.title}</h2>
              <p className="certificate-issuer">Issued by {certificate.issuer} · {certificate.period}</p>
            </div>
            <span className="certificate-category">{certificate.category}</span>
          </div>
          <p className="certificate-description">{certificate.description}</p>
          <div className="card-footer">
            <button className="action-btn">Details & Verification →</button>
          </div>
        </motion.div>
      </motion.div>
    );
  };

  // Main Component Return
  return (
    <div className="certificates-section">
      {/* --- HEADING ADDED --- */}
      <div className="heading-container">
        <h2 className="main-heading">Validated Expertise </h2>
        <p className="sub-heading">
          I am committed to continuous learning and professional growth. These certifications from industry leaders validate my skills in development, data, and beyond.
        </p>
      </div>

      <style jsx>{`
        .certificates-section {
          padding-bottom: 5rem;
        }

        .heading-container {
          text-align: center;
          max-width: 750px;
          margin: 0 auto 5rem auto;
          padding: 0 1rem;
        }

        .main-heading {
          font-size: 2.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          font-family: 'Playfair Display', serif;
          font-size: 3.5rem;
        }

        .sub-heading {
          font-size: 1.1rem;
          color: rgba(255, 255, 255, 0.7);
          line-height: 1.6;
        }
        
        .scroll-container {
          position: relative;
          height: ${certificates.length * 100}vh;
        }

        .card-container {
          position: sticky;
          display: flex;
          align-items: flex-start; 
          justify-content: center;
          padding: 0 1rem;
        }

        .certificate-card {
          width: 100%;
          max-width: 750px;
          min-height: 380px;
          border-radius: 24px;
          padding: 2.5rem 3rem;
          cursor: pointer;
          background: rgba(25, 25, 25, 0.5);
          backdrop-filter: blur(25px);
          -webkit-backdrop-filter: blur(25px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
          color: #f0f0f0;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transform-origin: center;
        }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 1.5rem;
          gap: 1rem;
        }

        .certificate-title {
          font-size: 2rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.25rem;
          text-shadow: 0 2px 5px rgba(0, 0, 0, 0.5);
        }

        .certificate-issuer {
          font-size: 1rem;
          color: rgba(255, 255, 255, 0.7);
          font-weight: 500;
        }

        .certificate-category {
          background: rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 600;
          backdrop-filter: blur(5px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          flex-shrink: 0;
          align-self: flex-start;
        }

        .certificate-description {
          font-size: 1.1rem;
          line-height: 1.6;
          color: rgba(255, 255, 255, 0.9);
          flex-grow: 1;
        }

        .card-footer {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          margin-top: 2rem;
        }

        .action-btn {
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.2);
          color: rgba(255, 255, 255, 0.8);
          padding: 0.8rem 1.5rem;
          border-radius: 12px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-size: 0.9rem;
        }

        .action-btn:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.4);
          color: #ffffff;
        }
        
        /* Modal Styles */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0, 0, 0, 0.7);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
          backdrop-filter: blur(10px);
        }

        .modal-content {
          background: rgba(30, 30, 30, 0.8);
          border-radius: 20px;
          padding: 2.5rem;
          max-width: 600px;
          width: 100%;
          backdrop-filter: blur(30px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          position: relative;
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
          color: #f0f0f0;
        }

        .close-btn {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: none;
          color: white;
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
          font-size: 1.5rem;
        }

        .close-btn:hover {
          background: rgba(255, 255, 255, 0.2);
          transform: rotate(90deg);
        }

        .verify-btn {
          display: inline-block;
          background: #fff;
          color: #111;
          padding: 0.9rem 2rem;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          margin-top: 2rem;
        }
        
        .verify-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 20px rgba(255, 255, 255, 0.15);
        }

        @media (max-width: 768px) {
          .main-heading { font-size: 2rem; }
          .certificate-card { padding: 2rem; min-height: 400px; }
          .certificate-title { font-size: 1.5rem; }
          .certificate-description { font-size: 1rem; }
          .card-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <div ref={container} className="scroll-container">
        {certificates.map((cert, i) => (
          <Card
            key={cert.id}
            certificate={cert}
            index={i}
            progress={scrollYProgress}
          />
        ))}
      </div>
      
      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
          >
            <motion.div
              className="modal-content"
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{type: 'spring', damping: 25, stiffness: 300}}
              onClick={(e) => e.stopPropagation()}
            >
              <button className="close-btn" onClick={() => setSelectedCertificate(null)}>×</button>
              <div>
                <span className="certificate-category" style={{marginBottom: '1rem', display: 'inline-block'}}>{selectedCertificate.category}</span>
                <h2 className="certificate-title" style={{fontSize: '2.2rem'}}>{selectedCertificate.title}</h2>
                <p className="certificate-issuer" style={{marginBottom: '1.5rem'}}>Issued by {selectedCertificate.issuer} · {selectedCertificate.period}</p>
                <p className="certificate-description">{selectedCertificate.description}</p>
                
                {selectedCertificate.verificationLink && (
                  <a href={selectedCertificate.verificationLink} target="_blank" rel="noopener noreferrer" className="verify-btn">
                    Verify Certificate ↗
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Certificates;