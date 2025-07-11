import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useRef, useEffect, useState } from "react";

// Custom hook for scroll animation
function useScrollAnimation() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible] as const;
}

export const Journey = () => {
  const journeyEvents = [
    {
      year: "Jun 2021",
      title: "Started exploring programming and web tech",
      description: "Began learning programming and basic web technologies.",
      type: "Skill"
    },
    {
      year: "Jan 2022",
      title: "Built mini websites & explored cybersecurity",
      description: "Created mini websites using HTML & CSS. Developed interest in cybersecurity and ethical hacking.",
      type: "Skill"
    },
    {
      year: "Sep 2023",
      title: "Began B.E. Computer Science Engineering & Certifications",
      description: "Started undergraduate studies. Completed: Ethical Hacking (EC-Council), Network Defense (EC-Council), IT & Cybersecurity (Cybrary).",
      type: "Education"
    },
    {
      year: "Oct 2023",
      title: "Full Stack Development Basics",
      description: "Finished Full Stack Development Basics (LinkedIn Learning). Learned HTML, CSS, JavaScript in depth.",
      type: "Skill"
    },
    {
      year: "Dec 2023",
      title: "Certified in RBI Quiz & Web Dev Internship",
      description: "Certified in RBI Quiz. Completed Web Development Internship at CodeAlpha.",
      type: "Certification"
    },
    {
      year: "Jan 2024",
      title: "Major Projects & Tools",
      description: "Completed Prabanjam (E-Commerce Website) and Hiify Graphix (Client Design Portfolio). Worked with Canva, Figma, Cursor AI, Android Studio.",
      type: "Milestone"
    },
    {
      year: "Mar 2024",
      title: "Founded CosmoTec",
      description: "Founded CosmoTec – Tech Service Brand. Delivered services to multiple clients.",
      type: "Milestone"
    },
    {
      year: "Apr 2024",
      title: "Developed AI & Web Projects",
      description: "Developed Sri Lakshmi Construction Website and Chatmate AI (presented at GenNext Vision 2025 Fest).",
      type: "Project"
    },
    {
      year: "May 2024",
      title: "Project Roles",
      description: "Data Analyst for Telco Churn Prediction. Team Lead for AI OS Portfolio Development.",
      type: "Experience"
    },
    {
      year: "Jun 2024",
      title: "Workshop & Mentorship",
      description: "Conducted 'Developing with AI' workshop. Mentored students in AI and development tools.",
      type: "Experience"
    },
    // 2025 Journey
    {
      year: "Jan 2025",
      title: "Scaling CosmoTec",
      description: "Scaled CosmoTec with new clients and service expansion. Offered internships and real-time projects to students.",
      type: "Milestone"
    },
    {
      year: "Feb 2025",
      title: "AI Portfolio OS & Client Systems",
      description: "Designed and deployed immersive AI-themed portfolio OS. Built interactive booking and chatbot systems for clients.",
      type: "Project"
    },
    {
      year: "Mar 2025",
      title: "Tech Fests & AI Applications",
      description: "Participated in major project fests and tech showcases. Contributed to real-world AI-based applications.",
      type: "Experience"
    },
    {
      year: "Apr 2025",
      title: "Mentorship & Case Studies",
      description: "Mentored juniors in portfolio building and freelancing. Worked on case studies and project writeups.",
      type: "Experience"
    },
    {
      year: "May 2025",
      title: "CosmoTec v2.0 & Branding",
      description: "Initiated development of CosmoTec v2.0 (product and training model). Focused on personal branding and mentorship program.",
      type: "Milestone"
    },
    {
      year: "Jun 2025",
      title: "Content Creation & PWA Planning",
      description: "Started creating content for AI + Dev blog. Planning to launch a full PWA version of portfolio with AI assistant.",
      type: "Milestone"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Education": return "bg-blue-500/20 text-blue-300";
      case "Experience": return "bg-green-500/20 text-green-300";
      case "Certification": return "bg-yellow-500/20 text-yellow-300";
      case "Skill": return "bg-purple-500/20 text-purple-300";
      case "Milestone": return "bg-neon-purple/20 text-neon-purple";
      default: return "bg-gray-500/20 text-gray-300";
    }
  };

  return (
    <section id="journey" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-pacifico text-center mb-16 gradient-text">
          My Journey
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-0.5 h-full w-0.5 bg-gradient-to-b from-neon-purple to-transparent"></div>

          <div className="space-y-12">
            {journeyEvents.map((event, index) => {
              const [ref, isVisible] = useScrollAnimation();
              return (
                <div
                  key={index}
                  ref={ref}
                  className={`relative flex items-center justify-center transition-all duration-700 ease-out
                    ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                >
                {/* Timeline dot - positioned absolutely in center */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-neon-purple rounded-full border-4 border-dark-bg animate-glow-pulse z-10"></div>
                {/* Card positioned on alternating sides */}
                <div className={`w-full flex ${index % 2 === 0 ? 'justify-start pr-8' : 'justify-end pl-8'}`}>
                  <Card className={`w-80 p-6 bg-card-bg border-gray-700 hover-glow animate-fade-in ${
                    index % 2 === 0 ? 'mr-8' : 'ml-8'
                  }`}>
                    <div className="flex items-center justify-between mb-3">
                      <Badge className={getTypeColor(event.type)}>
                        {event.type}
                      </Badge>
                      <span className="text-neon-purple font-bold text-lg font-orbitron">
                        {event.year}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-white">
                      {event.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {event.description}
                    </p>
                  </Card>
                </div>
              </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
