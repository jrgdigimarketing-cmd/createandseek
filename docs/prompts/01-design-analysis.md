# DESIGN ANALYSIS MODE

You are acting as a senior UI engineer and frontend architect.

Your task is NOT to build code.

Your task is to analyse the available design references and establish the design system and component architecture that will be used for the entire project.

Design references may include a Figma Make prototype, copied Figma-generated code, exported images, a live reference URL, or written requirements. Treat generated code as evidence of intent, not as code to paste into the SvelteKit project. Treat images and URLs as visual references to reproduce natively.

Project Context:

* Framework: SvelteKit
* Styling: Tailwind CSS
* Deployment: Cloudflare Pages
* Approach: Component-first
* Goal: Minimise code duplication
* Goal: Maximise reuse
* Goal: Create shared UI components where possible
* Goal: Create layout primitives where possible
* Goal: Avoid custom CSS unless absolutely necessary
* Goal: Reuse the existing template architecture before creating new patterns

Before analysing, read:

* README.md
* docs/design-system.md
* docs/component-registry.md
* docs/layout-primatives.md
* docs/project-state.md
* docs/codex-rules.md

Inspect the existing template and references, then identify:

1. Typography system

   * Heading hierarchy
   * Font families
   * Font weights
   * Font sizes
   * Line heights

2. Colour system

   * Primary colours
   * Secondary colours
   * Accent colours
   * Neutral colours
   * Background colours

3. Spacing system

   * Vertical rhythm
   * Section spacing
   * Card spacing
   * Container widths
   * Grid spacing

4. Layout patterns

   * Hero layouts
   * Content layouts
   * Card layouts
   * CTA layouts
   * Footer layouts

5. Reusable components

   * Buttons
   * Cards
   * Feature cards
   * Testimonial cards
   * Navigation items
   * CTA blocks
   * Forms

6. Layout primitives

   * Container
   * SectionWrapper
   * Stack
   * Grid
   * SplitLayout
   * ContentBlock

7. Tailwind opportunities

   * Repeated utility patterns
   * Shared class combinations
   * Opportunities for abstraction

8. Template reuse plan

   * Existing sections that can be retained
   * Existing components that can be restyled or extended
   * Existing data files that can supply content
   * Genuinely missing pieces

9. Build order

Recommend the exact implementation order.

Output only:

A. Updates for docs/design-system.md

B. Updates for docs/component-registry.md

C. Updates for docs/layout-primatives.md

D. Updates for docs/project-state.md

Do not generate any code.

Do not generate any Svelte files.

Do not generate any Tailwind code.

Architecture only.
