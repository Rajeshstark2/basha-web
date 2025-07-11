import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";
import { Heart, Sparkles } from "lucide-react";

export const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    budget: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 🚀",
        description: "Thanks for reaching out! I'll get back to you within 24 hours.",
      });
      setFormData({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="booking" className="py-20 px-4 relative z-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Heart className="w-8 h-8 text-neon-purple" />
            <h2 className="text-4xl md:text-5xl font-pacifico gradient-text">
              Let's Build Something Amazing Together!
            </h2>
            <Sparkles className="w-8 h-8 text-neon-purple" />
          </div>
          <p className="text-lg text-gray-300 font-libre-baskerville">
            Have a project in mind? I'd love to hear about it and help bring your vision to life.
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <a
            href="https://cosmotec.netlify.app/#booking"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <Button
              className="bg-neon-purple hover:bg-neon-purple/80 text-white px-8 py-4 text-lg font-semibold rounded-full hover-glow"
            >
              Book Now
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};
