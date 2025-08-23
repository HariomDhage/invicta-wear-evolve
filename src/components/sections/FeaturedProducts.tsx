import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import hoodieImage from '@/assets/hoodie-product.jpg';
import joggersImage from '@/assets/joggers-product.jpg';
import sneakersImage from '@/assets/sneakers-product.jpg';
import capImage from '@/assets/cap-product.jpg';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'Premium Hoodie',
      price: 89,
      image: hoodieImage,
      category: 'Womens'
    },
    {
      id: 2,
      name: 'Athletic Joggers',
      price: 69,
      image: joggersImage,
      category: 'Womens'
    },
    {
      id: 3,
      name: 'Performance Sneakers',
      price: 129,
      image: sneakersImage,
      category: 'Unisex'
    },
    {
      id: 4,
      name: 'Classic Cap',
      price: 24,
      image: capImage,
      category: 'Unisex'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Womens</p>
            <h2 className="text-2xl md:text-3xl font-bold">PREMIUM ESSENTIALS.</h2>
          </div>
          <Button variant="ghost" className="hidden md:flex items-center text-sm" asChild>
            <Link to="/women">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-square overflow-hidden rounded-lg bg-muted mb-3">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm font-medium line-clamp-2">{product.name}</h3>
                <p className="text-sm text-muted-foreground">{product.category}</p>
                <p className="text-sm font-semibold">${product.price}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="mt-8 md:hidden text-center">
          <Button variant="outline" className="w-full" asChild>
            <Link to="/women">View All</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;