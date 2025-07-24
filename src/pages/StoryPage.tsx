import { useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { ArrowRight, Crown, Shield, Sword } from 'lucide-react';

const StoryPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-black overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-primary/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80 text-sm tracking-wider">
              <Crown className="w-4 h-4" />
              EST. 2024
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
              THE <span className="text-primary">INVICTA</span> LEGACY
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              Born from the streets, forged by legends. Every piece tells a story of triumph, 
              resilience, and the unbreakable spirit that defines true champions.
            </p>
            
            <Button 
              onClick={() => navigate('/products')}
              className="mt-8 px-8 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide group"
            >
              EXPLORE COLLECTION
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${30 + (i * 10)}%`,
                animationDelay: `${i * 500}ms`,
              }}
            />
          ))}
        </div>
      </section>

      {/* Story Sections */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4">
          {/* Origins */}
          <div className="max-w-6xl mx-auto mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 text-primary font-semibold tracking-wider">
                  <Sword className="w-5 h-5" />
                  THE ORIGINS
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  FORGED IN THE FIRES OF AMBITION
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  INVICTAWEARS was born from a simple belief: that clothing should be armor for the modern warrior. 
                  In a world where conformity reigns, we craft pieces for those who dare to stand apart, 
                  who wear their confidence like a crown and their style like a shield.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Every thread is woven with purpose, every design carries the weight of rebellion against the ordinary. 
                  We don't just make clothes – we forge identities for the invincible.
                </p>
              </div>
              <div className="relative">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl border border-primary/20 flex items-center justify-center">
                  <Crown className="w-32 h-32 text-primary opacity-50" />
                </div>
              </div>
            </div>
          </div>

          {/* Philosophy */}
          <div className="max-w-6xl mx-auto mb-32">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="relative md:order-2">
                <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 rounded-3xl border border-primary/20 flex items-center justify-center">
                  <Shield className="w-32 h-32 text-primary opacity-50" />
                </div>
              </div>
              <div className="space-y-6 md:order-1">
                <div className="inline-flex items-center gap-2 text-primary font-semibold tracking-wider">
                  <Shield className="w-5 h-5" />
                  OUR PHILOSOPHY
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
                  INVINCIBLE BY DESIGN
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We believe that true style is not about following trends – it's about setting them. 
                  Each piece in our collection is meticulously crafted to embody strength, confidence, and 
                  an unwavering commitment to excellence.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  From the premium materials we select to the precision of our cuts, everything is designed 
                  to make you feel invincible. Because when you wear INVICTA, you're not just wearing clothing – 
                  you're wearing a statement of power.
                </p>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-16">
              THE INVICTA CODE
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4 p-8 bg-card border border-border rounded-2xl">
                <Crown className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">LEGENDARY QUALITY</h3>
                <p className="text-muted-foreground">
                  Every piece is crafted with obsessive attention to detail, using only the finest materials that stand the test of time.
                </p>
              </div>
              <div className="space-y-4 p-8 bg-card border border-border rounded-2xl">
                <Sword className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">FEARLESS INNOVATION</h3>
                <p className="text-muted-foreground">
                  We push boundaries, challenge conventions, and create designs that define tomorrow's streetwear landscape.
                </p>
              </div>
              <div className="space-y-4 p-8 bg-card border border-border rounded-2xl">
                <Shield className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-xl font-bold text-foreground">UNBREAKABLE SPIRIT</h3>
                <p className="text-muted-foreground">
                  Our community is built on resilience, ambition, and the shared belief that we are truly invincible.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-gradient-to-br from-primary/5 via-background to-primary/5">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              JOIN THE LEGION
            </h2>
            <p className="text-xl text-muted-foreground">
              Step into your power. Embrace your invincibility. 
              The battlefield of style awaits your arrival.
            </p>
            <Button 
              onClick={() => navigate('/products')}
              size="lg"
              className="px-12 py-6 text-lg bg-primary hover:bg-primary/90 text-primary-foreground font-semibold tracking-wide group"
            >
              SHOP NOW
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StoryPage;