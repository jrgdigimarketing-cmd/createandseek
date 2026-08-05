<script>
  import Container from './Container.svelte';
  import Logo from './Logo.svelte';
  import Navigation from './Navigation.svelte';

  export let company;
  export let navigation = [];
</script>

<footer class="border-t border-[rgba(250,247,241,0.08)] bg-[#252522] text-[rgba(250,247,241,0.72)]">
  <Container className="py-12">
    <div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
      <div class="space-y-1">
        <Logo companyName={company.name} tagline={company.tagline} inverse showMark={false} />
        <p class="text-[13.12px] leading-[1.5] text-[rgba(250,247,241,0.4)]">createandseek.com</p>
      </div>

      <Navigation
        links={navigation}
        className="justify-start gap-6"
        linkClass="text-[13.6px] font-medium text-[rgba(250,247,241,0.55)] hover:text-[rgba(250,247,241,0.92)]"
      />
    </div>

    <div class="mt-8 flex flex-col gap-3 border-t border-[rgba(250,247,241,0.1)] pt-6 text-[12.48px] text-[rgba(250,247,241,0.35)] sm:flex-row sm:items-center sm:justify-between">
      <p>{company.copyright}</p>
      <p>{company.privacy}</p>
    </div>
  </Container>
</footer>
