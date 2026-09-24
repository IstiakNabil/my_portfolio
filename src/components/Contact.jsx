export default function Contact() {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Your email handling or backend API submission logic goes here
  };

  return (
    <section id="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      {/* Container constrained to a clean readable width, standard left flow */}
      <div className="contact-vertical-wrapper" style={{ maxWidth: '800px', margin: '0' }}>
        
        {/* Explicitly left-aligned header text */}
        <div className="contact-header-text" style={{ textAlign: 'left', marginBottom: '2.5rem' }}>
          <h3 style={{ marginBottom: '1rem', color: '#f8fafc', fontSize: '1.75rem' }}>
            Let's build something exceptional
          </h3>
          <p className="contact-panel-narrative" style={{ color: '#cbd5e1', lineHeight: '1.7', fontSize: '1.05rem', margin: '0' }}>
            Whether you want to discuss backend optimization pipelines, core algorithmic problems, or upcoming engineering opportunities—drop a message or connect across my networks.
          </p>
        </div>

        <div className="contact-form-panel">
          <form onSubmit={handleFormSubmit} className="premium-terminal-form" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            
            <div className="form-input-row" style={{ width: '100%' }}>
              <div className="form-input-group">
                <label htmlFor="name">Your Name</label>
                <input type="text" id="name" required placeholder="John Doe" style={{ width: '100%' }} />
              </div>
              <div className="form-input-group">
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" required placeholder="john@example.com" style={{ width: '100%' }} />
              </div>
            </div>

            <div className="form-input-group" style={{ width: '100%' }}>
              <label htmlFor="message">Your Message</label>
              <textarea id="message" required rows="5" placeholder="Let's collaborate on a scale-ready system architecture..." style={{ width: '100%' }}></textarea>
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