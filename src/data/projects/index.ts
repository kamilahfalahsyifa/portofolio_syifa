import type { ProjectMetadata, ProjectContent, ProjectDetail, Language } from "@/types/project";
import zyparkingMetadata from "./zyparking/metadata";
import zyparkingEn from "./zyparking/en";
import zyparkingId from "./zyparking/id";
import kkoPaudMetadata from "./kko-paud-semarang/metadata";
import kkoPaudEn from "./kko-paud-semarang/en";
import kkoPaudId from "./kko-paud-semarang/id";

type ProjectModule = {
  metadata: ProjectMetadata;
  en: ProjectContent;
  id: ProjectContent;
};

const projects: Record<string, ProjectModule> = {
  "kko-paud-semarang": {
    metadata: kkoPaudMetadata,
    en: kkoPaudEn,
    id: kkoPaudId,
  },
  zyparking: {
    metadata: zyparkingMetadata,
    en: zyparkingEn,
    id: zyparkingId,
  },
  
};

export function getProject(slug: string, lang: Language): ProjectDetail | undefined {
  const project = projects[slug];
  if (!project) return undefined;

  const content = lang === "id" ? project.id : project.en;
  return {
    ...project.metadata,
    title: content.title,
    description: content.description,
    shortDescription: content.shortDescription,
    problem: content.problem,
    discussion: content.discussion,
    result: content.result,
  };
}

export function getProjectMetadata(slug: string): ProjectMetadata | undefined {
  return projects[slug]?.metadata;
}

export function getProjectContent(slug: string, lang: Language): ProjectContent | undefined {
  return projects[slug]?.[lang];
}

export function getAvailableSlugs(): string[] {
  return Object.keys(projects);
}

export function getAllMetadata(): ProjectMetadata[] {
  return Object.values(projects).map((p) => p.metadata);
}