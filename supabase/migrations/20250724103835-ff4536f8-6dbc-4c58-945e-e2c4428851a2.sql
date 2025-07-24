-- First, let's check the current RLS policy for cart_items
-- We need to update it to handle both authenticated users and guest sessions

-- Drop the existing policy
DROP POLICY IF EXISTS "Users can manage their own cart items" ON cart_items;

-- Create a new policy that handles both authenticated users and guest sessions
CREATE POLICY "Users and guests can manage their cart items" 
ON cart_items 
FOR ALL 
USING (
  -- For authenticated users: they can access items where user_id matches
  (auth.uid() IS NOT NULL AND auth.uid() = user_id)
  OR
  -- For guests: they can access items where session_id is not null and user_id is null
  (auth.uid() IS NULL AND session_id IS NOT NULL AND user_id IS NULL)
);

-- Also create a WITH CHECK policy for inserts/updates
CREATE POLICY "Users and guests can insert their cart items" 
ON cart_items 
FOR INSERT 
WITH CHECK (
  -- For authenticated users: they can insert items with their user_id
  (auth.uid() IS NOT NULL AND auth.uid() = user_id)
  OR
  -- For guests: they can insert items with session_id and null user_id
  (auth.uid() IS NULL AND session_id IS NOT NULL AND user_id IS NULL)
);