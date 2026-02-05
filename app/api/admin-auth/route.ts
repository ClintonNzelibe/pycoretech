import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();

  if (password === process.env.ADMIN_PASSWORD) {
    return NextResponse.json({ authorized: true });
  }

  return NextResponse.json(
    { authorized: false },
    { status: 401 }
  );
}
