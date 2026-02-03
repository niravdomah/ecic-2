# Story: Check Refresh & Export

**Epic:** Data Confirmation System | **Story:** 4 of 4 | **Wireframe:** screen-05-data-confirmation-main.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/data-confirmation` |
| **Target File** | `app/data-confirmation/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to refresh validation checks and export results **So that** I can get the latest check status and share results with stakeholders

## Acceptance Criteria

### Happy Path
- [ ] Given I am on any Data Confirmation tab, when I view the page, then I see "Refresh Checks" and "Export" buttons at the top
- [ ] Given I am viewing Main File Checks, when I click "Refresh Checks", then I see a loading spinner and the check results reload
- [ ] Given the refresh completes, when checks are updated, then I see toast message "Checks refreshed successfully"
- [ ] Given I am viewing Main File Checks, when I click "Export", then a file "data-confirmation-main-checks-2026-02-15.xlsx" downloads
- [ ] Given I am viewing Other Checks, when I click "Export", then a file "data-confirmation-other-checks-2026-02-15.xlsx" downloads
- [ ] Given I am viewing Portfolio Re-imports, when I click "Export", then a file "data-confirmation-reimports-2026-02-15.xlsx" downloads

### Edge Cases
- [ ] Given a refresh is already in progress, when I click "Refresh Checks" again, then the button is disabled with text "Refreshing..."
- [ ] Given the export is in progress, when I click "Export" again, then the button is disabled with text "Exporting..."

### Error Handling
- [ ] Given the refresh fails, when an error occurs, then I see error toast "Failed to refresh checks. Please try again."
- [ ] Given the export fails, when an error occurs, then I see error toast "Failed to export results. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoints:**
- `POST /v1/batches/{batchId}/refresh-checks` - trigger check refresh
- `GET /v1/batches/{batchId}/export-checks?tab={tabName}` - export results

## Implementation Notes
- Use Shadcn Button component with loading states
- Implement client-side Excel export using library like xlsx or exceljs
- Include all table data in export with formatting (colored cells for status)
- Add timestamp to export filename
- Use Shadcn Toast component for success/error notifications
- Wireframe reference: screen-05-data-confirmation-main.md shows action buttons
