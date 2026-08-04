<script>
  const image = '/images/create-and-seek/coastal-town.jpg';
</script>

<section id="about" class="border-b border-[var(--color-border)] bg-[rgba(221,209,190,0.28)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
      <div class="space-y-6">
        <p class="section-eyebrow">Why Create and Seek?</p>
        <h2 class="max-w-xl text-4xl font-bold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
          A website should fit the business behind it
        </h2>
        <p class="max-w-xl text-lg leading-8 text-[var(--color-muted)]">
          Most website decisions happen before the right question gets asked: what does the business and its customer actually need? Create and Seek starts there.
        </p>

        <div class="border-l-4 border-[var(--color-accent)] pl-5">
          <p class="max-w-xl text-[15px] leading-7 text-[var(--color-foreground)]">
            Sometimes a self-build is the right answer. When it isn't, Create and Seek provides a guided process from clarity to launch.
          </p>
        </div>

        <a href="#approach" class="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-strong)]">
          <span>Explore the approach</span>
          <span aria-hidden="true">›</span>
        </a>
      </div>

      <div class="overflow-hidden rounded-[14px] bg-[#ede7da] shadow-[var(--color-shadow)]">
        <img src={image} alt="Coastal town nestled against mountains in the Cape region" class="h-full w-full object-cover" />
      </div>
    </div>
  </div>
</section>
