import { Button } from '@/components/ui/button';
import hoodieImage from '@/assets/hoodie-product.jpg';
import joggersImage from '@/assets/joggers-product.jpg';

const NewInSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            New Arrivals
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Check out our latest products
          </p>
          <Button>Shop New Arrivals</Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="group">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={hoodieImage} 
                alt="Premium Hoodie" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Premium Hoodie</h3>
              <p className="text-muted-foreground">From $89</p>
            </div>
          </div>

          <div className="group">
            <div className="overflow-hidden rounded-lg">
              <img 
                src={joggersImage} 
                alt="Athletic Joggers" 
                className="w-full h-80 object-cover"
              />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold text-lg">Athletic Joggers</h3>
              <p className="text-muted-foreground">From $69</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewInSection;