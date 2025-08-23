import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Zap, Gift, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const LoyaltyTeaser = () => {
  const benefits = [
    {
      icon: Zap,
      title: 'Earn XP Points',
      description: 'Get points for every purchase, review, and workout completed'
    },
    {
      icon: Gift,
      title: 'Exclusive Drops',
      description: 'Early access to new collections and limited colorways'
    },
    {
      icon: Star,
      title: 'VIP Treatment',
      description: 'Priority customer support and special member events'
    }
  ];

  return (
    <section className="py-16 bg-gradient-accent">
      <div className="container mx-auto px-4">
        <Card className="overflow-hidden border-0 shadow-premium rounded-2xl bg-white/95 backdrop-blur-sm">
          <CardContent className="p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              {/* Content */}
              <div className="text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start space-x-2 mb-4">
                  <Zap className="w-6 h-6 text-accent" />
                  <span className="text-accent font-semibold uppercase tracking-wider text-sm">Loyalty Program</span>
                </div>
                
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Earn XP for shopping
                  <br />
                  <span className="text-muted-foreground">& showing up</span>
                </h2>
                
                <p className="text-muted-foreground text-lg mb-6">
                  Join our community and earn exclusive rewards for every purchase, 
                  workout, and milestone you hit.
                </p>

                <div className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                        <benefit.icon className="w-4 h-4 text-accent" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-sm mb-1">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                  <Button 
                    size="lg" 
                    className="bg-accent hover:bg-accent/90 rounded-xl shadow-soft"
                    asChild
                  >
                    <Link to="/loyalty/join">Join Now</Link>
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="rounded-xl"
                    asChild
                  >
                    <Link to="/auth" className="flex items-center space-x-2">
                      <span>Login</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
              </div>

              {/* Visual */}
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden shadow-soft">
                  <img
                    src="/lovable-uploads/af2adce2-b1da-4c0d-84a5-27a50b906b2f.png"
                    alt="Loyalty Program Benefits"
                    className="w-full h-full object-cover"
                  />
                </div>
                
                {/* Floating XP Badge */}
                <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-3 rounded-xl font-bold shadow-soft">
                  <div className="text-xs">You've earned</div>
                  <div className="text-xl">1,250 XP</div>
                </div>

                {/* Floating Reward Badge */}
                <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-soft">
                  <div className="flex items-center space-x-2">
                    <Gift className="w-5 h-5 text-accent" />
                    <div>
                      <div className="text-xs text-muted-foreground">Next Reward</div>
                      <div className="text-sm font-semibold">Free Shipping</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default LoyaltyTeaser;