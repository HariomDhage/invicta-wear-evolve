import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const NewInSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-muted to-background">
      {/* Cinematic Background with Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-invicta-dark/80 via-transparent to-accent/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIHZpZXdCb3g9IjAgMCA4MCA4MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iaGV4IiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPjxwYXRoIGQ9Ik0yMCAwbDE1IDEwdjIwbC0xNSAxMC0xNS0xMFYxMHoiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMCIgc3Ryb2tlLXdpZHRoPSIwLjUiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNoZXgpIi8+PC9zdmc+')] animate-pulse opacity-20" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-left space-y-8">
            {/* Premium Badge */}
            <div className="inline-flex items-center">
              <span className="bg-gradient-to-r from-accent to-secondary text-transparent bg-clip-text text-sm font-semibold tracking-widest uppercase px-6 py-3 border border-accent/30 rounded-full backdrop-blur-sm">
                Just Dropped
              </span>
            </div>

            {/* Main Heading */}
            <div className="space-y-4">
              <h2 className="text-6xl lg:text-8xl font-black tracking-tight">
                <span className="block text-foreground">NEW</span>
                <span className="block bg-gradient-accent bg-clip-text text-transparent animate-pulse">
                  ARRIVALS
                </span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Exclusive pieces crafted for champions. Limited editions that define the future of athletic performance.
              </p>
            </div>

            {/* CTA */}
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-500 transform hover:scale-105 shadow-premium"
            >
              Explore Fresh Fits
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
          </div>

          {/* Right Visual */}
          <div className="relative">
            <div className="aspect-square relative overflow-hidden rounded-3xl shadow-premium">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-secondary/20 animate-pulse" />
              <div className="absolute inset-4 bg-gradient-to-br from-invicta-dark to-primary rounded-2xl flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-accent animate-spin border-4 border-white/20" />
                  <p className="text-lg font-semibold">Premium Collection</p>
                </div>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-full animate-bounce opacity-80" />
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-accent rounded-full animate-pulse opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewInSection;