export interface Project {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  bannerImage: string;
  year: string;
  role: string;
  techStack: string[];
  problem: {
    background: string;
    challenges: string[];
    objectives: string[];
  };
  discussion: {
    requirements: string[];
    architecture: string;
    technologyStack: { name: string; description: string }[];
    developmentProcess: string;
    screenshots: string[];
  };
  result: {
    outcome: string;
    featuresDelivered: string[];
    lessonsLearned: string[];
  };
}

export interface ProjectDecision {
  label: string;
  title: string;
  description: string;
}

export interface ProjectContent {
  title: string;
  subtitle?: string;
  description: string;
  shortDescription: string;
  year: string;
  role: string;
  techStack: string[];
  introduction?: string[];
  decisions?: ProjectDecision[];
  contributions?: string[];
  problem: {
    background: string;
    challenges: string[];
    objectives: string[];
  };
  discussion: {
    requirements: string[];
    architecture: string;
    technologyStack: { name: string; description: string }[];
    developmentProcess: string;
    screenshots: string[];
  };
  result: {
    outcome: string;
    featuresDelivered: string[];
    lessonsLearned: string[];
  };
}

export type ProjectCategory = "mobile" | "web" | "uiux";

export interface ProjectLinks {
  github?: string;
  figma?: string;
  website?: string;
  playstore?: string;
  appstore?: string;
  video?: string;
}

export interface ProjectMetadata {
  slug: string;
  image: string;
  bannerImage: string;
  year: string;
  role: string;
  techStack: string[];
  category: ProjectCategory;
  team?: string;
  galleryImages?: string[];
  links?: ProjectLinks;
}

export type Language = "en" | "id";

export interface ProjectDetail extends ProjectMetadata {
  title: string;
  description: string;
  shortDescription: string;
  introduction?: string[];
  decisions?: ProjectDecision[];
  contributions?: string[];
  problem: {
    background: string;
    challenges: string[];
    objectives: string[];
  };
  discussion: {
    requirements: string[];
    architecture: string;
    technologyStack: { name: string; description: string }[];
    developmentProcess: string;
    screenshots: string[];
  };
  result: {
    outcome: string;
    featuresDelivered: string[];
    lessonsLearned: string[];
  };
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Skill {
  category: string;
  items: string[];
}