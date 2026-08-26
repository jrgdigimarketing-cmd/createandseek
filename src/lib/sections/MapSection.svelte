<script>
  import Button from '../components/Button.svelte';

  export let company;
  const image = '/images/create-and-seek/james-grimstead.jpg';
</script>

<section id="experience" class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
    <div class="grid items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
      <div class="overflow-hidden rounded-[12px] bg-[#111] shadow-[var(--color-shadow)]">
        <img src={image} alt="James Grimstead" loading="lazy" decoding="async" class="aspect-[507/380] h-full w-full object-cover" />
      </div>

      <div class="space-y-5">
        <div class="max-w-xl space-y-4">
          <h2 class="text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-[2.5rem]">
            Business experience behind the build
          </h2>
          <p class="text-[16.8px] leading-[1.65] text-[var(--color-muted)]">
            Create and Seek is led by James, bringing practical business experience, visual judgment and a clear, hands-on approach to website projects.
          </p>
        </div>

        <p class="max-w-xl text-[15.6px] leading-[1.6] text-[var(--color-muted)]">
          The work starts by understanding how the business operates, what customers need to know and what the website must help people do. That foundation keeps the design grounded and the project focused on what will matter after launch.
        </p>

        <p class="max-w-xl border-l-[3px] border-[#9c513e] py-0.5 pl-5 text-[15.6px] leading-[1.6] text-[var(--color-foreground)]">
          You deal with a real person who remains accountable for the process and explains decisions in plain language.
        </p>

        <Button href={company.whatsapp} target="_blank" className="bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-strong)]">
          <img src="/icons/figma/whatsapp.svg" alt="" aria-hidden="true" class="h-4 w-4" />
          <span>Talk to James</span>
        </Button>
      </div>
    </div>
  </div>
</section>
