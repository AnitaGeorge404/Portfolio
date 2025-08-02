import React, { useState } from 'react';

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Sample project data with dummy images
  const projects = [
    {
      id: 'P',
      letter: 'P',
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React and featuring smooth animations, dark mode toggle, and mobile-first design approach. Showcases projects with interactive elements and seamless user experience.',
      tech: ['React', 'CSS3', 'JavaScript', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop'
    },
    {
      id: 'R',
      letter: 'R',
      title: 'Real Estate Platform',
      description: 'Full-stack real estate management system with property listings, virtual tours, and integrated payment gateway for seamless transactions. Features advanced search filters and map integration.',
      tech: ['Node.js', 'MongoDB', 'React', 'Stripe API'],
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop'
    },
    {
      id: 'O',
      letter: 'O',
      title: 'Online Learning System',
      description: 'Comprehensive e-learning platform with video streaming, progress tracking, interactive quizzes, and certification management. Supports multiple learning formats and gamification.',
      tech: ['Vue.js', 'Laravel', 'MySQL', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop'
    },
    {
      id: 'J',
      letter: 'J',
      title: 'Job Portal Application',
      description: 'Modern job search platform connecting employers and job seekers with AI-powered matching, resume builder, and interview scheduling. Features real-time notifications and chat system.',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop'
    },
    {
      id: 'E',
      letter: 'E',
      title: 'E-commerce Dashboard',
      description: 'Analytics-driven e-commerce admin dashboard with real-time sales tracking, inventory management, and customer insights. Includes predictive analytics and automated reporting.',
      tech: ['React', 'D3.js', 'Firebase', 'Chart.js'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop'
    },
    {
      id: 'C',
      letter: 'C',
      title: 'Chat Application',
      description: 'Real-time messaging application with end-to-end encryption, file sharing, group chats, and video calling capabilities. Built with modern web technologies for optimal performance.',
      tech: ['Socket.io', 'Express', 'React', 'WebRTC'],
      image: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=600&h=400&fit=crop'
    },
    {
      id: 'T',
      letter: 'T',
      title: 'Task Management Tool',
      description: 'Collaborative project management platform with Kanban boards, time tracking, team collaboration, and deadline notifications. Integrates with popular development tools.',
      tech: ['Svelte', 'FastAPI', 'Redis', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop'
    },
    {
      id: 'S1',
      letter: 'S',
      title: 'Social Media Analytics',
      description: 'Comprehensive social media analytics tool providing insights, engagement metrics, content scheduling, and competitor analysis. Features AI-powered content recommendations.',
      tech: ['Python', 'Django', 'Chart.js', 'TensorFlow'],
      image: 'https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=600&h=400&fit=crop'
    },
    {
      id: 'S2',
      letter: 'S',
      title: 'Smart Home System',
      description: 'IoT-based smart home automation system with voice control, energy monitoring, security features, and mobile app integration. Supports multiple IoT protocols and devices.',
      tech: ['IoT', 'Python', 'React Native', 'MQTT'],
      image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop'
    }
  ];

  const defaultContent = {
    title: 'MY PROJECTS',
    description: 'Explore my portfolio of innovative projects that showcase expertise in modern web development, mobile applications, and emerging technologies. Each project represents a unique solution to real-world challenges.',
    tech: [],
    highlight: 'Hover over any project tile to discover the details behind each creation.'
  };

  const currentContent = selectedProject || defaultContent;

  return (
    <div className="project-container">
      <div className="grid-section">
        <div className="grid-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className="grid-item"
              onMouseEnter={() => setSelectedProject(project)}
              onMouseLeave={() => setSelectedProject(null)}
            >
              <div 
                className="grid-background"
                style={{
                  backgroundImage: `url(${project.image})`
                }}
              />
              <div className="grid-overlay" />
              <span className="grid-letter">{project.letter}</span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="info-section">
        <div className="info-content">
          <div className="title-section">
            <h1 className="main-title">{currentContent.title}</h1>
            {currentContent.highlight && (
              <p className="highlight-text">{currentContent.highlight}</p>
            )}
          </div>
          
          <div className="description-section">
            <p className="project-description">{currentContent.description}</p>
          </div>
          
          {currentContent.tech && currentContent.tech.length > 0 && (
            <div className="tech-section">
              <h3 className="tech-title">TECHNOLOGIES</h3>
              <div className="tech-grid">
                {currentContent.tech.map((tech, index) => (
                  <div key={index} className="tech-item">{tech}</div>
                ))}
              </div>
            </div>
          )}
          
          {selectedProject && (
            <div className="action-section">
              <button className="primary-btn">VIEW PROJECT</button>
              <button className="secondary-btn">SOURCE CODE</button>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        .project-container {
          display: flex;
          background: #0a0a0a;
          color: #ffffff;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        }

        .grid-section {
          width: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          background: linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%);
        }

        .grid-container {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          gap: 1rem;
          width: 100%;
          max-width: 500px;
          aspect-ratio: 1;
        }

        .grid-item {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          cursor: pointer;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: #111111;
        }

        .grid-background {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-size: cover;
          background-position: center;
          opacity: 0.3;
          transition: all 0.4s ease;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4));
          transition: all 0.4s ease;
        }

        .grid-item:hover {
          transform: translateY(-8px) scale(1.05);
          border-color: rgba(255, 255, 255, 0.3);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.6);
        }

        .grid-item:hover .grid-background {
          opacity: 0.6;
          transform: scale(1.1);
        }

        .grid-item:hover .grid-overlay {
          background: linear-gradient(135deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2));
        }

        .grid-letter {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          font-size: 2.5rem;
          font-weight: 900;
          color: #ffffff;
          text-shadow: 2px 2px 20px rgba(0, 0, 0, 0.8);
          z-index: 3;
          transition: all 0.4s ease;
          letter-spacing: 2px;
        }

        .grid-item:hover .grid-letter {
          transform: translate(-50%, -50%) scale(1.2);
          text-shadow: 2px 2px 30px rgba(255, 255, 255, 0.3);
        }

        .info-section {
          width: 50%;
          background: #111111;
          border-left: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          align-items: center;
          position: relative;
        }

        .info-section::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 4px;
          height: 100%;
          background: linear-gradient(to bottom, #ff6b6b, #4ecdc4, #45b7d1);
        }

        .info-content {
          padding: 4rem;
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .title-section {
          margin-bottom: 2rem;
        }

        .main-title {
          font-size: 3rem;
          font-weight: 900;
          color: #ffffff;
          margin: 0 0 1rem 0;
          letter-spacing: 3px;
          line-height: 1.1;
          background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .highlight-text {
          font-size: 1rem;
          color: #888888;
          margin: 0;
          font-style: italic;
        }

        .description-section {
          margin-bottom: 2.5rem;
        }

        .project-description {
          font-size: 1.1rem;
          line-height: 1.8;
          color: #cccccc;
          margin: 0;
          text-align: justify;
        }

        .tech-section {
          margin-bottom: 2.5rem;
        }

        .tech-title {
          font-size: 1rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0 0 1rem 0;
          letter-spacing: 2px;
        }

        .tech-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
          gap: 0.5rem;
        }

        .tech-item {
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 0.5rem 1rem;
          border-radius: 8px;
          font-size: 0.85rem;
          font-weight: 500;
          color: #ffffff;
          text-align: center;
          transition: all 0.3s ease;
        }

        .tech-item:hover {
          background: rgba(255, 255, 255, 0.1);
          border-color: rgba(255, 255, 255, 0.3);
          transform: translateY(-2px);
        }

        .action-section {
          display: flex;
          gap: 1rem;
        }

        .primary-btn {
          background: linear-gradient(135deg, #ff6b6b, #4ecdc4);
          color: #ffffff;
          border: none;
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .primary-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 30px rgba(255, 107, 107, 0.4);
        }

        .secondary-btn {
          background: transparent;
          color: #ffffff;
          border: 2px solid rgba(255, 255, 255, 0.2);
          padding: 1rem 2rem;
          border-radius: 12px;
          font-size: 0.9rem;
          font-weight: 700;
          cursor: pointer;
          transition: all 0.3s ease;
          letter-spacing: 1px;
          text-transform: uppercase;
        }

        .secondary-btn:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(255, 255, 255, 0.4);
          transform: translateY(-3px);
        }

        @media (max-width: 1200px) {
          .project-container {
            flex-direction: column;
          }

          .grid-section, .info-section {
            width: 100%;
          }

          .grid-section {
            min-height: 60vh;
          }

          .info-section {
            border-left: none;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
          }

          .info-section::before {
            width: 100%;
            height: 4px;
          }

          .info-content {
            padding: 2rem;
          }

          .main-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .grid-container {
            max-width: 350px;
            gap: 0.5rem;
          }

          .grid-letter {
            font-size: 2rem;
          }

          .main-title {
            font-size: 2rem;
          }

          .info-content {
            padding: 1.5rem;
          }

          .action-section {
            flex-direction: column;
          }
        }
      `}</style>
    </div>
  );
};

export default ProjectGrid;