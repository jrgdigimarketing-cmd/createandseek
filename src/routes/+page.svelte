<script>
  import AboutSection from '$lib/sections/AboutSection.svelte';
  import CTASection from '$lib/sections/CTASection.svelte';
  import ContactSection from '$lib/sections/ContactSection.svelte';
  import FAQSection from '$lib/sections/FAQSection.svelte';
  import FeaturesSection from '$lib/sections/FeaturesSection.svelte';
  import HeroSection from '$lib/sections/HeroSection.svelte';
  import MapSection from '$lib/sections/MapSection.svelte';
  import ProcessSection from '$lib/sections/ProcessSection.svelte';
  import ServicesSection from '$lib/sections/ServicesSection.svelte';
  import SiteLayout from '$lib/layouts/SiteLayout.svelte';
  import TestimonialsSection from '$lib/sections/TestimonialsSection.svelte';
  import TestimonialBanner from '$lib/sections/TestimonialBanner.svelte';
  import { company } from '$lib/data/company.js';
  import { faq } from '$lib/data/faq.js';
  import { navigation, primaryCta } from '$lib/data/navigation.js';
  import { services } from '$lib/data/services.js';
  import { featuredTestimonial } from '$lib/data/testimonials.js';
  import { site } from '$lib/data/site.js';
  import { buildSeo } from '$lib/utils/seo.js';

  const seo = buildSeo({
    title: 'Cape Town website strategy, design and development',
    description: company.description
  });
  const siteUrl = site.url;
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': `${siteUrl}/#website`,
        url: siteUrl,
        name: company.name,
        description: seo.description,
        inLanguage: 'en-ZA'
      },
      {
        '@type': 'ProfessionalService',
        '@id': `${siteUrl}/#business`,
        name: company.name,
        url: siteUrl,
        description: company.description,
        email: company.email,
        telephone: company.phone,
        areaServed: ['Fish Hoek', 'Cape Town', 'South Africa'],
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Fish Hoek',
          addressRegion: 'Western Cape',
          addressCountry: 'ZA'
        },
        sameAs: [company.whatsapp]
      },
      {
        '@type': 'FAQPage',
        '@id': `${siteUrl}/#faq`,
        mainEntity: faq.map((item) => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer
          }
        }))
      }
    ]
  };
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <link rel="canonical" href={`${seo.url}/`} />
  <meta name="robots" content="index, follow" />
  <meta name="theme-color" content={seo.themeColor} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:image" content={`${siteUrl}${seo.image}`} />
  <meta property="og:image:type" content="image/jpeg" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <meta property="og:url" content={`${seo.url}/`} />
  <meta property="og:site_name" content={seo.siteName} />
  <meta property="og:locale" content={site.locale} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content={seo.twitterCard} />
  <meta name="twitter:title" content={seo.title} />
  <meta name="twitter:description" content={seo.description} />
  <meta name="twitter:image" content={`${siteUrl}${seo.image}`} />
  <meta name="twitter:url" content={`${seo.url}/`} />
  <script type="application/ld+json">{@html JSON.stringify(structuredData)}</script>
</svelte:head>

<SiteLayout {company} {navigation} {primaryCta}>
  <HeroSection {company} />
  <AboutSection />
  <ServicesSection {services} />
  <TestimonialBanner testimonial={featuredTestimonial} />
  <FeaturesSection />
  <ProcessSection />
  <TestimonialsSection />
  <MapSection {company} />
  <CTASection {company} />
  <FAQSection items={faq} />
  <ContactSection {company} />
</SiteLayout>
