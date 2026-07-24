/**
 * Soft-launch surfaces: live on production via direct URL, but not linked
 * from public nav / sitemap / search indexing until ready.
 */
export const HIDDEN_UNTIL_LAUNCH = {
  leadGeneration: true,
  founderLedGrowth: true,
} as const;
