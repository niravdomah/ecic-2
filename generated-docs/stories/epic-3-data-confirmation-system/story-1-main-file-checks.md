# Story: Main File Checks Tab

**Epic:** Data Confirmation System | **Story:** 1 of 4 | **Wireframe:** screen-05-data-confirmation-main.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/data-confirmation` |
| **Target File** | `app/data-confirmation/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** InvestInsight user **I want** to see a completeness matrix for all uploaded files **So that** I can verify all required data is present before proceeding to approvals

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/data-confirmation`, when the page loads, then I see "Data Confirmation" page heading
- [ ] Given I am on the Data Confirmation page, when the page loads, then I see three tabs: "Main File Checks", "Other Checks", "Portfolio Re-imports"
- [ ] Given I am on the Data Confirmation page, when the page loads, then the "Main File Checks" tab is active by default
- [ ] Given I am viewing Main File Checks, when the page loads, then I see three sections: "Portfolio Manager Data", "Custodian Data", "Bloomberg Holdings"
- [ ] Given I am viewing Portfolio Manager Data, when the page loads, then I see a table with columns: "Portfolio", "Holdings", "Trans", "Income", "Cash", "Perf", "Mgmt Fee"
- [ ] Given "Sanlam Holdings" is complete, when I view the matrix, then I see a green checkmark (✓) in that cell
- [ ] Given "Portfolio A Cash" is incomplete, when I view the matrix, then I see a red X (✗) in that cell
- [ ] Given I am viewing the page, when I scroll to the bottom, then I see a summary: "Complete: 50 | Incomplete: 10 | Total Checks: 60"

### Edge Cases
- [ ] Given "Portfolio C" has all files incomplete, when I view that row, then all cells show red X (✗)
- [ ] Given no batch exists, when I navigate to `/data-confirmation`, then I see message "Create a batch on the home page to begin data confirmation"

### Error Handling
- [ ] Given the completeness check fetch fails, when loading the page, then I see error message "Failed to load data confirmation checks. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/batches/{batchId}/completeness-checks` - need to add to spec when backend is implemented

## Implementation Notes
- Use Shadcn Table component for each section (Portfolio Manager, Custodian, Bloomberg)
- Use Shadcn Tabs component for navigation
- Implement visual indicators: green checkmark for complete, red X for incomplete
- Display summary counts at bottom of page
- Wireframe reference: screen-05-data-confirmation-main.md
