import { useState } from 'react';

export default function About() {
  const [activeTab, setActiveTab] = useState('story');

  const tabContents = {
    story: (
      <div className="tab-pane-content">
        <p>
          I am a Computer Science student driven by the challenge of architecting high-performance backend systems and turning intricate logic into fluid, user-first web experiences. My technical focus revolves around building clean, scale-ready systems using Python and Django, paired with interactive single-page frontends in React.
        </p>
        <p>
          Beyond writing code, I am deeply interested in system design optimization, secure data models, and bridging the gap between hardware engineering and modern cloud ecosystems. I approach development with a meticulous eye for scalability, maintainability, and clean documentation.
        </p>
      </div>
    ),
    experience: (
      <div className="tab-pane-content operational-pane">
        <div className="education-timeline-item">
          <span className="time-badge">Jan 2026 - Present</span>
          <h4>Technical Director & Co-founder</h4>
          <p>Alignedge</p>
          <ul className="premium-achievements-list">
            <li>Direct technical operations, overseeing the end-to-end development and deployment of client websites and full-stack applications.</li>
            <li>Architect and build scalable production platforms for clients, successfully delivering major e-commerce projects like Loomino and Luxiso.</li>
          </ul>
        </div>
        <div className="education-timeline-item">
          <span className="time-badge">Oct 2026 - Present</span>
          <h4>Web Developer</h4>
          <p>Tiffin bd</p>
          <ul className="premium-achievements-list">
            <li>Maintain and optimize the official company website, resolving technical bugs and streamlining performance.</li>
            <li>Develop and implement new application features, improving overall system functionality.</li>
          </ul>
        </div>
        <div className="education-timeline-item">
          <span className="time-badge">Aug 2026 - Present</span>
          <h4>UI/UX Intern</h4>
          <p>eutropia-it (Remote)</p>
          <ul className="premium-achievements-list">
            <li>Conduct comprehensive UI/UX user research to identify interface pain points across primary workflows.</li>
            <li>Formulate detailed analytical reports to guide collaborative design decisions in Figma.</li>
          </ul>
        </div>
      </div>
    ),
    competencies: (
      <div className="tab-pane-content metrics-pane-grid">
        <div className="mini-metric-card">
          <div className="mini-card-header">
            <span className="bullet">✦</span>
            <h4>Backend Architecture</h4>
          </div>
          <p>Designing secure data layers, building modular API channels, and managing relational databases.</p>
        </div>
        <div className="mini-metric-card">
          <div className="mini-card-header">
            <span className="bullet">✦</span>
            <h4>Interface Engineering</h4>
          </div>
          <p>Compiling state-driven UI layouts that render with fluid velocity and modular responsiveness.</p>
        </div>
        <div className="mini-metric-card">
          <div className="mini-card-header">
            <span className="bullet">✦</span>
            <h4>DevOps & Cloud</h4>
          </div>
          <p>Deploying production-ready applications utilizing AWS EC2, Docker, and CI/CD pipelines.</p>
        </div>
      </div>
    ),
    education: (
      <div className="tab-pane-content operational-pane">
        <div className="education-timeline-item">
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            <span className="time-badge">Expected Dec 2026</span>
            <span className="time-badge cgp-accent">CGPA: 3.79 / 4.00</span>
          </div>
          <h4>B.Sc. in Computer Science & Engineering</h4>
          <p>University of Asia Pacific (UAP)</p>
          <p style={{ marginTop: '0.5rem', fontSize: '0.95rem' }}>
            <strong>Awards:</strong> Vice-Chancellor's Award (1x) & Dean's Award (3x) for academic excellence.
          </p>
        </div>
        <div className="education-timeline-item">
          <span className="time-badge excellence-badge">Key Milestones</span>
          <h4 style={{ marginBottom: '1rem' }}>Leadership & Technical Distinctions</h4>
          <ul className="premium-achievements-list">
            <li>
              <strong className="accent-text">ICPC Regional Contestant & AtCoder Participant</strong> — Solved complex algorithmic and data structure problems under intense competitive time constraints.
            </li>
            <li>
              <strong className="accent-text">President, Math Club (CSE), UAP</strong> — Spearheaded academic workshops, curated competitive curriculum, and mentored peers through intensive problem-solving sessions.
            </li>
          </ul>
        </div>
      </div>
    )
  };

  return (
    <section id="about">
      <h2 className="section-title">About Me</h2>
      <div className="about-dashboard-container">
        <div className="dashboard-sidebar">
          <button 
            className={`sidebar-tab-btn ${activeTab === 'story' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('story')}
          >
            The Narrative
          </button>
          <button 
            className={`sidebar-tab-btn ${activeTab === 'experience' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('experience')}
          >
            Experience
          </button>
          <button 
            className={`sidebar-tab-btn ${activeTab === 'competencies' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('competencies')}
          >
            Competencies
          </button>
          <button 
            className={`sidebar-tab-btn ${activeTab === 'education' ? 'tab-active' : ''}`}
            onClick={() => setActiveTab('education')}
          >
            Education & Excellence
          </button>
        </div>
        <div className="dashboard-display-view">
          {tabContents[activeTab]}
        </div>
      </div>
    </section>
  );
}