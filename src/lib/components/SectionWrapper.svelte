<script>
  // Shared section shell that keeps headings, spacing, and alignment consistent.
  import Container from './Container.svelte';

  export let eyebrow = '';
  export let title = '';
  export let description = '';
  export let align = 'center';

  $: wrapperClasses = align === 'center' ? 'stack-gap items-center text-center' : 'stack-gap';
  $: titleClasses = `section-title max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`;
  $: descriptionClasses = `body-large max-w-3xl ${align === 'center' ? 'mx-auto' : ''}`;
</script>

<Container className="section-padding">
  <div class={wrapperClasses}>
    {#if eyebrow}
      <p class="section-eyebrow">{eyebrow}</p>
    {/if}

    {#if title}
      <h2 class={titleClasses}>{title}</h2>
    {/if}

    {#if description}
      <p class={descriptionClasses}>{description}</p>
    {/if}

    <slot />
  </div>
</Container>
