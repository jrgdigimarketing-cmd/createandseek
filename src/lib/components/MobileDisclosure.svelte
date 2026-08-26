<script>
  // Mobile-only disclosure used to condense supporting copy without changing desktop layouts.
  export let summary = 'More details';
</script>

<details class="group rounded-[10px] border border-[rgba(37,37,34,0.08)] bg-[rgba(250,247,241,0.72)]">
  <summary
    class="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-3 text-left text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--color-primary)]"
  >
    <span>{summary}</span>
    <span
      aria-hidden="true"
      class="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-[var(--color-border)] text-xs leading-none text-[var(--color-muted)] transition group-open:rotate-180"
    >
      +
    </span>
  </summary>
  <div class="px-4 pb-4 pt-1">
    <slot />
  </div>
</details>
