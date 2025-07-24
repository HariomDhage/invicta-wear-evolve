import { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => {
        setIsSubscribed(false);
        setEmail('');
      }, 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-primary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Icon */}
          <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-8">
            <Mail className="h-8 w-8 text-secondary" />
          </div>

          {/* Content */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
            Join the <span className="text-secondary">Invicta</span> Squad
          </h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto px-4">
            Be the first to know about new drops, exclusive member discounts, 
            and behind-the-scenes content from our athletes.
          </p>

          {/* Newsletter Form */}
          <form onSubmit={handleSubmit} className="max-w-md mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                required
              />
              <Button 
                type="submit"
                variant="secondary"
                className="px-6 sm:px-8 w-full sm:w-auto"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  'Subscribe'
                )}
              </Button>
            </div>
          </form>

          {/* Success Message */}
          {isSubscribed && (
            <div className="mt-4 text-secondary font-medium">
              ✨ Welcome to the squad! Check your email for a special discount.
            </div>
          )}

          {/* Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto">
            {[
              { title: 'Early Access', desc: 'Shop new collections 24hrs before everyone else' },
              { title: 'Member Discounts', desc: 'Exclusive offers and member-only pricing' },
              { title: 'Athlete Content', desc: 'Training tips and inspiration from our team' }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <h3 className="font-semibold text-lg mb-2 text-secondary">
                  {benefit.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;