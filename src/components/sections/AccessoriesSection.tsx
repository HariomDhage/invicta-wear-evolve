import { Button } from '@/components/ui/button';

const AccessoriesSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-light text-foreground mb-4 tracking-tight">
            Your Finishing Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Minimalist accessories that elevate your performance. Every detail matters.
          </p>
        </div>

        {/* Product Grid - Flatlay Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {/* Accessory Item 1 */}
          <div className="group relative">
            <div className="aspect-square bg-white rounded-3xl shadow-card overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-premium">
              <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50" />
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center transform transition-transform duration-700 group-hover:rotate-12 group-hover:scale-110">
                  <div className="w-16 h-16 rounded-full bg-accent/40 animate-pulse" />
                </div>
              </div>
              {/* Floating Shadow */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-primary/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-medium text-foreground mb-2">Performance Gear</h3>
              <p className="text-muted-foreground text-sm">Essential accessories</p>
            </div>
          </div>

          {/* Accessory Item 2 */}
          <div className="group relative">
            <div className="aspect-square bg-white rounded-3xl shadow-card overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-premium">
              <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50" />
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="w-40 h-20 rounded-2xl bg-gradient-to-r from-primary/20 to-accent/20 flex items-center justify-center transform transition-transform duration-700 group-hover:rotate-6 group-hover:scale-110">
                  <div className="w-24 h-8 rounded-lg bg-primary/30 animate-pulse" />
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-32 h-2 bg-primary/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-medium text-foreground mb-2">Tech Accessories</h3>
              <p className="text-muted-foreground text-sm">Smart solutions</p>
            </div>
          </div>

          {/* Accessory Item 3 */}
          <div className="group relative md:col-span-2 lg:col-span-1">
            <div className="aspect-square bg-white rounded-3xl shadow-card overflow-hidden transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-premium">
              <div className="absolute inset-0 bg-gradient-to-br from-background to-muted/50" />
              <div className="relative h-full flex items-center justify-center p-8">
                <div className="w-36 h-36 rounded-full border-4 border-secondary/30 flex items-center justify-center transform transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary/40 to-accent/40 animate-pulse" />
                </div>
              </div>
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-28 h-2 bg-primary/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-medium text-foreground mb-2">Premium Add-ons</h3>
              <p className="text-muted-foreground text-sm">Luxury details</p>
            </div>
          </div>
        </div>

        {/* Parallax Effect Background */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-background to-muted p-12 mb-8">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0ic21hbGxkb3RzIiB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxjaXJjbGUgY3g9IjEwIiBjeT0iMTAiIHI9IjEiIGZpbGw9IiMwMDAiIG9wYWNpdHk9IjAuMDUiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjc21hbGxkb3RzKSIvPjwvc3ZnPg==')] animate-pulse opacity-50" />
          <div className="relative text-center">
            <h3 className="text-3xl font-light text-foreground mb-4">Complete Your Look</h3>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Small details make big differences. Discover accessories that complement your athletic lifestyle.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="transform transition-all duration-300 hover:scale-105 shadow-card hover:shadow-premium"
            >
              See What's Small But Mighty
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AccessoriesSection;