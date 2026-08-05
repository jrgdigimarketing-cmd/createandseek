<script>
  import FAQAccordion from '../components/FAQAccordion.svelte';

  export let items = [];
</script>

<section id="faq" class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
    <div class="mx-auto max-w-[760px] space-y-4">
      <h2 class="text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-[2.5rem]">
        Questions worth asking before a website project
      </h2>
      <p class="text-[16.8px] leading-[1.65] text-[var(--color-muted)]">
        Straight answers help the first conversation move faster and keep the brief focused on what matters.
      </p>
    </div>
    <div class="mx-auto mt-10 max-w-[760px]">
      <FAQAccordion {items} />
    </div>
  </div>
</section>
