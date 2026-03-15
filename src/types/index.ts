export interface Achievement {
  id: string;
  title: string;
  image_url: string;
  description: string;
  display_order: number;
  created_at: string;
}

export interface Project {
  id: string;
  title: string;
  image_url: string;
  description: string;
  details_url: string;
  display_order: number;
  created_at: string;
}
