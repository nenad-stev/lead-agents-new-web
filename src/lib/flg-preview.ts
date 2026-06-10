import { cookies } from "next/headers";
import { notFound, redirect } from "next/navigation";

export const FLG_PREVIEW_COOKIE = "flg_playbook_preview";

const PREVIEW_COOKIE_VALUE = "1";
const PREVIEW_MAX_AGE_SECONDS = 60 * 60 * 24 * 90;

export function getFlgPreviewSecret(): string | undefined {
  const secret = process.env.FLG_PREVIEW_SECRET?.trim();
  return secret || undefined;
}

export function verifyFlgPreviewToken(token: string | undefined): boolean {
  if (!token) {
    return false;
  }

  const secret = getFlgPreviewSecret();
  if (!secret) {
    return false;
  }

  return token === secret;
}

export async function hasFlgPreviewAccess(): Promise<boolean> {
  if (!getFlgPreviewSecret()) {
    return false;
  }

  const cookieStore = await cookies();
  return cookieStore.get(FLG_PREVIEW_COOKIE)?.value === PREVIEW_COOKIE_VALUE;
}

export async function grantFlgPreviewAccess(): Promise<void> {
  if (!getFlgPreviewSecret()) {
    return;
  }

  const cookieStore = await cookies();
  cookieStore.set(FLG_PREVIEW_COOKIE, PREVIEW_COOKIE_VALUE, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: PREVIEW_MAX_AGE_SECONDS,
    path: "/",
  });
}

export function buildFlgPreviewGrantUrl(token: string, nextPath: string): string {
  const params = new URLSearchParams({
    key: token,
    next: nextPath,
  });

  return `/api/flg-preview?${params.toString()}`;
}

/** Read-only check: valid preview cookie or one-time token in the URL. */
export async function ensureFlgPreviewAccess(
  previewToken?: string,
): Promise<boolean> {
  if (await hasFlgPreviewAccess()) {
    return true;
  }

  return verifyFlgPreviewToken(previewToken);
}

/**
 * Gate preview pages. Cookie grants are handled by /api/flg-preview because
 * Next.js only allows cookie writes in Route Handlers or Server Actions.
 */
export async function requireFlgPreviewAccess(
  previewToken: string | undefined,
  nextPath: string,
): Promise<void> {
  if (await hasFlgPreviewAccess()) {
    return;
  }

  if (previewToken && verifyFlgPreviewToken(previewToken)) {
    redirect(buildFlgPreviewGrantUrl(previewToken, nextPath));
  }

  notFound();
}
