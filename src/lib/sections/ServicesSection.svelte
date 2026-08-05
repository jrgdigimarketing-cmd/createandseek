<script>
  export let services = [];
</script>

<section id="services" class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
    <div class="max-w-[560px]">
      <h2 class="text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-[2.5rem]">
        Choose the right route to launch
      </h2>
    </div>

    <div class="mt-12 grid gap-5 lg:grid-cols-3">
      {#each services as service}
        <article class="flex h-full flex-col rounded-[12px] border border-[rgba(37,37,34,0.12)] bg-white p-[29px] shadow-[0_2px_8px_rgba(55,70,61,0.08)] first:border-[rgba(55,70,61,0.4)]">
          <div class="inline-flex w-fit rounded-full bg-[rgba(55,70,61,0.1)] px-3 py-1 text-[10.88px] font-bold uppercase leading-[1.5] tracking-[0.1em] text-[var(--color-primary)]">
            {service.eyebrow}
          </div>
          <h3 class="mt-5 text-[16.8px] font-semibold leading-[1.38] text-[var(--color-foreground)]">
            {service.title}
          </h3>
          <p class="mt-5 text-[10.88px] font-bold uppercase leading-[1.5] tracking-[0.1em] text-[rgba(37,37,34,0.5)]">Best for</p>
          <p class="mt-2 text-[14.4px] leading-[1.6] text-[var(--color-foreground)]">{service.bestFor}</p>

          <div class="mt-5 space-y-3">
            <p class="text-[10.88px] font-bold uppercase leading-[1.5] tracking-[0.1em] text-[rgba(37,37,34,0.5)]">Includes</p>
            <ul class="space-y-2">
              {#each service.includes as include}
                <li class="flex items-start gap-3 text-[14.4px] leading-[1.6] text-[var(--color-foreground)]">
                  <span class="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-accent)]"></span>
                  <span>{include}</span>
                </li>
              {/each}
            </ul>
          </div>

          <div class="mt-auto pt-5">
            <p class="rounded-[8px] border border-[rgba(37,37,34,0.08)] bg-[rgba(237,231,218,0.5)] px-3 py-3 text-[13.6px] leading-[1.55] text-[var(--color-muted)]">
              {service.note}
            </p>
            <div class="mt-5 flex items-center justify-between gap-4">
              <p class="text-[14.4px] font-semibold text-[var(--color-foreground)]">{service.price}</p>
              <a href="#contact" class="text-sm font-medium text-[var(--color-primary)] hover:text-[var(--color-primary-strong)]">
                Discover this +
              </a>
            </div>
          </div>
        </article>
      {/each}
    </div>

    <p class="mt-6 max-w-3xl text-center text-[13.6px] leading-6 text-[var(--color-muted)] lg:mx-auto">
      Compare packages, customise your own package if required, or request a bespoke discovery and scoping.
    </p>
  </div>
</section>
