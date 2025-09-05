/*
  # Allow anonymous users to insert variables

  1. Security Changes
    - Add RLS policy to allow anonymous (anon) role to insert records into variables table
    - This enables the frontend application to create new variable records without authentication

  2. Policy Details
    - Policy name: "Allow anonymous users to insert variables"
    - Applies to: INSERT operations
    - Role: anon (anonymous users)
    - Condition: Always allow (true)
*/

-- Create policy to allow anonymous users to insert variables
CREATE POLICY "Allow anonymous users to insert variables"
  ON variables
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Also ensure anonymous users can read variables (if not already allowed)
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_policies 
    WHERE tablename = 'variables' 
    AND policyname = 'Allow anonymous users to read variables'
  ) THEN
    CREATE POLICY "Allow anonymous users to read variables"
      ON variables
      FOR SELECT
      TO anon
      USING (true);
  END IF;
END $$;