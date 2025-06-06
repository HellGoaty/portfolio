import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const filePath = path.join(process.cwd(), "data/projects.json");
  const fileContents = await fs.readFile(filePath, "utf8");
  const projects = JSON.parse(fileContents).projects;

  return NextResponse.json(projects);
}
