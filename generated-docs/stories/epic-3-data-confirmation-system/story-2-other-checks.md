# Story: Other Checks Tab

**Epic:** Data Confirmation System | **Story:** 2 of 4 | **Wireframe:** screen-06-data-confirmation-other.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/data-confirmation` |
| **Target File** | `app/data-confirmation/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to view validation results for calculated metrics and data quality **So that** I can ensure data integrity before approvals

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the Data Confirmation page, when I click the "Other Checks" tab, then I see validation results for calculated metrics
- [ ] Given I am viewing Other Checks, when the page loads, then I see sections: "Data Quality", "Calculation Validation", "Reconciliation"
- [ ] Given I am viewing Data Quality section, when the page loads, then I see a table with columns: "Check Name", "Status", "Details"
- [ ] Given a check "Price Data Completeness" passed, when I view the table, then I see green checkmark (✓) in the Status column
- [ ] Given a check "Holdings Reconciliation" failed, when I view the table, then I see red X (✗) in the Status column with details "5 portfolios have discrepancies"
- [ ] Given I am viewing the page, when I scroll to the bottom, then I see a summary: "Passed: 25 | Failed: 5 | Total Checks: 30"

### Edge Cases
- [ ] Given a check has warnings (not failures), when I view the Status column, then I see a yellow warning icon (⚠) with details
- [ ] Given all checks pass, when I view the summary, then I see "All checks passed (30/30)" in green text

### Error Handling
- [ ] Given the validation checks fetch fails, when loading the Other Checks tab, then I see error message "Failed to load validation checks. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/batches/{batchId}/validation-checks` - need to add to spec when backend is implemented

## Implementation Notes
- Use Shadcn Table component for validation results
- Implement three-state indicators: green checkmark (passed), red X (failed), yellow warning (warnings)
- Support expandable row details for failed checks
- Display summary counts at bottom of tab
- Wireframe reference: screen-06-data-confirmation-other.md
