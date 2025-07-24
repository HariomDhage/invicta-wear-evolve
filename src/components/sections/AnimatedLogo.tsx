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
          src="/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png"
          alt="INVICTAWEARS"
          className="w-80 md:w-96 h-auto mx-auto"
        />
        
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">
            LEGENDARY STREETWEAR
          </h1>
          <p className="text-lg text-muted-foreground">
            Forge Your Legacy
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