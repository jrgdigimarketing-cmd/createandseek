<script>
  import { onMount } from 'svelte';

  const gtmId = import.meta.env.PUBLIC_GTM_ID || '';

  onMount(() => {
    if (!gtmId) return;

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${gtmId}`;
    document.head.appendChild(script);

    const handleClick = (event) => {
      const target = event.target.closest('[data-analytics-event]');
      if (!target || !window.dataLayer) return;

      window.dataLayer.push({
        event: target.dataset.analyticsEvent,
        link_url: target.href || undefined
      });
    };

    const handleSubmit = (event) => {
      const form = event.target.closest('form[data-analytics-form]');
      if (!form || !window.dataLayer) return;

      window.dataLayer.push({ event: form.dataset.analyticsForm });
    };

    document.addEventListener('click', handleClick);
    document.addEventListener('submit', handleSubmit);

    return () => {
      document.removeEventListener('click', handleClick);
      document.removeEventListener('submit', handleSubmit);
    };
  });
</script>

{#if gtmId}
  <noscript>
    <iframe
      src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
      height="0"
      width="0"
      style="display:none;visibility:hidden"
      title="Google Tag Manager"
    ></iframe>
  </noscript>
{/if}
