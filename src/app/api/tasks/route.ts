import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const body = await req.json();
  } catch (err) {
    return new Response("Invalid request", { status: 400 });
  }
}
