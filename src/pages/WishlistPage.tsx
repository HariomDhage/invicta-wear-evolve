import { Heart, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';
import { useWishlist } from '@/hooks/useWishlist';
import { useCart } from '@/hooks/useCart';
import { useToast } from '@/hooks/use-toast';

const WishlistPage = () => {
  const { user } = useAuth();
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = async (productId: string) => {
    await addToCart(productId);
    toast({
      title: 'Added to cart!',
      description: 'Item has been moved to your cart.',
    });
  };

  const handleRemoveFromWishlist = async (productId: string) => {
    await removeFromWishlist(productId);
    toast({
      title: 'Removed from wishlist',
      description: 'Item has been removed from your wishlist.',
    });
  };

  if (!user) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20 text-center">
          <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h1 className="text-2xl font-bold mb-4">Sign in to view your wishlist</h1>
          <p className="text-muted-foreground mb-8">
            Save your favorite items and access them from anywhere.
          </p>
          <Button asChild>
            <a href="/auth">Sign In</a>
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">My Wishlist</h1>
          <p className="text-muted-foreground">
            {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
          </p>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <Heart className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
            <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">
              Start adding items you love to keep track of them.
            </p>
            <Button asChild>
              <a href="/products">Continue Shopping</a>
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlistItems.map((item) => (
              <Card key={item.id} className="group">
                <CardContent className="p-4">
                  <div className="aspect-[3/4] mb-4 overflow-hidden rounded-lg bg-muted">
                    <img
                      src={item.products?.product_images?.[0]?.image_url || '/placeholder.svg'}
                      alt={item.products?.name || 'Product'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="font-semibold mb-2">
                    <a href={`/products/${item.products?.slug}`} className="hover:text-primary">
                      {item.products?.name || 'Product Name'}
                    </a>
                  </h3>
                  
                  <p className="text-lg font-bold mb-4">${item.products?.price || '0'}</p>
                  
                  <div className="flex gap-2">
                    <Button 
                      size="sm" 
                      className="flex-1"
                      onClick={() => handleAddToCart(item.product_id)}
                    >
                      Add to Cart
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleRemoveFromWishlist(item.product_id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default WishlistPage;