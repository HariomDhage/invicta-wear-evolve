import { ArrowRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-streetwear.jpg';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="INVICTAWEARS Hero" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm mb-8">
            <span className="w-2 h-2 bg-secondary rounded-full mr-2" />
            New Collection Available Now
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 leading-tight">
            <span className="block">UNLEASH</span>
            <span className="block bg-gradient-accent bg-clip-text text-transparent">
              YOUR POWER
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Premium activewear designed for athletes who refuse to settle. 
            Built in Singapore, worn worldwide.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" variant="secondary" className="group">
              Shop Collection
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Story
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-lg mx-auto px-4">
            {[
              { number: '50K+', label: 'Athletes' },
              { number: '25+', label: 'Countries' },
              { number: '4.9★', label: 'Rating' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
               <div className="text-xl sm:text-2xl md:text-3xl font-bold text-secondary mb-1">
                 {stat.number}
               </div>
                <div className="text-sm text-white/80 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60">
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm uppercase tracking-wider">Scroll</span>
          <div className="w-px h-8 bg-white/30 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;