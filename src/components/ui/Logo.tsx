import { Sparkles } from "lucide-react";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  useImage?: boolean;
}

export const Logo = ({ className = "", size = "md", useImage = true }: LogoProps) => {
  const sizeClasses = {
    sm: "w-6 h-6 text-sm",
    md: "w-8 h-8 text-lg", 
    lg: "w-12 h-12 text-xl"
  };

  const iconSizes = {
    sm: "w-3 h-3",
    md: "w-4 h-4",
    lg: "w-7 h-7"
  };

  const imageSizes = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-14 h-14"
  };

  if (useImage) {
    return (
      <div className={`flex items-center space-x-3 bg-card-bg/90 backdrop-blur-md rounded-xl px-4 py-3 border border-neon-purple/40 hover-glow transition-all duration-300 shadow-lg ${className}`}>
        <div className={`relative ${imageSizes[size]}`}>
          <img 
            src="/images/logo.png" 
            alt="SABA Logo" 
            loading="lazy"
            className={`w-full h-full object-contain ${imageSizes[size]}`}
            onError={(e) => {
              // Fallback to icon if image fails to load
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          {/* Fallback icon */}
          <div className={`bg-gradient-to-br from-neon-purple to-blue-600 rounded-full flex items-center justify-center ${imageSizes[size]} hidden`}>
            <Sparkles className={`text-white ${iconSizes[size]}`} />
          </div>
        </div>
        <span className={`text-white font-pacifico font-semibold ${sizeClasses[size]}`}>SABA</span>
      </div>
    );
  }

  // Fallback to icon-only version
  return (
    <div className={`flex items-center space-x-2 bg-card-bg/80 backdrop-blur-sm rounded-full px-4 py-2 border border-neon-purple/30 hover-glow transition-all duration-300 ${className}`}>
      <div className={`bg-gradient-to-br from-neon-purple to-blue-600 rounded-full flex items-center justify-center ${sizeClasses[size]}`}>
        <Sparkles className={`text-white ${iconSizes[size]}`} />
      </div>
      <span className={`text-white font-pacifico ${sizeClasses[size]}`}>SABA</span>
    </div>
  );
}; 