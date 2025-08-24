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
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={comingSoonHero} 
            alt="Invictawears - Premium Activewear Coming Soon" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-hero opacity-70" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/974e41d2-aaad-4427-8d00-16c07ab9321d.png" 
                alt="Invictawears Logo"
                className="h-48 md:h-80 lg:h-96 xl:h-[32rem] 2xl:h-[40rem] mx-auto max-w-full"
              />
            </div>
            
            <p className="text-2xl md:text-3xl text-white/90 mb-4 font-medium">
              Coming Soon
            </p>
            
            <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-2xl mx-auto">
              Premium activewear for the unstoppable. Gear that moves with you.
            </p>

            {/* Newsletter Signup */}
            <form onSubmit={handleNewsletterSignup} className="max-w-md mx-auto mb-8">
              <div className="flex gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-white/10 border-white/30 text-white placeholder:text-white/60 backdrop-blur-sm"
                  required
                />
                <Button 
                  type="submit"
                  className="bg-accent hover:bg-accent/90 text-accent-foreground px-6"
                >
                  Notify Me
                </Button>
              </div>
            </form>

            {/* Social Links */}
            <div className="flex justify-center gap-6">
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Instagram className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Twitter className="w-6 h-6" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Mail className="w-6 h-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-bold mb-6">
              Get Ready for Premium Activewear
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover our upcoming collection of high-performance athletic wear designed for champions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {products.map((product, index) => (
              <div key={index} className="group">
                <div className="aspect-square bg-white rounded-xl overflow-hidden shadow-card mb-4 group-hover:shadow-premium transition-all duration-300">
                  <img 
                    src={product.image} 
                    alt={`${product.name} - Coming Soon`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-lg font-semibold text-center">{product.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Be the First to Know
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of athletes waiting for the launch. Get exclusive early access and special launch pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/30 text-white placeholder:text-white/60"
            />
            <Button 
              variant="secondary"
              className="px-8"
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