import { NextResponse } from "next/server";

import {
  grantFlgPreviewAccess,
  verifyFlgPreviewToken,
} from "@/lib/flg-preview";

function safeNextPath(value: string | null): string {
  if (!value || !value.startsWith("/") || value.startsWith("//")) {
    return "/growth-playbook/founder-led-growth/pregled";
  }

  return value;
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const key = url.searchParams.get("key")?.trim() ?? "";
  const next = safeNextPath(url.searchParams.get("next"));

  if (!verifyFlgPreviewToken(key)) {
    return NextResponse.json({ error: "Invalid preview key" }, { status: 401 });
  }

  await grantFlgPreviewAccess();
  return NextResponse.redirect(new URL(next, url.origin));
}
