import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Star, Heart, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Bestsellers = () => {
  const bestsellers = [
    {
      id: '1',
      name: 'Essential Leggings',
      price: 58,
      rating: 4.8,
      reviews: 2847,
      soldThisWeek: 156,
      image: '/lovable-uploads/3cd1d943-3773-42e3-87bc-b3a903fe1a63.png',
      badge: 'Bestseller'
    },
    {
      id: '2',
      name: 'Everyday Sports Bra',
      price: 42,
      rating: 4.9,
      reviews: 1923,
      soldThisWeek: 89,
      image: '/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png',
      badge: 'Bestseller'
    },
    {
      id: '3',
      name: 'Comfort Hoodie',
      price: 78,
      rating: 4.7,
      reviews: 1456,
      soldThisWeek: 67,
      image: '/lovable-uploads/7d2acbe7-28f8-42bf-a08b-e6fdba6f9265.png',
      badge: 'Top Rated'
    },
    {
      id: '4',
      name: 'Training Shorts',
      price: 38,
      rating: 4.6,
      reviews: 892,
      soldThisWeek: 134,
      image: '/lovable-uploads/af2adce2-b1da-4c0d-84a5-27a50b906b2f.png',
      badge: 'Trending'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Bestsellers</h2>
            <p className="text-muted-foreground">Loved by thousands, trusted by athletes</p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center rounded-xl" asChild>
            <Link to="/bestsellers">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {bestsellers.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-premium transition-all duration-300 rounded-xl">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <Badge 
                  className={`absolute top-3 left-3 ${
                    product.badge === 'Bestseller' ? 'bg-success text-success-foreground' :
                    product.badge === 'Top Rated' ? 'bg-warning text-warning-foreground' :
                    'bg-info text-info-foreground'
                  }`}
                >
                  {product.badge}
                </Badge>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Sold This Week Badge */}
                <div className="absolute bottom-3 left-3 bg-accent/90 text-accent-foreground px-2 py-1 rounded-md text-xs font-medium flex items-center space-x-1">
                  <TrendingUp className="w-3 h-3" />
                  <span>{product.soldThisWeek} sold this week</span>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-2 line-clamp-2">{product.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-2">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="text-sm font-medium ml-1">{product.rating}</span>
                  </div>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="font-bold">${product.price}</span>
                  <Button size="sm" className="bg-accent hover:bg-accent/90 rounded-lg text-xs">
                    Add to Cart
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full rounded-xl" asChild>
            <Link to="/bestsellers">View All Bestsellers</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;