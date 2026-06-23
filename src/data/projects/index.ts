import type { ProjectMetadata, ProjectContent, ProjectDetail, Language } from "@/types/project";
import zyparkingMetadata from "./zyparking/metadata";
import zyparkingEn from "./zyparking/en";
import zyparkingId from "./zyparking/id";
import kkoPaudMetadata from "./kko-paud-semarang/metadata";
import kkoPaudEn from "./kko-paud-semarang/en";
import kkoPaudId from "./kko-paud-semarang/id";
import ecoposMetadata from "./ecopos/metadata";
import ecoposEn from "./ecopos/en";
import ecoposId from "./ecopos/id";
import stiMobileMetadata from "./sti-mobile/metadata";
import stiMobileEn from "./sti-mobile/en";
import stiMobileId from "./sti-mobile/id";
import kissMetadata from "./kiss/metadata";
import kissEn from "./kiss/en";
import kissId from "./kiss/id";
import fleetManagementMetadata from "./fleet-management/metadata";
import fleetManagementEn from "./fleet-management/en";
import fleetManagementId from "./fleet-management/id";

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
  ecopos: {
    metadata: ecoposMetadata,
    en: ecoposEn,
    id: ecoposId,
  },
  "sti-mobile": {
    metadata: stiMobileMetadata,
    en: stiMobileEn,
    id: stiMobileId,
  },
  "fleet-management": {
    metadata: fleetManagementMetadata,
    en: fleetManagementEn,
    id: fleetManagementId,
  },
  kiss: {
    metadata: kissMetadata,
    en: kissEn,
    id: kissId,
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

export type ProjectCard = ProjectMetadata & { shortDescription: string };

/**
 * Preferred display order for the homepage Featured Projects section.
 * Slugs not listed here will appear after these in their natural order.
 */
const PREFERRED_ORDER: string[] = [
  "fleet-management",
  "ecopos",
  "sti-mobile",
  "kiss",
  "zyparking",
  "kko-paud-semarang",
];

/**
 * Returns the project list augmented with the localized short description,
 * for use by the Projects section's card grid (no file writes).
 */
export function getAllProjectCards(lang: Language): ProjectCard[] {
  const cards = Object.values(projects).map((p) => {
    const content = lang === "id" ? p.id : p.en;
    return { ...p.metadata, shortDescription: content.shortDescription };
  });
  const rank = new Map(PREFERRED_ORDER.map((slug, i) => [slug, i]));
  return cards
    .slice()
    .sort((a, b) => {
      const ra = rank.has(a.slug) ? (rank.get(a.slug) as number) : Number.MAX_SAFE_INTEGER;
      const rb = rank.has(b.slug) ? (rank.get(b.slug) as number) : Number.MAX_SAFE_INTEGER;
      if (ra !== rb) return ra - rb;
      return a.slug.localeCompare(b.slug);
    });
}