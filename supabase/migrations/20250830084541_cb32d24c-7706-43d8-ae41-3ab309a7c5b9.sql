-- Create newsletter_signups table
CREATE TABLE IF NOT EXISTS public.newsletter_signups (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security (since this is public data)
ALTER TABLE public.newsletter_signups ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert (public newsletter signup)
CREATE POLICY "Anyone can sign up for newsletter" 
ON public.newsletter_signups 
FOR INSERT 
WITH CHECK (true);

-- Create policy to prevent public reads (only admin should see signups)
CREATE POLICY "Only service role can read newsletter signups" 
ON public.newsletter_signups 
FOR SELECT 
USING (false);