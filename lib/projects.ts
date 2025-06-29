import path from "path";
import fs from "fs/promises";
import type { Project } from "@/types";

export async function getAllProjects() {
  try {
    const filePath = path.join(process.cwd(), "data", "projets.json");
    const fileContents = await fs.readFile(filePath, "utf8");
    const data = JSON.parse(fileContents);

    if (!Array.isArray(data)) throw new Error("Invalid data format");

    return data;
  } catch (error) {
    console.error("Error reading projets.json:", error);
    return [];
  }
}

export async function getProjectById(id: string): Promise<Project | null> {
  const projects = await getAllProjects();
  const project = projects.find((p) => p.id === id);
  return project || null;
}
