-- Fix critical security vulnerability in borrowed_books table
-- Replace the insecure INSERT policy that allows anyone to add customer data

-- Drop the existing insecure policy
DROP POLICY IF EXISTS "Allow book borrowing" ON public.borrowed_books;

-- Create secure policy that only allows authenticated staff to create borrowing records
CREATE POLICY "Only authenticated staff can create borrowed books" 
ON public.borrowed_books 
FOR INSERT 
WITH CHECK (is_authenticated_staff());