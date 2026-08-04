<script>
  // Generic content card for sections that need a consistent surface.
  export let className = '';
</script>

<article class={`surface-panel p-6 ${className}`}>
  <slot />
</article>
