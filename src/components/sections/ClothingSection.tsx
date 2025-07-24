import { Button } from '@/components/ui/button';
import capImage from '@/assets/cap-product.jpg';
import sneakersImage from '@/assets/sneakers-product.jpg';

const ClothingSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl lg:text-7xl font-serif mb-4">
            <span className="block text-foreground">CLOTHING</span>
          </h2>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground font-semibold">
            MOVEMENT • ENERGY • EMPOWERMENT
          </p>
        </div>

        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Women's Section */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer transform transition-all duration-500 hover:scale-105">
            <img 
              src={capImage} 
              alt="Women's Collection" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/70 to-accent/70 hover:from-secondary/50 hover:to-accent/50 transition-all duration-500" />
            
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                <div className="mb-4">
                  <span className="inline-block w-16 h-1 bg-white mb-4 transform transition-all duration-500 group-hover:w-24" />
                </div>
                <h3 className="text-4xl font-bold mb-2">WOMEN'S</h3>
                <p className="text-lg opacity-90 mb-4">Engineered for female athletes who break barriers</p>
                <div className="flex items-center text-sm font-semibold">
                  <span>SHOP NOW</span>
                  <div className="ml-2 w-6 h-px bg-white transform transition-all duration-300 group-hover:w-8" />
                </div>
              </div>
            </div>
          </div>

          {/* Men's Section */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer transform transition-all duration-500 hover:scale-105">
            <img 
              src={sneakersImage} 
              alt="Men's Collection" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-invicta-dark/70 to-primary/70 hover:from-invicta-dark/50 hover:to-primary/50 transition-all duration-500" />
            
            <div className="relative h-full flex flex-col justify-end p-8 text-white">
              <div className="transform transition-transform duration-500 group-hover:translate-y-0 translate-y-4">
                <div className="mb-4">
                  <span className="inline-block w-16 h-1 bg-white mb-4 transform transition-all duration-500 group-hover:w-24" />
                </div>
                <h3 className="text-4xl font-bold mb-2">MEN'S</h3>
                <p className="text-lg opacity-90 mb-4">Built for strength, designed for victory</p>
                <div className="flex items-center text-sm font-semibold">
                  <span>SHOP NOW</span>
                  <div className="ml-2 w-6 h-px bg-white transform transition-all duration-300 group-hover:w-8" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Central CTA */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline" 
            className="border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-105"
          >
            Shop All Apparel
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ClothingSection;