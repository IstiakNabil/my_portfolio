export default function Projects() {
  const projectsData = [
    {
      title: "Loomino",
      subtitle: "Production E-Commerce Platform",
      description: "Architected and deployed a production e-commerce platform featuring 9 storefront pages and a 12-screen React admin panel wired to Django REST endpoints. Hosted on AWS EC2 with PostgreSQL, Gunicorn, and Nginx.",
      tags: ["React", "Django", "PostgreSQL", "AWS"],
      codeLink: "https://github.com/IstiakNabil",
      urlSlug: "loominobd.com",
      image: "/loomino.png" 
    },
    {
      title: "Luxiso",
      subtitle: "E-Commerce & Custom POS System",
      description: "Deployed a rebranded e-commerce platform on AWS EC2 via Docker Compose. Built a custom multi-location POS integrated with the storefront through a shared stock pool that dynamically decrements inventory across all channels.",
      tags: ["React", "Django", "Docker", "AWS"],
      codeLink: "https://github.com/IstiakNabil/Luxiso",
      urlSlug: "luxyso.com",
      image: "/luxiso.png"
    },
    {
      title: "Faculty Management System",
      subtitle: "UAP CSE Department Platform",
      description: "Contributed to a comprehensive Django-based management system, currently live and in active daily use. Implemented complex backend logic for automatic, seniority-based role succession and faculty position assignments.",
      tags: ["Python", "Django", "PostgreSQL"],
      codeLink: "https://github.com/IstiakNabil",
      urlSlug: "uap-cse.management",
      image: "/faculty-sys.png"
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Featured Engineering</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="premium-project-card" key={index}>
            <div className="project-details-side">
              <div className="project-meta-tags">
                {project.tags.map((tag, tIdx) => (
                  <span key={tIdx} className={`tech-tag ${tag.toLowerCase()}`}>
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="project-display-title">{project.title}</h3>
              <span className="project-subtitle">{project.subtitle}</span>
              <p className="project-narrative-text">{project.description}</p>
              <div className="project-action-links">
                <a href={project.codeLink} target="_blank" rel="noreferrer" className="action-link-btn primary">
                  View <span className="arrow">→</span>
                </a>
              </div>
            </div>
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
                        e.target.style.display = 'none';
                        e.target.parentNode.classList.add('viewport-fallback-active');
                      }}
                    />
                  ) : null}
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