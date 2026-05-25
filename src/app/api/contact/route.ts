import { NextResponse } from "next/server";

import { contactInfo } from "@/data/contact";

type ContactPayload = {
  name?: string;
  email?: string;
  message?: string;
  locale?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(request: Request) {
  let body: ContactPayload;

  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const message = body.message?.trim() ?? "";

  if (!name || !email || !isValidEmail(email)) {
    return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
  }

  // Hook for email provider (Resend, SendGrid, etc.) via CONTACT_WEBHOOK_URL
  const webhookUrl = process.env.CONTACT_WEBHOOK_URL;

  if (webhookUrl) {
    try {
      const webhookResponse = await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          message: message || "",
          locale: body.locale ?? "sr",
          to: contactInfo.email,
          submittedAt: new Date().toISOString(),
          source: "lead-agents-new-web",
        }),
      });

      if (!webhookResponse.ok) {
        return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
      }
    } catch {
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  } else {
    console.info("[contact] new submission", {
      name,
      email,
      message,
      locale: body.locale,
      to: contactInfo.email,
    });
  }

  return NextResponse.json({ ok: true });
}
