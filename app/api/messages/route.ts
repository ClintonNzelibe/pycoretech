import { NextResponse } from "next/server";

let messages: any[] = [];

export async function POST(req: Request) {
  const body = await req.json();
  const { name, email, phone, message } = body;

  if (!name || !message) {
    return NextResponse.json({ error: "Invalid data" }, { status: 400 });
  }

  const entry = {
    id: Date.now(),
    name,
    email,
    phone,
    message,
    createdAt: new Date().toISOString(),
  };

  messages.unshift(entry);

  // ✅ WHATSAPP MESSAGE
  const whatsappText = `
📩 New Contact Message

👤 Name: ${name}
📧 Email: ${email || "N/A"}
📞 Phone: ${phone || "N/A"}

📝 Message:
${message}
`;

  const whatsappUrl = `https://wa.me/2347034522313?text=${encodeURIComponent(
    whatsappText
  )}`;

  return NextResponse.json({
    success: true,
    whatsapp: whatsappUrl,
  });
}

export async function GET() {
  return NextResponse.json(messages);
}
