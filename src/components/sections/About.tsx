import { Card } from "@/components/ui/card";
import { Lightbulb, Code, TrendingUp, Palette, Heart, Target, Rocket, Star } from "lucide-react";

export const About = () => {
  const highlights = [
    { icon: Lightbulb, text: "Innovation Driven", color: "text-yellow-400" },
    { icon: Code, text: "Tech Enthusiast", color: "text-blue-400" },
    { icon: TrendingUp, text: "Growth Focused", color: "text-green-400" },
    { icon: Palette, text: "Creative Mindset", color: "text-purple-400" }
  ];

  const stats = [
    { number: "3+", label: "Years Learning", icon: Star },
    { number: "15+", label: "Projects Built", icon: Rocket },
    { number: "50+", label: "Skills Mastered", icon: Target },
    { number: "∞", label: "Passion Level", icon: Heart }
  ];

  return (
    <section id="about" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-pacifico text-center mb-16 gradient-text">
          About Me
        </h2>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Profile Section */}
          <div className="lg:col-span-1 flex flex-col items-center animate-slide-in-left">
            <div className="relative mb-6">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-neon-purple via-blue-600 to-purple-800 p-1 glow-border">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center overflow-hidden">
                  <img
                    src="/lovable-uploads/new-about-profile.png"
                    alt="Saur Basha profile"
                    loading="lazy"
                    className="w-60 h-60 rounded-full object-cover"
                  />
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-neon-purple rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-white rounded-full animate-glow-pulse"></div>
            </div>
            
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
              {stats.map((stat, index) => (
                <Card key={index} className="p-4 bg-card-bg/50 border-gray-700 text-center hover-glow">
                  <stat.icon className="w-6 h-6 text-neon-purple mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white font-orbitron">{stat.number}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:col-span-2 space-y-6 animate-slide-in-right">
            <div className="space-y-4">
              <h3 className="text-2xl font-pacifico text-neon-purple">Hello Warriors! 👋</h3>
              <p className="text-lg text-gray-300 leading-relaxed font-libre-baskerville">
                I'm a passionate Computer Science Engineering student and junior full-stack developer 
                with a love for creating digital experiences that matter. As the founder of CosmoTec, 
                I believe in the power of technology to transform ideas into reality.
              </p>

              <p className="text-lg text-gray-300 leading-relaxed font-libre-baskerville">
                My journey spans across web development, AI/ML, cybersecurity, and entrepreneurship. 
                I'm driven by curiosity, fueled by challenges, and committed to continuous learning 
                and growth in the ever-evolving tech landscape.
              </p>

              <div className="bg-gradient-to-r from-neon-purple/10 to-blue-600/10 p-6 rounded-lg border border-neon-purple/20">
                <h4 className="text-xl font-semibold text-white mb-3 font-orbitron">My Mission</h4>
                <p className="text-gray-300 font-libre-baskerville">
                  To create meaningful digital solutions that bridge the gap between creativity and functionality, 
                  while empowering others through technology and innovation.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <Card key={index} className="p-4 bg-card-bg/30 border-gray-700 hover-glow group">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 rounded-full bg-neon-purple/20">
                      <item.icon className={`w-5 h-5 ${item.color} group-hover:scale-110 transition-transform`} />
                    </div>
                    <span className="text-sm font-medium text-white">{item.text}</span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
