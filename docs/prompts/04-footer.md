# FOOTER BUILD MODE

Read only:

* docs/design-system.md
* docs/component-registry.md
* docs/layout-primatives.md
* docs/project-state.md
* docs/sitemap.md
* docs/codex-rules.md

Do not inspect unrelated files unless required.

Task:

Build the site's reusable footer system.

Use Figma references to match structure, hierarchy, spacing, and responsive behaviour. Rebuild the result with the existing template components and tokens; do not paste Figma-generated React, HTML, or CSS into Svelte files.

Requirements:

* Follow the established design system exactly.
* Reuse existing layout primitives.
* Adapt the existing Footer, Logo, Button, and data files before creating replacements.
* Reuse existing shared components.
* Mobile-first implementation.
* Responsive across all breakpoints.
* Accessibility-friendly.
* Production-ready.
* Optimised for reuse on future brochure websites.

Footer Requirements:

Determine required footer content from sitemap.md and the design system.

Potential content areas may include:

* Logo
* Business summary
* Navigation links
* Services links
* Contact information
* Social links
* Copyright notice
* CTA area

Only include elements supported by the established design system and site structure.

Architecture Rules:

* Footer must be self-contained.
* Avoid hardcoded layout values.
* Use design tokens and shared spacing patterns.
* Use existing button components where applicable.
* Use existing layout primitives.
* Do not duplicate functionality already present elsewhere.

Data Rules:

Where appropriate, pull content from:

* src/lib/data/company.js
* src/lib/data/navigation.js

Create additional data files only if genuinely required.

Avoid:

* Hardcoded company details
* Hardcoded navigation structures
* Duplicate components
* Custom CSS where Tailwind utilities are sufficient
* New design decisions not documented in the design system

Files:

Create or update only the files required for:

* Footer component
* Supporting footer subcomponents (if justified)
* Related data structures (if justified)

After completion:

Update:

* docs/component-registry.md
* docs/project-state.md

Output Format:

1. Summary of approach
2. Files created
3. Files modified
4. Justification for any new components
5. Generated code
6. Documentation updates

When complete, stop.

Do not build any homepage sections.
Do not build hero sections.
Do not build service sections.
Do not build testimonials.
Do not build contact forms.
