import { NextResponse } from "next/server";
import projects from "@/data/projets.json";

export async function GET() {
  return NextResponse.json(projects);
}
