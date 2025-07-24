import { Heart, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import { useWishlist } from '@/hooks/useWishlist';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

const FeaturedProducts = () => {
  const { products, loading } = useProducts({ gender: '', category: '' });
  const { addToCart } = useCart();
  const { addToWishlist, isInWishlist } = useWishlist();
  const { user } = useAuth();
  const { toast } = useToast();

  const handleAddToCart = async (productId: string) => {
    await addToCart(productId);
    toast({
      title: 'Added to cart!',
      description: 'Item has been added to your shopping cart.',
    });
  };

  const handleAddToWishlist = async (productId: string) => {
    if (!user) {
      toast({
        title: 'Sign in required',
        description: 'Please sign in to add items to your wishlist.',
      });
      return;
    }
    
    await addToWishlist(productId);
    toast({
      title: 'Added to wishlist!',
      description: 'Item has been saved to your wishlist.',
    });
  };

  const featuredProducts = products.filter(p => p.is_featured).slice(0, 4);

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
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-muted rounded-lg mb-4" />
                <div className="h-4 bg-muted rounded mb-2" />
                <div className="h-4 bg-muted rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="group cursor-pointer">
                {/* Product Image */}
                <div className="relative mb-4 overflow-hidden rounded-lg bg-muted aspect-[3/4]">
                  <img
                    src={product.product_images?.[0]?.image_url || '/placeholder.svg'}
                    alt={product.product_images?.[0]?.alt_text || product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Badge */}
                  {product.tags?.includes('new') && (
                    <Badge className="absolute top-3 left-3 bg-secondary text-secondary-foreground">
                      NEW
                    </Badge>
                  )}
                  {product.tags?.includes('sale') && (
                    <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                      SALE
                    </Badge>
                  )}

                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
                  onClick={() => handleAddToWishlist(product.id)}
                >
                  <Heart className={`h-4 w-4 ${isInWishlist(product.id) ? 'fill-red-500 text-red-500' : ''}`} />
                </Button>

                {/* Quick Add Button */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm"
                    onClick={() => handleAddToCart(product.id)}
                  >
                    Quick Add
                  </Button>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-2">
                <div className="text-sm text-muted-foreground capitalize">
                  {product.categories?.name} • {product.gender}
                </div>
                <h3 className="font-semibold text-lg group-hover:text-secondary transition-colors">
                  <a href={`/products/${product.slug}`}>{product.name}</a>
                </h3>

                {/* Rating */}
                <div className="flex items-center gap-2">
                  <div className="flex items-center">
                    <Star className="h-4 w-4 fill-secondary text-secondary" />
                    <span className="text-sm ml-1">4.8</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    (124 reviews)
                  </span>
                </div>

                {/* Colors */}
                {product.product_variants && product.product_variants.length > 0 && (
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">Colors:</span>
                    <div className="flex gap-1">
                      {product.product_variants.slice(0, 3).map((variant, index) => (
                        <div
                          key={index}
                          className="w-4 h-4 rounded-full border border-border"
                          style={{ backgroundColor: variant.color_hex || '#000' }}
                        />
                      ))}
                      {product.product_variants.length > 3 && (
                        <span className="text-xs text-muted-foreground">
                          +{product.product_variants.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                )}

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="text-lg font-bold">${product.price}</span>
                  {product.compare_price && (
                    <span className="text-muted-foreground line-through">
                      ${product.compare_price}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        )}

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="group" asChild>
            <a href="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;