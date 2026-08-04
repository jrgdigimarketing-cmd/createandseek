<script>
  import SectionWrapper from '../components/SectionWrapper.svelte';

  const items = [
    '/images/gallery/gallery-one.svg',
    '/images/gallery/gallery-two.svg',
    '/images/gallery/gallery-three.svg',
    '/images/gallery/gallery-four.svg'
  ];
</script>

<section id="gallery">
  <SectionWrapper
    eyebrow="Gallery"
    title="Placeholder visual grid"
    description="This section is ready for future photography, product shots, or project highlights."
  >
    <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {#each items as item, index}
        <figure class="surface-panel overflow-hidden p-3">
          <img src={item} alt={`Gallery placeholder ${index + 1}`} class="h-56 w-full rounded-[1.35rem] object-cover" />
        </figure>
      {/each}
    </div>
  </SectionWrapper>
</section>
