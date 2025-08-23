import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Clock, User, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainingHub = () => {
  const articles = [
    {
      id: '1',
      title: 'The Complete Guide to Activewear Styling',
      excerpt: 'From gym to street: how to style your athletic wear for any occasion',
      readTime: '5 min read',
      author: 'Style Team',
      image: '/lovable-uploads/3cd1d943-3773-42e3-87bc-b3a903fe1a63.png',
      category: 'Style Guide'
    },
    {
      id: '2',
      title: 'Pre-Workout Fuel: What to Eat Before Training',
      excerpt: 'Optimize your performance with the right nutrition before you move',
      readTime: '7 min read',
      author: 'Nutrition Expert',
      image: '/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png',
      category: 'Nutrition'
    },
    {
      id: '3',
      title: 'Building Your Perfect Workout Wardrobe',
      excerpt: 'Essential pieces every athlete needs in their activewear collection',
      readTime: '6 min read',
      author: 'Fitness Team',
      image: '/lovable-uploads/7d2acbe7-28f8-42bf-a08b-e6fdba6f9265.png',
      category: 'Wardrobe'
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">Training Hub</h2>
            <p className="text-muted-foreground">Expert tips, guides, and inspiration for your fitness journey</p>
          </div>
          <Button variant="outline" className="hidden md:flex items-center rounded-xl" asChild>
            <Link to="/training-hub">
              View All Articles
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((article) => (
            <Card key={article.id} className="group overflow-hidden border-0 shadow-soft hover:shadow-premium transition-all duration-300 rounded-xl">
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                <div className="absolute top-3 left-3">
                  <span className="bg-accent text-accent-foreground px-2 py-1 rounded-md text-xs font-medium">
                    {article.category}
                  </span>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 line-clamp-2 group-hover:text-accent transition-colors">
                  {article.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-3 h-3" />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full justify-start p-0 h-auto text-accent hover:text-accent/80"
                  asChild
                >
                  <Link to={`/training-hub/${article.id}`} className="flex items-center space-x-2">
                    <BookOpen className="w-4 h-4" />
                    <span>Read More</span>
                    <ArrowRight className="w-4 h-4 ml-auto" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full rounded-xl" asChild>
            <Link to="/training-hub">View All Articles</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TrainingHub;