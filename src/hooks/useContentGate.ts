"use client";

import { useEffect, useState } from "react";

const STORAGE_KEY = "flg_email";

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function useContentGate() {
  const [isUnlocked, setIsUnlocked] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored && isValidEmail(stored)) {
      setIsUnlocked(true);
    }
  }, []);

  function unlock(email: string): boolean {
    if (!isValidEmail(email)) return false;
    localStorage.setItem(STORAGE_KEY, email);
    setIsUnlocked(true);
    return true;
  }

  return { isUnlocked, unlock };
}
