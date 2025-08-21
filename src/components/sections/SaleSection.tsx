import { Button } from '@/components/ui/button';

const SaleSection = () => {
  return (
    <section className="py-16 bg-destructive text-destructive-foreground">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            UP TO 50% OFF
          </h2>
          <p className="text-lg mb-2">
            Flash Sale • Premium Gear
          </p>
          <p className="text-sm opacity-90">
            Limited time only - While supplies last
          </p>
        </div>

        <Button 
          size="lg" 
          variant="secondary"
          className="text-lg px-8 py-4"
          asChild
        >
          <a href="/products?filter=sale">Shop Sale Items</a>
        </Button>
      </div>
    </section>
  );
};

export default SaleSection;