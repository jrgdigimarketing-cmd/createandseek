<script>
  import Button from '../components/Button.svelte';
  import Container from '../components/Container.svelte';

  export let company;
  const heroImage = '/images/create-and-seek/hero-landscape.jpg';
</script>

<section id="hero" class="border-b border-[var(--color-border)] bg-[var(--color-bg)]">
  <Container className="py-4 sm:py-6">
    <div class="relative overflow-hidden bg-[#252522]">
      <img src={heroImage} alt="" class="absolute inset-0 h-full w-full object-cover" />
      <div
        class="absolute inset-0"
        style="background-image: linear-gradient(180deg, rgba(37,37,34,0.5) 0%, rgba(37,37,34,0.2) 34%, rgba(37,37,34,0.9) 100%);"
      ></div>

      <div class="relative min-h-[620px] px-4 py-10 sm:px-8 sm:py-12 lg:min-h-[686px] lg:px-12 lg:py-12">
        <div class="flex h-full flex-col justify-between gap-10">
          <div class="max-w-4xl space-y-6 text-white">
            <p class="text-[11px] font-semibold uppercase tracking-[0.32em] text-[rgba(250,247,241,0.52)]">
              Website discovery, design and development
            </p>

            <h1 class="max-w-3xl text-[clamp(3.1rem,7vw,5.4rem)] font-extrabold leading-[0.92] tracking-[-0.07em] text-[rgba(250,247,241,0.94)]">
              Seek first.
              <span class="text-[var(--color-accent)]">Create</span>
              with purpose.
            </h1>

            <div class="max-w-2xl space-y-5">
              <p class="text-[clamp(1.5rem,3vw,2.25rem)] font-semibold leading-[1.12] tracking-[-0.04em] text-white">
                Clear websites built around better business decisions.
              </p>
              <p class="max-w-xl text-base leading-7 text-[rgba(250,247,241,0.74)] sm:text-lg">
                Create and Seek helps owner-led businesses clarify what their website needs to say, then designs, builds and launches a credible, easy-to-manage site.
              </p>
            </div>

            <div class="flex flex-wrap gap-3 pt-2">
              <Button href={company.whatsapp} target="_blank" className="bg-[#37463d] text-white hover:bg-[#2b3831]">
                <span class="inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/12 text-[10px] font-semibold leading-none">W</span>
                <span>Start a WhatsApp conversation</span>
              </Button>
              <Button
                href="#services"
                variant="secondary"
                className="bg-[rgba(250,247,241,0.08)] text-white ring-[rgba(250,247,241,0.32)] hover:bg-[rgba(250,247,241,0.12)]"
              >
                <span>View services</span>
                <span aria-hidden="true">›</span>
              </Button>
            </div>

            <p class="text-sm text-[rgba(250,247,241,0.44)]">
              Based in Fish Hoek, serving Cape Town and surrounding areas.
            </p>
          </div>
        </div>
      </div>
    </div>
  </Container>
</section>
