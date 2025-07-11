import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, Palette, Zap, Users, Rocket, Star } from "lucide-react";

export const CosmoTec = () => {
  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Modern, responsive websites and web applications"
    },
    {
      icon: Palette,
      title: "Branding & Design",
      description: "Creative branding solutions and visual identity design"
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Business process automation and workflow optimization"
    },
    {
      icon: Users,
      title: "Digital Marketing",
      description: "Strategic digital marketing and social media management"
    }
  ];

  return (
    <section id="cosmotec" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Rocket className="w-8 h-8 text-neon-purple" />
            <h2 className="text-4xl md:text-5xl font-pacifico gradient-text">
              CosmoTec Services
            </h2>
            <Star className="w-8 h-8 text-neon-purple" />
          </div>
          <Badge className="bg-neon-purple/20 text-neon-purple mb-6">
            Founded & Led by Saur Basha
          </Badge>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6 animate-slide-in-left">
            <h3 className="text-3xl font-pacifico text-white">
              Transforming Ideas into Digital Reality
            </h3>
            
            <p className="text-lg text-gray-300 leading-relaxed font-libre-baskerville">
              CosmoTec Services is my vision brought to life - a technology company dedicated to 
              empowering businesses through innovative digital solutions. We specialize 
              in creating stunning web experiences, powerful automation tools, and 
              compelling brand identities.
            </p>

            <a
              href="https://cosmotec.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button
                className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-3 text-lg font-semibold rounded-full shadow-lg hover-glow transition-all duration-200"
              >
                Visit CosmoTec Website
              </button>
            </a>

            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-neon-purple rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white">Our Vision</h4>
                  <p className="text-gray-300 text-sm font-libre-baskerville">To be the bridge between imagination and innovation</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-neon-purple rounded-full mt-2"></div>
                <div>
                  <h4 className="font-semibold text-white">Our Mission</h4>
                  <p className="text-gray-300 text-sm font-libre-baskerville">Delivering cutting-edge solutions that drive growth and success</p>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 mx-auto rounded-full bg-gradient-to-br from-neon-purple to-blue-600 p-1 animate-glow-pulse">
                <div className="w-full h-full rounded-full bg-dark-bg flex items-center justify-center">
                  <div className="text-center">
                    <img src="/lovable-uploads/Picsart_25-05-27_09-10-35-982.jpg" alt="CosmoTec Logo" loading="lazy" className="w-65 h-65 object-contain mx-auto rounded-full bg-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Business Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 animate-fade-in">
          <Card className="p-6 bg-card-bg border-gray-700 text-center">
            <h4 className="text-3xl font-bold text-neon-purple mb-2">50+</h4>
            <p className="text-gray-300 text-sm font-semibold">Satisfied Clients</p>
          </Card>
          <Card className="p-6 bg-card-bg border-gray-700 text-center">
            <h4 className="text-3xl font-bold text-neon-purple mb-2">67+</h4>
            <p className="text-gray-300 text-sm font-semibold">Projects Completed</p>
          </Card>
          <Card className="p-6 bg-card-bg border-gray-700 text-center">
            <h4 className="text-3xl font-bold text-neon-purple mb-2">98%</h4>
            <p className="text-gray-300 text-sm font-semibold">Client Retention</p>
          </Card>
          <Card className="p-6 bg-card-bg border-gray-700 text-center">
            <h4 className="text-3xl font-bold text-neon-purple mb-2">NAN</h4>
            <p className="text-gray-300 text-sm font-semibold">Industry Awards</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="p-6 bg-card-bg border-gray-700 hover-glow text-center animate-fade-in">
              <service.icon className="w-12 h-12 text-neon-purple mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-gray-300 text-sm">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
