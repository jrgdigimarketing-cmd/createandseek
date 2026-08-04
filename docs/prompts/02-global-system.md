# GLOBAL SYSTEM BUILD MODE

You are acting as a senior SvelteKit frontend architect.

Before doing any work, read:

* docs/design-system.md
* docs/component-registry.md
* docs/layout-primatives.md
* docs/project-state.md
* docs/codex-rules.md

The design analysis phase has already been completed.

Use the design analysis as the source of truth. If Figma-generated code or reference assets are available, use them only to clarify visual intent; translate the result into the existing SvelteKit and Tailwind architecture.

Your task is to establish the project's global design system and shared architecture before any page sections are built.

Objectives:

* Create reusable foundations first.
* Minimise future code generation.
* Avoid duplication.
* Keep the codebase simple and maintainable.
* Prefer composition over repetition.
* Prefer adapting existing template files over adding parallel implementations.

Implementation Priority:

1. Global Tailwind theme configuration
2. Global typography system
3. Global colour system
4. Global spacing system
5. Global radius and shadow system
6. Layout primitives
7. Shared UI components
8. Documentation updates

Create or update only the files required to establish the design system.

Create or update:

* src/lib/styles/
* src/lib/components/
* src/lib/layouts/

Do not create a second component system when an equivalent template component exists.

Reuse existing files where appropriate.

Create layout primitives where required, including:

* Container
* SectionWrapper
* Stack
* Grid
* SplitLayout

Create shared UI components only if identified in the design analysis.

Examples:

* Button
* Card
* FeatureCard
* CTA
* Badge

Rules:

* Do not build page sections.
* Do not build the homepage.
* Do not build hero sections.
* Do not build service sections.
* Do not create placeholder content.
* Do not create mock business copy.
* Do not create duplicate components.
* Do not introduce new design decisions.
* Follow docs/design-system.md exactly.

Tailwind Rules:

* Prefer utilities over custom CSS.
* Extract repeated patterns into components.
* Keep component APIs simple.
* Avoid unnecessary props.
* Avoid unnecessary abstraction.
* Keep the first implementation compatible with the existing template sections.

Output Requirements:

1. Explain what files will be created or modified.
2. Explain why each file exists.
3. Generate the required code.
4. Update:

   * docs/component-registry.md
   * docs/layout-primatives.md
   * docs/project-state.md

When complete, stop.

Do not build any page sections.
