-- Fix RLS policy: Allow users to view their own roles
CREATE POLICY "Users can view their own roles"
ON public.user_roles
FOR SELECT
TO authenticated
USING (user_id = auth.uid());

-- Insert admin role for the existing user
INSERT INTO public.user_roles (user_id, role)
VALUES ('8407bfad-c16f-4034-87f6-5ab7a1e215d5', 'admin')
ON CONFLICT (user_id, role) DO NOTHING;