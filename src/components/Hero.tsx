import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import heroResort from '@/assets/hero-resort.jpg';
import spaPool from '@/assets/spa-pool.jpg';
import diningRoom from '@/assets/dining-room.jpg';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroResort,
      title: "Experience Royal Luxury",
      subtitle: "Where Elegance Meets Paradise",
      description: "Immerse yourself in unparalleled luxury at our exclusive mountain resort, where every moment is crafted to perfection."
    },
    {
      image: spaPool,
      title: "Infinite Serenity",
      subtitle: "Spa & Wellness Sanctuary", 
      description: "Rejuvenate your senses in our world-class spa facilities with breathtaking mountain vistas."
    },
    {
      image: diningRoom,
      title: "Culinary Excellence",
      subtitle: "Michelin-Star Dining Experience",
      description: "Savor extraordinary cuisine crafted by renowned chefs in our elegant dining establishments."
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-background/40" />
        </div>
      ))}

      {/* Content Overlay */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className="animate-fade-in-up">
          {/* Awards Badge */}
          <div className="inline-flex items-center space-x-2 bg-card/20 backdrop-blur-sm border border-border/30 rounded-full px-6 py-2 mb-6">
            <Star className="h-4 w-4 text-secondary fill-current" />
            <span className="text-sm font-elegant text-foreground">Forbes 5-Star Luxury Resort</span>
            <Star className="h-4 w-4 text-secondary fill-current" />
          </div>

          <h1 className="hero-text mb-4 animate-scale-in">
            {slides[currentSlide].title}
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-royal text-secondary mb-6 animate-slide-in-right">
            {slides[currentSlide].subtitle}
          </h2>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto font-elegant leading-relaxed animate-fade-in-up">
            {slides[currentSlide].description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <Button 
              onClick={scrollToBooking}
              className="btn-gold px-8 py-4 text-lg"
            >
              Reserve Your Escape
            </Button>
            <Button 
              variant="outline"
              className="border-secondary/50 text-secondary hover:bg-secondary/10 px-8 py-4 text-lg smooth-transition"
            >
              Explore Suites
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border/30 text-foreground hover:text-secondary smooth-transition hover:scale-110"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 p-3 rounded-full bg-card/20 backdrop-blur-sm border border-border/30 text-foreground hover:text-secondary smooth-transition hover:scale-110"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full smooth-transition ${
              index === currentSlide 
                ? 'bg-secondary shadow-gold' 
                : 'bg-foreground/30 hover:bg-foreground/50'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-secondary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-secondary/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;