<script>
  // Off-canvas mobile navigation panel with a closing overlay.
  import Button from './Button.svelte';
  import Logo from './Logo.svelte';

  export let id = '';
  export let open = false;
  export let links = [];
  export let primaryCta = { label: 'Contact us', href: '#contact' };
  export let companyName = 'Website Starter Template';
  export let tagline = 'Website discovery, design and development';
</script>

{#if open}
  <div {id} class="fixed inset-0 z-40 lg:hidden">
    <button
      type="button"
      class="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px]"
      aria-label="Close menu overlay"
      on:click={() => (open = false)}
    ></button>

    <div class="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto border-l border-[var(--color-border)] bg-[rgba(250,247,241,0.98)] p-5 shadow-2xl sm:p-6">
      <div class="flex items-center justify-between gap-4">
        <Logo
          {companyName}
          {tagline}
          href="#hero"
          showTagline={false}
          className="shrink-0"
          onClick={() => (open = false)}
        />
        <button
          type="button"
          class="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-[var(--color-border)] text-[var(--color-foreground)] transition hover:bg-black/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-primary)]"
          on:click={() => (open = false)}
        >
          <span class="sr-only">Close menu</span>
          ×
        </button>
      </div>

      <nav class="mt-8">
        <ul class="space-y-2">
          {#each links as link}
            <li>
              <a
                href={link.href}
                class="block rounded-[16px] px-4 py-3 text-[17px] font-medium text-[var(--color-foreground)] transition hover:bg-black/5 focus-visible:bg-black/5 focus-visible:outline-none"
                on:click={() => (open = false)}
              >
                {link.label}
              </a>
            </li>
          {/each}
        </ul>
      </nav>

      <div class="mt-auto border-t border-[var(--color-border)] pt-6">
        <Button href={primaryCta.href} className="w-full" target="_blank">
          {primaryCta.label}
        </Button>
      </div>
    </div>
  </div>
{/if}
