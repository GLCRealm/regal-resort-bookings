import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Phone, Mail } from 'lucide-react';
import royalLogo from '@/assets/royal-logo.jpg';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Rooms & Suites', href: '#rooms' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Dining', href: '#dining' },
    { name: 'Spa & Wellness', href: '#spa' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 smooth-transition hover:scale-105">
            <img 
              src={royalLogo} 
              alt="Nature's Lap Villa Logo" 
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-cover rounded-lg shadow-gold"
            />
            <div>
              <h1 className="text-lg sm:text-xl md:text-2xl font-royal font-bold bg-gradient-gold bg-clip-text text-transparent">
                Nature's Lap Villa
              </h1>
              <p className="text-xs text-muted-foreground tracking-widest hidden sm:block">LUXURY & ELEGANCE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-sm xl:text-base text-foreground hover:text-secondary smooth-transition font-elegant tracking-wide"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & Book Button */}
          <div className="hidden xl:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+91 8755559224</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>reservations@royalresort.com</span>
              </div>
            </div>
            <Button 
              onClick={() => scrollToSection('#booking')}
              className="btn-gold hover:scale-105 smooth-transition"
            >
              Book Now
            </Button>
          </div>

          {/* Tablet Book Button */}
          <div className="hidden lg:flex xl:hidden">
            <Button 
              onClick={() => scrollToSection('#booking')}
              className="btn-gold hover:scale-105 smooth-transition text-sm px-4 py-2"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-muted/20 smooth-transition hover:bg-muted/40"
          >
            {isMenuOpen ? <X className="h-5 w-5 sm:h-6 sm:w-6" /> : <Menu className="h-5 w-5 sm:h-6 sm:w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 sm:py-6 border-t border-border/30 animate-fade-in-up">
            <nav className="flex flex-col space-y-3 sm:space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-sm sm:text-base text-foreground hover:text-secondary smooth-transition font-elegant py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-3 sm:pt-4 space-y-2 sm:space-y-3">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+91 8755559224</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>reservations@royalresort.com</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('#booking')}
                  className="btn-gold w-full mt-3 sm:mt-4 text-sm sm:text-base py-3"
                >
                  Book Your Stay
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;