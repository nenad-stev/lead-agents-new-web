import { NextResponse } from "next/server";

const FLG_WAITLIST_WEBHOOK_URL =
  process.env.FLG_WAITLIST_WEBHOOK_URL ??
  "https://hook.eu2.make.com/7ico7iyhtxe1ngrajmgf3yljgenq9je6";

type WaitlistPayload = {
  email?: string;
  locale?: string;
  page?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: WaitlistPayload;

  try {
    body = (await request.json()) as WaitlistPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const email = body.email?.trim() ?? "";

  if (!email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid email" }, { status: 400 });
  }

  try {
    const webhookResponse = await fetch(FLG_WAITLIST_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        locale: body.locale ?? "sr",
        page: body.page ?? "",
        source: "founder-led-growth-playbook-waitlist",
        submittedAt: new Date().toISOString(),
      }),
    });

    if (!webhookResponse.ok) {
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  } catch {
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
