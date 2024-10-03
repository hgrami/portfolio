export interface Project {
  title: string;
  description: string;
  mediaItems: MediaItem[];
  technologies: string[];
  link?: string;
}

export interface MediaItem {
  type: 'image' | 'video';
  url: string;
}

export interface Job {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}
export interface Education {
  degree: string;
  institution: string;
  year: string;
  description: string;
  icon: React.ElementType;
}

export interface Skill {
  category: string;
  items: {
    name: string;
    icon: React.ElementType;
  }[];
}
