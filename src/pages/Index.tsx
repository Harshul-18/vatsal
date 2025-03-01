
import Header from "../components/Header";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Education from "../components/Education";
import Skills from "../components/Skills";
import ExtraCurricular from "../components/ExtraCurricular";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useEffect } from "react";

const Index = () => {
  // Add smooth scrolling behavior
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const href = target.getAttribute('href') as string;
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.scrollY - 80,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', handleLinkClick);
    return () => document.removeEventListener('click', handleLinkClick);
  }, []);

  // Handle visibility animations on scroll
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersect = (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-up');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    animatedElements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Add underline animation to section titles
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.3
    };

    const handleSectionTitleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        const section = entry.target;
        const sectionTitle = section.querySelector('.section-title');
        
        if (sectionTitle && entry.isIntersecting) {
          sectionTitle.classList.add('animate-section-underline');
        } else if (sectionTitle) {
          sectionTitle.classList.remove('animate-section-underline');
        }
      });
    };

    const sectionsObserver = new IntersectionObserver(handleSectionTitleIntersect, options);
    const sections = document.querySelectorAll('section');
    
    sections.forEach(section => sectionsObserver.observe(section));

    return () => sectionsObserver.disconnect();
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <ExtraCurricular />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
