# Story: Outstanding Items Filter

**Epic:** Risk Data Maintenance | **Story:** 4 of 4 | **Wireframe:** screen-10-durations-maintenance.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/maintenance/durations` (applies to all maintenance pages) |
| **Target File** | `app/maintenance/durations/page.tsx` (and betas, credit-ratings) |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to filter maintenance tables to show only outstanding items **So that** I can quickly identify and fix instruments missing required data

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the Durations page, when I click "Outstanding Items: 5" button, then the table filters to show only 5 instruments with missing durations
- [ ] Given I am viewing outstanding items, when I view the button, then it shows as active/pressed state with text "Showing Outstanding (5)"
- [ ] Given I am viewing outstanding items, when I click the button again, then the filter is removed and all instruments are shown
- [ ] Given I am on the Betas page, when I click "Outstanding Items: 8", then the table filters to show only 8 instruments with missing betas
- [ ] Given I am on the Credit Ratings page, when I click "Outstanding Items: 12", then the table filters to show only 12 instruments with missing ratings

### Edge Cases
- [ ] Given I am viewing outstanding items and search for "BOND", when I press Enter, then the table shows only outstanding items matching "BOND"
- [ ] Given all outstanding items are resolved, when the page refreshes, then the button shows "Outstanding Items: 0" in gray/disabled state
- [ ] Given I am viewing outstanding items, when I add a value for an outstanding instrument, then the count decreases and the instrument is removed from the filtered view

### Error Handling
- [ ] Given the outstanding items fetch fails, when I click the button, then I see error toast "Failed to load outstanding items. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing query parameter:** Add `?outstanding=true` to existing GET endpoints

## Implementation Notes
- Use Shadcn Button component with toggle state
- Implement client-side filtering on mocked data
- Display count badge on button
- Apply filter across all three maintenance pages (durations, betas, credit ratings)
- Highlight outstanding items with yellow warning icon
- Wireframe reference: screen-10-durations-maintenance.md shows outstanding items button
