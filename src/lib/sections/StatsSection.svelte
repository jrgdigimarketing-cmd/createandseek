<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';
  export let stats = [];
</script>

<section id="stats">
  <SectionWrapper
    eyebrow="Stats"
    title="A handy block for metrics and credibility"
    description="Use this section when a future client needs a proof-based layout with numbers, badges, or milestones."
  >
    <div class="grid gap-4 sm:grid-cols-3">
      {#each stats as stat}
        <div class="surface-panel p-6 text-center">
          <p class="text-4xl font-semibold text-slate-900">{stat.value}</p>
          <p class="mt-2 text-sm text-slate-600">{stat.label}</p>
        </div>
      {/each}
    </div>
  </SectionWrapper>
</section>
