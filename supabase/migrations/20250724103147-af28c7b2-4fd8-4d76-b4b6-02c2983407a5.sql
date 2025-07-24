-- Update existing product images with the generated cool images
UPDATE product_images 
SET image_url = '/src/assets/hoodie-product.jpg'
WHERE product_id IN (
  SELECT id FROM products WHERE name = 'Elite Training Hoodie'
);

UPDATE product_images 
SET image_url = '/src/assets/joggers-product.jpg'
WHERE product_id IN (
  SELECT id FROM products WHERE name = 'Performance Training Shorts'
);

UPDATE product_images 
SET image_url = '/src/assets/hoodie-product.jpg'
WHERE product_id IN (
  SELECT id FROM products WHERE name = 'PowerFlex Pro Tank'
);

UPDATE product_images 
SET image_url = '/src/assets/joggers-product.jpg'
WHERE product_id IN (
  SELECT id FROM products WHERE name = 'Seamless Yoga Leggings'
);

-- Add more cool product images for variety
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order)
SELECT 
  p.id,
  '/src/assets/sneakers-product.jpg',
  'Product Image - Side View',
  false,
  1
FROM products p 
WHERE p.name IN ('Elite Training Hoodie', 'Performance Training Shorts');

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order)
SELECT 
  p.id,
  '/src/assets/cap-product.jpg',
  'Product Image - Detail View',
  false,
  2
FROM products p 
WHERE p.name IN ('PowerFlex Pro Tank', 'Seamless Yoga Leggings');

-- Create some new featured products with the cool images
INSERT INTO products (name, slug, description, short_description, price, compare_price, category_id, gender, is_featured, is_active, stock_quantity, tags)
VALUES 
(
  'INVICTA Signature Hoodie',
  'invicta-signature-hoodie',
  'Our flagship premium hoodie crafted with the finest materials. Features the iconic INVICTAWEARS logo and superior comfort technology.',
  'Premium signature hoodie with iconic branding',
  149.00,
  199.00,
  (SELECT id FROM categories WHERE name = 'Training' LIMIT 1),
  'unisex',
  true,
  true,
  25,
  ARRAY['hoodie', 'signature', 'premium', 'featured']
),
(
  'Elite Performance Joggers',
  'elite-performance-joggers',
  'High-performance joggers designed for serious athletes. Moisture-wicking technology meets street-style aesthetics.',
  'Premium joggers for elite performance',
  119.00,
  149.00,
  (SELECT id FROM categories WHERE name = 'Training' LIMIT 1),
  'unisex',
  true,
  true,
  35,
  ARRAY['joggers', 'performance', 'premium', 'featured']
),
(
  'Streetwear Premium Cap',
  'streetwear-premium-cap',
  'Clean minimalist design meets premium materials. The perfect finishing touch for any INVICTAWEARS outfit.',
  'Premium streetwear cap with clean design',
  59.00,
  79.00,
  (SELECT id FROM categories WHERE name = 'Training' LIMIT 1),
  'unisex',
  true,
  true,
  50,
  ARRAY['cap', 'streetwear', 'accessory', 'featured']
),
(
  'INVICTA Elite Sneakers',
  'invicta-elite-sneakers',
  'Premium leather sneakers designed for performance and style. Features advanced cushioning and premium materials.',
  'Elite sneakers with premium leather construction',
  189.00,
  249.00,
  (SELECT id FROM categories WHERE name = 'Training' LIMIT 1),
  'unisex',
  true,
  true,
  20,
  ARRAY['sneakers', 'footwear', 'premium', 'featured']
);

-- Add primary images for the new products
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order)
SELECT 
  p.id,
  '/src/assets/hoodie-product.jpg',
  p.name || ' - Front View',
  true,
  0
FROM products p 
WHERE p.slug = 'invicta-signature-hoodie';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order)
SELECT 
  p.id,
  '/src/assets/joggers-product.jpg',
  p.name || ' - Front View',
  true,
  0
FROM products p 
WHERE p.slug = 'elite-performance-joggers';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order)
SELECT 
  p.id,
  '/src/assets/cap-product.jpg',
  p.name || ' - Front View',
  true,
  0
FROM products p 
WHERE p.slug = 'streetwear-premium-cap';

INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order)
SELECT 
  p.id,
  '/src/assets/sneakers-product.jpg',
  p.name || ' - Front View',
  true,
  0
FROM products p 
WHERE p.slug = 'invicta-elite-sneakers';

-- Add secondary images for variety
INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order)
SELECT 
  p.id,
  '/src/assets/hero-streetwear.jpg',
  p.name || ' - Lifestyle View',
  false,
  1
FROM products p 
WHERE p.slug IN ('invicta-signature-hoodie', 'elite-performance-joggers');

-- Create product variants for the new products
INSERT INTO product_variants (product_id, title, size, color, color_hex, price, stock_quantity, is_active)
SELECT 
  p.id,
  'Black - ' || sizes.size,
  sizes.size,
  'Black',
  '#000000',
  p.price,
  10,
  true
FROM products p
CROSS JOIN (VALUES ('XS'), ('S'), ('M'), ('L'), ('XL')) AS sizes(size)
WHERE p.slug IN ('invicta-signature-hoodie', 'elite-performance-joggers');