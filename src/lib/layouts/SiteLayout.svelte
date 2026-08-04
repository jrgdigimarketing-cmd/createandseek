<script>
  import Footer from '../components/Footer.svelte';
  import Header from '../components/Header.svelte';

  export let company;
  export let navigation = [];
  export let primaryCta = { label: 'Contact us', href: '#contact' };
</script>

<Header {company} {navigation} {primaryCta} />

<main id="content" class="relative">
  <slot />
</main>

<Footer {company} {navigation} />
