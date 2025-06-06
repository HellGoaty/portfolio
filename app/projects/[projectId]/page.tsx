import ProjectPage from "@/components/ProjectPage";
import { getProjectById } from "@/lib/projects";

// export const dynamic = "force-dynamic"; // utile si le JSON change souvent

export default async function ProjectDetailPage({
  params,
}: {
  params: { projectId: string };
}) {
  const project = await getProjectById(params.projectId);

  return <ProjectPage project={project} />;
}
