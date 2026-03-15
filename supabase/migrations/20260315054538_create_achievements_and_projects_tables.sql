/*
  # Create Achievements and Projects Tables for OFFICE FO.ID

  1. New Tables
    - `achievements`
      - `id` (uuid, primary key)
      - `title` (text) - Achievement title
      - `image_url` (text) - URL to achievement image
      - `description` (text, optional) - Achievement description
      - `display_order` (integer) - Order for display
      - `created_at` (timestamptz)
    
    - `projects`
      - `id` (uuid, primary key)
      - `title` (text) - Project title
      - `image_url` (text) - URL to project image
      - `description` (text) - Project description
      - `details_url` (text, optional) - Link to project details
      - `display_order` (integer) - Order for display
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on both tables
    - Add policies for public read access (community website is public)
*/

CREATE TABLE IF NOT EXISTS achievements (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  description text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  image_url text NOT NULL,
  description text NOT NULL,
  details_url text DEFAULT '',
  display_order integer DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view achievements"
  ON achievements FOR SELECT
  TO anon, authenticated
  USING (true);

CREATE POLICY "Anyone can view projects"
  ON projects FOR SELECT
  TO anon, authenticated
  USING (true);