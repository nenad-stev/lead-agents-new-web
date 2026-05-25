"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "flg_email";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function LockIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      aria-hidden
    >
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function LessonLockBadge() {
  const [isUnlocked, setIsUnlocked] = useState<boolean | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    setIsUnlocked(Boolean(stored && isValidEmail(stored)));
  }, []);

  if (isUnlocked === null || isUnlocked) {
    return null;
  }

  return (
    <span
      className="inline-flex items-center gap-1 text-muted-subtle"
      title="Email required"
      aria-label="Locked"
    >
      <LockIcon />
    </span>
  );
}
