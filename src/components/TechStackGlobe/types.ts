export interface TechItem {
  name: string;
  category: string;
  slug: string;
  description: string;
  whyUsed?: string;
  myExperience?: string;
}

export const DEFAULT_CATEGORY_COLORS: Record<string, string> = {
  'AI/ML':     'var(--gold-primary, #b37d22)',
  'Backend':   'var(--color-accent-blue, #60a5fa)',
  'Cloud':     'var(--color-green, #4ade80)',
  'Databases': 'var(--color-amber, #fbbf24)',
};
