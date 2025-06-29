import ProjectPage from "@/components/ProjectPage";
import { getProjectById } from "@/lib/projects";
import { notFound } from "next/navigation";

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ projectId: string }>;
}) {
  const { projectId } = await params;
  const project = await getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return <ProjectPage project={project} />;
}
