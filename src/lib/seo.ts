import { site } from '@/data/site';

export function buildTitle(title?: string) {
  return title ? `${title} | ${site.name}` : site.seo.title;
}
