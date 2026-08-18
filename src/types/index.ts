export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full Stack' | 'Machine Learning & AI' | 'Computer Vision' | 'Backend Systems';
  shortDescription: string;
  fullDescription: string;
  problem: string;
  solution: string;
  myContribution: string[];
  architectureDetails: string[];
  keyFeatures: string[];
  keyMetrics: { label: string; value: string }[];
  image?: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  role: string;
}

export interface SkillCategory {
  title: string;
  iconName: string;
  description: string;
  skills: {
    name: string;
    level: string;
    years: string;
    description: string;
    codeSnippet?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  type: 'Internship' | 'Full-time' | 'Project Engineering';
  summary: string;
  highlights: string[];
  techStack: string[];
}
