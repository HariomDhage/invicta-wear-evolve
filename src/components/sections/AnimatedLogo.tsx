import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';
import { Button } from '@/components/ui/button';

const AnimatedLogo = () => {
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  return (
    <section className="h-screen flex items-center justify-center bg-background">
      <div className="text-center space-y-8">
        <img 
          src="/lovable-uploads/af2adce2-b1da-4c0d-84a5-27a50b906b2f.png"
          alt="Logo"
          className="w-80 md:w-96 h-auto mx-auto"
        />
        
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            Premium Streetwear
          </h2>
          <p className="text-lg text-muted-foreground">
            Your Style, Your Choice
          </p>
        </div>

        <button 
          onClick={() => navigate('/products')}
          className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90 mb-6">
          ENTER STORE
        </button>

        {/* Auth Buttons */}
        {!loading && (
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {user ? (
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">
                  Welcome back, {user.email?.split('@')[0]}!
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => navigate('/profile')}
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  My Account
                </Button>
              </div>
            ) : (
              <>
                <Button 
                  onClick={() => navigate('/auth')}
                  variant="outline"
                  className="border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  Sign In
                </Button>
                <Button 
                  onClick={() => navigate('/auth')}
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AnimatedLogo;