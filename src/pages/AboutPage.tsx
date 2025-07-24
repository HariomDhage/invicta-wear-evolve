import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-secondary">INVICTAWEARS</span>
          </h1>
          
          <div className="prose prose-lg max-w-none space-y-8">
            <p className="text-xl text-muted-foreground text-center mb-12">
              Premium activewear designed for the unstoppable. From Singapore to the world, 
              we create gear that moves with your ambition.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                <p className="text-muted-foreground">
                  To empower athletes and fitness enthusiasts with premium activewear that 
                  combines performance, style, and sustainability. We believe that the right 
                  gear can unlock your potential and help you achieve greatness.
                </p>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-muted-foreground">
                  Founded in Singapore, INVICTAWEARS was born from a passion for excellence 
                  and a vision to create activewear that matches the intensity of modern athletes. 
                  Every piece is designed with precision and tested by champions.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">Join the Movement</h2>
              <p className="text-muted-foreground mb-8">
                Become part of a community that refuses to settle for ordinary.
              </p>
              <Button size="lg" asChild>
                <a href="/products">Shop Collection</a>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;