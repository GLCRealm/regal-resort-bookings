import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Globe, 
  Car,
  Plane,
  Mountain
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Reservations",
      primary: "+91 8755559224",
      secondary: "Available 24/7"
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      primary: "reservations@royalresort.com",
      secondary: "Response within 2 hours"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Location",
      primary: "Nature's Lap Villa",
      secondary: "Mussoorie Div, Near Hotel Taj, Malsi, Dehradun"
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Check-in / Check-out",
      primary: "3:00 PM / 12:00 PM",
      secondary: "Flexible timing available"
    }
  ];

  const transportOptions = [
    {
      icon: <Plane className="h-5 w-5" />,
      title: "Private Helicopter",
      description: "Direct transfer from major airports",
      duration: "15 minutes from city center"
    },
    {
      icon: <Car className="h-5 w-5" />,
      title: "Luxury Car Service",
      description: "Rolls-Royce and Bentley fleet",
      duration: "45 minutes scenic drive"
    },
    {
      icon: <Mountain className="h-5 w-5" />,
      title: "Private Railway",
      description: "Exclusive mountain train service",
      duration: "1 hour luxury journey"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
            Get In Touch
          </Badge>
          <h2 className="text-4xl md:text-6xl font-royal font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Contact & Location
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto font-elegant">
            Our dedicated concierge team is available around the clock to assist with reservations, special requests, and ensuring your stay exceeds all expectations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8 animate-slide-in-right">
            <div>
              <h3 className="text-2xl font-royal font-bold text-foreground mb-6">
                Contact Information
              </h3>
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <Card key={info.title} className="card-royal group hover:shadow-gold smooth-transition">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="p-2 bg-secondary/20 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground smooth-transition">
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-elegant font-semibold text-foreground mb-1">
                            {info.title}
                          </h4>
                          <p className="font-semibold text-secondary group-hover:text-foreground smooth-transition">
                            {info.primary}
                          </p>
                          <p className="text-sm text-muted-foreground">
                            {info.secondary}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Transportation Options */}
            <div>
              <h3 className="text-2xl font-royal font-bold text-foreground mb-6">
                Transportation Options
              </h3>
              <div className="space-y-4">
                {transportOptions.map((option, index) => (
                  <div
                    key={option.title}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-card/30 border border-border/30 hover:bg-card/50 hover:border-secondary/30 smooth-transition group"
                  >
                    <div className="p-2 bg-secondary/20 rounded-lg text-secondary group-hover:bg-secondary group-hover:text-secondary-foreground smooth-transition">
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-elegant font-semibold text-foreground group-hover:text-secondary smooth-transition">
                        {option.title}
                      </h4>
                      <p className="text-sm text-muted-foreground">{option.description}</p>
                      <p className="text-xs text-secondary font-medium">{option.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button 
                className="btn-gold w-full py-6 text-lg"
                onClick={() => window.location.href = 'tel:+918755559224'}
              >
                Call for Reservations
              </Button>
              <Button 
                variant="outline"
                className="w-full py-6 text-lg border-secondary/50 text-secondary hover:bg-secondary/10"
                onClick={() => window.location.href = 'mailto:reservations@royalresort.com'}
              >
                Send Email Inquiry
              </Button>
            </div>
          </div>

          {/* Location & Map */}
          <div className="animate-scale-in">
            <Card className="card-royal">
              <CardContent className="p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Globe className="h-6 w-6 text-secondary" />
                  <h3 className="text-2xl font-royal font-bold text-foreground">
                    Our Location
                  </h3>
                </div>

                {/* Map Placeholder */}
                <div className="relative h-64 bg-gradient-to-br from-muted to-muted/50 rounded-lg mb-6 overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-royal opacity-20 group-hover:opacity-30 smooth-transition"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-secondary mx-auto mb-4 animate-bounce" />
                      <p className="text-foreground font-elegant font-semibold">
                        Interactive Map Coming Soon
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Mussoorie Div, Near Hotel Taj, Malsi, Dehradun
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-elegant font-semibold text-foreground mb-2">
                      Resort Address
                    </h4>
                    <p className="text-muted-foreground font-elegant">
                      Nature's Lap Villa<br />
                      Mussoorie Div, Near Hotel Taj, Malsi<br />
                      Dehradun, Uttarakhand, India
                    </p>
                  </div>

                  <div>
                    <h4 className="font-elegant font-semibold text-foreground mb-2">
                      Nearby Attractions
                    </h4>
                    <ul className="space-y-1 text-sm text-muted-foreground font-elegant">
                      <li>• Crystal Lake National Park - 5 minutes</li>
                      <li>• Royal Mountain Summit - 15 minutes</li>
                      <li>• Historic Village Center - 20 minutes</li>
                      <li>• Championship Golf Course - 10 minutes</li>
                    </ul>
                  </div>

                  <Button 
                    variant="outline"
                    className="w-full border-secondary/50 text-secondary hover:bg-secondary/10 mt-4"
                    onClick={() => window.open('https://maps.google.com', '_blank')}
                  >
                    Get Directions
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Emergency Contact */}
            <Card className="card-royal mt-6">
              <CardContent className="p-6">
                <h4 className="font-elegant font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Phone className="h-5 w-5 text-secondary" />
                  24/7 Emergency Contact
                </h4>
                <p className="text-muted-foreground font-elegant mb-2">
                  For urgent matters during your stay:
                </p>
                <p className="text-lg font-semibold text-secondary">
                  +1 (555) 999-0000
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  Our emergency concierge team is always available to assist you.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-16 p-8 bg-gradient-elegant rounded-xl border border-border/30">
          <h3 className="text-xl font-royal font-semibold text-foreground mb-3">
            Planning Your Visit?
          </h3>
          <p className="text-muted-foreground font-elegant mb-4 max-w-2xl mx-auto">
            Our expert concierge team can assist with restaurant reservations, activity bookings, transportation arrangements, and any special requests to make your stay unforgettable.
          </p>
          <Badge className="bg-secondary/20 text-secondary border-secondary/30">
            Concierge Available 24/7
          </Badge>
        </div>
      </div>
    </section>
  );
};

export default Contact;