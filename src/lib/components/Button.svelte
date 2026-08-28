<script>
  // Reusable button and link styling for primary, secondary, and ghost actions.
  export let href = '';
  export let variant = 'primary';
  export let type = 'button';
  export let className = '';
  export let target = undefined;
  export let rel = undefined;
  export let analyticsEvent = undefined;

  const styles = {
    primary:
      'bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-strong)] focus-visible:outline-[var(--color-primary)]',
    secondary:
      'bg-[rgba(250,247,241,0.08)] text-[var(--color-foreground)] ring-1 ring-inset ring-[rgba(250,247,241,0.28)] hover:bg-[rgba(250,247,241,0.14)] focus-visible:outline-[var(--color-border)]',
    ghost:
      'bg-transparent text-[var(--color-foreground)] hover:bg-black/5 focus-visible:outline-[var(--color-border)]'
  };

  const baseClasses =
    'inline-flex items-center justify-center gap-2 rounded-[8px] px-5 py-3 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
</script>

{#if href}
  <a
    href={href}
    {target}
    rel={rel ?? (target === '_blank' ? 'noreferrer noopener' : undefined)}
    data-analytics-event={analyticsEvent}
    class={`${baseClasses} ${styles[variant]} ${className}`}
  >
    <slot />
  </a>
{:else}
  <button
    {type}
    class={`${baseClasses} ${styles[variant]} ${className}`}
  >
    <slot />
  </button>
{/if}
