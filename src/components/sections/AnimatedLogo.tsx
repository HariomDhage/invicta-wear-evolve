import { useEffect, useState } from 'react';

const AnimatedLogo = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-black to-slate-800 overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary/30 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-primary/20 rounded-full animate-ping"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-accent/40 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-primary/25 rounded-full animate-pulse delay-1000"></div>
        
        {/* Radial glow effect */}
        <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-transparent to-transparent animate-pulse"></div>
      </div>

      {/* Main Logo Container */}
      <div className={`relative z-10 transform transition-all duration-2000 ease-out ${
        isVisible 
          ? 'scale-100 opacity-100 translate-y-0' 
          : 'scale-75 opacity-0 translate-y-12'
      }`}>
        
        {/* Glow Behind Logo */}
        <div className="absolute inset-0 blur-3xl bg-primary/20 scale-110 animate-pulse"></div>
        
        {/* Logo Image with Multiple Animation Layers */}
        <div className="relative group">
          {/* Shadow layer */}
          <img 
            src="/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png" 
            alt="INVICTAWEARS Logo"
            className="w-96 h-auto absolute top-2 left-2 opacity-20 blur-sm group-hover:blur-none transition-all duration-1000"
          />
          
          {/* Main logo with hover effects */}
          <img 
            src="/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png" 
            alt="INVICTAWEARS Logo"
            className="w-96 h-auto relative z-10 filter drop-shadow-2xl 
                     group-hover:scale-105 group-hover:drop-shadow-3xl 
                     transition-all duration-700 ease-out
                     animate-fade-in"
          />
          
          {/* Sword gleam animation */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent 
                        w-full h-full transform -skew-x-12 translate-x-full
                        group-hover:translate-x-[-100%] transition-transform duration-1500 ease-in-out"></div>
        </div>

        {/* Text reveal animation */}
        <div className="mt-8 text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-primary/80 tracking-wider
                       animate-fade-in animation-delay-1000">
            LEGENDARY STREETWEAR
          </h1>
          <p className="text-muted-foreground mt-2 text-lg tracking-wide
                      animate-fade-in animation-delay-1500">
            Where Warriors Meet Fashion
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 
                    animate-bounce animation-delay-2000">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary/70 rounded-full mt-2 animate-pulse"></div>
        </div>
        <p className="text-xs text-muted-foreground mt-2 text-center">Scroll Down</p>
      </div>

      {/* Cinematic letterbox effect */}
      <div className="absolute top-0 left-0 w-full h-16 bg-black animate-slide-down"></div>
      <div className="absolute bottom-0 left-0 w-full h-16 bg-black animate-slide-up"></div>
    </section>
  );
};

export default AnimatedLogo;