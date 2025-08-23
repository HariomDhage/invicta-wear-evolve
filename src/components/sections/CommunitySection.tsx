import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Instagram, Heart, MessageCircle, Share } from 'lucide-react';
import { Link } from 'react-router-dom';

const CommunitySection = () => {
  const ugcPosts = [
    {
      id: '1',
      username: '@sarah_moves',
      image: '/lovable-uploads/3cd1d943-3773-42e3-87bc-b3a903fe1a63.png',
      likes: 234,
      comments: 18,
      caption: 'Morning yoga in my favorite Invictwears set ✨'
    },
    {
      id: '2',
      username: '@fitlifemike',
      image: '/lovable-uploads/45dc8ffc-80b8-4f41-9c2d-996438a4bff8.png',
      likes: 189,
      comments: 12,
      caption: 'Crushing my PR in these training shorts 💪'
    },
    {
      id: '3',
      username: '@runwithemma',
      image: '/lovable-uploads/7d2acbe7-28f8-42bf-a08b-e6fdba6f9265.png',
      likes: 156,
      comments: 8,
      caption: '5K done! These leggings are game changers 🏃‍♀️'
    },
    {
      id: '4',
      username: '@yogawithjess',
      image: '/lovable-uploads/af2adce2-b1da-4c0d-84a5-27a50b906b2f.png',
      likes: 298,
      comments: 24,
      caption: 'Flow state achieved in Invictwears ✨ #LovableMoves'
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Join the Movement
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-6">
            Share your journey with <span className="text-accent font-semibold">#LovableMoves</span> and inspire others to move better
          </p>
          
          <Button 
            variant="outline" 
            className="rounded-xl border-accent text-accent hover:bg-accent hover:text-accent-foreground"
            asChild
          >
            <Link to="https://instagram.com" target="_blank" className="flex items-center space-x-2">
              <Instagram className="w-4 h-4" />
              <span>Follow @Invictwears</span>
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {ugcPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden border-0 shadow-soft hover:shadow-premium transition-shadow rounded-xl">
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt={`${post.username} post`}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                
                {/* Social Actions */}
                <div className="absolute bottom-3 left-3 right-3 text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span className="text-xs">{post.likes}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MessageCircle className="w-4 h-4" />
                        <span className="text-xs">{post.comments}</span>
                      </div>
                    </div>
                    <Share className="w-4 h-4" />
                  </div>
                </div>
              </div>

              <CardContent className="p-3">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-6 h-6 bg-gradient-accent rounded-full flex items-center justify-center">
                    <Instagram className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-sm font-medium">{post.username}</span>
                </div>
                <p className="text-xs text-muted-foreground line-clamp-2">{post.caption}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 rounded-xl shadow-soft"
            asChild
          >
            <Link to="/community">View More Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;