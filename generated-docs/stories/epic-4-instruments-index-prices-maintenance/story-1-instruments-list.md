# Story: Instruments List View

**Epic:** Instruments & Index Prices Maintenance | **Story:** 1 of 4 | **Wireframe:** screen-08-instruments-maintenance.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/maintenance/instruments` |
| **Target File** | `app/maintenance/instruments/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** InvestInsight user **I want** to view a searchable list of all instruments **So that** I can find and manage instrument master data

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/maintenance/instruments`, when the page loads, then I see "Instruments Maintenance" page heading
- [ ] Given I am on the Instruments page, when the page loads, then I see a table with columns: "Instrument Code", "Name", "Type", "Currency", "Last Updated", "Updated By", "Actions"
- [ ] Given the page loads, when I view the table, then I see instruments sorted by "Last Updated" descending (most recent first)
- [ ] Given I view an instrument row, when I look at the Actions column, then I see "Edit" and "Delete" buttons
- [ ] Given I am on the Instruments page, when I view the top of the page, then I see a search input with placeholder "Search by code or name"
- [ ] Given I am on the Instruments page, when I view the top of the page, then I see an "Add Instrument" button

### Edge Cases
- [ ] Given I type "AAPL" in the search box, when I press Enter, then the table filters to show only instruments matching "AAPL"
- [ ] Given no instruments match my search, when I search for "NONEXISTENT", then I see message "No instruments found matching your search"
- [ ] Given there are 100+ instruments, when the page loads, then I see pagination controls at the bottom showing "Page 1 of 5"

### Error Handling
- [ ] Given the instruments fetch fails, when loading the page, then I see error message "Failed to load instruments. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/instruments?search={query}&page={page}&limit={limit}` - need to add to spec when backend is implemented

## Implementation Notes
- Use Shadcn Table component for instruments list
- Use Shadcn Input component for search
- Use Shadcn Button component for actions
- Implement client-side search/filter on mocked data
- Add pagination with Shadcn Pagination component (20 items per page)
- Wireframe reference: screen-08-instruments-maintenance.md
