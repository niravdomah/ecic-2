# Story: Log Search & Export

**Epic:** Process Logs & Monitoring | **Story:** 4 of 4 | **Wireframe:** screen-17-process-logs-file.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/admin/logs` |
| **Target File** | `app/admin/logs/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight administrator **I want** to search logs by keyword and export results **So that** I can find specific log entries and share logs with support teams

## Acceptance Criteria

### Happy Path
- [ ] Given I am on any Process Logs tab, when I view the page, then I see a search input with placeholder "Search logs..."
- [ ] Given I type "error" in the search box, when I press Enter, then the table filters to show only logs containing "error"
- [ ] Given I am viewing search results, when I clear the search box, then all logs are displayed again
- [ ] Given I am on the File Uploads tab, when I click "Export" button, then a file "file-upload-logs-2026-02-15.csv" downloads
- [ ] Given I am on the Workflow Status tab, when I click "Export", then a file "workflow-status-logs-2026-02-15.csv" downloads
- [ ] Given I am on the Calculations tab, when I click "Export", then a file "calculation-logs-2026-02-15.csv" downloads
- [ ] Given I have filtered logs by status "Failed", when I click "Export", then only the filtered results are exported

### Edge Cases
- [ ] Given I search for "Portfolio A" in File Uploads, when results are displayed, then only logs related to Portfolio A are shown
- [ ] Given no logs match my search "NONEXISTENT", when results load, then I see message "No logs found matching your search"
- [ ] Given I am viewing 1000+ log entries, when I click "Export", then all entries are included in the CSV (not just the current page)

### Error Handling
- [ ] Given the export fails, when an error occurs, then I see error toast "Failed to export logs. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/logs/{logType}/export?search={query}&filters={filters}` - export logs

## Implementation Notes
- Use Shadcn Input component for search
- Implement client-side search across all log fields
- Use CSV export library (e.g., Papa Parse or csv-writer)
- Include all columns in export with proper formatting
- Add timestamp to export filename
- Support exporting filtered/searched results
- Wireframe reference: screen-17-process-logs-file.md shows search/export UI
