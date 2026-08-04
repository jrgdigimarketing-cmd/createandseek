<script>
  // Shared site footer with navigation, contact details, and ownership info.
  import Container from './Container.svelte';
  import Logo from './Logo.svelte';
  import Navigation from './Navigation.svelte';

  export let company;
  export let navigation = [];
</script>

<footer class="border-t border-[rgba(250,247,241,0.08)] bg-[#252522] text-[rgba(250,247,241,0.72)]">
  <Container className="py-12 sm:py-14">
    <div class="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
      <div class="max-w-sm space-y-3">
        <Logo companyName={company.name} tagline={company.tagline} inverse />
        <p class="text-sm leading-7 text-[rgba(250,247,241,0.58)]">{company.description}</p>
        <p class="text-sm text-[rgba(250,247,241,0.42)]">{company.location}</p>
      </div>

      <Navigation
        {navigation}
        className="justify-start"
        linkClass="text-[rgba(250,247,241,0.56)] hover:text-[rgba(250,247,241,0.92)]"
      />
    </div>

    <div class="mt-10 flex flex-col gap-3 border-t border-[rgba(250,247,241,0.08)] pt-6 text-sm text-[rgba(250,247,241,0.42)] sm:flex-row sm:items-center sm:justify-between">
      <p>{company.copyright}</p>
      <p>{company.privacy}</p>
    </div>
  </Container>
</footer>
