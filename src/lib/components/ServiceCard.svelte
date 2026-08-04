<script>
  // Card used to present reusable service offerings with local imagery.
  export let title;
  export let summary;
  export let image;
  export let bullets = [];
</script>

<article class="surface-panel overflow-hidden">
  <img src={image} alt={`${title} placeholder image`} class="h-52 w-full object-cover" />
  <div class="p-6">
    <h3 class="text-xl font-semibold text-slate-900">{title}</h3>
    <p class="mt-3 text-sm leading-7 text-slate-600">{summary}</p>
    <ul class="mt-5 space-y-2 text-sm text-slate-700">
      {#each bullets as bullet}
        <li class="flex items-start gap-3">
          <span class="mt-1 inline-block h-2.5 w-2.5 rounded-full bg-emerald-600"></span>
          <span>{bullet}</span>
        </li>
      {/each}
    </ul>
  </div>
</article>
