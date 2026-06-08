import { getAvailableSlugs } from "@/data/projects";
import ProjectClient from "./ProjectClient";

export function generateStaticParams() {
  return getAvailableSlugs().map((slug) => ({
    slug,
  }));
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectClient slug={slug} />;
}
