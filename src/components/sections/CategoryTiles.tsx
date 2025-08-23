import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const CategoryTiles = () => {
  const categories = [
    {
      name: 'Leggings',
      href: '/women/leggings',
      image: '/lovable-uploads/3cd1d943-3773-42e3-87bc-b3a903fe1a63.png',
      hoverImage: '/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png'
    },
    {
      name: 'Sports Bras',
      href: '/women/sports-bras',
      image: '/lovable-uploads/7d2acbe7-28f8-42bf-a08b-e6fdba6f9265.png',
      hoverImage: '/lovable-uploads/af2adce2-b1da-4c0d-84a5-27a50b906b2f.png'
    },
    {
      name: 'Shorts',
      href: '/women/shorts',
      image: '/lovable-uploads/3cd1d943-3773-42e3-87bc-b3a903fe1a63.png',
      hoverImage: '/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png'
    },
    {
      name: 'Tees',
      href: '/women/tees',
      image: '/lovable-uploads/7d2acbe7-28f8-42bf-a08b-e6fdba6f9265.png',
      hoverImage: '/lovable-uploads/af2adce2-b1da-4c0d-84a5-27a50b906b2f.png'
    },
    {
      name: 'Hoodies',
      href: '/women/hoodies',
      image: '/lovable-uploads/3cd1d943-3773-42e3-87bc-b3a903fe1a63.png',
      hoverImage: '/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png'
    },
    {
      name: 'Accessories',
      href: '/accessories',
      image: '/lovable-uploads/7d2acbe7-28f8-42bf-a08b-e6fdba6f9265.png',
      hoverImage: '/lovable-uploads/af2adce2-b1da-4c0d-84a5-27a50b906b2f.png'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Shop by Category</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Find your perfect fit across our premium activewear collection
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              to={category.href}
              className="group relative overflow-hidden rounded-xl bg-muted aspect-[4/5] block"
            >
              <div className="absolute inset-0">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
                />
                <img
                  src={category.hoverImage}
                  alt={category.name}
                  className="w-full h-full object-cover absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-lg font-semibold mb-2">{category.name}</h3>
                <div className="flex items-center text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryTiles;