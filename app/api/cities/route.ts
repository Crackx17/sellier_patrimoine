// app/api/cities/route.ts
import { NextResponse } from "next/server";

const BASE_URL = process.env.NEXT_PUBLIC_APIMO_API_BASE_URL;
const AUTH_HEADER = `Basic ${Buffer.from(process.env.APIMO_CREDENTIALS!).toString("base64")}`;

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Missing query parameter" }, { status: 400 });
  }

  try {
    const response = await fetch(`${BASE_URL}/locations/cities?query=${query}`, {
      headers: {
        Authorization: AUTH_HEADER,
        Accept: "application/json",
      },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch cities: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
