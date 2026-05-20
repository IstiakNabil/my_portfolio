export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="direct-channels-list horizontal">
        
        <a href="mailto:istiaknabil.dev@gmail.com" className="channel-card">
          <span className="channel-icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </span>
          <div className="channel-details">
            <span className="channel-label">Direct Email</span>
            <span className="channel-value">istiaknabil.dev@gmail.com</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/istiak-ahmed-341513216/" target="_blank" rel="noreferrer" className="channel-card">
          <span className="channel-icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.8v8.37h2.8v-4.67c0-.25.02-.5.1-.68a1.14 1.14 0 0 1 1-.77c.76 0 1 .52 1 1.3v4.82h2.8M6.5 8.37a1.37 1.37 0 1 0 0-2.75 1.37 1.37 0 0 0 0 2.75M8 18.5V10.13H5V18.5h3z"/></svg>
          </span>
          <div className="channel-details">
            <span className="channel-label">LinkedIn</span>
            <span className="channel-value">Istiak Ahmed</span>
          </div>
        </a>

        <a href="https://github.com/IstiakNabil" target="_blank" rel="noreferrer" className="channel-card">
          <span className="channel-icon">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </span>
          <div className="channel-details">
            <span className="channel-label">Github</span>
            <span className="channel-value">github.com/IstiakNabil</span>
          </div>
        </a>

      </div>
      <div className="footer-copyright">
        <p>&copy; {currentYear} Muhammad Nabil. All rights reserved.</p>
      </div>
    </footer>
  );
}
        
    