import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Journey } from "@/components/sections/Journey";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { CosmoTec } from "@/components/sections/CosmoTec";
import { Clients } from "@/components/sections/Clients";
import { Booking } from "@/components/sections/Booking";
import { Contact } from "@/components/sections/Contact";
import { ParticleBackground } from "@/components/ui/ParticleBackground";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Add smooth scrolling behavior
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href') || '');
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      });
    });
  }, []);

  return (
    <div className="min-h-screen bg-dark-bg text-white relative overflow-x-hidden">
      <ParticleBackground />
      <ScrollProgress />
      <main role="main" aria-label="Main Content">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <CosmoTec />
        <Clients />
        <Booking />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
