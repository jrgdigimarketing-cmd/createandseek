<script>
  import Button from '../components/Button.svelte';

  export let company;
</script>

<section class="border-b border-[var(--color-border)] bg-[#37463d]">
  <div class="mx-auto max-w-[1240px] px-4 py-16 sm:px-6 sm:py-20 lg:px-6 lg:py-24">
    <div class="mx-auto max-w-[760px] text-center">
      <p class="text-[11px] font-semibold uppercase tracking-[0.28em] text-[rgba(250,247,241,0.52)]">
        A useful first conversation - without obligation
      </p>
      <h2 class="mt-4 text-[2rem] font-bold leading-[1.1] tracking-[-0.02em] text-white sm:text-[2.5rem]">
        Start with a WhatsApp message and a short onboarding conversation.
      </h2>
      <p class="mt-5 text-[16.8px] leading-[1.65] text-[rgba(250,247,241,0.78)]">
        The questionnaire helps Create and Seek understand the business and what a useful next step may be. After reviewing the information, James can invite simple next phases or, if needed, a no-obligation next conversation.
      </p>

      <div class="mx-auto mt-8 max-w-[420px] rounded-[8px] border border-[rgba(250,247,241,0.72)] bg-[#faf7f1] p-5 text-left shadow-[0_18px_40px_rgba(37,37,34,0.2)]">
        <ul class="space-y-3 text-[14.4px] font-semibold leading-6 text-[#252522]">
          <li class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c4735a]"></span>
            <span>Begin with a WhatsApp message</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c4735a]"></span>
            <span>Complete the onboarding questionnaire</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c4735a]"></span>
            <span>Receive a response after the information has been reviewed</span>
          </li>
          <li class="flex gap-3">
            <span class="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#c4735a]"></span>
            <span>No client booking is required</span>
          </li>
        </ul>
      </div>

      <Button href={company.whatsapp} target="_blank" analyticsEvent="whatsapp_click" className="mt-8 border border-[rgba(250,247,241,0.22)] bg-[#faf7f1] text-[#252522] shadow-[0_14px_30px_rgba(37,37,34,0.18)] hover:bg-white hover:text-[var(--color-primary)]">
        <span>Start a WhatsApp conversation</span>
      </Button>

      <p class="mt-5 text-sm text-[rgba(250,247,241,0.44)]">
        Privacy first. No hard sell. A practical conversation about whether the project is the right fit.
      </p>
    </div>
  </div>
</section>
