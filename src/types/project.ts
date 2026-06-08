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

export interface ProjectContent {
  title: string;
  description: string;
  shortDescription: string;
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

export interface ProjectMetadata {
  slug: string;
  image: string;
  bannerImage: string;
  year: string;
  role: string;
  techStack: string[];
}

export type Language = "en" | "id";

export interface ProjectDetail extends ProjectMetadata {
  title: string;
  description: string;
  shortDescription: string;
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