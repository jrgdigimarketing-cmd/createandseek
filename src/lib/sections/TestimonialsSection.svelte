<script>
  import { work } from '../data/work.js';
</script>

<section id="work" class="border-b border-[var(--color-border)] bg-[rgba(221,209,190,0.4)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
    <div class="max-w-2xl space-y-4">
      <h2 class="text-[clamp(2rem,3.5vw,2.5rem)] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-foreground)]">
        Selected work
      </h2>
      <p class="text-[16.8px] leading-[1.65] text-[var(--color-muted)]">
        A small selection of relevant work and ongoing projects. Each entry states exactly what Create and Seek contributed.
      </p>
    </div>

    <div class="mt-10 grid gap-5 lg:grid-cols-3">
      {#each work as item}
        <article class="overflow-hidden rounded-[12px] border border-[var(--color-border)] bg-white shadow-[0_2px_8px_rgba(55,70,61,0.06)]">
          <div class="flex h-40 items-center justify-center border-b border-[var(--color-border)] bg-[rgba(237,231,218,0.78)] text-center">
            <div class="space-y-3 text-[rgba(37,37,34,0.38)]">
              <div class="mx-auto grid h-11 w-11 place-items-center rounded-full border border-[rgba(37,37,34,0.08)] bg-[rgba(250,247,241,0.4)]">
                <span class="h-4 w-4 rounded-[3px] border border-current"></span>
              </div>
              <p class="text-[10.5px] font-semibold uppercase tracking-[0.18em]">Selected project</p>
            </div>
          </div>

          <div class="space-y-4 p-5">
            <p class="text-[10px] font-bold uppercase tracking-[0.16em] text-[var(--color-muted)]">{item.category}</p>
            <h3 class="text-[20px] font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">{item.title}</h3>
            <p class="text-[15px] leading-7 text-[var(--color-muted)]">{item.summary}</p>
            <p class="inline-flex rounded-full bg-[rgba(196,115,90,0.12)] px-3 py-1 text-[11px] font-medium text-[var(--color-accent)]">
              {item.note}
            </p>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
