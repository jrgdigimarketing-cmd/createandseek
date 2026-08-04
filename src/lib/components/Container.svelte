<script>
  // Constrains page content to a consistent centered width.
  export let as = 'div';
  export let className = '';
</script>

<svelte:element this={as} class={`mx-auto w-full max-w-[1240px] px-4 sm:px-6 lg:px-8 ${className}`}>
  <slot />
</svelte:element>
