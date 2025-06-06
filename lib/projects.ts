import path from "path";
import { promises as fs } from "fs";
import { Project } from "@/types";

export async function getAllProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), "data/projects.json");

  try {
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);
    if (!Array.isArray(data.projects)) throw new Error("Invalid data format");

    return data.projects as Project[];
  } catch (error) {
    console.error("Error reading projects.json:", error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getAllProjects();
  return projects.find((project) => project.id === id);
}
