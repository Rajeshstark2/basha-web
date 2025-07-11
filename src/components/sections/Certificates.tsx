import { Card } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useEffect, useState } from "react";

export const Certificates = () => {
  const [api, setApi] = useState<any>();

  const certificates = [
    {
      title: "Innovation Ambassador (IA) Advanced Level",
      year: "2025",
      image: "./lovable-uploads/WhatsApp Image 2025-07-02 at 09.32.05_db36c434.jpg"
    },
    {
      title: "EC-Council",
      year: "2024-2025",
      image: "./lovable-uploads/4d042214-0ca1-4fe7-8941-fdecfea86cc4.png"
    },
    {
      title: "EC-Council",
      year: "2024-2025",
      image: "./lovable-uploads/110afd01-9b37-48b8-a6ae-22ef84cd856e.png"
    },
    {
      title: "GuviCertification",
      year: "2024-2025",
      image: "./lovable-uploads/GuviCertification - 01M49NT7986Q319l1p.png"
    },
    {
      title: "GuviCertification",
      year: "2024-2025",
      image: "./lovable-uploads/GuviCertification - 11Pf35031bWyz67V07 (1).png"
    },
    {
      title: "EC-Council",
      year: "2024-2025",
      image: "./lovable-uploads/image file name here (1).png"
    },
    {
      title: "Cybrary",
      year: "2024-2025",
      image: "./lovable-uploads/IMG_20231201_080348.jpg"
    },
    {
      title: "TCS iON",
      year: "2024-2025",
      image: "./lovable-uploads/IMG_20240619_081752.jpg"
    },
    {
      title: "LinkedIn Learning",
      year: "2024-2025",
      image: "./lovable-uploads/Picsart_24-10-20_13-05-06-982.jpg"
    },
    {
      title: "LinkedIn Learning",
      year: "2024-2025",
      image: "./lovable-uploads/Picsart_24-10-28_20-23-08-780.jpg"
    },
    {
      title: "LinkedIn Learning",
      year: "2024-2025",
      image: "./lovable-uploads/Picsart_24-10-28_20-23-36-814.jpg"
    },
    {
      title: "LinkedIn Learning",
      year: "2024-2025",
      image: "./lovable-uploads/Picsart_24-11-02_22-28-59-554.jpg"
    },
    {
      title: "LinkedIn Learning",
      year: "2024-2025",
      image: "./lovable-uploads/Picsart_24-11-06_18-57-41-728.jpg"
    },
    {
      title: "Guru Tech",
      year: "2024-2025",
      image: "./lovable-uploads/Picsart_24-11-17_09-38-38-662.jpg"
    },
    {
      title: "Certificate",
      year: "2024-2025",
      image: "./lovable-uploads/Picsart_24-11-25_20-03-57-330.jpg"
    },
    {
      title: "Innovation Ambassador (IA)",
      year: "2025",
      image: "./lovable-uploads/Picsart_25-06-21_08-31-58-465.jpg"
    }
  ];

  // Auto-scroll functionality
  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 3500); // Auto-scroll every 3.5 seconds

    return () => clearInterval(interval);
  }, [api]);

  return (
    <section id="certificates" className="py-20 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-pacifico text-center mb-8 gradient-text">
          Certifications
        </h2>
        <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto font-libre-baskerville">
          Professional certifications and achievements that showcase my commitment to continuous learning
        </p>
        <Carousel 
          className="w-full max-w-5xl mx-auto"
          setApi={setApi}
          opts={{
            align: "start",
            loop: true,
            duration: 25,
          }}
        >
          <CarouselContent className="-ml-4">
            {certificates.map((cert, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="h-full bg-card-bg border-gray-700 overflow-hidden hover-glow group animate-fade-in transition-all duration-500 ease-in-out">
                  <div className="relative overflow-hidden aspect-w-4 aspect-h-3">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                    {/* Year removed, nothing displayed here */}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 font-orbitron">
                      {cert.title}
                    </h3>
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
