export default function TechnicalArsenal() {
  const skillCategories = [
    {
      title: "Backend Architecture",
      skills: [
        { name: "Python", icon: "🐍" },
        { name: "Django & DRF", icon: "⚙️" },
        { name: "Node.js", icon: "🟩" },
        { name: "API Design", icon: "🔗" }
      ]
    },
    {
      title: "Frontend Core",
      skills: [
        { name: "React.js / Vite", icon: "⚛️" },
        { name: "JavaScript", icon: "🟨" },
        { name: "Tailwind CSS", icon: "🌊" },
        { name: "Figma-to-Code", icon: "🎨" }
      ]
    },
    {
      title: "DevOps & Deployment",
      skills: [
        { name: "AWS EC2", icon: "☁️" },
        { name: "Docker", icon: "🐳" },
        { name: "Kubernetes", icon: "☸️" },
        { name: "Nginx & Gunicorn", icon: "🚀" }
      ]
    },
    {
      title: "Databases & ML",
      skills: [
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
        { name: "PyTorch & CNNs", icon: "🧠" },
        { name: "NumPy & KNN", icon: "📊" }
      ]
    }
  ];

  return (
    <section id="skills" className="skills-container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="arsenal-grid">
        {skillCategories.map((category, idx) => (
          <div className="arsenal-card" key={idx}>
            <h4>{category.title}</h4>
            <div className="arsenal-tags-wrapper">
              {category.skills.map((skill, sIdx) => (
                <span className="arsenal-tag" key={sIdx}>
                  <span className="tag-icon">{skill.icon}</span>
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}