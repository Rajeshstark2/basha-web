import { Button } from "@/components/ui/button";
import { ChevronDown, Linkedin, Instagram, Github, Mail, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { Logo } from "@/components/ui/Logo";

export const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Hi, I'm Saur Basha.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 px-4">
      <div className="hero-animated-bg">
        <div className="vertical-grid">
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div className="text-center max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-pacifico mb-6 glow-text">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-2 animate-fade-in">
            Developer | Tech Creator | Founder @ CosmoTec Services
          </p>
          <p className="text-lg text-gray-400 animate-fade-in">
            
          </p>
        </div>

        <div className="animate-fade-in flex flex-col md:flex-row gap-4 justify-center items-center">
          <Button
            size="lg"
            className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-4 text-lg font-semibold hover-glow rounded-full"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get to know me
          </Button>
          <a
            href="https://cosmotec.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-neon-purple text-neon-purple px-8 py-4 text-lg font-semibold rounded-full hover:bg-neon-purple/10 hover-glow"
            >
              Let's Connect
            </Button>
          </a>
          <a
            href="/lovable-uploads/saur basha resume.pdf"
            download
            className="inline-block"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-neon-purple text-neon-purple px-8 py-4 text-lg font-semibold rounded-full hover:bg-neon-purple/10 hover-glow"
            >
              Download My Resume
            </Button>
          </a>
        </div>

        {/* Social Media Buttons */}
        <div className="flex justify-center gap-4 mt-8 animate-fade-in">
          <a href="https://www.linkedin.com/in/saur-basha" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card-bg border border-neon-purple hover:bg-neon-purple/20 hover-glow transition-all">
              <Linkedin className="w-6 h-6 text-neon-purple" />
            </span>
          </a>
          <a href="https://www.instagram.com/pro_h4k" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card-bg border border-neon-purple hover:bg-neon-purple/20 hover-glow transition-all">
              <Instagram className="w-6 h-6 text-neon-purple" />
            </span>
          </a>
          <a href="https://github.com/Saurbasha-web" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card-bg border border-neon-purple hover:bg-neon-purple/20 hover-glow transition-all">
              <Github className="w-6 h-6 text-neon-purple" />
            </span>
          </a>
          <a href="mailto:saurbasha1@gmail.com" aria-label="Email">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card-bg border border-neon-purple hover:bg-neon-purple/20 hover-glow transition-all">
              <Mail className="w-6 h-6 text-neon-purple" />
            </span>
          </a>
          <a href="tel:+919865521544" aria-label="Phone">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-card-bg border border-neon-purple hover:bg-neon-purple/20 hover-glow transition-all">
              <Phone className="w-6 h-6 text-neon-purple" />
            </span>
          </a>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-neon-purple" />
        </div>
      </div>
    </section>
  );
};
