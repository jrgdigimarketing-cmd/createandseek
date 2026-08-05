<script>
  import Button from './Button.svelte';
  import Container from './Container.svelte';
  import Logo from './Logo.svelte';
  import MobileMenu from './MobileMenu.svelte';
  import Navigation from './Navigation.svelte';

  export let company;
  export let navigation = [];
  export let primaryCta = { label: 'Contact us', href: '#contact' };

  let mobileMenuOpen = false;
</script>

<header class="sticky top-0 z-40 border-b border-[rgba(37,37,34,0.1)] bg-[var(--color-bg)]">
  <Container className="flex h-[72px] items-center justify-between gap-4">
    <Logo companyName={company.name} tagline={company.tagline} className="shrink-0" showMark={false} />

    <div class="hidden flex-1 justify-center lg:flex">
      <Navigation
        links={navigation}
        className="gap-5"
        linkClass="block rounded-[4px] px-1 py-0.5 text-sm font-medium text-[rgba(37,37,34,0.7)] hover:text-[var(--color-foreground)] focus-visible:text-[var(--color-foreground)]"
      />
    </div>

    <div class="ml-auto hidden sm:block">
      <Button href={primaryCta.href} target="_blank" className="min-h-10 px-4 py-2.5 text-sm">
        <img src="/icons/figma/whatsapp.svg" alt="" aria-hidden="true" class="h-4 w-4" />
        <span>{primaryCta.label}</span>
      </Button>
    </div>

    <button
      type="button"
      class="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[var(--color-border)] bg-white/70 text-[var(--color-foreground)] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] lg:hidden sm:ml-0"
      aria-expanded={mobileMenuOpen}
      aria-controls="mobile-menu"
      aria-label="Open menu"
      on:click={() => (mobileMenuOpen = true)}
    >
      <span class="flex flex-col gap-1.5">
        <span class="h-0.5 w-5 rounded-full bg-current"></span>
        <span class="h-0.5 w-5 rounded-full bg-current"></span>
        <span class="h-0.5 w-3.5 rounded-full bg-current"></span>
      </span>
    </button>
  </Container>
</header>

<MobileMenu
  id="mobile-menu"
  bind:open={mobileMenuOpen}
  links={navigation}
  {primaryCta}
  companyName={company.name}
  tagline={company.tagline}
/>
