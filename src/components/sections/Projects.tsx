import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { useState } from "react";

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  

  const projects = [
    {
      title: 'QR Genie',
      description: 'QR code generator with customization options',
      image: '/lovable-uploads/qrgeniepro.jpg',
      demoLink: 'https://qr-genie-pro.netlify.app/',
      category: 'Web',
      tags: ['QR Code', 'Generator', 'React', 'Tailwind'],
      liveLink: 'https://qr-genie-pro.netlify.app/',
      githubLink: '#'
    },
    {
      title: 'AI Fitness Pro',
      description: 'AI-powered workout assistant for personalized training',
      image: '/lovable-uploads/aifitnesspro.jpg',
      demoLink: 'https://ai-fitness-pro.netlify.app/',
      category: 'web',
      tags: ['AI', 'Fitness', 'React', 'Tailwind'],
      liveLink: 'https://ai-fitness-pro.netlify.app/',
      githubLink: '#'
    },
    {
      title: 'HireSkill Pro',
      description: 'Portfolio & skill hiring platform for professionals',
      image: '/lovable-uploads/hireskillpro.jpg',
      demoLink: 'https://hireskillpro.netlify.app/',
      category: 'web',
      tags: ['Portfolio', 'Hiring', 'React', 'Platform'],
      liveLink: 'https://hireskillpro.netlify.app/',
      githubLink: '#'
    },
    {
      title: 'Data Insight Pro',
      description: 'Interactive graph & data insight dashboard',
      image: '/lovable-uploads/datainsightpro.jpg',
      demoLink: 'https://datainsight-pro.netlify.app/',
      category: 'web',
      tags: ['Data', 'Dashboard', 'Charts', 'React'],
      liveLink: 'https://datainsight-pro.netlify.app/',
      githubLink: '#'
    },
    {
      title: 'Last Minute Preparation',
      description: 'Student-focused exam preparation app with study tools',
      image: 'lovable-uploads/lastminutepreperation.jpg',
      demoLink: 'https://examprep-1.onrender.com/',
      category: 'web',
      tags: ['Exam', 'Student', 'Preparation', 'Web App'],
      liveLink: '#',
      githubLink: '#'
    },
    {
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS",
      image: "/lovable-uploads/portfolio.jpg",
      tags: ["React", "Tailwind", "TypeScript", "Portfolio"],
      category: "Web",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Prabanjam E-Commerce",
      description: "Full-featured e-commerce platform with payment integration and admin dashboard",
      image: "/lovable-uploads/{12100F73-08E3-49F7-BB16-D0C8206A4ABC}.png.jpg",
      tags: ["MERN", "Stripe", "JWT", "E-Commerce", "Admin Dashboard"],
      category: "Web",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Hiify Graphix",
      description: "Creative design and branding platform for digital marketing solutions",
      image: "/lovable-uploads/hiify.jpg",
      tags: ["Next.js", "Figma API", "PostgreSQL", "Design", "Branding"],
      category: "Design",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Sri Lakshmi Construction",
      description: "Professional website for construction company with project showcase",
      image: "/lovable-uploads/sri.jpg",
      tags: ["WordPress", "PHP", "MySQL", "Construction", "Showcase"],
      category: "Web",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Handwritten to Code",
      description: "Convert handwritten notes to clean, usable code with AI-powered recognition.",
      image: "/lovable-uploads/Picsart_25-07-04_15-46-38-550.jpg",
      tags: ["AI", "OCR", "Productivity", "Handwriting", "Code"],
      category: "AI",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Clip Hunt",
      description: "Discover and organize video clips with advanced search and tagging features.",
      image: "/lovable-uploads/Picsart_25-07-04_15-47-11-514.jpg",
      tags: ["Video", "Search", "Clips", "Media", "Discovery"],
      category: "Web",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "E-Book Store",
      description: "A modern e-book store with instant purchase and download options.",
      image: "/lovable-uploads/Picsart_25-07-04_15-47-40-948.jpg",
      tags: ["E-Commerce", "Books", "Store", "Buy Now", "Digital"],
      category: "Web",
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Chat Mate",
      description: "A friendly chat platform with real-time messaging and AI-powered features.",
      image: "/lovable-uploads/Picsart_25-07-04_15-48-06-590.jpg",
      tags: ["Chat", "AI", "Messaging", "Real-Time", "Platform"],
      category: "AI",
      liveLink: "#",
      githubLink: "#"
    }
  ];

  const filters = ["All", "Web", "AI", "Design"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="py-20 px-4 relative z-10 bg-card-bg/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-pacifico text-center mb-8 gradient-text">
          Featured Projects
        </h2>

        {/* Filter buttons */}
        <div className="flex justify-center space-x-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`${
                activeFilter === filter 
                  ? "bg-neon-purple text-white" 
                  : "border-gray-600 text-gray-300 hover:border-neon-purple hover:text-neon-purple"
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="bg-card-bg border-gray-700 overflow-hidden hover-glow group animate-fade-in">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  loading="lazy"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a 
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-neon-purple rounded-full hover:bg-neon-purple/80 transition-colors"
                  >
                    <ExternalLink className="w-5 h-5 text-white" />
                  </a>
                  <a 
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors"
                  >
                    <Github className="w-5 h-5 text-white" />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 font-libre-baskerville">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} className="bg-neon-purple/20 text-neon-purple text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
