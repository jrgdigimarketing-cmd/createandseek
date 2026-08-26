# Infrastructure and Reliability Audit

Audit date: 2026-08-14

This note checks item 2 from the website delivery standards: hosting, DNS, domain configuration, SSL certificates, and deployment infrastructure designed to keep the website reliably available.

## Result

Status: partially passing

The launched `www` website and Cloudflare Pages fallback URL are working over HTTPS. The apex domain `createandseek.com` is not currently reliable and should be fixed before marking item 2 complete.

Follow-up dashboard check: the Cloudflare account that contains the Pages project does not list any managed domains in Domains -> Overview. Attempting to add `createandseek.com` to the Pages project's custom domains shows Cloudflare's "Transfer DNS management" step. Public DNS already uses Cloudflare nameservers, so the DNS zone appears to be managed in a different Cloudflare account or zone context than the Pages project.

## Passing checks

- `https://www.createandseek.com` returns `HTTP/2 200`.
- `http://www.createandseek.com` returns `301` and redirects to `https://www.createandseek.com/`.
- `www.createandseek.com` resolves through Cloudflare.
- `https://createandseek.pages.dev` returns `HTTP/2 200`, confirming the underlying Pages deployment is reachable.
- Cloudflare Pages custom-domain screenshot shows `www.createandseek.com` as `Active` with `SSL enabled`.
- The connected repository shown in Cloudflare is `jrgdigimarketing-cmd/createandseek`, matching the local Git remote.
- Cloudflare Pages settings confirm the production branch is `main` and automatic deployments are enabled.

## SSL evidence

Certificate for `www.createandseek.com`:

- Issuer: Google Trust Services `WE1`
- Subject: `www.createandseek.com`
- Subject alternative name: `www.createandseek.com`
- Valid from: 2026-08-04 12:13:10 GMT
- Valid until: 2026-11-02 13:13:03 GMT

Certificate for `createandseek.com`:

- Issuer: Google Trust Services `WE1`
- Subject: `createandseek.com`
- Subject alternative names: `createandseek.com`, `*.createandseek.com`
- Valid from: 2026-08-04 10:01:14 GMT
- Valid until: 2026-11-02 10:58:50 GMT

The apex certificate is valid, so the current apex problem appears to be routing or Cloudflare domain configuration rather than certificate issuance.

## Failing checks

- `https://createandseek.com` times out instead of loading or redirecting.
- `http://createandseek.com` times out instead of redirecting to HTTPS.
- Earlier checks also returned Cloudflare `522` for the apex domain, which means Cloudflare was reachable but could not get a valid response from the configured upstream route.

## Required fix

In Cloudflare, fix `createandseek.com` so it either routes to the Pages deployment or redirects cleanly to `https://www.createandseek.com/`.

Recommended configuration:

1. Resolve the Cloudflare account mismatch:
   - Preferred: sign in to the Cloudflare account that manages the `createandseek.com` DNS zone.
   - Alternative: transfer DNS management for `createandseek.com` into the current Cloudflare account, then verify all DNS records before changing nameservers at the registrar.
2. Once the Pages project and DNS zone are in the same Cloudflare account, add `createandseek.com` in Workers & Pages -> `createandseek` -> Custom domains.
3. In DNS, make sure the apex record is not pointing to an old or unavailable origin.
4. If the canonical public URL should be `www.createandseek.com`, add a Cloudflare redirect rule:
   - Rule name: `Redirect apex to www`
   - If incoming requests match: hostname equals `createandseek.com`
   - Then: static redirect to `https://www.createandseek.com${uri.path}`
   - Status code: `301`
   - Preserve query string: enabled
5. Re-test both apex URLs after the rule or custom-domain change has propagated:
   - `https://createandseek.com`
   - `http://createandseek.com`

## Acceptance status

- `https://www.createandseek.com` loads successfully: pass
- `http://www.createandseek.com` redirects to HTTPS: pass
- `https://createandseek.com` loads or redirects to `https://www.createandseek.com`: fail
- `http://createandseek.com` redirects to HTTPS and does not time out: fail
- Cloudflare Pages has a working production deployment: pass from public Pages URL
- Production branch is `main` and automatic deployments are enabled: pass
- SSL certificates are valid and unexpired for public hostnames: pass
- Cloudflare Pages rollback target exists: needs dashboard confirmation after sign-in

## Dashboard access note

Chrome control is available and signed in. Dashboard checks confirmed the Pages project is in the `Jrg.digi.marketing@gmail.com's Account` account, but that account has no domains listed under Domains -> Overview. Cloudflare blocks adding the apex custom domain until DNS management is transferred or the DNS zone is available in the same account.
