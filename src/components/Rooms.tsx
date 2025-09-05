import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, Car, Utensils, Waves, Crown, Users, Bed, Bath, Mountain } from 'lucide-react';
import presidentialSuite from '@/assets/presidential-suite.jpg';
import royalSuite from '@/assets/royal-suite.jpg';
import deluxeRoom from '@/assets/deluxe-room.jpg';

const Rooms = () => {
  const [selectedRoom, setSelectedRoom] = useState(0);

  const rooms = [
    {
      id: 'presidential',
      name: 'Presidential Suite',
      price: '$2,500',
      priceNote: 'per night',
      image: presidentialSuite,
      size: '2,500 sq ft',
      guests: '4 guests',
      beds: 'King Bed + Sofa Bed',
      baths: '2 Marble Bathrooms',
      description: 'The pinnacle of luxury living with panoramic mountain views, private terrace, and dedicated butler service.',
      amenities: [
        'Private Infinity Pool',
        'Butler Service 24/7',
        'Mountain View Terrace',
        'Marble Bathrooms',
        'Wine Cellar Access',
        'Personal Chef Available'
      ],
      features: ['Premium Location', 'Exclusive Access', 'Royal Treatment']
    },
    {
      id: 'royal',
      name: 'Royal Suite',
      price: '$1,200',
      priceNote: 'per night',
      image: royalSuite,
      size: '1,200 sq ft',
      guests: '3 guests',
      beds: 'King Bed',
      baths: '1.5 Bathrooms',
      description: 'Elegantly appointed suite with royal furnishings, spacious living area, and breathtaking vistas.',
      amenities: [
        'Private Balcony',
        'Concierge Service',
        'Premium Amenities',
        'Mountain Views',
        'Royal Furnishings',
        'Complimentary Breakfast'
      ],
      features: ['Mountain Views', 'Royal Décor', 'Premium Service']
    },
    {
      id: 'deluxe',
      name: 'Deluxe Room',
      price: '$650',
      priceNote: 'per night',
      image: deluxeRoom,
      size: '600 sq ft',
      guests: '2 guests',
      beds: 'Queen Bed',
      baths: '1 Bathroom',
      description: 'Sophisticated accommodations with premium comfort, modern amenities, and stunning nature views.',
      amenities: [
        'Ocean/Garden Views',
        'Premium Bedding',
        'Modern Amenities',
        'Spacious Layout',
        'Elegant Design',
        'Daily Housekeeping'
      ],
      features: ['Modern Luxury', 'Garden Views', 'Comfortable']
    }
  ];

  const scrollToBooking = () => {
    const element = document.querySelector('#booking');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="rooms" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
            Luxury Accommodations
          </Badge>
          <h2 className="text-4xl md:text-6xl font-royal font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Rooms & Suites
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-elegant">
            Choose from our collection of exquisitely designed accommodations, each offering unparalleled comfort and breathtaking views.
          </p>
        </div>

        {/* Room Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-right">
          {rooms.map((room, index) => (
            <button
              key={room.id}
              onClick={() => setSelectedRoom(index)}
              className={`px-6 py-3 rounded-lg font-elegant font-medium smooth-transition ${
                selectedRoom === index
                  ? 'bg-gradient-gold text-secondary-foreground shadow-gold'
                  : 'bg-card/50 text-foreground hover:bg-card border border-border/30'
              }`}
            >
              {room.name}
            </button>
          ))}
        </div>

        {/* Selected Room Display */}
        <div className="grid lg:grid-cols-2 gap-12 items-center animate-scale-in">
          {/* Room Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-royal rounded-2xl transform rotate-3 group-hover:rotate-6 smooth-transition"></div>
            <img
              src={rooms[selectedRoom].image}
              alt={rooms[selectedRoom].name}
              className="relative w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-royal group-hover:scale-105 smooth-transition"
            />
            <div className="absolute top-4 right-4 bg-secondary text-secondary-foreground px-3 py-1 rounded-full font-semibold">
              {rooms[selectedRoom].price}
              <span className="text-xs ml-1">{rooms[selectedRoom].priceNote}</span>
            </div>
          </div>

          {/* Room Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <Crown className="h-8 w-8 text-secondary" />
                <h3 className="text-3xl md:text-4xl font-royal font-bold text-foreground">
                  {rooms[selectedRoom].name}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {rooms[selectedRoom].features.map((feature, index) => (
                  <Badge key={index} variant="outline" className="border-secondary/50 text-secondary">
                    {feature}
                  </Badge>
                ))}
              </div>

              <p className="text-lg text-muted-foreground font-elegant leading-relaxed">
                {rooms[selectedRoom].description}
              </p>
            </div>

            {/* Room Specs */}
            <div className="grid grid-cols-2 gap-4 p-6 card-royal rounded-lg">
              <div className="flex items-center space-x-3">
                <Mountain className="h-5 w-5 text-secondary" />
                <span className="text-sm font-elegant">{rooms[selectedRoom].size}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-5 w-5 text-secondary" />
                <span className="text-sm font-elegant">{rooms[selectedRoom].guests}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Bed className="h-5 w-5 text-secondary" />
                <span className="text-sm font-elegant">{rooms[selectedRoom].beds}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Bath className="h-5 w-5 text-secondary" />
                <span className="text-sm font-elegant">{rooms[selectedRoom].baths}</span>
              </div>
            </div>

            {/* Amenities */}
            <div>
              <h4 className="text-xl font-royal font-semibold mb-4 text-foreground">Room Amenities</h4>
              <div className="grid grid-cols-2 gap-3">
                {rooms[selectedRoom].amenities.map((amenity, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-sm font-elegant text-muted-foreground">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button 
                onClick={scrollToBooking}
                className="btn-gold flex-1"
              >
                Book This Room
              </Button>
              <Button 
                variant="outline"
                className="border-secondary/50 text-secondary hover:bg-secondary/10 flex-1"
              >
                Virtual Tour
              </Button>
            </div>
          </div>
        </div>

        {/* Common Amenities Icons */}
        <div className="mt-16 pt-12 border-t border-border/30">
          <h4 className="text-center text-lg font-royal font-semibold mb-8 text-foreground">
            All Rooms Include
          </h4>
          <div className="flex justify-center items-center space-x-12 text-muted-foreground">
            <div className="text-center group">
              <Wifi className="h-8 w-8 mx-auto mb-2 group-hover:text-secondary smooth-transition" />
              <span className="text-sm font-elegant">Free WiFi</span>
            </div>
            <div className="text-center group">
              <Car className="h-8 w-8 mx-auto mb-2 group-hover:text-secondary smooth-transition" />
              <span className="text-sm font-elegant">Valet Parking</span>
            </div>
            <div className="text-center group">
              <Utensils className="h-8 w-8 mx-auto mb-2 group-hover:text-secondary smooth-transition" />
              <span className="text-sm font-elegant">Room Service</span>
            </div>
            <div className="text-center group">
              <Waves className="h-8 w-8 mx-auto mb-2 group-hover:text-secondary smooth-transition" />
              <span className="text-sm font-elegant">Spa Access</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rooms;