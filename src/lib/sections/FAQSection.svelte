<script>
  import FAQAccordion from '../components/FAQAccordion.svelte';

  export let items = [];
</script>

<section id="faq" class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="max-w-3xl space-y-4">
      <h2 class="text-4xl font-bold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
        Questions worth asking before a website project
      </h2>
      <p class="text-lg leading-8 text-[var(--color-muted)]">
        Straight answers help the first conversation move faster and keep the brief focused on what matters.
      </p>
    </div>
    <div class="mt-10">
      <FAQAccordion {items} />
    </div>
  </div>
</section>
