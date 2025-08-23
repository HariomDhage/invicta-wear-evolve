import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import heroImage from '@/assets/hero-streetwear.jpg';

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image/Video */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Invictwears - Premium Activewear Collection" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight tracking-tight">
            Gear that moves
            <br />
            <span className="text-transparent bg-gradient-accent bg-clip-text">with you</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
            From early reps to late-night runs, Invictwears keeps up.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold rounded-xl shadow-premium"
              asChild
            >
              <Link to="/women">Shop Women</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-4 text-lg font-semibold rounded-xl backdrop-blur-sm"
              asChild
            >
              <Link to="/men">Shop Men</Link>
            </Button>
          </div>

          {/* Secondary CTA */}
          <div className="mt-8">
            <Button 
              variant="ghost" 
              className="text-white hover:bg-white/20 rounded-xl"
              asChild
            >
              <Link to="/new" className="flex items-center space-x-2">
                <Play className="w-4 h-4" />
                <span>See What's New</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;