<script>
  export let testimonial;
</script>

<section class="border-b border-[var(--color-border)] bg-[var(--color-primary)] text-[var(--color-bg)]">
  <div class="mx-auto max-w-[1240px] px-4 py-14 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
    <div class="mx-auto max-w-[860px] text-center">
      <p class="text-[2.25rem] leading-none text-[var(--color-accent)]" aria-hidden="true">“</p>
      <blockquote class="mt-4 text-[1.35rem] font-medium leading-[1.45] tracking-[-0.01em] sm:text-[1.75rem]">
        {testimonial.quote}
      </blockquote>
      <footer class="mt-7 text-sm text-[rgba(250,247,241,0.72)]">
        <cite class="not-italic font-semibold text-[var(--color-bg)]">{testimonial.name}</cite>
        <span aria-hidden="true"> · </span>
        <span>{testimonial.role}</span>
      </footer>
    </div>
  </div>
</section>
