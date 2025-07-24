import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/hooks/useAuth';

interface CartItem {
  id: string;
  product_id: string;
  variant_id: string | null;
  quantity: number;
  products: {
    name: string;
    slug: string;
    price: number;
    product_images: {
      image_url: string;
      alt_text: string;
    }[];
  };
  product_variants?: {
    size: string;
    color: string;
    price: number | null;
  };
}

export const useCart = () => {
  const { user } = useAuth();
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Generate session ID for guest users
  const getSessionId = () => {
    let sessionId = localStorage.getItem('guest_session_id');
    if (!sessionId) {
      sessionId = crypto.randomUUID();
      localStorage.setItem('guest_session_id', sessionId);
    }
    return sessionId;
  };

  const fetchCartItems = async () => {
    if (!user && !getSessionId()) return;

    setLoading(true);
    setError(null);

    try {
      let query = supabase
        .from('cart_items')
        .select(`
          *,
          products!inner(
            name,
            slug,
            price,
            product_images!inner(image_url, alt_text)
          ),
          product_variants(size, color, price)
        `);

      if (user) {
        query = query.eq('user_id', user.id);
      } else {
        query = query.eq('session_id', getSessionId());
      }

      const { data, error } = await query.order('created_at', { ascending: false });

      if (error) throw error;

      setCartItems(data || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch cart items');
    } finally {
      setLoading(false);
    }
  };

  const addToCart = async (productId: string, variantId?: string, quantity: number = 1) => {
    setError(null);

    try {
      // Check if item already exists in cart
      const existingItemQuery = supabase
        .from('cart_items')
        .select('*')
        .eq('product_id', productId);

      if (variantId) {
        existingItemQuery.eq('variant_id', variantId);
      } else {
        existingItemQuery.is('variant_id', null);
      }

      if (user) {
        existingItemQuery.eq('user_id', user.id);
      } else {
        existingItemQuery.eq('session_id', getSessionId());
      }

      const { data: existingItems } = await existingItemQuery;

      if (existingItems && existingItems.length > 0) {
        // Update existing item
        const { error } = await supabase
          .from('cart_items')
          .update({ quantity: existingItems[0].quantity + quantity })
          .eq('id', existingItems[0].id);

        if (error) throw error;
      } else {
        // Insert new item
        const cartData: any = {
          product_id: productId,
          variant_id: variantId || null,
          quantity,
        };

        if (user) {
          cartData.user_id = user.id;
        } else {
          cartData.session_id = getSessionId();
        }

        const { error } = await supabase
          .from('cart_items')
          .insert(cartData);

        if (error) throw error;
      }

      await fetchCartItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to add item to cart');
    }
  };

  const updateQuantity = async (itemId: string, quantity: number) => {
    setError(null);

    try {
      if (quantity <= 0) {
        await removeFromCart(itemId);
        return;
      }

      const { error } = await supabase
        .from('cart_items')
        .update({ quantity })
        .eq('id', itemId);

      if (error) throw error;

      await fetchCartItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to update quantity');
    }
  };

  const removeFromCart = async (itemId: string) => {
    setError(null);

    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId);

      if (error) throw error;

      await fetchCartItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to remove item from cart');
    }
  };

  const clearCart = async () => {
    setError(null);

    try {
      let query = supabase.from('cart_items').delete();

      if (user) {
        query = query.eq('user_id', user.id);
      } else {
        query = query.eq('session_id', getSessionId());
      }

      const { error } = await query;

      if (error) throw error;

      setCartItems([]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to clear cart');
    }
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => {
      const price = item.product_variants?.price || item.products.price;
      return total + (price * item.quantity);
    }, 0);
  };

  const getCartCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  useEffect(() => {
    fetchCartItems();
  }, [user]);

  return {
    cartItems,
    loading,
    error,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartCount,
    fetchCartItems,
  };
};