import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Waves, 
  Utensils, 
  Car, 
  Wifi, 
  Dumbbell, 
  Plane,
  Coffee,
  Shield,
  Clock,
  Sparkles,
  TreePine,
  Wine
} from 'lucide-react';

const Amenities = () => {
  const amenityCategories = [
    {
      title: "Wellness & Recreation",
      icon: <Waves className="h-8 w-8" />,
      amenities: [
        { name: "Infinity Pool Complex", description: "Multiple pools with mountain views" },
        { name: "Royal Spa & Wellness", description: "Full-service luxury spa treatments" },
        { name: "State-of-the-Art Fitness", description: "24/7 premium fitness facilities" },
        { name: "Tennis & Sports Courts", description: "Professional-grade recreational facilities" }
      ]
    },
    {
      title: "Dining & Entertainment",
      icon: <Utensils className="h-8 w-8" />,
      amenities: [
        { name: "Michelin-Star Restaurant", description: "Award-winning fine dining experience" },
        { name: "Royal Lounge & Bar", description: "Premium cocktails and wine selection" },
        { name: "Private Dining Rooms", description: "Intimate dining for special occasions" },
        { name: "24/7 In-Room Service", description: "Gourmet meals delivered to your suite" }
      ]
    },
    {
      title: "Luxury Services",
      icon: <Sparkles className="h-8 w-8" />,
      amenities: [
        { name: "Personal Concierge", description: "Dedicated assistant for all needs" },
        { name: "Butler Service", description: "Premium suites include personal butler" },
        { name: "Valet Parking", description: "Complimentary luxury vehicle service" },
        { name: "Private Transportation", description: "Helicopter and luxury car transfers" }
      ]
    },
    {
      title: "Business & Connectivity", 
      icon: <Wifi className="h-8 w-8" />,
      amenities: [
        { name: "High-Speed WiFi", description: "Complimentary throughout the resort" },
        { name: "Business Center", description: "Fully equipped meeting facilities" },
        { name: "Private Meeting Rooms", description: "Executive conference spaces" },
        { name: "Tech Support", description: "24/7 technical assistance available" }
      ]
    }
  ];

  const premiumFeatures = [
    { icon: <Shield className="h-6 w-6" />, title: "Private Security", description: "24/7 discreet protection" },
    { icon: <Clock className="h-6 w-6" />, title: "24/7 Service", description: "Round-the-clock luxury assistance" },
    { icon: <TreePine className="h-6 w-6" />, title: "Nature Excursions", description: "Guided mountain adventures" },
    { icon: <Wine className="h-6 w-6" />, title: "Wine Cellar", description: "Exclusive vintage collection" },
    { icon: <Plane className="h-6 w-6" />, title: "Helicopter Pad", description: "Private arrival experience" },
    { icon: <Coffee className="h-6 w-6" />, title: "Coffee Sommelier", description: "Artisanal coffee experience" }
  ];

  return (
    <section id="amenities" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
            World-Class Facilities
          </Badge>
          <h2 className="text-4xl md:text-6xl font-royal font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Resort Amenities
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-elegant">
            Immerse yourself in unparalleled luxury with our comprehensive collection of world-class amenities and services, designed to exceed every expectation.
          </p>
        </div>

        {/* Main Amenity Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {amenityCategories.map((category, index) => (
            <Card 
              key={category.title}
              className={`card-royal group hover:shadow-gold smooth-transition animate-scale-in`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="p-3 bg-gradient-gold rounded-lg text-secondary-foreground group-hover:scale-110 smooth-transition">
                    {category.icon}
                  </div>
                  <h3 className="text-2xl font-royal font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.amenities.map((amenity, amenityIndex) => (
                    <div 
                      key={amenity.name}
                      className="flex items-start space-x-4 group/item"
                    >
                      <div className="w-2 h-2 bg-secondary rounded-full mt-2 group-hover/item:scale-150 smooth-transition"></div>
                      <div className="flex-1">
                        <h4 className="font-elegant font-semibold text-foreground group-hover/item:text-secondary smooth-transition">
                          {amenity.name}
                        </h4>
                        <p className="text-sm text-muted-foreground mt-1">
                          {amenity.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium Features Grid */}
        <div className="mb-16">
          <h3 className="text-3xl font-royal font-bold text-center mb-12 text-foreground">
            Exclusive Resort Features
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {premiumFeatures.map((feature, index) => (
              <div
                key={feature.title}
                className={`group p-6 rounded-xl bg-card/30 backdrop-blur-sm border border-border/30 hover:bg-card/50 hover:border-secondary/30 smooth-transition animate-fade-in-up`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-secondary/20 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground smooth-transition">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-elegant font-semibold text-foreground group-hover:text-secondary smooth-transition">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Highlight Banner */}
        <div className="text-center p-8 bg-gradient-royal rounded-2xl shadow-royal animate-shimmer overflow-hidden relative">
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-royal font-bold text-primary-foreground mb-4">
              Experience Unmatched Luxury
            </h3>
            <p className="text-lg text-primary-foreground/90 font-elegant max-w-2xl mx-auto">
              Every amenity, every service, every detail has been carefully curated to provide you with an extraordinary resort experience that defines luxury hospitality.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Amenities;