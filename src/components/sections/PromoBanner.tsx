import { useState, useEffect } from 'react';
import { Truck, GraduationCap, Users, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const PromoBanner = () => {
  const [dismissed, setDismissed] = useState(false);
  const [currentPromo, setCurrentPromo] = useState(0);

  const promos = [
    { icon: Truck, text: "Free shipping over $75" },
    { icon: GraduationCap, text: "20% Student Discount" },
    { icon: Users, text: "Refer a friend for $10 off" },
    { icon: Truck, text: "Download the app for exclusive deals" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPromo((prev) => (prev + 1) % promos.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [promos.length]);

  if (dismissed) return null;

  const currentPromoData = promos[currentPromo];

  return (
    <div className="bg-primary text-primary-foreground py-2 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-2">
          <currentPromoData.icon className="w-4 h-4" />
          <span className="text-sm font-medium">{currentPromoData.text}</span>
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 text-primary-foreground hover:bg-primary-foreground/20"
        onClick={() => setDismissed(true)}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
};

export default PromoBanner;