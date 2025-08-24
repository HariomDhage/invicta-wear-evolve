import { useState } from 'react';
import { Instagram, Facebook, Twitter, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: 'Subscribed successfully!',
        description: 'Thank you for subscribing to our newsletter.',
      });
      setEmail('');
    }
  };

  const getFooterLink = (linkName: string) => {
    const linkMap: { [key: string]: string } = {
      'New Arrivals': '/products?filter=new',
      'Women': '/products?gender=women',
      'Men': '/products?gender=men',
      'Accessories': '/products?category=accessories',
      'Sale': '/products?filter=sale',
      'Size Guide': '/size-guide',
      'Shipping Info': '/shipping',
      'Returns': '/returns',
      'Contact Us': '/contact',
      'FAQ': '/faq',
      'About Us': '/about',
      'Careers': '/careers',
      'Press': '/press',
      'Sustainability': '/sustainability',
      'Terms': '/terms'
    };
    return linkMap[linkName] || '#';
  };

  const footerSections = [
    {
      title: 'Shop',
      links: ['New Arrivals', 'Women', 'Men', 'Accessories', 'Sale']
    },
    {
      title: 'Support',
      links: ['Size Guide', 'Shipping Info', 'Returns', 'Contact Us', 'FAQ']
    },
    {
      title: 'Company',
      links: ['About Us', 'Careers', 'Press', 'Sustainability', 'Terms']
    }
  ];

  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/20">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay in the Loop</h3>
            <p className="text-primary-foreground/80 mb-6">
              Get the latest drops, exclusive offers, and fitness tips delivered to your inbox.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-background/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
                required
              />
              <Button type="submit" variant="secondary" className="px-8">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">
              INVICTA<span className="text-secondary">WEARS</span>
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Premium activewear designed for the unstoppable. From Singapore to the world, 
              we create gear that moves with your ambition.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Singapore</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>info@invictawears.club</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+65 9693 3140</span>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link}>
                    <a
                      href={getFooterLink(link)}
                      className="text-primary-foreground/80 hover:text-primary-foreground transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Social Media & Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Social Media */}
            <div className="flex items-center gap-4">
              <span className="text-sm">Follow us:</span>
              <div className="flex gap-3">
                {[Instagram, Facebook, Twitter, Youtube].map((Icon, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    className="h-8 w-8 text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                  >
                    <Icon className="h-4 w-4" />
                  </Button>
                ))}
              </div>
            </div>

            {/* Copyright */}
            <div className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} InvictaWears. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;