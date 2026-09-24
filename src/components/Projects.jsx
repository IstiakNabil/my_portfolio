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
      codeLink: "https://github.com/IstiakNabil", 
      image: null // No image for this project
    }
  ];

  return (
    <section id="projects" style={{ padding: '4rem 5%', maxWidth: '1200px', margin: '0 auto' }}>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '3rem' }}>Featured Engineering</h2>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {projectsData.map((project, index) => (
          <div 
            key={index} 
            style={{ 
              display: 'flex', 
              flexWrap: 'wrap', // Allows stacking on mobile
              gap: '2rem', 
              alignItems: 'center', 
              backgroundColor: '#0f172a', // Clean dark background
              padding: '2.5rem', 
              borderRadius: '16px',
              border: '1px solid #1e293b'
            }}
          >
            
            {/* LEFT SIDE: Title, Description, Tags, and Links */}
            <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div>
                <h3 style={{ fontSize: '2rem', margin: '0 0 0.25rem 0', color: '#f8fafc', fontWeight: 'bold' }}>
                  {project.title}
                </h3>
                <span style={{ color: '#94a3b8', fontSize: '1.1rem', fontWeight: '500' }}>
                  {project.subtitle}
                </span>
              </div>
              
              <p style={{ color: '#cbd5e1', lineHeight: '1.7', margin: '0', fontSize: '1.05rem' }}>
                {project.description}
              </p>
              
              <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                {project.tags.map((tag, tIdx) => (
                  <span 
                    key={tIdx} 
                    style={{ 
                      backgroundColor: 'rgba(56, 189, 248, 0.1)', // Subtle blue tint
                      color: '#38bdf8', 
                      padding: '0.4rem 1rem', 
                      borderRadius: '99px', 
                      fontSize: '0.85rem',
                      fontWeight: '600',
                      border: '1px solid rgba(56, 189, 248, 0.2)'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              {project.codeLink && (
                <div style={{ marginTop: '0.5rem' }}>
                  <a 
                    href={project.codeLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      backgroundColor: '#e2e8f0', // Light button for contrast
                      color: '#0f172a',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 'bold',
                      transition: 'transform 0.2s ease',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                  >
                    View Repository →
                  </a>
                </div>
              )}
            </div>

            {/* RIGHT SIDE: Clean Image Display */}
            {project.image && (
              <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
                <img 
                  src={project.image} 
                  alt={`${project.title} Preview`}
                  style={{ 
                    width: '100%', 
                    maxWidth: '550px', 
                    borderRadius: '12px', 
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.5), 0 8px 10px -6px rgba(0, 0, 0, 0.3)',
                    objectFit: 'cover'
                  }}
                />
              </div>
            )}
            
          </div>
        ))}
      </div>
    </section>
  );
}