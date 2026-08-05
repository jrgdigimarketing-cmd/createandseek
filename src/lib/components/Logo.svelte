<script>
  // Brand mark and wordmark used in the header and footer.
  export let companyName = 'Website Starter Template';
  export let tagline = 'Website discovery, design and development';
  export let href = '/';
  export let inverse = false;
  export let showTagline = true;
  export let showMark = true;
  export let className = '';
  export let markSrc = '/logos/logo-mark.svg';
</script>

<a
  href={href}
  class={`inline-flex items-center gap-3 leading-tight ${inverse ? 'text-[var(--color-bg)]' : 'text-[var(--color-foreground)]'} ${className}`}
>
  {#if showMark}
    <span
      class={`grid h-11 w-11 shrink-0 place-items-center rounded-[14px] shadow-[0_10px_24px_rgba(37,37,34,0.08)] ring-1 ring-inset ${
        inverse
          ? 'bg-[rgba(255,255,255,0.08)] ring-[rgba(250,247,241,0.12)]'
          : 'bg-[var(--color-primary)] ring-[rgba(37,37,34,0.08)]'
      }`}
    >
      <img src={markSrc} alt="" aria-hidden="true" class="h-6 w-6" />
    </span>
  {/if}

  <span class="flex flex-col gap-0.5 leading-tight">
    <span class="text-[16px] font-semibold tracking-[-0.01em]">{companyName}</span>
    {#if showTagline}
      <span
        class={`text-[10.88px] font-normal tracking-[0.015em] ${
          inverse ? 'text-[rgba(250,247,241,0.52)]' : 'text-[var(--color-muted)]'
        }`}
      >
        {tagline}
      </span>
    {/if}
  </span>
</a>
