import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Heart, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

const NewArrivals = () => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [currentSlide, setCurrentSlide] = useState(0);

  const newProducts = [
    {
      id: '1',
      name: 'Seamless Leggings 2.0',
      price: 68,
      image: '/lovable-uploads/3cd1d943-3773-42e3-87bc-b3a903fe1a63.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'Navy', 'Forest']
    },
    {
      id: '2',
      name: 'CloudSoft Sports Bra',
      price: 48,
      image: '/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Black', 'Blush', 'White']
    },
    {
      id: '3',
      name: 'Performance Tank',
      price: 38,
      image: '/lovable-uploads/7d2acbe7-28f8-42bf-a08b-e6fdba6f9265.png',
      sizes: ['XS', 'S', 'M', 'L', 'XL'],
      colors: ['Black', 'White', 'Grey']
    },
    {
      id: '4',
      name: 'Training Shorts',
      price: 45,
      image: '/lovable-uploads/af2adce2-b1da-4c0d-84a5-27a50b906b2f.png',
      sizes: ['XS', 'S', 'M', 'L'],
      colors: ['Black', 'Navy', 'Olive']
    },
    // ... more products
  ];

  const handleQuickAdd = async (productId: string, size: string) => {
    await addToCart(productId);
    toast({
      title: 'Added to cart!',
      description: `Size ${size} added to your cart.`,
    });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">New Arrivals</h2>
            <p className="text-muted-foreground">Fresh drops, just landed</p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center rounded-xl" asChild>
            <Link to="/new">
              View All
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {newProducts.map((product) => (
            <Card key={product.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-premium transition-all duration-300 rounded-xl">
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
                  NEW
                </Badge>

                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm hover:bg-white"
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add with Size Selection */}
                <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-white/95 backdrop-blur-sm rounded-lg p-3 space-y-2">
                    <div className="flex gap-1 justify-center">
                      {product.sizes.slice(0, 4).map((size) => (
                        <Button
                          key={size}
                          size="sm"
                          variant="outline"
                          className="text-xs h-7 w-7 p-0 rounded-md"
                          onClick={() => handleQuickAdd(product.id, size)}
                        >
                          {size}
                        </Button>
                      ))}
                    </div>
                    <Button 
                      size="sm" 
                      className="w-full bg-accent hover:bg-accent/90 text-xs rounded-md"
                      onClick={() => handleQuickAdd(product.id, 'M')}
                    >
                      <ShoppingBag className="h-3 w-3 mr-1" />
                      Quick Add
                    </Button>
                  </div>
                </div>
              </div>

              <CardContent className="p-4">
                <h3 className="font-semibold text-sm mb-1 line-clamp-2">{product.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="font-bold">${product.price}</span>
                  <div className="flex gap-1">
                    {product.colors.slice(0, 3).map((color, index) => (
                      <div
                        key={color}
                        className={`w-3 h-3 rounded-full border ${
                          color === 'Black' ? 'bg-black' :
                          color === 'White' ? 'bg-white border-border' :
                          color === 'Navy' ? 'bg-blue-900' :
                          color === 'Grey' ? 'bg-gray-400' :
                          'bg-pink-300'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full rounded-xl" asChild>
            <Link to="/new">View All New Arrivals</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;