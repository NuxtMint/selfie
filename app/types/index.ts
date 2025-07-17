// PocketBase record types based on the database schema

export interface ProfileRecord {
  id: string;
  name: string;
  title: string;
  description?: string;
  email: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  github?: string;
  twitter?: string;
  avatar?: string;
  available: boolean;
  created: string;
  updated: string;
}

export interface ExperienceRecord {
  id: string;
  title: string;
  company: string;
  period: string;
  description?: string;
  technologies?: string[];
  order?: number;
  created: string;
  updated: string;
}

export interface EducationRecord {
  id: string;
  degree: string;
  institution: string;
  period: string;
  description?: string;
  order?: number;
  created: string;
  updated: string;
}

export interface SkillRecord {
  id: string;
  name: string;
  category: string;
  level?: string;
  order?: number;
  created: string;
  updated: string;
}

export interface ProjectRecord {
  id: string;
  title: string;
  description?: string;
  technologies?: string[];
  github?: string;
  demo?: string;
  image?: string;
  featured: boolean;
  order?: number;
  created: string;
  updated: string;
}
