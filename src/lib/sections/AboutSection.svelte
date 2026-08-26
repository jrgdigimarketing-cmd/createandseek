<script>
  const image = '/images/create-and-seek/coastal-town.jpg';
</script>

<section id="about" class="border-b border-[var(--color-border)] bg-[rgba(221,209,190,0.4)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
    <div class="grid items-center gap-8 lg:grid-cols-2 lg:gap-20">
      <div class="w-full space-y-6">
        <h2 class="max-w-xl text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-[2.5rem]">
          A website should fit the business behind it
        </h2>
        <p class="max-w-[480px] text-[17.6px] leading-[1.65] text-[var(--color-muted)] sm:w-full" style="width: min(100%, calc(100vw - 48px));">
          Most website decisions happen before the right question gets asked: what does the business and its customer actually need? Create and Seek starts there.
        </p>

        <div class="border-l-[3px] border-[#9c513e] py-0.5 pl-5">
          <p class="max-w-xl text-[15.6px] leading-[1.6] text-[var(--color-foreground)] sm:w-full" style="width: min(100%, calc(100vw - 72px));">
            Sometimes a self-build is the right answer. When it isn't, Create and Seek provides a guided process from clarity to launch.
          </p>
        </div>

        <a href="#approach" class="inline-flex items-center gap-1.5 rounded-[4px] text-[14.4px] font-semibold text-[var(--color-primary)] hover:text-[var(--color-primary-strong)]">
          <span>Explore the approach</span>
          <img src="/icons/figma/arrow-right-green.svg" alt="" aria-hidden="true" class="h-3.5 w-3.5" />
        </a>
      </div>

      <div class="overflow-hidden rounded-[12px] bg-[#ede7da] shadow-[var(--color-shadow)]">
        <img src={image} alt="Coastal town nestled against mountains in the Cape region" loading="lazy" decoding="async" class="aspect-[507/380] h-full w-full object-cover" />
      </div>
    </div>
  </div>
</section>
