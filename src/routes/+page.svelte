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
  import { company } from '$lib/data/company.js';
  import { faq } from '$lib/data/faq.js';
  import { navigation, primaryCta } from '$lib/data/navigation.js';
  import { services } from '$lib/data/services.js';
  import { buildSeo } from '$lib/utils/seo.js';

  const seo = buildSeo({
    title: 'Home',
    description: company.description
  });
</script>

<svelte:head>
  <title>{seo.title}</title>
  <meta name="description" content={seo.description} />
  <meta name="theme-color" content={seo.themeColor} />
  <meta property="og:title" content={seo.title} />
  <meta property="og:description" content={seo.description} />
  <meta property="og:image" content={seo.image} />
  <meta property="og:site_name" content={seo.siteName} />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content={seo.twitterCard} />
  <meta name="twitter:title" content={seo.title} />
  <meta name="twitter:description" content={seo.description} />
  <meta name="twitter:image" content={seo.image} />
</svelte:head>

<SiteLayout {company} {navigation} {primaryCta}>
  <HeroSection {company} />
  <AboutSection />
  <ServicesSection {services} />
  <FeaturesSection />
  <ProcessSection />
  <TestimonialsSection />
  <MapSection {company} />
  <FAQSection items={faq} />
  <CTASection {company} />
  <ContactSection {company} />
</SiteLayout>
