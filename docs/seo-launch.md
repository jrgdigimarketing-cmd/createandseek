# SEO and measurement launch steps

The site code now includes `robots.txt`, `sitemap.xml`, canonical metadata, JSON-LD, a privacy route, and optional Google Tag Manager loading.

## Before deploying

1. Create a Google Tag Manager web container for `www.createandseek.com`.
2. Add the container ID as the Cloudflare Pages environment variable `PUBLIC_GTM_ID`.
3. In GTM, create the GA4 Google tag using the GA4 web stream measurement ID.
4. Publish the GTM container after testing the WhatsApp, phone, primary CTA, and contact-form events.
5. Review the privacy policy and tracking/consent configuration for the intended audience.

## Cloudflare

Keep `https://www.createandseek.com` as the canonical hostname. Configure `createandseek.com` to return a permanent redirect to the matching `www` URL while preserving the path and query string. Confirm both HTTP and HTTPS apex requests no longer time out.

## Google Search Console

1. Create a Domain property for `createandseek.com`.
2. Verify ownership with the DNS TXT record provided by Google.
3. Submit `https://www.createandseek.com/sitemap.xml`.
4. Inspect `https://www.createandseek.com/` and request indexing after the production deployment.
5. Check Page Indexing, Core Web Vitals, HTTPS, and Search performance reports regularly.

## Validation URLs

- `https://www.createandseek.com/`
- `https://www.createandseek.com/privacy`
- `https://www.createandseek.com/robots.txt`
- `https://www.createandseek.com/sitemap.xml`
