<script>
  import Button from './Button.svelte';
  import Container from './Container.svelte';
  import MobileMenu from './MobileMenu.svelte';
  import Navigation from './Navigation.svelte';

  export let company;
  export let navigation = [];
  export let primaryCta = { label: 'Contact us', href: '#contact' };

  let mobileMenuOpen = false;
</script>

<header class="sticky top-0 z-40 border-b border-[rgba(37,37,34,0.1)] bg-[rgba(250,247,241,0.88)] backdrop-blur-md">
  <Container className="flex h-[72px] items-center justify-between gap-4">
    <a href="/" class="inline-flex shrink-0 items-center gap-3 leading-tight text-[var(--color-foreground)]">
      <img src="/assets/create-and-seek-logo-round.svg" alt="" aria-hidden="true" class="h-11 w-11" />
      <span class="flex flex-col gap-0.5 leading-tight">
        <span class="text-[16px] font-semibold tracking-[-0.01em]">{company.name}</span>
        <span class="text-[10.88px] font-normal tracking-[0.015em] text-[var(--color-muted)]">
          {company.tagline}
        </span>
      </span>
    </a>

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
