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
      urlSlug: "loominobd.com",
      // 2. Pass the imported variable (NO quotes)
      image: loominoImg 
    },
    {
      title: "Luxyso",
      subtitle: "E-Commerce & Custom POS System",
      description: "Deployed a rebranded e-commerce platform on AWS EC2 via Docker Compose. Built a custom multi-location POS integrated with the storefront through a shared stock pool that dynamically decrements inventory across all channels.",
      tags: ["React", "Django", "Docker", "AWS"],
      codeLink: "https://github.com/IstiakNabil/Luxiso",
      urlSlug: "luxyso.com",
      image: luxisoImg 
    },
    {
      title: "Faculty Management System",
      subtitle: "UAP CSE Department Platform",
      description: "Contributed to a comprehensive Django-based management system, currently live and in active daily use. Implemented complex backend logic for automatic, seniority-based role succession and faculty position assignments.",
      tags: ["Python", "Django", "PostgreSQL"],
      urlSlug: "uap-cse.management",
      image: facultyImg 
    }

    {
      title: "Fabric Anomaly Detection",
      subtitle: "AI/ML Research Project",
      description: "Researching and developing a conformal risk-controlled cascade pipeline model to accurately detect and classify manufacturing defects in fabric. Applying advanced machine learning techniques to improve the reliability, precision, and efficiency of automated quality control systems.",
      tags: ["Python", "PyTorch", "Computer Vision", "Machine Learning"],
      codeLink: "https://github.com/IstiakNabil", 
      urlSlug: "ai-research.fabric",
      image: null // Explicitly omitting the image as requested
    }
  ];

  return (
    <section id="projects">
      <h2 className="section-title">Featured Engineering</h2>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <div className="premium-project-card" key={index}>
            {/* Left Column details... */}
            
            <div className="project-media-side">
              <div className="browser-window-frame">
                <div className="window-header-dots">
                  <span className="dot close"></span>
                  <span className="dot minimize"></span>
                  <span className="dot expand"></span>
                  <span className="window-url-bar">{project.urlSlug}</span>
                </div>
                
                {/* 3. The JSX that renders the image */}
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