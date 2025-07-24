import { useState } from 'react';
import { useProducts } from '@/hooks/useProducts';
import { useCart } from '@/hooks/useCart';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Slider } from '@/components/ui/slider';
import { Heart, Star, Filter, ShoppingCart, Search } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const ProductsPage = () => {
  const { toast } = useToast();
  const { addToCart } = useCart();
  
  const [filters, setFilters] = useState({
    category: '',
    gender: '',
    priceRange: [0, 200] as [number, number],
    search: '',
  });

  const { products, loading, error } = useProducts(filters);

  const handleAddToCart = async (productId: string) => {
    await addToCart(productId);
    toast({
      title: 'Added to cart!',
      description: 'Item has been added to your shopping cart.',
    });
  };

  const handleFilterChange = (key: string, value: any) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  if (error) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-destructive mb-4">Error</h1>
            <p className="text-muted-foreground">{error}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">
            All <span className="text-secondary">Products</span>
          </h1>
          <p className="text-muted-foreground text-lg">
            Discover our complete collection of premium activewear
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <Filter className="h-5 w-5" />
                <h3 className="font-semibold">Filters</h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    value={filters.search}
                    onChange={(e) => handleFilterChange('search', e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Gender Filter */}
                <Select
                  value={filters.gender}
                  onValueChange={(value) => handleFilterChange('gender', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All</SelectItem>
                    <SelectItem value="women">Women</SelectItem>
                    <SelectItem value="men">Men</SelectItem>
                    <SelectItem value="unisex">Unisex</SelectItem>
                  </SelectContent>
                </Select>

                {/* Category Filter */}
                <Select
                  value={filters.category}
                  onValueChange={(value) => handleFilterChange('category', value)}
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="">All Categories</SelectItem>
                    <SelectItem value="training">Training</SelectItem>
                    <SelectItem value="yoga">Yoga</SelectItem>
                    <SelectItem value="running">Running</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                  </SelectContent>
                </Select>

                {/* Price Range */}
                <div className="space-y-2">
                  <label className="text-sm font-medium">
                    Price: ${filters.priceRange[0]} - ${filters.priceRange[1]}
                  </label>
                  <Slider
                    value={filters.priceRange}
                    onValueChange={(value) => handleFilterChange('priceRange', value as [number, number])}
                    max={200}
                    min={0}
                    step={10}
                    className="w-full"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Products Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <Card key={i} className="animate-pulse">
                <div className="aspect-[3/4] bg-muted rounded-t-lg" />
                <CardContent className="p-4">
                  <div className="h-4 bg-muted rounded mb-2" />
                  <div className="h-4 bg-muted rounded w-2/3 mb-2" />
                  <div className="h-4 bg-muted rounded w-1/3" />
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <>
            <div className="mb-4 flex justify-between items-center">
              <p className="text-muted-foreground">
                {products.length} product{products.length !== 1 ? 's' : ''} found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="group cursor-pointer hover:shadow-card transition-shadow">
                  {/* Product Image */}
                  <div className="relative aspect-[3/4] overflow-hidden rounded-t-lg bg-muted">
                    <img
                      src={product.product_images?.[0]?.image_url || '/placeholder.svg'}
                      alt={product.product_images?.[0]?.alt_text || product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-2">
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
                      className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm hover:bg-background"
                    >
                      <Heart className="h-4 w-4" />
                    </Button>

                    {/* Quick Add Button */}
                    <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Button 
                        className="w-full bg-background/90 text-foreground hover:bg-background backdrop-blur-sm"
                        onClick={() => handleAddToCart(product.id)}
                      >
                        <ShoppingCart className="h-4 w-4 mr-2" />
                        Quick Add
                      </Button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <CardContent className="p-4">
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
                        <span className="text-sm text-muted-foreground">(124 reviews)</span>
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
                  </CardContent>
                </Card>
              ))}
            </div>

            {products.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No products found matching your criteria.
                </p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => setFilters({ category: '', gender: '', priceRange: [0, 200], search: '' })}
                >
                  Clear Filters
                </Button>
              </div>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ProductsPage;