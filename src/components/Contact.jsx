export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Your email handling or backend API submission logic goes here
  };

  return (
    <section id="contact" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      {/* 1. Added inline styles to perfectly center the title above the form */}
      <h2 className="section-title" style={{ textAlign: 'center', width: '100%', marginBottom: '2rem' }}>
        Get In Touch
      </h2>
      
      <div className="contact-vertical-wrapper" style={{ width: '100%', maxWidth: '700px' }}>
        
        {/* 2. Ensured the narrative text remains beautifully centered */}
        <div className="contact-header-text" style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h3 style={{ marginBottom: '1rem' }}>Let's build something exceptional</h3>
          <p className="contact-panel-narrative">
            Whether you want to discuss backend optimization pipelines, core algorithmic problems, or upcoming engineering opportunities—drop a message or connect across my networks.
          </p>
        </div>

        {/* 3. The form panel remains unchanged */}
        <div className="contact-form-panel">
          <form onSubmit={handleFormSubmit} className="premium-terminal-form">
            
            <div className="form-input-row">
              <div className="form-input-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required placeholder="John Doe" />
              </div>
              <div className="form-input-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required placeholder="john@example.com" />
              </div>
            </div>

            <div className="form-input-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" required rows="5" placeholder="Let's collaborate on a scale-ready system architecture..."></textarea>
            </div>

            <button type="submit" className="form-submit-btn">
              Send Message <span className="btn-arrow">→</span>
            </button>
          </form>
        </div>
          
      </div>
    </section>
  );
}