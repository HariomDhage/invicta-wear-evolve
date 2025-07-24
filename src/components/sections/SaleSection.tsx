import { Zap, Timer } from 'lucide-react';
import { Button } from '@/components/ui/button';
import saleBanner from '@/assets/sale-banner.jpg';

const SaleSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={saleBanner} 
          alt="Sale Banner" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-destructive/80" />
      </div>
      
      <div className="relative container mx-auto px-4">
        <div className="text-center">
          {/* Lightning Effect */}
          <div className="flex justify-center mb-6 sm:mb-8">
            <div className="relative">
              <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-white animate-pulse" />
              <div className="absolute inset-0 animate-ping">
                <Zap className="w-12 h-12 sm:w-16 sm:h-16 text-white/50" />
              </div>
            </div>
          </div>

          {/* Sale Badge */}
          <div className="inline-flex items-center bg-white text-destructive px-4 sm:px-6 py-2 sm:py-3 rounded-full font-bold text-base sm:text-lg mb-6 sm:mb-8 animate-bounce">
            <Timer className="w-5 h-5 mr-2" />
            LIMITED TIME ONLY
          </div>

          {/* Main Sale Heading */}
          <div className="mb-6 sm:mb-8">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-9xl font-black text-white mb-4 tracking-tight">
              <span className="block animate-pulse">UP TO</span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] xl:text-[12rem] text-white drop-shadow-2xl animate-bounce">
                50% OFF
              </span>
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl text-white/90 font-semibold uppercase tracking-widest">
              Flash Sale • Premium Gear
            </p>
          </div>

          {/* Urgency Elements */}
          <div className="flex justify-center items-center space-x-4 sm:space-x-6 md:space-x-8 mb-8 sm:mb-12">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white animate-pulse">24</div>
              <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">Hours</div>
            </div>
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white animate-pulse">59</div>
              <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">Minutes</div>
            </div>
            <div className="w-2 h-2 bg-white rounded-full animate-ping" />
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-white animate-pulse">59</div>
              <div className="text-xs sm:text-sm text-white/80 uppercase tracking-wide">Seconds</div>
            </div>
          </div>

          {/* Hype CTA */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              className="bg-white text-destructive hover:bg-white/90 text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full font-black uppercase tracking-wide transform transition-all duration-300 hover:scale-110 shadow-2xl animate-pulse"
            >
              Snag the Steals
            </Button>
            <p className="text-white/80 text-sm">
              * While supplies last. No code needed.
            </p>
          </div>

          {/* Energy Bars */}
          <div className="flex justify-center space-x-2 mt-12">
            {[...Array(5)].map((_, i) => (
              <div 
                key={i}
                className="w-2 h-12 bg-white/30 rounded-full animate-pulse"
                style={{ animationDelay: `${i * 200}ms` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/20 rounded-full animate-bounce opacity-60" />
      <div className="absolute top-20 right-20 w-12 h-12 bg-white/30 rounded-full animate-ping opacity-40" />
      <div className="absolute bottom-20 left-20 w-16 h-16 bg-white/25 rounded-full animate-pulse opacity-50" />
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-white/15 rounded-full animate-bounce opacity-30" 
           style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default SaleSection;