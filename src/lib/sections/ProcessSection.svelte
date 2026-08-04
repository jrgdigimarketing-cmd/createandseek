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
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div class="max-w-2xl space-y-3">
        <h2 class="text-4xl font-bold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
          A clear path from idea to launch
        </h2>
        <p class="text-lg leading-8 text-[var(--color-muted)]">
          Eighteen years of delivery experience distilled into a simple process that keeps the work clear and the decision-making practical.
        </p>
      </div>
      <Button href="#contact" className="hidden sm:inline-flex bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-strong)]">
        <span>Begin the process</span>
      </Button>
    </div>

    <ol class="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-5">
      {#each steps as step}
        <li class="rounded-[14px] border border-[var(--color-border)] bg-white p-5 shadow-[0_2px_10px_rgba(37,37,34,0.05)]">
          <div class="flex items-start gap-4">
            <span class="grid h-9 w-9 shrink-0 place-items-center rounded-[10px] bg-[rgba(196,115,90,0.14)] text-sm font-semibold text-[var(--color-accent)]">
              {step.number}
            </span>
            <div>
              <h3 class="text-[18px] font-semibold tracking-[-0.03em] text-[var(--color-foreground)]">{step.title}</h3>
              <p class="mt-2 text-[15px] leading-7 text-[var(--color-muted)]">{step.description}</p>
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
