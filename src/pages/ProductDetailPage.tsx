import { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { useProduct } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, Star, ShoppingCart, ArrowLeft, Plus, Minus } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ProductDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  const [selectedVariant, setSelectedVariant] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { product, loading, error } = useProduct(slug || '');

  useEffect(() => {
    if (product?.product_variants && product.product_variants.length > 0) {
      setSelectedVariant(product.product_variants[0].id);
    }
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="aspect-square bg-muted rounded-lg" />
                <div className="grid grid-cols-4 gap-2">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="aspect-square bg-muted rounded" />
                  ))}
                </div>
              </div>
              <div className="space-y-4">
                <div className="h-8 bg-muted rounded w-3/4" />
                <div className="h-6 bg-muted rounded w-1/2" />
                <div className="h-12 bg-muted rounded" />
                <div className="h-32 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !product) {
    return <Navigate to="/not-found" replace />;
  }

  const selectedVariantData = product.product_variants?.find(v => v.id === selectedVariant);
  const currentPrice = product.price; // Always use product price as variants don't have separate pricing
  const images = product.product_images || [];

  const handleAddToCart = async () => {
    await addToCart(product.id, selectedVariant || undefined, quantity);
    toast({
      title: 'Added to cart!',
      description: `${quantity} x ${product.name} added to your cart.`,
    });
  };

  const increaseQuantity = () => setQuantity(prev => prev + 1);
  const decreaseQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <a href="/" className="hover:text-foreground transition-colors">Home</a>
          <span>/</span>
          <a href="/products" className="hover:text-foreground transition-colors">Products</a>
          <span>/</span>
          <span className="text-foreground">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            {/* Main Image */}
            <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
              <img
                src={images[selectedImageIndex]?.image_url || '/placeholder.svg'}
                alt={images[selectedImageIndex]?.alt_text || product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.tags?.includes('new') && (
                  <Badge className="bg-secondary text-secondary-foreground">NEW</Badge>
                )}
                {product.tags?.includes('sale') && (
                  <Badge className="bg-destructive text-destructive-foreground">SALE</Badge>
                )}
                {product.is_featured && (
                  <Badge className="bg-accent text-accent-foreground">FEATURED</Badge>
                )}
              </div>

              {/* Wishlist Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm hover:bg-background"
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>

            {/* Thumbnail Images */}
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`aspect-square overflow-hidden rounded border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-secondary' 
                        : 'border-border hover:border-secondary/50'
                    }`}
                  >
                    <img
                      src={image.image_url}
                      alt={image.alt_text || `${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Header */}
            <div>
              <div className="text-sm text-muted-foreground capitalize mb-2">
                {product.categories?.name} • {product.gender}
              </div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="h-5 w-5 fill-secondary text-secondary" />
                  <span className="font-medium">4.8</span>
                </div>
                <span className="text-muted-foreground">(124 reviews)</span>
              </div>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">${currentPrice}</span>
                {product.compare_price && product.compare_price > currentPrice && (
                  <span className="text-xl text-muted-foreground line-through">
                    ${product.compare_price}
                  </span>
                )}
              </div>
            </div>

            {/* Short Description */}
            {product.short_description && (
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.short_description}
              </p>
            )}

            {/* Variants */}
            {product.product_variants && product.product_variants.length > 0 && (
              <div className="space-y-4">
                {/* Size Selection */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Size</label>
                  <Select value={selectedVariant} onValueChange={setSelectedVariant}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select size" />
                    </SelectTrigger>
                    <SelectContent>
                      {product.product_variants.map((variant) => (
                        <SelectItem key={variant.id} value={variant.id}>
                          {variant.size} - {variant.color}
                          {variant.stock_quantity <= 5 && variant.stock_quantity > 0 && (
                            <span className="text-orange-500 ml-2">
                              (Only {variant.stock_quantity} left!)
                            </span>
                          )}
                          {variant.stock_quantity === 0 && (
                            <span className="text-destructive ml-2">(Out of stock)</span>
                          )}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Color Swatches */}
                <div>
                  <label className="text-sm font-medium mb-2 block">Available Colors</label>
                  <div className="flex gap-2">
                    {Array.from(new Map(product.product_variants.map(v => [v.color, v])).values())
                      .map((variant) => (
                        <div
                          key={variant.color}
                          className="w-8 h-8 rounded-full border-2 border-border cursor-pointer hover:scale-110 transition-transform"
                          style={{ backgroundColor: variant.color_hex || '#000' }}
                          title={variant.color}
                        />
                      ))}
                  </div>
                </div>
              </div>
            )}

            {/* Quantity & Add to Cart */}
            <Card>
              <CardContent className="p-6">
                <div className="space-y-4">
                  {/* Quantity */}
                  <div>
                    <label className="text-sm font-medium mb-2 block">Quantity</label>
                    <div className="flex items-center gap-3">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={decreaseQuantity}
                        disabled={quantity <= 1}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <span className="text-lg font-medium min-w-[2rem] text-center">
                        {quantity}
                      </span>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={increaseQuantity}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <Button
                    size="lg"
                    className="w-full"
                    onClick={handleAddToCart}
                    disabled={selectedVariantData?.stock_quantity === 0}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {selectedVariantData?.stock_quantity === 0 ? 'Out of Stock' : 'Add to Cart'}
                  </Button>

                  {/* Stock Status */}
                  {selectedVariantData && (
                    <p className="text-sm text-center text-muted-foreground">
                      {selectedVariantData.stock_quantity > 0 ? (
                        <>
                          {selectedVariantData.stock_quantity <= 5 ? (
                            <span className="text-orange-500">
                              Only {selectedVariantData.stock_quantity} left in stock
                            </span>
                          ) : (
                            <span className="text-green-600">In stock</span>
                          )}
                        </>
                      ) : (
                        <span className="text-destructive">Out of stock</span>
                      )}
                    </p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Product Details Tabs */}
            <Tabs defaultValue="description" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="description">Description</TabsTrigger>
                <TabsTrigger value="specifications">Specifications</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
              </TabsList>
              
              <TabsContent value="description" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="prose prose-neutral max-w-none">
                      <p>{product.description || 'No description available.'}</p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="specifications" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <dt className="font-medium text-muted-foreground">SKU</dt>
                          <dd className="font-medium">N/A</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Weight</dt>
                          <dd className="font-medium">N/A</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Category</dt>
                          <dd className="font-medium capitalize">{product.categories?.name || 'N/A'}</dd>
                        </div>
                        <div>
                          <dt className="font-medium text-muted-foreground">Gender</dt>
                          <dd className="font-medium capitalize">{product.gender || 'N/A'}</dd>
                        </div>
                      </div>
                      
                      {product.tags && product.tags.length > 0 && (
                        <div>
                          <dt className="font-medium text-muted-foreground mb-2">Tags</dt>
                          <div className="flex flex-wrap gap-2">
                            {product.tags.map((tag, index) => (
                              <Badge key={index} variant="outline" className="capitalize">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              
              <TabsContent value="reviews" className="mt-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-center py-8">
                      <p className="text-muted-foreground">
                        Reviews functionality coming soon!
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* Back to Products */}
        <div className="mt-12">
          <Button variant="outline" asChild>
            <a href="/products">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Products
            </a>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ProductDetailPage;