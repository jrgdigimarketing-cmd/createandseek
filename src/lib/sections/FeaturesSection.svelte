<script>
  const options = [
    {
      number: '01',
      title: 'A focused credibility site',
      description:
        'Suitable when the primary goal is to explain the business clearly and make contact easy.'
    },
    {
      number: '02',
      title: 'A service or portfolio site',
      description:
        'Useful when a wider set of services, examples or work needs to be organised into one place.'
    },
    {
      number: '03',
      title: 'A website connected to business systems',
      description:
        'Appropriate when bookings, payments, structured content or future tools need room to grow.'
    }
  ];
</script>

<section id="approach" class="border-b border-[var(--color-border)] bg-[rgba(221,209,190,0.28)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="max-w-2xl space-y-4">
      <h2 class="text-4xl font-bold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
        What kind of website do you actually need?
      </h2>
      <p class="text-lg leading-8 text-[var(--color-muted)]">
        The right answer depends on the business, the customer journey and what needs to happen after someone visits.
      </p>
    </div>

    <div class="mt-10 grid gap-5 lg:grid-cols-3">
      {#each options as option}
        <article class="surface-panel bg-white p-6">
          <p class="text-[34px] font-semibold tracking-[-0.05em] text-[var(--color-accent)]">{option.number}</p>
          <h3 class="mt-4 text-xl font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">{option.title}</h3>
          <p class="mt-3 text-[15px] leading-7 text-[var(--color-muted)]">{option.description}</p>
        </article>
      {/each}
    </div>

    <div class="mt-5 rounded-[16px] border border-[var(--color-border)] bg-[rgba(250,247,241,0.7)] p-5 shadow-[var(--color-shadow)]">
      <div class="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <p class="max-w-4xl text-[15px] leading-7 text-[var(--color-foreground)]">
          The goal is not to choose the largest option. It is to choose the smallest appropriate solution that can support the business now and grow where there is evidence to justify it.
        </p>
        <a href="#contact" class="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-strong)]">
          <span>Ask a question</span>
          <span aria-hidden="true">›</span>
        </a>
      </div>
    </div>
  </div>
</section>
