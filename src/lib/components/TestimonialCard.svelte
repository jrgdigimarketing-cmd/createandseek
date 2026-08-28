<script>
  // Lightweight testimonial card with placeholder avatar support.
  export let name;
  export let role;
  export let quote;
  export let image;
</script>

<article class="surface-panel p-6">
  <div class="flex items-start gap-4">
    <img src={image} alt={`${name} headshot`} class="h-14 w-14 rounded-2xl object-cover ring-1 ring-slate-200" />
    <div>
      <h3 class="font-semibold text-slate-900">{name}</h3>
      <p class="text-sm text-slate-500">{role}</p>
    </div>
  </div>
  <p class="mt-5 text-base leading-7 text-slate-700">“{quote}”</p>
</article>
