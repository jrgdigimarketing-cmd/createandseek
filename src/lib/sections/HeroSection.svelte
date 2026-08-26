<script>
  import Button from '../components/Button.svelte';

  export let company;
  const heroImage = '/images/create-and-seek/hero-landscape.jpg';
</script>

<section id="hero" class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
  <div
    class="relative isolate grid overflow-hidden bg-[#2a2e2b]"
  >
    <div class="pointer-events-none sticky top-0 col-start-1 row-start-1 h-[100dvh] min-h-[620px] bg-cover bg-center lg:min-h-[686px]" style={`background-image: url('${heroImage}');`}>
      <div
        class="absolute inset-0"
        style="background-image: linear-gradient(180deg, rgba(37,37,34,0.55) 0%, rgba(37,37,34,0.15) 35%), linear-gradient(0deg, rgba(37,37,34,0.92) 0%, rgba(37,37,34,0.55) 40%, rgba(37,37,34,0) 70%);"
      ></div>
    </div>

    <div class="relative col-start-1 row-start-1 mx-auto min-h-[620px] max-w-[1240px] px-4 py-10 sm:px-6 sm:py-12 lg:min-h-[686px] lg:px-8 lg:py-12">
      <div class="flex h-full flex-col justify-between gap-10">
        <div class="max-w-4xl space-y-6 text-white sm:w-full" style="width: min(100%, calc(100vw - 64px));">
          <p class="text-[9.5px] font-semibold uppercase tracking-[0.24em] text-[rgba(250,247,241,0.52)] sm:text-[11px] sm:tracking-[0.32em]">
            Website discovery, design and development
          </p>

          <h1 class="max-w-3xl pt-4 text-[2.95rem] font-extrabold leading-[0.98] tracking-[-0.025em] text-[rgba(250,247,241,0.92)] sm:pt-8 sm:text-[5rem] sm:tracking-[-0.035em]">
            Seek first.
            <span class="block text-[var(--color-accent)] sm:inline">Create</span>
            <span class="block text-[var(--color-accent)]">with purpose.</span>
          </h1>

          <div class="max-w-[600px] space-y-5 pt-6 sm:w-full sm:pt-12" style="width: min(100%, calc(100vw - 64px));">
            <p class="text-[1.35rem] font-bold leading-[1.12] tracking-[-0.018em] text-[var(--color-bg)] sm:text-[2.28rem] sm:tracking-[-0.022em]">
              Clear websites built around better business decisions.
            </p>
            <p class="max-w-[500px] text-base leading-[1.65] text-[rgba(250,247,241,0.72)] sm:w-full" style="width: min(100%, calc(100vw - 64px));">
              Create and Seek helps owner-led businesses clarify what their website needs to say, then designs, builds and launches a credible, easy-to-manage site.
            </p>
          </div>

          <div class="flex flex-wrap gap-3 pt-2 sm:pt-3">
            <Button href={company.whatsapp} target="_blank" className="min-h-11 bg-[#37463d] px-5 py-3 text-[14.4px] text-white hover:bg-[#2b3831]">
              <img src="/icons/figma/whatsapp.svg" alt="" aria-hidden="true" class="h-4 w-4" />
              <span>Start a WhatsApp conversation</span>
            </Button>
            <Button
              href="#services"
              variant="secondary"
              className="min-h-11 bg-[rgba(250,247,241,0.92)] px-5 py-3 text-[14.4px] font-semibold text-[#252522] ring-[rgba(250,247,241,0.72)] hover:bg-white hover:text-[var(--color-primary)]"
            >
              <span>View services</span>
              <img src="/icons/figma/arrow-right-light.svg" alt="" aria-hidden="true" class="h-3.5 w-3.5" />
            </Button>
          </div>

          <p class="text-sm text-[rgba(250,247,241,0.44)] sm:w-full" style="width: min(100%, calc(100vw - 64px));">
            Based in Fish Hoek, serving Cape Town and surrounding areas.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
