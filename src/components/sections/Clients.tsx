import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export const Clients = () => {
  const clients = [
    {
      name: "Prabanjam E-Commerce",
      project: "Full E-Commerce Platform",
      testimonial: "Outstanding work on our e-commerce platform. The team delivered beyond expectations with excellent attention to detail.",
      services: ["Web Development", "UI/UX Design", "Payment Integration"],
      rating: 5,
      image: "/lovable-uploads/png-transparent-business-woman-testimonial-parent-child-marketing-avatar-celebrity-purple.png"
    },
    {
      name: "Sri Lakshmi Construction",
      project: "Corporate Website",
      testimonial: "Professional website that perfectly represents our construction business. Great communication throughout the project.",
      services: ["Web Development", "Branding", "SEO"],
      rating: 5,
      image: "/lovable-uploads/png-transparent-business-digital-marketing-testimonial-business-avatar-child-face-hand.png"
    },
    {
      name: "Hiify Graphix",
      project: "Design Platform",
      testimonial: "Innovative design platform that streamlined our creative workflow. Exceptional technical expertise and creativity.",
      services: ["Web Development", "API Integration", "Design Tools"],
      rating: 5,
      image: "/lovable-uploads/male.png"
    }
  ];

  return (
    <section id="clients" className="py-20 px-4 relative z-10 bg-card-bg/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-pacifico text-center mb-16 gradient-text">
          CosmoTec Services Clients
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <Card key={index} className="bg-card-bg border-gray-700 overflow-hidden hover-glow animate-fade-in">
              <div className="relative flex justify-center mt-6">
                <img 
                  src={client.image} 
                  alt={client.name + ' client avatar'}
                  loading="lazy"
                  className="w-16 h-16 rounded-full object-cover border-2 border-neon-purple shadow-md mr-4"
                />
                <div className="absolute top-2 right-2 bg-black/70 rounded-full p-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(client.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-1">
                  {client.name}
                </h3>
                <p className="text-neon-purple font-medium mb-4">
                  {client.project}
                </p>

                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-neon-purple/50 absolute -top-2 -left-2" />
                  <p className="text-gray-300 text-sm italic pl-4 font-libre-baskerville">
                    {client.testimonial}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {client.services.map((service, serviceIndex) => (
                    <Badge key={serviceIndex} className="bg-neon-purple/20 text-neon-purple text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-gray-300 mb-4 font-libre-baskerville">
            Ready to join our list of satisfied clients?
          </p>
          <button 
            onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-neon-purple hover:text-white font-semibold underline decoration-neon-purple hover:decoration-white transition-colors"
          >
            Let's start your project →
          </button>
        </div>
      </div>
    </section>
  );
};
