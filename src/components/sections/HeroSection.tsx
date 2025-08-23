import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-streetwear.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="INVICTAWEARS Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
            PREMIUM ACTIVEWEAR
            <br />
            <span className="text-3xl md:text-4xl lg:text-5xl">FROM $24</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-lg">
            Bestselling, premium quality essentials that look and feel amazing.
          </p>
          
          <Button 
            size="lg" 
            className="bg-white text-black hover:bg-white/90 px-8 py-3 text-lg font-semibold"
            asChild
          >
            <Link to="/women">SHOP NOW</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;