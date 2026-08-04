<script>
  import Button from '../components/Button.svelte';

  export let company;
</script>

<section id="contact" class="border-b border-[var(--color-border)] bg-[rgba(221,209,190,0.28)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
    <div class="mx-auto max-w-[760px] text-center">
      <h2 class="text-4xl font-bold tracking-[-0.04em] text-[var(--color-foreground)] sm:text-5xl">
        Ready to make sense of your website?
      </h2>
      <p class="mt-5 text-lg leading-8 text-[var(--color-muted)]">
        Start with a WhatsApp message. Create and Seek will explain the next step and provide the onboarding questionnaire.
      </p>

      <Button href={company.whatsapp} target="_blank" className="mt-8 bg-[var(--color-primary)] text-white hover:bg-[var(--color-primary-strong)]">
        <span>Start a WhatsApp conversation</span>
      </Button>

      <div class="mt-6 space-y-2">
        <a href={`tel:${company.phone.replace(/\s/g, '')}`} class="block text-[15px] leading-7 text-[var(--color-muted)] hover:text-[var(--color-primary)]">
          {company.phoneDisplay}
        </a>
        <p class="text-sm text-[var(--color-muted)]">{company.location}</p>
      </div>
    </div>
  </div>
</section>
