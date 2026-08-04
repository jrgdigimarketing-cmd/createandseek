# ISSUE INVESTIGATION & FIX MODE

Read only:

* docs/design-system.md
* docs/component-registry.md
* docs/layout-primatives.md
* docs/project-state.md
* docs/sitemap.md
* docs/codex-rules.md

Do not scan the repository unnecessarily.

Only inspect files directly related to the reported issue.

---

ISSUE DESCRIPTION

[REPLACE WITH ISSUE]

Example:

"The navigation links are not appearing in the header."

or

"The mobile menu does not open."

or

"The hero image overflows on tablet screens."

---

Task

Investigate the issue and implement the smallest possible fix.

If the issue is a mismatch with a Figma reference, first identify whether the cause is a token, reusable component, section markup, asset, or responsive rule. Fix the lowest-level cause that resolves the mismatch without disturbing unrelated sections.

Goals:

* Preserve existing architecture.
* Preserve design system.
* Preserve component structure.
* Avoid unnecessary changes.
* Avoid refactoring unrelated code.
* Avoid introducing new components unless absolutely required.

---

Investigation Process

Before making any changes:

1. Identify files likely involved.
2. Explain what you will inspect.
3. Determine root cause.
4. Confirm root cause before implementing a fix.

Do not guess.

Do not rewrite working code.

---

Fix Strategy

Prefer fixes in this order:

1. Configuration issue
2. Import issue
3. Data issue
4. Component logic issue
5. Styling issue
6. Architecture change (last resort)

Use the smallest change that fully resolves the issue.

---

Rules

Do not:

* redesign the feature
* rebuild the component
* introduce new patterns
* introduce new design decisions
* refactor unrelated code
* modify global styles unless required
* modify design-system.md unless required
* modify component-registry.md unless required

---

Required Output

## Investigation

Files inspected.

## Root Cause

Exact reason for the issue.

## Proposed Fix

Explain the smallest possible solution.

## Files Modified

List only modified files.

## Code Changes

Generate only the required code changes.

## Verification

Explain how to verify the issue is resolved.

## Documentation Updates

State whether documentation updates are required.

If not required, state:

"No documentation updates required."

Stop when complete.
