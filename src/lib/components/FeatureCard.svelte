<script>
  // Small feature card for benefits, capabilities, or template highlights.
  export let title;
  export let description;
  export let icon = '/images/placeholders/placeholder-square.svg';
</script>

<article class="surface-panel p-6">
  <img src={icon} alt="" class="h-14 w-14 rounded-2xl border border-slate-200 object-cover" />
  <h3 class="mt-5 text-xl font-semibold text-slate-900">{title}</h3>
  <p class="mt-3 text-sm leading-7 text-slate-600">{description}</p>
</article>
