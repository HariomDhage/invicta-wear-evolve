import { Button } from '@/components/ui/button';

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
            <div className="absolute inset-0 bg-gradient-to-br from-secondary/90 to-accent/90 hover:from-secondary hover:to-accent transition-all duration-500" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZG90cyIgd2lkdGg9IjYwIiBoZWlnaHQ9IjYwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIiBmaWxsPSIjZmZmIiBvcGFjaXR5PSIwLjMiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZG90cykiLz48L3N2Zz4=')] opacity-30" />
            
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

            {/* Motion Effect */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="w-32 h-32 rounded-full border-2 border-white/30 animate-ping" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/50 animate-pulse" />
            </div>
          </div>

          {/* Men's Section */}
          <div className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer transform transition-all duration-500 hover:scale-105">
            <div className="absolute inset-0 bg-gradient-to-br from-invicta-dark/90 to-primary/90 hover:from-invicta-dark hover:to-primary transition-all duration-500" />
            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ibGluZXMiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PGxpbmUgeDE9IjAiIHkxPSIyMCIgeDI9IjQwIiB5Mj0iMjAiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMiIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNsaW5lcykiLz48L3N2Zz4=')] opacity-40" />
            
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

            {/* Motion Effect */}
            <div className="absolute top-1/2 right-8">
              <div className="w-24 h-24 border-l-2 border-white/40 animate-spin" />
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2 w-12 h-px bg-white/60 animate-pulse" />
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