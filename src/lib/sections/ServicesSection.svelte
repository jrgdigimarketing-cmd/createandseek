<script>
  export let services = [];
</script>

<section id="services" class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="max-w-2xl space-y-4">
      <h2 class="text-4xl font-bold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
        Choose the right route to launch
      </h2>
      <p class="text-lg leading-8 text-[var(--color-muted)]">
        Compare the options, understand the trade-offs, and choose the smallest useful route for the project.
      </p>
    </div>

    <div class="mt-10 grid gap-5 lg:grid-cols-3">
      {#each services as service}
        <article class="flex h-full flex-col rounded-[14px] border border-[rgba(37,37,34,0.12)] bg-white p-6 shadow-[0_2px_10px_rgba(37,37,34,0.05)]">
          <div class="inline-flex w-fit rounded-full bg-[rgba(196,115,90,0.1)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-[var(--color-accent)]">
            {service.eyebrow}
          </div>
          <h3 class="mt-4 text-[22px] font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">
            {service.title}
          </h3>
          <p class="mt-3 text-sm uppercase tracking-[0.16em] text-[var(--color-muted)]">Best for</p>
          <p class="mt-2 text-[15px] leading-7 text-[var(--color-muted)]">{service.bestFor}</p>

          <div class="mt-6 space-y-3">
            <p class="text-sm uppercase tracking-[0.16em] text-[var(--color-muted)]">Includes</p>
            <ul class="space-y-2">
              {#each service.includes as include}
                <li class="flex items-start gap-3 text-[15px] leading-6 text-[var(--color-foreground)]">
                  <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[var(--color-accent)]"></span>
                  <span>{include}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="mt-auto pt-6">
            <p class="rounded-[12px] border border-[rgba(37,37,34,0.08)] bg-[rgba(237,231,218,0.42)] px-3 py-3 text-sm text-[var(--color-muted)]">
              {service.note}
            </p>
            <div class="mt-5 flex items-center justify-between gap-4">
              <p class="text-[15px] font-semibold text-[var(--color-foreground)]">{service.price}</p>
              <a href="#contact" class="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-strong)]">
                Discover this +
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>

    <p class="mt-6 max-w-3xl text-center text-sm leading-6 text-[var(--color-muted)] lg:mx-auto">
      Compare packages, customise your own package if required, or request a bespoke discovery and scoping.
    </p>
  </div>
</section>
