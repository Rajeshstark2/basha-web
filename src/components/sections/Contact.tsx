import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";
import { useState } from "react";
import { toast } from "@/hooks/use-toast";

export const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "saurbasha1@gmail.com",
      href: "mailto:saurbasha1@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9865521544",
      href: "tel:+919865521544"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Tamilnadu, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/saur-basha",
      label: "LinkedIn"
    },
    {
      icon: Github,
      href: "https://github.com/Saurbasha-web",
      label: "GitHub"
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/pro_h4k",
      label: "Instagram"
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! ✨",
        description: "Thanks for getting in touch! I'll respond as soon as possible.",
      });
      setContactForm({
        name: "",
        email: "",
        message: ""
      });
      setIsSubmitting(false);
    }, 2000);
  };

  const handleInputChange = (field: string, value: string) => {
    setContactForm(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <section id="contact" className="py-20 px-4 relative z-10 bg-card-bg/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-pacifico text-center mb-16 gradient-text">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-left">
            <div>
              <h3 className="text-2xl font-pacifico text-white mb-6">
                Let's Connect
              </h3>
              <p className="text-lg text-gray-300 leading-relaxed mb-8 font-libre-baskerville">
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center space-x-4 p-4 bg-card-bg rounded-lg border border-gray-700 hover-glow group"
                >
                  <info.icon className="w-6 h-6 text-neon-purple group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-gray-400">{info.label}</p>
                    <p className="text-white font-medium">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-card-bg rounded-full border border-gray-700 hover-glow group"
                  >
                    <social.icon className="w-6 h-6 text-neon-purple group-hover:scale-110 transition-transform" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <Card className="bg-card-bg border-gray-700 glow-border">
              <div className="p-8">
                <h3 className="text-2xl font-orbitron font-semibold text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Your Name *
                    </label>
                    <Input
                      type="text"
                      placeholder="Enter your name"
                      value={contactForm.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="bg-dark-bg border-gray-600 text-white placeholder-gray-400 focus:border-neon-purple"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Email Address *
                    </label>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      value={contactForm.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="bg-dark-bg border-gray-600 text-white placeholder-gray-400 focus:border-neon-purple"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      Message *
                    </label>
                    <Textarea
                      placeholder="Tell me about your thoughts, ideas, or questions..."
                      value={contactForm.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="bg-dark-bg border-gray-600 text-white placeholder-gray-400 focus:border-neon-purple min-h-[120px]"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-neon-purple hover:bg-neon-purple/80 text-white py-3 font-semibold rounded-full hover-glow"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center space-x-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </div>
                    ) : (
                      "Send Message"
                    )}
                  </Button>
                </form>
              </div>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400 mb-2">
            Made with <span className="text-red-500">❤️</span> by Saur Basha
          </p>
          <p className="text-sm text-gray-500">
            © 2025 CosmoTec Services. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};
