<script>
  // Desktop navigation list for anchor links and section jumps.
  export let links = [];
  export let className = '';
  export let linkClass = '';
</script>

<nav aria-label="Primary" class={className}>
  <ul class="flex flex-wrap items-center gap-1.5">
    {#each links as link}
      <li>
        <a href={link.href} class={`text-sm font-medium transition ${linkClass}`}>
          {link.label}
        </a>
      </li>
    {/each}
  </ul>
</nav>
