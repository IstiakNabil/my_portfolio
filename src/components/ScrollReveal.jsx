import { useEffect, useRef, useState } from 'react';

export default function ScrollReveal({ children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    // The native JS Observer acts like a sensor watching the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once it reveals, unobserve so it stays cleanly rendered
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.15, // Triggers when 15% of the element is visible
        rootMargin: "0px 0px -50px 0px" // Triggers slightly before it enters fully
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={elementRef}
      className={`scroll-reveal ${isVisible ? 'reveal-active' : ''}`}
    >
      {children}
    </div>
  );
}