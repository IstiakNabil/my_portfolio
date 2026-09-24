export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="direct-channels-list horizontal">
        
        <a href="mailto:istiaknabil.dev@gmail.com" className="channel-card">
          <div className="channel-details">
            <span className="channel-label">Direct Email</span>
            <span className="channel-value">istiaknabil.dev@gmail.com</span>
          </div>
        </a>

        <a href="tel:+8801303039186" className="channel-card">
          <div className="channel-details">
            <span className="channel-label">Phone</span>
            <span className="channel-value">+880-1303039186</span>
          </div>
        </a>

        <a href="https://www.linkedin.com/in/istiak-ahmed-341513216/" target="_blank" rel="noreferrer" className="channel-card">
          <div className="channel-details">
            <span className="channel-label">LinkedIn</span>
            <span className="channel-value">Istiak Ahmed</span>
          </div>
        </a>

        <a href="https://github.com/IstiakNabil" target="_blank" rel="noreferrer" className="channel-card">
          <div className="channel-details">
            <span className="channel-label">Github</span>
            <span className="channel-value">github.com/IstiakNabil</span>
          </div>
        </a>

      </div>
      <div className="footer-copyright">
        <p>&copy; {currentYear} MD. ISTIAK AHAMMED NABIL. All rights reserved.</p>
      </div>
    </footer>
  );
}