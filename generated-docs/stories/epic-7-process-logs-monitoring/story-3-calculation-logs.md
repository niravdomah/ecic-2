# Story: Calculation Logs

**Epic:** Process Logs & Monitoring | **Story:** 3 of 4 | **Wireframe:** screen-19-process-logs-calculation.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/admin/logs` |
| **Target File** | `app/admin/logs/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight administrator **I want** to view risk calculation execution logs **So that** I can monitor calculation performance and debug calculation errors

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the Process Logs page, when I click the "Calculations" tab, then I see the calculation logs table
- [ ] Given I am viewing Calculation Logs, when the page loads, then I see a table with columns: "Timestamp", "Batch", "Calculation Type", "Portfolio", "Duration (ms)", "Status", "Details"
- [ ] Given a calculation succeeded, when I view the table, then I see green checkmark in Status column with execution duration (e.g., "1234 ms")
- [ ] Given a calculation failed, when I view the table, then I see red X in Status column with error indicator
- [ ] Given I click on a calculation row, when the row expands, then I see detailed calculation inputs, outputs, and performance metrics
- [ ] Given I filter by calculation type "Duration", when I apply the filter, then the table shows only duration calculations

### Edge Cases
- [ ] Given a calculation took longer than 5 seconds, when I view the Duration column, then the value is displayed in red to indicate slow performance
- [ ] Given I filter by "Failed" status, when I apply the filter, then the table shows only failed calculations with error details

### Error Handling
- [ ] Given the calculation logs fetch fails, when loading the tab, then I see error message "Failed to load calculation logs. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/logs/calculations?batch={batchId}&type={calculationType}&status={status}` - fetch calculation logs

## Implementation Notes
- Use Shadcn Table component with expandable rows
- Implement filters for calculation type (Duration, Beta, VaR, etc.) and status
- Display execution duration with performance indicators (red if > 5000ms)
- Show detailed calculation metadata in expanded row
- Support sorting by timestamp or duration
- Wireframe reference: screen-19-process-logs-calculation.md
