import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer'; // You imported it perfectly here!

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      
      {/* Just drop the component right here at the bottom! */}
      <Footer />
    </>
  );
}