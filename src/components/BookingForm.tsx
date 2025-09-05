import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Calendar, Users, Crown, Mail, Phone, User } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const BookingForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    roomType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const roomTypes = [
    { id: 'deluxe', name: 'Deluxe Room', price: '$650/night' },
    { id: 'royal', name: 'Royal Suite', price: '$1,200/night' },
    { id: 'presidential', name: 'Presidential Suite', price: '$2,500/night' }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.checkIn || !formData.checkOut || !formData.roomType || 
        !formData.firstName || !formData.lastName || !formData.email) {
      toast({
        title: "Please fill in all required fields",
        description: "Complete the form to proceed with your reservation.",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Reservation Request Submitted!",
      description: "Our concierge team will contact you within 2 hours to confirm your booking.",
    });

    // Reset form
    setFormData({
      checkIn: '',
      checkOut: '',
      guests: '2',
      roomType: '',
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      specialRequests: ''
    });
  };

  const calculateNights = () => {
    if (formData.checkIn && formData.checkOut) {
      const checkIn = new Date(formData.checkIn);
      const checkOut = new Date(formData.checkOut);
      const diffTime = Math.abs(checkOut.getTime() - checkIn.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      return diffDays > 0 ? diffDays : 0;
    }
    return 0;
  };

  const getSelectedRoomPrice = () => {
    const room = roomTypes.find(r => r.id === formData.roomType);
    return room ? parseInt(room.price.replace(/[^0-9]/g, '')) : 0;
  };

  const totalCost = calculateNights() * getSelectedRoomPrice();

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 animate-fade-in-up">
          <Badge className="mb-4 bg-secondary/20 text-secondary border-secondary/30">
            Luxury Reservations
          </Badge>
          <h2 className="text-4xl md:text-6xl font-royal font-bold mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Reserve Your Escape
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-elegant">
            Begin your journey to unparalleled luxury. Our concierge team will ensure every detail is perfect.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-royal animate-scale-in">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl font-royal text-foreground flex items-center justify-center gap-3">
                <Crown className="h-6 w-6 text-secondary" />
                Booking Details
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Stay Details */}
                <div className="space-y-6">
                  <h3 className="text-lg font-royal font-semibold text-foreground border-b border-border/30 pb-2">
                    Stay Details
                  </h3>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="checkIn" className="flex items-center gap-2 font-elegant">
                        <Calendar className="h-4 w-4 text-secondary" />
                        Check-in Date *
                      </Label>
                      <Input
                        id="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleInputChange('checkIn', e.target.value)}
                        className="border-border/50 focus:border-secondary smooth-transition"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="checkOut" className="flex items-center gap-2 font-elegant">
                        <Calendar className="h-4 w-4 text-secondary" />
                        Check-out Date *
                      </Label>
                      <Input
                        id="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleInputChange('checkOut', e.target.value)}
                        className="border-border/50 focus:border-secondary smooth-transition"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="guests" className="flex items-center gap-2 font-elegant">
                        <Users className="h-4 w-4 text-secondary" />
                        Guests
                      </Label>
                      <Select value={formData.guests} onValueChange={(value) => handleInputChange('guests', value)}>
                        <SelectTrigger className="border-border/50 focus:border-secondary">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1 Guest</SelectItem>
                          <SelectItem value="2">2 Guests</SelectItem>
                          <SelectItem value="3">3 Guests</SelectItem>
                          <SelectItem value="4">4 Guests</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="roomType" className="flex items-center gap-2 font-elegant">
                      <Crown className="h-4 w-4 text-secondary" />
                      Room Type *
                    </Label>
                    <Select value={formData.roomType} onValueChange={(value) => handleInputChange('roomType', value)} required>
                      <SelectTrigger className="border-border/50 focus:border-secondary">
                        <SelectValue placeholder="Select your accommodation" />
                      </SelectTrigger>
                      <SelectContent>
                        {roomTypes.map((room) => (
                          <SelectItem key={room.id} value={room.id}>
                            <div className="flex justify-between items-center w-full">
                              <span>{room.name}</span>
                              <span className="text-secondary font-semibold ml-4">{room.price}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Guest Information */}
                <div className="space-y-6">
                  <h3 className="text-lg font-royal font-semibold text-foreground border-b border-border/30 pb-2">
                    Guest Information
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="flex items-center gap-2 font-elegant">
                        <User className="h-4 w-4 text-secondary" />
                        First Name *
                      </Label>
                      <Input
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className="border-border/50 focus:border-secondary smooth-transition"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="flex items-center gap-2 font-elegant">
                        <User className="h-4 w-4 text-secondary" />
                        Last Name *
                      </Label>
                      <Input
                        id="lastName"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className="border-border/50 focus:border-secondary smooth-transition"
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email" className="flex items-center gap-2 font-elegant">
                        <Mail className="h-4 w-4 text-secondary" />
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="border-border/50 focus:border-secondary smooth-transition"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone" className="flex items-center gap-2 font-elegant">
                        <Phone className="h-4 w-4 text-secondary" />
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="border-border/50 focus:border-secondary smooth-transition"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="specialRequests" className="font-elegant">
                      Special Requests
                    </Label>
                    <Textarea
                      id="specialRequests"
                      value={formData.specialRequests}
                      onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                      placeholder="Any special arrangements, dietary requirements, or preferences..."
                      className="border-border/50 focus:border-secondary smooth-transition resize-none"
                      rows={4}
                    />
                  </div>
                </div>

                {/* Booking Summary */}
                {formData.roomType && calculateNights() > 0 && (
                  <div className="p-6 bg-gradient-elegant rounded-lg border border-border/30">
                    <h3 className="text-lg font-royal font-semibold text-foreground mb-4">
                      Booking Summary
                    </h3>
                    <div className="space-y-2 text-sm font-elegant">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Room Type:</span>
                        <span className="text-foreground">
                          {roomTypes.find(r => r.id === formData.roomType)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Duration:</span>
                        <span className="text-foreground">{calculateNights()} nights</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Guests:</span>
                        <span className="text-foreground">{formData.guests} guests</span>
                      </div>
                      <div className="border-t border-border/30 pt-2 mt-4">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-semibold text-foreground">Total Cost:</span>
                          <span className="text-2xl font-bold text-secondary">
                            ${totalCost.toLocaleString()}
                          </span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          *Final pricing will be confirmed by our concierge team
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="btn-gold w-full py-6 text-lg font-semibold"
                >
                  Submit Reservation Request
                </Button>

                <p className="text-center text-sm text-muted-foreground font-elegant">
                  Our luxury concierge team will contact you within 2 hours to confirm your reservation and discuss any special arrangements.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;