import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnimatedLogo = () => {
  const [phase, setPhase] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const timeouts = [
      setTimeout(() => setPhase(1), 300),
      setTimeout(() => setPhase(2), 1000),
      setTimeout(() => setPhase(3), 2000),
    ];
    return () => timeouts.forEach(clearTimeout);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Dynamic background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/5 to-transparent"></div>
      </div>

      {/* Particles */}
      <div className="absolute inset-0">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 bg-white/20 rounded-full transition-all duration-2000 ${
              phase >= 1 ? 'animate-pulse' : 'opacity-0'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 200}ms`,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Logo container */}
        <div className={`relative mb-8 transition-all duration-1500 ease-out ${
          phase >= 1 ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-8'
        }`}>
          <div className="relative inline-block group">
            {/* Glow effect */}
            <div className={`absolute inset-0 transition-all duration-2000 ${
              phase >= 2 ? 'opacity-100' : 'opacity-0'
            }`}>
              <img 
                src="/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png"
                alt=""
                className="w-80 md:w-96 h-auto blur-2xl opacity-30 scale-110"
              />
            </div>
            
            {/* Main logo */}
            <img 
              src="/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png"
              alt="INVICTAWEARS"
              className={`relative w-80 md:w-96 h-auto filter transition-all duration-700 ${
                phase >= 2 ? 'drop-shadow-2xl brightness-110' : 'drop-shadow-lg'
              } ${phase >= 3 ? 'hover:scale-105' : ''}`}
            />
            
            {/* Shine effect */}
            <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent 
                          transform -skew-x-12 transition-transform duration-1000 ${
              phase >= 2 ? 'translate-x-full' : '-translate-x-full'
            }`}></div>
          </div>
        </div>

        {/* Text content */}
        <div className={`space-y-4 transition-all duration-1000 delay-500 ${
          phase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <h1 className="text-3xl md:text-4xl font-bold text-white tracking-wider">
            LEGENDARY STREETWEAR
          </h1>
          <p className="text-xl text-gray-300 font-light tracking-wide">
            Forge Your Legacy
          </p>
        </div>

        {/* Call to action */}
        <div className={`mt-12 transition-all duration-1000 delay-1000 ${
          phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button 
            onClick={() => navigate('/story')}
            className="group relative px-8 py-3 bg-white/10 backdrop-blur-sm border border-white/20 
                           text-white font-medium tracking-wide rounded-lg
                           hover:bg-white/20 hover:border-white/40 transition-all duration-300
                           hover:scale-105 hover:shadow-xl"
          >
            <span className="relative z-10">ENTER STORE</span>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent 
                          transform -skew-x-12 -translate-x-full group-hover:translate-x-full 
                          transition-transform duration-700"></div>
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${
        phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-30 translate-y-4'
      }`}>
        <div className="flex flex-col items-center space-y-2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
          <span className="text-xs text-white/50 tracking-wider">SCROLL</span>
        </div>
      </div>
    </section>
  );
};

export default AnimatedLogo;