<script>
  import Button from '../components/Button.svelte';

  export let company;
  const image = '/images/create-and-seek/notebook.jpg';
</script>

<section id="experience" class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
      <div class="overflow-hidden rounded-[14px] bg-[#111] shadow-[var(--color-shadow)]">
        <img src={image} alt="Notebook and pen on a desk" class="h-full w-full object-cover" />
      </div>

      <div class="space-y-5">
        <div class="max-w-xl space-y-4">
          <h2 class="text-4xl font-bold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
            Business experience behind the build
          </h2>
          <p class="text-lg leading-8 text-[var(--color-muted)]">
            Create and Seek is led by James, bringing practical business experience, visual judgment and a clear, hands-on approach to website projects.
          </p>
        </div>

        <p class="max-w-xl text-[15px] leading-7 text-[var(--color-muted)]">
          The work starts by understanding how the business operates, what customers need to know and what the website must help people do. That foundation keeps the design grounded and the project focused on what will matter after launch.
        </p>

        <p class="max-w-xl border-l-4 border-[var(--color-accent)] pl-5 text-[15px] leading-7 text-[var(--color-foreground)]">
          You deal with a real person who remains accountable for the process and explains decisions in plain language.
        </p>

        <Button href={company.whatsapp} target="_blank" className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-strong)]">
          <span>Talk to James</span>
        </Button>
      </div>
    </div>
  </div>
</section>
