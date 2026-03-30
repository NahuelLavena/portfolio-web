import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import FAQ from './components/FAQ';
import Contact from './components/Contact';

function App() {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          section.style.opacity = '1';
          section.style.transform = 'translateY(0)';
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <FAQ />
        <Contact />
      </main>
    </>
  );
}

export default App;