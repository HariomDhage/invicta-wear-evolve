import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface WishlistItem {
  id: string;
  product_id: string;
  user_id: string;
  created_at: string;
}

export const useWishlist = () => {
  const { user } = useAuth();
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchWishlistItems = async () => {
    if (!user) return;

    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase
        .from('wishlist_items')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false });

      if (error) throw error;

      setWishlistItems(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch wishlist items');
    } finally {
      setLoading(false);
    }
  };

  const addToWishlist = async (productId: string) => {
    if (!user) {
      setError('Please sign in to add items to your wishlist');
      return;
    }

    setError(null);

    try {
      // Check if item already exists in wishlist
      const existingItem = wishlistItems.find(item => item.product_id === productId);
      if (existingItem) {
        setError('Item is already in your wishlist');
        return;
      }

      const { error } = await supabase
        .from('wishlist_items')
        .insert({
          product_id: productId,
          user_id: user.id,
        });

      if (error) throw error;

      await fetchWishlistItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item to wishlist');
    }
  };

  const removeFromWishlist = async (productId: string) => {
    if (!user) return;

    setError(null);

    try {
      const { error } = await supabase
        .from('wishlist_items')
        .delete()
        .eq('product_id', productId)
        .eq('user_id', user.id);

      if (error) throw error;

      setWishlistItems(prev => prev.filter(item => item.product_id !== productId));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove item from wishlist');
    }
  };

  const isInWishlist = (productId: string) => {
    return wishlistItems.some(item => item.product_id === productId);
  };

  const getWishlistCount = () => {
    return wishlistItems.length;
  };

  useEffect(() => {
    fetchWishlistItems();
  }, [user]);

  return {
    wishlistItems,
    loading,
    error,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    getWishlistCount,
    fetchWishlistItems,
  };
};