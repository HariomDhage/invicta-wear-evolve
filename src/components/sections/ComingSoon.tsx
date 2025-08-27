import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';
import { Mail, Instagram, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import comingSoonHero from '@/assets/coming-soon-hero.jpg';
import leggingsProduct from '@/assets/leggings-product.jpg';
import sportsBraProduct from '@/assets/sports-bra-product.jpg';
import tankTopProduct from '@/assets/tank-top-product.jpg';
import gymShortsProduct from '@/assets/gym-shorts-product.jpg';

const ComingSoon = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSignup = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    toast({
      title: "Thanks for signing up!",
      description: "We'll notify you when Invictawears launches.",
    });
    setEmail('');
  };

  const products = [
    { image: leggingsProduct, name: 'Athletic Leggings' },
    { image: sportsBraProduct, name: 'Sports Bra' },
    { image: tankTopProduct, name: 'Tank Top' },
    { image: gymShortsProduct, name: 'Gym Shorts' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={comingSoonHero} 
            alt="Invictawears - Premium Activewear Coming Soon" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-50" />
        </div>

        <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center py-8 sm:py-12">
          <div className="max-w-5xl mx-auto">
            <div className="mb-6 sm:mb-8 md:mb-12">
              <img 
                src="/lovable-uploads/7cbd0dc3-4608-46ca-b3cf-00fdc17317e6.png" 
                alt="Invictawears Logo"
                className="h-32 xs:h-40 sm:h-48 md:h-64 lg:h-80 xl:h-96 2xl:h-[28rem] mx-auto max-w-full drop-shadow-lg"
              />
            </div>
            
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-foreground mb-4 sm:mb-6 drop-shadow-lg leading-tight">
              Coming Soon
            </h1>
            
            <p className="text-base xs:text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-foreground/90 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto drop-shadow-md font-medium leading-relaxed px-2">
              Premium activewear for the unstoppable. Gear that moves with you.
            </p>

            {/* Newsletter Signup */}
            <form onSubmit={handleNewsletterSignup} className="max-w-sm sm:max-w-md mx-auto mb-6 sm:mb-8 px-2">
              <div className="flex flex-col xs:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-foreground/10 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 backdrop-blur-sm text-sm sm:text-base h-12 sm:h-10"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-4 sm:px-6 font-semibold h-12 sm:h-10 text-sm sm:text-base whitespace-nowrap"
                >
                  Notify Me
                </Button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
              <a 
                href="https://www.instagram.com/invictawears?igsh=MWphYTZvZTFlbXgyMw%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 border border-primary-foreground/20 h-10 w-10 sm:h-12 sm:w-12">
                  <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
                </Button>
              </a>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 border border-primary-foreground/20 h-10 w-10 sm:h-12 sm:w-12">
                <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-primary-foreground hover:bg-primary-foreground/20 border border-primary-foreground/20 h-10 w-10 sm:h-12 sm:w-12">
                <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
              Get Ready for Premium Activewear
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2">
              Discover our upcoming collection of high-performance athletic wear designed for champions.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-card mb-3 sm:mb-4 group-hover:shadow-premium transition-all duration-300">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - Coming Soon`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-center leading-tight px-1">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 sm:mb-6">
            Be the First to Know
          </h2>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed px-2">
            Join thousands of athletes waiting for the launch. Get exclusive early access and special launch pricing.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center max-w-sm sm:max-w-md mx-auto px-2">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/60 h-12 sm:h-10 text-sm sm:text-base"
            />
            <Button 
              variant="secondary"
              className="px-6 sm:px-8 h-12 sm:h-10 text-sm sm:text-base font-semibold whitespace-nowrap"
            >
              Get Early Access
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComingSoon;