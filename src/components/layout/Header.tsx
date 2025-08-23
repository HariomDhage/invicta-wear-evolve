import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Search, User, ShoppingBag, Heart, Menu, X } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, signOut } = useAuth();
  const { getCartCount } = useCart();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const megaMenuCategories = [
    { name: 'Women', href: '/women', featured: true },
    { name: 'Men', href: '/men', featured: true },
    { name: 'Collections', href: '/collections' },
    { name: 'New', href: '/new', highlight: true },
    { name: 'Accessories', href: '/accessories' },
    { name: 'Outlet', href: '/outlet', sale: true }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-heading font-bold text-xl tracking-tight">
            Invictwears
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {megaMenuCategories.map((category) => (
              <Link 
                key={category.name}
                to={category.href} 
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  category.highlight ? 'text-accent' : 
                  category.sale ? 'text-warning' : 
                  'text-foreground'
                }`}
              >
                {category.name.toUpperCase()}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-3">
            {/* Search - Desktop */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 text-sm border rounded-xl bg-background w-56 focus:outline-none focus:ring-2 focus:ring-accent/20 transition-all"
                />
              </div>
            </div>

            {/* Mobile Search */}
            <Button variant="ghost" size="icon" className="md:hidden">
              <Search className="h-5 w-5" />
            </Button>

            {/* User Actions */}
            {user ? (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
                  <Link to="/wishlist">
                    <Heart className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="relative">
                  <Link to="/cart">
                    <ShoppingBag className="w-5 h-5" />
                    {getCartCount() > 0 && (
                      <span className="absolute -top-1 -right-1 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-medium">
                        {getCartCount()}
                      </span>
                    )}
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild className="hidden sm:flex">
                  <Link to="/profile">
                    <User className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="sm" onClick={() => signOut()} className="hidden sm:flex">
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild className="hidden sm:flex">
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button size="sm" className="bg-accent hover:bg-accent/90" asChild>
                  <Link to="/auth">Sign Up</Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button 
              variant="ghost" 
              size="icon" 
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t py-4 space-y-4">
            <div className="space-y-2">
              {megaMenuCategories.map((category) => (
                <Link 
                  key={category.name}
                  to={category.href} 
                  className={`block py-2 text-sm font-medium transition-colors ${
                    category.highlight ? 'text-accent' : 
                    category.sale ? 'text-warning' : 
                    'text-foreground'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {category.name.toUpperCase()}
                </Link>
              ))}
            </div>
            
            {user && (
              <div className="pt-4 border-t space-y-2">
                <Link to="/profile" className="block py-2 text-sm font-medium text-foreground">
                  Profile
                </Link>
                <Link to="/wishlist" className="block py-2 text-sm font-medium text-foreground">
                  Wishlist
                </Link>
                <button 
                  onClick={() => signOut()} 
                  className="block py-2 text-sm font-medium text-foreground text-left w-full"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;