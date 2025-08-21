import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PromoBanner from '@/components/sections/PromoBanner';
import HeroSection from '@/components/sections/HeroSection';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import ClothingSection from '@/components/sections/ClothingSection';
import AccessoriesSection from '@/components/sections/AccessoriesSection';
import Newsletter from '@/components/sections/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <main>
        <HeroSection />
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
