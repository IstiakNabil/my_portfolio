export default function Projects() {
  // 1. Array data repository for all your engineering builds
  const projectsData = [
    {
      title: "EduVerse",
      subtitle: "An Online Learning Platform",
      description: "A full-stack, scale-ready learning platform featuring comprehensive course creation pipelines, secure enrollment state architectures, and an interactive fluid content delivery engine.",
      tags: ["Django", "React.js", "PostgreSQL"],
      codeLink: "https://github.com/IstiakNabil/EDUVERSE",
      urlSlug: "eduverse.platform",
      // CRITICAL: Double check your filename in the public/ folder. 
      // If it's a jpeg, change extension to .jpg or .jpeg accordingly.
      image: "/image1.png" 
    },
    {
      title: "Ticketing Management Database System For Airline Operations",
      subtitle: "Secure Data Architecture for Airline Ticketing",
      description: "A robust ticketing management system designed for airline operations, featuring a secure data architecture that optimizes booking workflows, passenger information management, and real-time inventory tracking.",
      tags: ["MySQL"],
      codeLink: "https://www.linkedin.com/posts/istiak-ahmed-341513216_a-ticketing-management-system-for-airplanes-ugcPost-7269683849981235200-KAWD?utm_source=share&utm_medium=member_desktop&rcm=ACoAADaJgyEBrayigNdWhh2Naku-Bsb2oX8fQ9M", // Uses LinkedIn
      urlSlug: "TicketingManagementSystem.airline",
      image: "/image.png"
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Featured Projects</h2>
      
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="premium-project-card" key={index}>
            
            {/* Left Column: Technical Metadata & Narrative */}
            <div className="project-details-side">
              <div className="project-meta-tags">
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className={`tech-tag ${tag.toLowerCase().replace('.', '')}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <h3 className="project-display-title">{project.title}</h3>
              <span className="project-subtitle">{project.subtitle}</span>
              
              <p className="project-narrative-text">{project.description}</p>
              
              <div className="project-action-links">
                <a 
                  href={project.codeLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="action-link-btn primary"
                >
                  View <span className="arrow">→</span>
                </a>
              </div>
            </div>

            {/* Right Column: Immersive Window Frame Mockup */}
            <div className="project-media-side">
              <div className="browser-window-frame">
                <div className="window-header-dots">
                  <span className="dot close"></span>
                  <span className="dot minimize"></span>
                  <span className="dot expand"></span>
                  <span className="window-url-bar">{project.urlSlug}</span>
                </div>
                
                <div className="window-view-viewport">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={`${project.title} Interface Mockup`}
                      onError={(e) => {
                        // Resilient Fallback UI Mechanism if your image filename has a mismatch
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('viewport-fallback-active');
                      }}
                    />
                  ) : null}
                  {/* Subtle decorative grid backing that serves as a premium placeholder placeholder */}
                  <div className="viewport-grid-placeholder-mesh">
                    <span>Code Execution Architecture View</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}