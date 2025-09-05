/*
  # Create variables table for admin panel

  1. New Tables
    - `variables`
      - `id` (uuid, primary key)
      - `variable_1` (text, stores first variable value)
      - `variable_2` (text, stores second variable value)
      - `created_at` (timestamp, for sorting records)
      - `updated_at` (timestamp, tracks last modification)

  2. Security
    - Enable RLS on `variables` table
    - Add policies for authenticated users to manage variables
    - Allow public read access for the admin panel

  3. Indexes
    - Index on created_at for efficient sorting
*/

CREATE TABLE IF NOT EXISTS variables (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  variable_1 text NOT NULL DEFAULT '',
  variable_2 text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE variables ENABLE ROW LEVEL SECURITY;

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS variables_created_at_idx ON variables (created_at DESC);

-- RLS Policies
CREATE POLICY "Allow authenticated users to read variables"
  ON variables
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Allow authenticated users to insert variables"
  ON variables
  FOR INSERT
  TO authenticated
  WITH CHECK (true);

CREATE POLICY "Allow authenticated users to update variables"
  ON variables
  FOR UPDATE
  TO authenticated
  USING (true);

-- Trigger to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_variables_updated_at
  BEFORE UPDATE ON variables
  FOR EACH ROW
  EXECUTE FUNCTION update_updated_at_column();