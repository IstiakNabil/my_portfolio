import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';


export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      {/* Notice we wrapped the rest in the container class from your CSS */}
      <main className="container">
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </>
  );
}