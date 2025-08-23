import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const CollectionSpotlight = () => {
  return (
    <section className="py-16 bg-gradient-subtle">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <span className="text-accent font-medium text-sm uppercase tracking-wider">Featured Collection</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-heading font-bold leading-tight">
              Seamless 2.0
              <br />
              <span className="text-muted-foreground">Collection</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg">
              Our most advanced activewear yet. Engineered with seamless construction, 
              moisture-wicking technology, and four-way stretch for ultimate comfort and performance.
            </p>

            <div className="space-y-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Seamless construction</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Four-way stretch</span>
                </div>
              </div>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Moisture-wicking</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full" />
                  <span>Squat-proof</span>
                </div>
              </div>
            </div>

            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 rounded-xl shadow-soft"
              asChild
            >
              <Link to="/collections/seamless-2" className="flex items-center space-x-2">
                <span>Shop Collection</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-premium">
              <img
                src="/lovable-uploads/3cd1d943-3773-42e3-87bc-b3a903fe1a63.png"
                alt="Seamless 2.0 Collection"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-xl font-semibold text-sm shadow-soft">
              New Release
            </div>
            <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-xl shadow-soft">
              <div className="text-xs text-muted-foreground">Starting at</div>
              <div className="text-xl font-bold">$68</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CollectionSpotlight;