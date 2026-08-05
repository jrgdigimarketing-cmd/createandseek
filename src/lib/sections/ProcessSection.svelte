<script>
  import Button from '../components/Button.svelte';

  const steps = [
    {
      number: 'D',
      title: 'Discover',
      description: 'Understand the brief, customer journey, and the content problem before anything is designed.'
    },
    {
      number: 'P',
      title: 'Plan',
      description: 'Agree the structure, set the page order, and define the route that gives the client the most value.'
    },
    {
      number: 'C',
      title: 'Create',
      description: 'Develop the agreed pages, copy direction, imagery and content hierarchy with room for iteration.'
    },
    {
      number: 'R',
      title: 'Review',
      description: 'Check the build, gather feedback, and tune the details before the site is marked ready.'
    },
    {
      number: 'L',
      title: 'Launch',
      description: 'Connect the approved pages, confirm the setup, and hand over a site that is ready to go live.'
    }
  ];
</script>

<section id="process" class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="max-w-2xl space-y-3">
        <h2 class="text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-[2.5rem]">
          A clear path from idea to launch
        </h2>
        <p class="text-[16.8px] leading-[1.65] text-[var(--color-muted)]">
          Eighteen years of delivery experience distilled into a simple process that keeps the work clear and the decision-making practical.
        </p>
      </div>
      <Button href="#contact" className="hidden sm:inline-flex bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-strong)]">
        <span>Begin the process</span>
      </Button>
    </div>

    <ol class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {#each steps as step}
        <li class="rounded-[12px] border border-[var(--color-border)] bg-white p-5 shadow-[0_2px_8px_rgba(55,70,61,0.06)]">
          <div class="flex items-start gap-4">
            <span class="grid h-8 w-8 shrink-0 place-items-center rounded-[8px] bg-[rgba(196,115,90,0.14)] text-[12px] font-semibold text-[var(--color-accent)]">
              {step.number}
            </span>
            <div>
              <h3 class="text-[16px] font-semibold tracking-[-0.02em] text-[var(--color-foreground)]">{step.title}</h3>
              <p class="mt-2 text-[14px] leading-[1.55] text-[var(--color-muted)]">{step.description}</p>
            </div>
          </div>
        </li>
      {/each}
    </ol>

    <p class="mt-4 text-sm leading-6 text-[var(--color-muted)]">
      Efficient delivery only works when design, content and decision-making stay aligned from the beginning.
    </p>
  </div>
</section>
