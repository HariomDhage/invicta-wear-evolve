import { useState } from 'react';
import { Menu, Search, ShoppingBag, User, Heart, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';

const Header = () => {
  const { user, signOut } = useAuth();
  const { getCartCount } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeGender, setActiveGender] = useState('Women');

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/';
  };

  const navigation = [
    { name: 'New In', href: '/products?filter=new' },
    { name: 'Clothing', href: '/products' },
    { name: 'Sale', href: '/products?filter=sale' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      {/* Top Bar */}
      <div className="bg-primary text-primary-foreground text-center py-2 px-4 text-xs sm:text-sm">
        Free shipping on orders over $150 SGD | International shipping available
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="group flex items-center">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground tracking-tight transform transition-all duration-300 group-hover:scale-105">
                Fashion Store
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {/* Gender Toggle */}
            <div className="flex bg-muted rounded-lg p-1">
              {['Women', 'Men'].map((gender) => (
                <a
                  href={`/products?gender=${gender.toLowerCase()}`}
                  key={gender}
                  onClick={() => setActiveGender(gender)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                    activeGender === gender
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {gender}
                </a>
              ))}
            </div>

            {/* Navigation Links */}
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search products..."
                  className="pl-10 w-48 sm:w-56 md:w-64 bg-muted/50 border-none focus:bg-background transition-colors"
                />
              </div>
            </div>

            {/* Action Buttons */}
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <Search className="h-5 w-5 md:hidden" />
            </Button>
            {user ? (
              <div className="flex items-center gap-1 sm:gap-2">
                <span className="text-xs sm:text-sm text-muted-foreground hidden sm:block">
                  {user.email?.split('@')[0]}
                </span>
                <Button variant="ghost" size="sm" onClick={handleSignOut} className="text-xs sm:text-sm px-2 sm:px-3">
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-1 sm:gap-2">
                <a href="/auth">
                  <Button variant="ghost" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                    Sign In
                  </Button>
                </a>
                <a href="/auth">
                  <Button variant="default" size="sm" className="text-xs sm:text-sm px-2 sm:px-3">
                    Sign Up
                  </Button>
                </a>
              </div>
            )}
            
            {/* Show cart and wishlist only for authenticated users */}
            {user && (
              <>
                <a href="/wishlist">
                  <Button variant="ghost" size="icon">
                    <Heart className="h-5 w-5" />
                  </Button>
                </a>
                <a href="/cart">
                  <Button variant="ghost" size="icon" className="relative">
                    <ShoppingBag className="h-5 w-5" />
                    <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {getCartCount()}
                    </span>
                  </Button>
                </a>
              </>
            )}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-sm">
            <div className="py-4 space-y-4">
              {/* Mobile Gender Toggle */}
              <div className="flex bg-muted rounded-lg p-1 mx-4">
                {['Women', 'Men'].map((gender) => (
                  <a
                    href={`/products?gender=${gender.toLowerCase()}`}
                    key={gender}
                    onClick={() => setActiveGender(gender)}
                    className={`flex-1 py-2 rounded-md text-sm font-medium transition-all text-center block ${
                      activeGender === gender
                        ? 'bg-primary text-primary-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {gender}
                  </a>
                ))}
              </div>

              {/* Mobile Search */}
              <div className="px-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search products..."
                    className="pl-10 bg-muted/50 border-none"
                  />
                </div>
              </div>

              {/* Mobile Navigation */}
              <nav className="px-4 space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
                
                {/* Mobile Auth Section */}
                <div className="border-t border-border pt-4 mt-4">
                  {user ? (
                    <div className="space-y-2">
                      <div className="px-4 py-2 text-sm text-muted-foreground">
                        Signed in as {user.email?.split('@')[0]}
                      </div>
                      <a href="/profile" className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        My Account
                      </a>
                      <button 
                        onClick={handleSignOut}
                        className="block w-full text-left px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-2">
                      <a href="/auth" className="block px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                        Sign In
                      </a>
                      <a href="/auth" className="block px-4 py-2 text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 transition-colors rounded mx-4">
                        Sign Up
                      </a>
                    </div>
                  )}
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;