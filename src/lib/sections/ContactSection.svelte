<script>
  import Button from '../components/Button.svelte';

  export let company;
</script>

<section id="contact" class="border-b border-[var(--color-border)] bg-[rgba(221,209,190,0.4)]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
    <div class="mx-auto max-w-[560px] text-center">
      <h2 class="text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-[var(--color-foreground)] sm:text-[2.5rem]">
        Ready to make sense of your website?
      </h2>
      <p class="mt-5 text-[16.8px] leading-[1.65] text-[var(--color-muted)]">
        Start with a WhatsApp message. Create and Seek will explain the next step and provide the onboarding questionnaire.
      </p>

      <Button href={company.whatsapp} target="_blank" analyticsEvent="whatsapp_click" className="mt-8 min-h-[50px] bg-[var(--color-primary)] px-7 py-3.5 text-[15.2px] text-white hover:bg-[var(--color-primary-strong)]">
        <img src="/icons/figma/whatsapp.svg" alt="" aria-hidden="true" class="h-4 w-4" />
        <span>Start a WhatsApp conversation</span>
      </Button>

      <div class="mt-6 space-y-2">
        <a data-analytics-event="phone_click" href={`tel:${company.phone.replace(/\s/g, '')}`} class="block text-[15px] leading-7 text-[var(--color-muted)] hover:text-[var(--color-primary)]">
          {company.phoneDisplay}
        </a>
        <p class="text-sm text-[var(--color-muted)]">{company.location}</p>
      </div>
    </div>
  </div>
</section>
