<script>
  import { work } from '../data/work.js';
</script>

<section id="work" class="border-b border-[var(--color-border)] bg-[rgba(221,209,190,0.3)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
    <div class="mx-auto max-w-[560px] space-y-4 text-center">
      <h2 class="text-[2rem] font-bold leading-[1.1] tracking-normal text-[var(--color-foreground)] sm:text-[2.5rem]">
        Selected work
      </h2>
      <p class="text-[16.8px] leading-[1.65] text-[var(--color-muted)]">
        A small selection of relevant work and ongoing projects. Each entry states exactly what Create and Seek contributed.
      </p>
    </div>

    <div class="mt-12 flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:gap-0">
      {#each work as item, index}
        <div
          class={`w-full max-w-[351px] ${
            index === 0
              ? 'lg:mr-[-120px] lg:w-[398px] lg:-rotate-6'
              : index === 2
                ? 'lg:w-[398px] lg:rotate-6'
                : 'lg:z-10 lg:mr-[-120px] lg:w-[351px]'
          }`}
        >
          <article class="flex h-full min-h-[468px] flex-col overflow-hidden rounded-[12px] border border-[rgba(37,37,34,0.12)] bg-[#faf7f1] shadow-[0_14px_30px_-10px_rgba(0,0,0,0.12)]">
            <div class="flex h-[262px] flex-col items-center justify-center gap-2 bg-[#ede7da] px-6 text-center">
              <div class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[rgba(94,91,87,0.25)]">
                <span class="h-3 w-3 rounded-full bg-[rgba(94,91,87,0.2)]"></span>
              </div>
              <p class="text-[11.52px] font-semibold uppercase leading-[1.5] tracking-[0.09em] text-[rgba(94,91,87,0.6)]">
                Image placeholder
              </p>
              <p class="text-[12px] leading-[1.5] text-[rgba(94,91,87,0.5)]">
                Approved project material only
              </p>
            </div>

            <div class="flex flex-1 flex-col gap-3 p-6">
              <p class="text-[10.88px] font-bold uppercase leading-[1.5] tracking-[0.09em] text-[var(--color-muted)]">
                {item.category}
              </p>
              <h3 class="text-[16.8px] font-semibold leading-[1.38] tracking-normal text-[var(--color-foreground)]">
                {item.title}
              </h3>
              {#if item.summary}
                <p class="text-[14.4px] leading-[1.5] text-[var(--color-muted)]">{item.summary}</p>
              {/if}

              <div class="mt-auto pt-2">
                <p class="inline-flex max-w-full items-center gap-1.5 rounded-full bg-[rgba(237,231,218,0.8)] px-3 py-1.5 text-[11.52px] font-medium leading-[1.5] text-[var(--color-muted)]">
                  <span class="h-1.5 w-1.5 shrink-0 rounded-full bg-[rgba(156,81,62,0.6)]"></span>
                  <span>{item.note}</span>
                </p>
              </div>
            </div>
          </article>
        </div>
      {/each}
    </div>
  </div>
</section>
