import { useState } from "react";
import { Sparkles, ShoppingCart, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#cosmotec" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const el = document.querySelector(href);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
      setMobileOpen(false);
    }
  };

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 w-[95vw] max-w-3xl rounded-full bg-black/70 backdrop-blur-lg shadow-xl flex items-center justify-between px-4 md:px-6 py-3 border border-neon-purple/30" role="navigation" aria-label="Main Navigation">
      {/* Branding */}
      <div className="flex items-center space-x-3">
        
        <span className="text-white font-bold text-xl tracking-wide font-pacifico">Saba</span>
      </div>
      {/* Nav Links (Desktop) */}
      <div className="flex-1 justify-center hidden md:flex">
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white font-semibold hover:text-neon-purple transition-colors duration-200"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      {/* Icons */}
      <div className="flex items-center space-x-6">
        
        {/* Hamburger (Mobile) */}
        <button className="md:hidden focus:outline-none" aria-label="Open menu" onClick={() => setMobileOpen((v) => !v)}>
          {mobileOpen ? <X className="w-7 h-7 text-white" /> : <Menu className="w-7 h-7 text-white" />}
        </button>
      </div>
      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="fixed inset-0 z-40 flex items-start justify-end md:hidden">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
          <div className="relative bg-black/90 w-3/4 max-w-xs h-full p-8 flex flex-col space-y-8 shadow-2xl border-l border-neon-purple/30 animate-slide-in-right">
            <ul className="flex flex-col space-y-6 mt-12">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white text-lg font-semibold hover:text-neon-purple transition-colors duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
}; 