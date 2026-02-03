# Story: Portfolio Re-imports Tab

**Epic:** Data Confirmation System | **Story:** 3 of 4 | **Wireframe:** screen-07-data-confirmation-reimports.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/data-confirmation` |
| **Target File** | `app/data-confirmation/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to view historical import tracking for portfolio data **So that** I can see which portfolios have been re-imported and when

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the Data Confirmation page, when I click the "Portfolio Re-imports" tab, then I see the re-imports tracking table
- [ ] Given I am viewing Portfolio Re-imports, when the page loads, then I see a table with columns: "Portfolio", "Last Import Date", "Import Count", "Status"
- [ ] Given "Portfolio A" was re-imported on "2026-02-15", when I view the table, then I see "2026-02-15" in the Last Import Date column
- [ ] Given "Portfolio B" has been re-imported 3 times, when I view the table, then I see "3" in the Import Count column
- [ ] Given "Portfolio C" has status "Pending Re-import", when I view the table, then I see yellow warning icon (⚠) with text "Pending Re-import"

### Edge Cases
- [ ] Given no portfolios have been re-imported, when I view the tab, then I see message "No portfolio re-imports for this batch"
- [ ] Given a portfolio was never imported before, when I view the table, then I see "N/A" in the Last Import Date column

### Error Handling
- [ ] Given the re-import history fetch fails, when loading the Portfolio Re-imports tab, then I see error message "Failed to load re-import history. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/batches/{batchId}/reimport-history` - need to add to spec when backend is implemented

## Implementation Notes
- Use Shadcn Table component for re-import tracking
- Format dates using date-fns or similar library
- Implement status indicators: green checkmark (complete), yellow warning (pending)
- Support sorting by Last Import Date and Import Count
- Wireframe reference: screen-07-data-confirmation-reimports.md
