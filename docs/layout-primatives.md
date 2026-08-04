# Layout Primitives

## Container

- File: `src/lib/components/Container.svelte`
- Purpose: centers content and applies the shared page width and horizontal padding.

## SectionWrapper

- File: `src/lib/components/SectionWrapper.svelte`
- Purpose: shared heading and spacing wrapper for simpler sections.

## Stack

- Pattern: `space-y-*` groupings used for vertical rhythm in cards and section copy.
- Purpose: keep internal spacing consistent without adding bespoke wrappers.

## Grid

- Pattern: responsive `grid` and `grid-cols-*` layouts used for card rows and split content.
- Purpose: handle section flow from one column on mobile to multi-column at larger widths.

## Split Layout

- Pattern: two-column layouts with content on one side and imagery or detail on the other.
- Purpose: support the reference sections that alternate text and visual blocks.

## Supporting Shell

- `src/lib/layouts/SiteLayout.svelte`
- Wraps the page with the shared header, main content area, and footer.
