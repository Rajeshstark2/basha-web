import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export const Skills = () => {
  const [api, setApi] = useState<any>();

  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Java", level: 75 },
        { name: "SQL", level: 80 }
      ]
    },
    {
      title: "Frameworks & Libraries",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 80 },
        { name: "MongoDB", level: 75 },
        { name: "Next.js", level: 70 }
      ]
    },
    {
      title: "Tools & Technologies",
      skills: [
        { name: "Figma", level: 85 },
        { name: "Android Studio", level: 70 },
        { name: "Cursor AI", level: 80 },
        { name: "Git/GitHub", level: 90 },
        { name: "AWS", level: 65 }
      ]
    },
    {
      title: "Soft Skills",
      skills: [
        { name: "Leadership", level: 85 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 88 },
        { name: "Communication", level: 80 },
        { name: "Project Management", level: 75 }
      ]
    },
    {
      title: "Experience Areas",
      skills: [
        { name: "Full Stack Development", level: 85 },
        { name: "UI/UX Design", level: 80 },
        { name: "Cybersecurity", level: 75 },
        { name: "AI/ML", level: 70 },
        { name: "Project Management", level: 80 }
      ]
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="skills" className="py-20 px-4 relative z-10 bg-card-bg/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-pacifico text-center mb-8 gradient-text">
          Skills & Experience
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto font-libre-baskerville">
          A comprehensive overview of my technical abilities and professional experience across various domains
        </p>

        <Carousel 
          className="w-full max-w-5xl mx-auto" 
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            duration: 20,
          }}
        >
          <CarouselContent className="-ml-4">
            {skillCategories.map((category, categoryIndex) => (
              <CarouselItem key={categoryIndex} className="pl-4 md:basis-1/2 lg:basis-1/2">
                <Card className="h-full p-6 bg-card-bg border-gray-700 hover-glow animate-fade-in transition-all duration-500 ease-in-out">
                  <h3 className="text-2xl font-orbitron font-semibold mb-6 text-neon-purple">
                    {category.title}
                  </h3>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-white font-medium font-libre-baskerville">{skill.name}</span>
                          <span className="text-neon-purple font-semibold">{skill.level}%</span>
                        </div>
                        <Progress 
                          value={skill.level} 
                          className="h-2 bg-gray-700 transition-all duration-1000 ease-out"
                        />
                      </div>
                    ))}
                  </div>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="bg-card-bg border-gray-700 text-white hover:bg-neon-purple/20 transition-all duration-300" />
          <CarouselNext className="bg-card-bg border-gray-700 text-white hover:bg-neon-purple/20 transition-all duration-300" />
        </Carousel>
      </div>
    </section>
  );
};
