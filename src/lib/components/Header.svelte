<script>
  // Sticky site header that switches between desktop nav and a mobile drawer.
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

<header class="sticky top-0 z-40 border-b border-[var(--color-border)] bg-[rgba(250,247,241,0.88)] backdrop-blur-xl">
  <Container className="flex h-[76px] items-center gap-3 sm:h-[80px] sm:gap-4">
    <Logo companyName={company.name} tagline={company.tagline} className="shrink-0" />

    <div class="hidden flex-1 justify-center lg:flex">
      <Navigation
        {navigation}
        className="rounded-full border border-[var(--color-border)] bg-white/75 px-2 py-1 shadow-[0_12px_28px_rgba(37,37,34,0.04)] backdrop-blur"
        linkClass="block rounded-full px-4 py-2 text-sm text-[rgba(37,37,34,0.72)] hover:bg-[var(--color-bg)] hover:text-[var(--color-foreground)] focus-visible:bg-[var(--color-bg)] focus-visible:text-[var(--color-foreground)]"
      />
    </div>

    <div class="ml-auto hidden sm:block">
      <Button href={primaryCta.href} target="_blank" className="shadow-sm">
        <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/10 text-[10px] font-semibold leading-none">W</span>
        <span>{primaryCta.label}</span>
      </Button>
    </div>

    <button
      type="button"
      class="ml-auto inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-white/80 text-[var(--color-foreground)] shadow-sm transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)] lg:hidden sm:ml-0"
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
