# SECTION BUILD MODE

Read only:

* docs/design-system.md
* docs/component-registry.md
* docs/layout-primatives.md
* docs/project-state.md
* docs/sitemap.md
* docs/codex-rules.md

Do not inspect unrelated files unless required.

SECTION TO BUILD:

[REPLACE WITH SECTION NAME]

Examples:

* Hero
* Services
* About
* Features
* Testimonials
* Gallery
* FAQ
* CTA
* Contact

Task:

Build the specified section using the established design system and existing project architecture.

Use the available Figma references as visual and structural input. Translate them into native SvelteKit and Tailwind code. Figma-generated code may be consulted for intent, but must not be copied wholesale when it introduces a different framework, duplicate components, or unnecessary dependencies.

Primary Goal:

Create the smallest amount of code required while maximising reuse of existing components and layout primitives.

Before building:

1. Check component-registry.md
2. Check layout-primatives.md
3. Identify reusable components
4. Identify reusable layouts
5. Reuse existing patterns whenever possible

Reuse Priority:

1. Existing layout primitives
2. Existing shared components
3. Existing utility patterns
4. New components only when necessary

Before coding, compare the requested section with existing template sections. Retain the closest section structure and modify it when that is simpler than creating a new section.

Requirements:

* Mobile-first
* Responsive
* Accessibility-friendly
* Production-ready
* Consistent with design system
* Consistent with sitemap.md

Layout Rules:

Use existing primitives wherever possible:

* Container
* SectionWrapper
* Stack
* Grid
* SplitLayout

Do not recreate layouts already available.

Component Rules:

Reuse existing components whenever possible:

Examples:

* Button
* Card
* FeatureCard
* TestimonialCard
* CTA
* Badge

Create a new component only if:

* The pattern appears unique
* Existing components cannot reasonably support it
* Future reuse is likely

Content Rules:

* Use placeholder content only
* Use placeholder imagery only
* Do not invent real company details
* Do not hardcode production content
* Pull content from data files where appropriate

Tailwind Rules:

* Prefer utilities over custom CSS
* Follow established spacing scale
* Follow established typography scale
* Follow established colour system
* Follow established radius system
* Follow established shadow system

Avoid:

* Duplicate components
* Duplicate layouts
* Custom CSS without justification
* Hardcoded design values
* New design decisions
* Unnecessary abstraction
* Over-engineering

Required Analysis Before Coding:

Provide a brief implementation plan:

1. Existing components reused
2. Existing layouts reused
3. New components required (if any)
4. Files affected

Then generate code.

Files:

Create or update only the files necessary for this section.

After completion:

Update:

* docs/component-registry.md (if new reusable components were created)
* docs/project-state.md

Output Format:

1. Section Analysis
2. Reuse Plan
3. Files Created
4. Files Modified
5. Generated Code
6. Documentation Updates

When complete, stop.

Do not build unrelated sections.

Do not refactor unrelated files.

Do not modify the design system.

Visual fidelity is achieved by changing the smallest relevant set of tokens, component props, data, and section markup. Do not compensate for a missing design decision with arbitrary one-off values.
