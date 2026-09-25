import loominoImg from '../assets/loomino.png';
import luxisoImg from '../assets/luxyso.png';
import facultyImg from '../assets/faculty.png';

export default function Projects() {
  const projectsData = [
    {
      title: "Loomino",
      subtitle: "Production E-Commerce Platform",
      description: "Architected and deployed a production e-commerce platform featuring 9 storefront pages and a 12-screen React admin panel wired to Django REST endpoints. Hosted on AWS EC2 with PostgreSQL, Gunicorn, and Nginx.",
      tags: ["React", "Django", "PostgreSQL", "AWS"],
      codeLink: "https://github.com/IstiakNabil/Loomino",
      image: loominoImg 
    },
    {
      title: "Luxyso",
      subtitle: "E-Commerce & Custom POS System",
      description: "Deployed a rebranded e-commerce platform on AWS EC2 via Docker Compose. Built a custom multi-location POS integrated with the storefront through a shared stock pool that dynamically decrements inventory across all channels.",
      tags: ["React", "Django", "Docker", "AWS"],
      codeLink: "https://github.com/IstiakNabil/Luxiso",
      image: luxisoImg 
    },
    {
      title: "Faculty Management System",
      subtitle: "UAP CSE Department Platform",
      description: "Contributed to a comprehensive Django-based management system, currently live and in active daily use. Implemented complex backend logic for automatic, seniority-based role succession and faculty position assignments.",
      tags: ["Python", "Django", "PostgreSQL"],
      codeLink: "https://github.com/IstiakNabil",
      image: facultyImg 
    },
    {
      title: "Fabric Anomaly Detection",
      subtitle: "AI/ML Research Project",
      description: "Researching and developing a conformal risk-controlled cascade pipeline model to accurately detect and classify manufacturing defects in fabric. Applying advanced machine learning techniques to improve the reliability, precision, and efficiency of automated quality control systems.",
      tags: ["Python", "PyTorch", "Computer Vision", "Machine Learning"],
      codeLink: "https://github.com/IstiakNabil/EfficientAD", 
      image: null 
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Projects</h2>
      
      {/* Restored your native grid class to fix the left-alignment indentation */}
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="premium-project-card" key={index}>
            
            {/* Left Column: Reordered to Title -> Description -> Tags -> Button */}
            <div className="project-details-side">
              
              <h3 className="project-display-title" style={{ marginBottom: '0.25rem' }}>
                {project.title}
              </h3>
              <span className="project-subtitle" style={{ display: 'block', marginBottom: '1rem', opacity: 0.8 }}>
                {project.subtitle}
              </span>
              
              <p className="project-narrative-text" style={{ marginBottom: '1.5rem' }}>
                {project.description}
              </p>

              <div className="project-meta-tags" style={{ marginBottom: '1.5rem' }}>
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    className={`tech-tag ${tag.toLowerCase().replace('.', '').replace(' ', '-')}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.codeLink && (
                <div className="project-action-links">
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="action-link-btn primary"
                  >
                    View Project <span className="arrow">→</span>
                  </a>
                </div>
              )}
            </div>

            {/* Right Column: Clean Image Only (No Browser Window mockup) */}
            <div className="project-media-side" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={`${project.title} Preview`}
                  style={{ 
                    width: '100%', 
                    borderRadius: '8px', 
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.4)',
                    objectFit: 'cover'
                  }}
                />
              ) : null}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}