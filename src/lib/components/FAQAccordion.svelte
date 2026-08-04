<script>
  // Accessible details/summary accordion for frequently asked questions.
  export let items = [];
</script>

<div class="space-y-0">
  {#each items as item}
    <details class="group border-b border-[var(--color-border)] py-5">
      <summary class="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-[15px] font-medium text-[var(--color-foreground)]">
        <span>{item.question}</span>
        <span
          aria-hidden="true"
          class="grid h-8 w-8 place-items-center rounded-full border border-[var(--color-border)] text-sm text-[var(--color-muted)] transition group-open:rotate-180"
        >
          ↓
        </span>
      </summary>
      <div class="max-w-3xl pt-4 text-[15px] leading-7 text-[var(--color-muted)]">
        {item.answer}
      </div>
    </details>
  {/each}
</div>
