---
name: sveltekit-website-workflow
description: Build and refine lean SvelteKit websites from Figma Make prototypes, Figma-generated code, exported design references, and written requirements by reusing an existing template, working architecture-first, and implementing sections incrementally with Tailwind CSS.
---

# SvelteKit Website Workflow

Use this skill when building or refining a SvelteKit website from a Figma prototype or other visual reference.

## Operating rules

- Inspect the existing template before proposing architecture.
- Treat Figma Make output as a design/prototype source. Translate it into native SvelteKit and Tailwind; do not paste framework-specific output wholesale.
- Treat screenshots, exported images, and live references as visual evidence. Recreate them with tokens, existing components, and semantic markup.
- Reuse the closest existing section, layout primitive, component, data file, and asset before adding a new one.
- Keep dependencies, props, CSS, JavaScript, and abstractions to the minimum needed for the requested result.
- Keep content separate from presentation and preserve the project's established conventions.
- Make responsive behaviour explicit across the supplied reference states and sensible intermediate widths.
- Verify changes with the project's available checks before moving to the next stage.

## Workflow

1. **Analyse**: run `01-design-analysis.md`. Produce architecture and documentation updates only. Record the Figma handoff, reference states, reusable template matches, missing patterns, and implementation order.
2. **Establish foundations**: run `02-global-system.md`. Build or adapt tokens, primitives, shared components, and layouts. Do not build page sections yet.
3. **Build shared chrome**: run `03-header-navigation.md` and `04-footer.md` when the design requires changes to either. Adapt existing components first.
4. **Build the page skeleton**: compose the route with existing template sections in the order identified during analysis. Use real section boundaries and data wiring, but defer detailed visual refinement.
5. **Refine by section**: run `05-build-section.md` once per section, starting with the highest-impact section. Provide the relevant Figma reference state and check the rendered result before continuing.
6. **Fix or simplify**: use `90-fix-issue.md` for isolated defects and `91-refactor-improve.md` for scoped cleanup. Keep each change bounded.
7. **Review**: run `099-final-review.md` after all sections are implemented. Resolve critical issues first, then remove unnecessary code and document meaningful architectural changes.

## Prompt selection

Use the prompt files in `docs/prompts/` as stage instructions. Do not combine the whole website into one oversized prompt. The skill provides the shared workflow and constraints; each prompt should handle one bounded decision or implementation unit.

## Required handoff for each implementation prompt

Include, when available:

- The relevant Figma frame, prototype state, or copied generated-code excerpt.
- Exported reference images and their intended viewport.
- Required routes, content/data sources, and asset constraints.
- The existing template components or sections that appear closest.
- The exact section or issue in scope.

Never include unrelated reference material. If a reference is ambiguous, state the assumption and choose the smallest reversible implementation.

## Completion standard

Before stopping, report files created or modified, reused template pieces, any new components or dependencies and their justification, validation performed, and any remaining uncertainty. Stop after the requested stage; do not silently expand the scope.
