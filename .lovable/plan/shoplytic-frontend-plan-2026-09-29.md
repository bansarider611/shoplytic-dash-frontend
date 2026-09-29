# Shoplytic Frontend Plan

## Goal
Build a polished, frontend-only retail analytics experience that moves shopkeepers from a public home page, through CSV upload and analysis, into a complete mock-data dashboard.

## Pages and flow
- Build `/` as the Shoplytic home page with the requested navigation, hero, analytics preview, feature cards, three-step explanation, and final upload call-to-action.
- Build `/upload` with drag-and-drop and file browsing for CSV files, clear validation, selected-file feedback, an animated analysis state, and automatic navigation into the dashboard.
- Build a shared dashboard shell with desktop sidebar and mobile navigation.
- Add distinct pages for Overview, Sales, Products, Customers, Segmentation, Insights, and Data Quality.
- Keep sign-in as a clearly labeled future action without adding authentication.

## Visual direction
- Use the supplied warm off-white background, charcoal type, and lavender, pink, peach, mint, yellow, and blue accents as semantic design tokens.
- Use Plus Jakarta Sans with restrained rounded corners, thin borders, soft shadows, generous spacing, and subtle motion.
- Create an editorial retail-analytics feel rather than a generic admin template.
- Use polished charts, tables, score indicators, segment maps, and recommendation cards built from mock universal CSV data.

## Interaction and data
- Centralize typed mock analytics data and formatting helpers so API responses can replace them later.
- Make upload interactions functional for drag/drop and file selection, accepting CSV files only.
- Show progress through column detection, quality checks, and analytics generation before routing to Overview.
- Make date-range and category controls update visible chart and summary states locally.

## Quality checks
- Add unique page metadata for every route.
- Verify navigation, CSV upload, analysis transition, and dashboard pages in the live preview.
- Check desktop and mobile layouts for overflow, readable charts, and stable controls.
