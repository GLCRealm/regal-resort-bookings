import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Rooms from '@/components/Rooms';
import BookingForm from '@/components/BookingForm';
import Amenities from '@/components/Amenities';
import Contact from '@/components/Contact';

const Index = () => {
  return (
    <main className="min-h-screen bg-background font-elegant">
      {/* SEO Meta Tags handled in index.html */}
      <Header />
      <Hero />
      <Rooms />
      <BookingForm />
      <Amenities />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 border-t border-border/30">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-royal font-bold mb-4 bg-gradient-gold bg-clip-text text-transparent">
              Royal Resort
            </h3>
            <p className="text-primary-foreground/80 font-elegant mb-6 max-w-2xl mx-auto">
              Where luxury meets nature's grandeur. Experience unparalleled hospitality in the heart of paradise.
            </p>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-elegant">
              <div className="text-center">
                <p className="text-primary-foreground/60">Reservations</p>
                <p className="font-semibold">+1 (555) 123-4567</p>
              </div>
              <div className="text-center">
                <p className="text-primary-foreground/60">Email</p>
                <p className="font-semibold">reservations@royalresort.com</p>
              </div>
              <div className="text-center">
                <p className="text-primary-foreground/60">Location</p>
                <p className="font-semibold">Paradise Valley, Mountain Region</p>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-border/20">
              <p className="text-primary-foreground/60 text-sm font-elegant">
                © 2024 Royal Resort. All rights reserved. | A Forbes 5-Star Luxury Experience
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;