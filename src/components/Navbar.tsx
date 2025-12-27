import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Free Apps", href: "#apps" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const tickerItems = [
  "আমি মিজানুর রহমান – AI Automation Builder, Digital Marketer এবং টেকনোলজি লার্নার",
  "আমি WhatsApp & Messenger Automation, AI Tools এবং Workflow Automation নিয়ে কাজ করি",
  "আমি মানুষের জন্য দরকারি সফটওয়্যার, অ্যাপ এবং অটোমেশন সলিউশন শেয়ার করি",
];

const NavTicker = () => {
  return (
    <div className="hidden lg:flex items-center mx-4 xl:mx-8">
      <div className="relative flex items-center h-9 w-[350px] xl:w-[400px] rounded-full bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 border border-primary/30 overflow-hidden">
        {/* LIVE Badge */}
        <div className="absolute left-0 z-10 h-full bg-gradient-to-r from-primary to-accent px-3 flex items-center gap-1.5 rounded-l-full">
          <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
          <span className="font-bengali font-semibold text-foreground text-xs whitespace-nowrap">
            LIVE
          </span>
        </div>

        {/* Scrolling Text */}
        <div className="flex ticker-scroll ml-[70px]">
          {[...tickerItems, ...tickerItems].map((item, index) => (
            <span
              key={index}
              className="font-bengali text-foreground/90 text-xs whitespace-nowrap mx-6"
            >
              {item}
              <span className="mx-4 text-accent">•</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-border/30">
      <div className="section-container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 shrink-0">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center">
              <span className="text-foreground font-bold text-lg">MR</span>
            </div>
            <span className="font-heading font-bold text-lg hidden sm:block gradient-text">
              MIZANUR
            </span>
          </a>

          {/* News Ticker - Desktop only */}
          <NavTicker />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-4 lg:gap-6 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden glass-card border-t border-border/30">
          <div className="section-container py-4 space-y-4">
            {/* Mobile Ticker */}
            <div className="relative flex items-center h-9 w-full rounded-full bg-gradient-to-r from-primary/20 via-accent/15 to-primary/20 border border-primary/30 overflow-hidden mb-4">
              <div className="absolute left-0 z-10 h-full bg-gradient-to-r from-primary to-accent px-3 flex items-center gap-1.5 rounded-l-full">
                <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(239,68,68,0.6)]" />
                <span className="font-bengali font-semibold text-foreground text-xs whitespace-nowrap">
                  LIVE
                </span>
              </div>
              <div className="flex ticker-scroll ml-[70px]">
                {[...tickerItems, ...tickerItems].map((item, index) => (
                  <span
                    key={index}
                    className="font-bengali text-foreground/90 text-xs whitespace-nowrap mx-6"
                  >
                    {item}
                    <span className="mx-4 text-accent">•</span>
                  </span>
                ))}
              </div>
            </div>
            
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block text-muted-foreground hover:text-foreground transition-colors duration-300 text-sm font-medium py-2"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
