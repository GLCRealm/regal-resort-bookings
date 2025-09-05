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
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3 smooth-transition hover:scale-105">
            <img 
              src={royalLogo} 
              alt="Royal Resort Logo" 
              className="h-12 w-12 object-cover rounded-lg shadow-gold"
            />
            <div>
              <h1 className="text-2xl font-royal font-bold bg-gradient-gold bg-clip-text text-transparent">
                Royal Resort
              </h1>
              <p className="text-xs text-muted-foreground tracking-widest">LUXURY & ELEGANCE</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-foreground hover:text-secondary smooth-transition font-elegant tracking-wide"
              >
                {item.name}
              </button>
            ))}
          </nav>

          {/* Contact Info & Book Button */}
          <div className="hidden lg:flex items-center space-x-6">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-muted/20 smooth-transition hover:bg-muted/40"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-6 border-t border-border/30 animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left text-foreground hover:text-secondary smooth-transition font-elegant py-2"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 space-y-3">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-4 w-4" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-4 w-4" />
                  <span>reservations@royalresort.com</span>
                </div>
                <Button 
                  onClick={() => scrollToSection('#booking')}
                  className="btn-gold w-full mt-4"
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