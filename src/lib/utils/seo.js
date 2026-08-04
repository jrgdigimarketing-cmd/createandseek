import { company } from '../data/company.js';
import { defaultSeo } from '../data/seo.js';

export function buildSeo(page = {}) {
  const title = page.title ? `${page.title} | ${company.name}` : defaultSeo.title;

  return {
    ...defaultSeo,
    ...page,
    title,
    description: page.description || defaultSeo.description,
    image: page.image || defaultSeo.image
  };
}
