import { existsSync } from 'node:fs';

const paths = [
  'static/favicons/favicon.svg',
  'static/logos/logo-mark.svg',
  'static/images/hero/hero-placeholder.svg',
  'static/images/services/service-strategy.svg',
  'static/images/services/service-design-system.svg',
  'static/images/services/service-launch.svg',
  'static/images/team/team-placeholder.svg',
  'static/images/testimonials/testimonial-one.svg',
  'static/images/testimonials/testimonial-two.svg',
  'static/images/testimonials/testimonial-three.svg',
  'static/images/gallery/gallery-one.svg',
  'static/images/gallery/gallery-two.svg',
  'static/images/gallery/gallery-three.svg',
  'static/images/gallery/gallery-four.svg',
  'static/images/placeholders/social-share.svg',
  'static/images/placeholders/map-placeholder.svg'
];

const missing = paths.filter((path) => !existsSync(path));

if (missing.length > 0) {
  console.error('Missing placeholder files:');
  for (const file of missing) console.error(`- ${file}`);
  process.exit(1);
}

console.log(`Checked ${paths.length} placeholder files.`);
