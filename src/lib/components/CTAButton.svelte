<script>
  // Small CTA wrapper used anywhere a direct conversion link is needed.
  import Button from './Button.svelte';

  export let href = '#contact';
  export let label = 'Start a project';
</script>

<Button {href}>
  {label}
  <span aria-hidden="true" class="ml-2">→</span>
</Button>
