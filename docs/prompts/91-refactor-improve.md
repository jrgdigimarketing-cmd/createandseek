# REFACTOR & IMPROVEMENT MODE

Read only:

* docs/design-system.md
* docs/component-registry.md
* docs/layout-primatives.md
* docs/project-state.md
* docs/sitemap.md
* docs/codex-rules.md

Do not inspect unrelated files unless required.

---

COMPONENT OR SECTION TO IMPROVE

[REPLACE WITH COMPONENT OR SECTION]

Examples:

* Header
* Navigation
* Hero
* Services Section
* Footer
* Button.svelte
* Card.svelte

---

IMPROVEMENT REQUEST

[DESCRIBE WHAT YOU WANT TO IMPROVE]

Examples:

* Make the hero more visually balanced.
* Reduce duplicated Tailwind classes.
* Improve spacing between cards.
* Improve mobile responsiveness.
* Simplify the component.
* Improve accessibility.
* Improve performance.
* Make the section easier to maintain.

---

Task

Improve the specified component or section while preserving the existing architecture and design system.

When comparing against Figma references, preserve the visual intent while reducing duplication and framework-specific residue from any generated code. Do not use visual matching as a reason to add a parallel component or dependency.

The objective is to produce cleaner, simpler and more maintainable code—not to redesign the website.

---

Improvement Process

Before making changes:

1. Identify the files that need to be reviewed.
2. Explain the current implementation.
3. Identify opportunities for improvement.
4. Recommend the smallest set of changes that achieve the requested outcome.

Do not rewrite working code without justification.

---

Improvement Priorities

When reviewing the code, prioritise improvements in this order:

1. Simplicity
2. Reuse of existing components
3. Maintainability
4. Readability
5. Accessibility
6. Performance
7. Responsiveness

Only improve design if explicitly requested.

---

Architecture Rules

Always prefer:

* Existing layout primitives
* Existing shared components
* Existing design tokens
* Existing Tailwind utility patterns

Do not introduce new architecture unless clearly justified.

---

Avoid

Do not:

* redesign unrelated sections
* introduce unnecessary abstraction
* duplicate components
* duplicate layouts
* duplicate utility patterns
* create unnecessary props
* introduce custom CSS without justification
* modify the design system unless required
* refactor unrelated files

---

Output Format

## Current State

Summarise the current implementation.

## Improvement Opportunities

List the improvements identified.

## Recommended Changes

Explain why each change is beneficial.

## Files Modified

List only the files that need updating.

## Code Changes

Generate only the required code.

## Impact Assessment

State how the changes affect:

* Reusability
* Maintainability
* Performance
* Accessibility
* Responsiveness

## Documentation Updates

If reusable architecture has changed, update:

* docs/component-registry.md
* docs/layout-primatives.md
* docs/project-state.md

Otherwise state:

"No documentation updates required."

Stop when complete.
