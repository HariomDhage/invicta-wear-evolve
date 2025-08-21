import { Button } from '@/components/ui/button';
import { Search, User, ShoppingBag, Heart } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useCart } from '@/hooks/useCart';
import { Link } from 'react-router-dom';

const Header = () => {
  const { user, signOut } = useAuth();
  const { getCartCount } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="font-bold text-xl tracking-tight">
            INVICTAWEARS
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/products?category=women" className="text-sm font-medium hover:text-primary transition-colors uppercase">
              WOMEN
            </Link>
            <Link to="/products?category=men" className="text-sm font-medium hover:text-primary transition-colors uppercase">
              MEN
            </Link>
            <Link to="/products?category=accessories" className="text-sm font-medium hover:text-primary transition-colors uppercase">
              ACCESSORIES
            </Link>
            <Link to="/products?filter=sale" className="text-sm font-medium hover:text-primary transition-colors uppercase text-destructive">
              SALE
            </Link>
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="hidden md:flex items-center">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="What are you looking for..." 
                  className="pl-10 pr-4 py-2 text-sm border rounded-md bg-background w-64 focus:outline-none focus:ring-2 focus:ring-primary/20"
                />
              </div>
            </div>

            {/* User Actions */}
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/wishlist" className="p-2 hover:bg-muted rounded-md transition-colors">
                  <Heart className="w-5 h-5" />
                </Link>
                <Link to="/cart" className="p-2 hover:bg-muted rounded-md transition-colors relative">
                  <ShoppingBag className="w-5 h-5" />
                  {getCartCount() > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {getCartCount()}
                    </span>
                  )}
                </Link>
                <div className="flex items-center space-x-2">
                  <Link to="/profile" className="p-2 hover:bg-muted rounded-md transition-colors">
                    <User className="w-5 h-5" />
                  </Link>
                  <Button variant="ghost" size="sm" onClick={() => signOut()}>
                    Sign Out
                  </Button>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button size="sm" asChild>
                  <Link to="/auth">Sign Up</Link>
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;