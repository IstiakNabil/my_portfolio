import { useState, useEffect } from 'react';

export default function Hero() {
  const words = ["Fullstack Developer", "Django Specialist", "React Engineer"];
  const [currentWordIdx, setCurrentWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer;
    const fullWord = words[currentWordIdx];

    const handleTyping = () => {
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        
        // If word is completely typed out, pause before deleting
        if (currentText === fullWord) {
          setTypingSpeed(2000); // 2-second pause at the end
          setIsDeleting(true);
        } else {
          setTypingSpeed(80); // Speed while typing
        }
      } else {
        // Deleting characters
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        
        // If word is fully deleted, move to the next word
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIdx((prev) => (prev + 1) % words.length);
          setTypingSpeed(300); // Small pause before typing next word
        } else {
          setTypingSpeed(40); // Fast speed while deleting
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIdx, typingSpeed]);

  return (
    <section className="hero"> 
      <div className="hero-text">
          <div className="hero-badge">Fullstack Engineering</div>
          <h1>Hello, I'm <span>Nabil</span></h1>
          
          {/* Animated Classy Subtitle Container */}
          <div className="typing-container">
            I build software as a <span className="typing-text">{currentText}</span>
            <span className="typing-cursor">|</span>
          </div>

          <p className="hero-description">
            Computer Science student specializing in robust backend architectures using Django and dynamic interfaces via React.js.
          </p>
          <a href="https://drive.google.com/file/d/19TXQQmVTEtXkWitu-Jqqd1KiFEMuWl5X/view?usp=sharing" className="cv-button" target="_blank" rel="noreferrer">
            View Credentials
          </a>
      </div> 
      <div className="img-container">
        <img className="img" src="/Nabil.jpg" alt="Muhammad Nabil Portfolio Avatar" />
      </div>
    </section>
  );
}