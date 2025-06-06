// lib/projects.js
import path from "path";
import { promises as fs } from "fs";

export interface Project {
  id: string;
  title: string;
  description: string;
  technos: string[];
  screenshots: string[];
}

export async function getAllProjects(): Promise<Project[]> {
  const filePath = path.join(process.cwd(), "data/projects.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const projects: Project[] = JSON.parse(fileContents).projects;
  return projects;
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  const projects = await getAllProjects();
  return projects.find((project: Project) => project.id === id);
}
