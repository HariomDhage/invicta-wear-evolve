import { Heart, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FeaturedProducts = () => {
  const products = [
    {
      id: 1,
      name: 'PowerFlex Pro Tank',
      category: 'Women\'s Training',
      price: 89,
      originalPrice: 120,
      rating: 4.8,
      reviews: 124,
      image: '/placeholder.svg',
      colors: ['Black', 'Navy', 'Coral'],
      badge: 'NEW',
      isWishlisted: false,
    },
    {
      id: 2,
      name: 'Performance Shorts',
      category: 'Men\'s Training',
      price: 65,
      originalPrice: null,
      rating: 4.9,
      reviews: 89,
      image: '/placeholder.svg',
      colors: ['Black', 'Gray', 'Navy'],
      badge: null,
      isWishlisted: true,
    },
    {
      id: 3,
      name: 'Seamless Leggings',
      category: 'Women\'s Yoga',
      price: 95,
      originalPrice: 130,
      rating: 4.7,
      reviews: 256,
      image: '/placeholder.svg',
      colors: ['Black', 'Sage', 'Mocha'],
      badge: 'SALE',
      isWishlisted: false,
    },
    {
      id: 4,
      name: 'Training Hoodie',
      category: 'Unisex',
      price: 125,
      originalPrice: null,
      rating: 4.8,
      reviews: 67,
      image: '/placeholder.svg',
      colors: ['Black', 'White', 'Navy'],
      badge: null,
      isWishlisted: false,
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Featured Collection
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Train Like a <span className="text-secondary">Champion</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our most-loved pieces designed to elevate your performance and style.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              {/* Product Image */}
              <div className="relative mb-4 overflow-hidden rounded-lg bg-muted aspect-[3/4]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badge */}
                {product.badge && (
                  <Badge 
                    className={`absolute top-3 left-3 ${
                      product.badge === 'SALE' 
                        ? 'bg-destructive text-destructive-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}
                  >
                    {product.badge}
                  </Badge>
                )}

                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
                >
                  <Heart 
                    className={`h-4 w-4 ${
                      product.isWishlisted ? 'fill-destructive text-destructive' : ''
                    }`} 
                  />
                </Button>

                {/* Quick Add Button */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm">
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground">{product.category}</div>
                <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="text-sm ml-1">{product.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({product.reviews} reviews)
                  </span>
                </div>

                {/* Colors */}
                <div className="flex items-center gap-2">
                  <span className="text-sm text-muted-foreground">Colors:</span>
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={index}
                        className="w-4 h-4 rounded-full border border-border"
                        style={{ 
                          backgroundColor: color.toLowerCase() === 'black' ? '#000' : 
                                          color.toLowerCase() === 'white' ? '#fff' :
                                          color.toLowerCase() === 'navy' ? '#1e3a8a' :
                                          color.toLowerCase() === 'gray' ? '#6b7280' :
                                          color.toLowerCase() === 'coral' ? '#ff7875' :
                                          color.toLowerCase() === 'sage' ? '#87a96b' :
                                          color.toLowerCase() === 'mocha' ? '#8b7355' : '#000'
                        }}
                      />
                    ))}
                    {product.colors.length > 3 && (
                      <span className="text-xs text-muted-foreground">
                        +{product.colors.length - 3}
                      </span>
                    )}
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.originalPrice && (
                    <span className="text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group">
            View All Products
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;