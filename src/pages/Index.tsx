import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import PromoBanner from '@/components/sections/PromoBanner';
import HeroSection from '@/components/sections/HeroSection';
import CategoryTiles from '@/components/sections/CategoryTiles';
import NewArrivals from '@/components/sections/NewArrivals';
import Bestsellers from '@/components/sections/Bestsellers';
import CollectionSpotlight from '@/components/sections/CollectionSpotlight';
import CommunitySection from '@/components/sections/CommunitySection';
import TrainingHub from '@/components/sections/TrainingHub';
import LoyaltyTeaser from '@/components/sections/LoyaltyTeaser';
import Newsletter from '@/components/sections/Newsletter';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PromoBanner />
      <Header />
      <main>
        <HeroSection />
        <CategoryTiles />
        <NewArrivals />
        <Bestsellers />
        <CollectionSpotlight />
        <CommunitySection />
        <TrainingHub />
        <LoyaltyTeaser />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
