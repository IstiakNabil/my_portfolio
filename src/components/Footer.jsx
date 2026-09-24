export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    // 1. Ensure the entire footer acts as a centered column
    <footer className="site-footer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      {/* 2. Force the card container to wrap items nicely and center them */}
      <div 
        className="direct-channels-list horizontal" 
        style={{ 
          display: 'flex', 
          flexWrap: 'wrap', 
          justifyContent: 'center', 
          gap: '1rem', 
          maxWidth: '900px', 
          width: '100%',
          margin: '0 auto 2rem auto' 
        }}
      >
        
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
      
      {/* 3. Ensure copyright text stays centered at the very bottom */}
      <div className="footer-copyright" style={{ textAlign: 'center', width: '100%' }}>
        <p>&copy; {currentYear} MD. ISTIAK AHAMMED NABIL. All rights reserved.</p>
      </div>
    </footer>
  );
}