import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
import NewInSection from '@/components/sections/NewInSection';
import ClothingSection from '@/components/sections/ClothingSection';
import AccessoriesSection from '@/components/sections/AccessoriesSection';
import SaleSection from '@/components/sections/SaleSection';
import Newsletter from '@/components/sections/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <NewInSection />
        <ClothingSection />
        <AccessoriesSection />
        <SaleSection />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
