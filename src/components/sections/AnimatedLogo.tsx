import { useNavigate } from 'react-router-dom';

const AnimatedLogo = () => {
  const navigate = useNavigate();

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
          className="px-6 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90">
          ENTER STORE
        </button>
      </div>
    </section>
  );
};

export default AnimatedLogo;