import { Truck, GraduationCap, Users } from 'lucide-react';

const PromoBanner = () => {
  const promos = [
    { icon: Truck, text: "Free shipping over $75 🚚" },
    { icon: GraduationCap, text: "20% Student Discount 🎓" },
    { icon: Users, text: "Refer a friend for $10 off 👥" }
  ];

  return (
    <div className="bg-muted text-foreground py-2 overflow-hidden">
      <div className="animate-marquee whitespace-nowrap flex items-center space-x-8">
        {[...Array(3)].map((_, setIndex) => 
          promos.map((promo, index) => (
            <div key={`${setIndex}-${index}`} className="flex items-center space-x-2 mx-8">
              <promo.icon className="w-4 h-4" />
              <span className="text-sm font-medium">{promo.text}</span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default PromoBanner;