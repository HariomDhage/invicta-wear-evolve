import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  price: number;
  compare_price: number | null;
  gender: string;
  is_featured: boolean;
  stock_quantity: number;
  tags: string[];
  category_id: string;
  categories: {
    name: string;
    slug: string;
  } | null;
  product_images: {
    image_url: string;
    alt_text: string;
    is_primary: boolean;
  }[];
  product_variants: {
    id: string;
    size: string;
    color: string;
    color_hex: string;
    stock_quantity: number;
  }[];
}

interface ProductFilters {
  category?: string;
  gender?: string;
  priceRange?: [number, number];
  search?: string;
}

export const useProducts = (filters: ProductFilters = {}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);

      try {
        let query = supabase
          .from('products')
          .select(`
            *,
            categories!inner(name, slug),
            product_images(image_url, alt_text, is_primary),
            product_variants(id, size, color, color_hex, stock_quantity)
          `)
          .eq('is_active', true);

        // Apply filters
        if (filters.category && filters.category !== 'all') {
          query = query.eq('categories.slug', filters.category);
        }

        if (filters.gender && filters.gender !== 'all') {
          query = query.eq('gender', filters.gender);
        }

        if (filters.search) {
          query = query.or(`name.ilike.%${filters.search}%, tags.cs.{${filters.search}}`);
        }

        const { data, error } = await query.order('created_at', { ascending: false });

        if (error) throw error;

        // Filter by price range if specified
        let filteredData = data || [];
        if (filters.priceRange) {
          const [min, max] = filters.priceRange;
          filteredData = filteredData.filter(
            product => product.price >= min && product.price <= max
          );
        }

        setProducts(filteredData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filters.category, filters.gender, filters.search, filters.priceRange]);

  return { products, loading, error };
};

export const useProduct = (slug: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);

      try {
        const { data, error } = await supabase
          .from('products')
          .select(`
            *,
            categories(name, slug),
            product_images(image_url, alt_text, is_primary),
            product_variants(id, size, color, color_hex, stock_quantity)
          `)
          .eq('slug', slug)
          .eq('is_active', true)
          .single();

        if (error) throw error;

        setProduct(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch product');
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  return { product, loading, error };
};