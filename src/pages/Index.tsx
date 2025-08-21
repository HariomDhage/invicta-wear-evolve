import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import ClothingSection from '@/components/sections/ClothingSection';
import AccessoriesSection from '@/components/sections/AccessoriesSection';
import Newsletter from '@/components/sections/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Simple hero banner */}
        <section className="bg-primary text-primary-foreground py-16 text-center">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              INVICTAWEARS
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Premium Fashion and Streetwear
            </p>
          </div>
        </section>
        
        <FeaturedProducts />
        <ClothingSection />
        <AccessoriesSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
