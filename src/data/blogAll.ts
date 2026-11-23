/** All blog posts copied from the live centralcaliforniasurgery.com/blog (81 posts, newest first).
 *  Text, dates and slugs are unchanged so old links keep working. Post photos still load from the old site's image host. */
import raw from './blogPosts.json';

export type BlogBlock =
  | { t: 'p' | 'h2' | 'h3' | 'h4'; h: string }
  | { t: 'ul' | 'ol'; items: string[] }
  | { t: 'img' | 'video'; src: string }
  | { t: 'link'; href: string; h: string };

export type BlogPost = {
  slug: string;
  title: string;
  img: string;
  date: string; // ISO yyyy-mm-dd
  dateLabel: string;
  category: string;
  excerpt: string;
  minutes: number;
  blocks: BlogBlock[];
};

export const blogCategories = ['Nutrition', 'Recipes', 'Fitness', 'Recovery & Life', 'Stories & News'] as const;

const category = (slug: string): string => {
  if (/^(success-story|congratulations|doctor-of-the-month|provider-spotlight|first-annual|featured-news)/.test(slug)) return 'Stories & News';
  if (/(recipe|keto|product-highlight|seasonal-highlight|breakfast|low-carb|air-fryers|sloppy)/.test(slug)) return 'Recipes';
  if (/(fitness|exercise|core-strength|posture|motivat|sneak|get-back-on-track|health-and-fitness)/.test(slug)) return 'Fitness';
  if (/(diet|protein|vitamin|carbohydrate|milk|calorie|portion|sweetener|lactose|iron|b12|meal|eating|food|substitution|dumping|hypoglycemia|nausea|constipation|probiotic|slider|clear-liquid|weekly-meal|holiday|halloween|valentine|dos-and-donts)/.test(slug)) return 'Nutrition';
  return 'Recovery & Life';
};

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const label = (iso: string) => {
  const [y, m, d] = iso.split('-').map(Number);
  return `${months[m - 1]} ${d}, ${y}`;
};

const words = (b: BlogBlock[]) =>
  b.reduce((n, x) => n + ('h' in x ? x.h.split(/\s+/).length : 'items' in x ? x.items.join(' ').split(/\s+/).length : 0), 0);

const excerptOf = (b: BlogBlock[]) => {
  const p = b.find((x) => x.t === 'p' && 'h' in x && x.h.length > 40);
  const t = p && 'h' in p ? p.h.replace(/^["“]|["”]$/g, '') : '';
  return t.length > 170 ? t.slice(0, 167).replace(/\s+\S*$/, '') + '…' : t;
};

export const blogPosts: BlogPost[] = (raw as any[]).map((p) => ({
  slug: p.slug,
  title: p.title,
  img: p.img || '',
  date: p.date,
  dateLabel: label(p.date),
  category: category(p.slug),
  excerpt: excerptOf(p.blocks),
  minutes: Math.max(1, Math.round(words(p.blocks) / 200)),
  blocks: p.blocks,
}));
