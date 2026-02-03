# Story: File Upload Logs

**Epic:** Process Logs & Monitoring | **Story:** 1 of 4 | **Wireframe:** screen-17-process-logs-file.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/admin/logs` |
| **Target File** | `app/admin/logs/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** InvestInsight administrator **I want** to view file upload logs with error details **So that** I can troubleshoot failed uploads and track upload history

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/admin/logs`, when the page loads, then I see "Process Logs" page heading
- [ ] Given I am on the Process Logs page, when the page loads, then I see three tabs: "File Uploads", "Workflow Status", "Calculations"
- [ ] Given I am on the Process Logs page, when the page loads, then the "File Uploads" tab is active by default
- [ ] Given I am viewing File Upload Logs, when the page loads, then I see a table with columns: "Timestamp", "Batch", "Portfolio", "File Type", "Status", "Details"
- [ ] Given a file upload succeeded, when I view the table, then I see green checkmark in Status column with text "Success"
- [ ] Given a file upload failed, when I view the table, then I see red X in Status column with text "Failed"
- [ ] Given I click on a failed upload row, when the row expands, then I see detailed error message and stack trace

### Edge Cases
- [ ] Given I filter by "Failed" status, when I apply the filter, then the table shows only failed uploads
- [ ] Given I filter by portfolio "Sanlam", when I apply the filter, then the table shows only uploads for Sanlam portfolio
- [ ] Given no file uploads exist, when I view the page, then I see message "No file upload logs available"

### Error Handling
- [ ] Given the logs fetch fails, when loading the page, then I see error message "Failed to load file upload logs. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/logs/file-uploads?batch={batchId}&portfolio={portfolio}&status={status}` - fetch file upload logs

## Implementation Notes
- Use Shadcn Table component with expandable rows
- Use Shadcn Tabs component for log type navigation
- Implement filters for status (Success, Failed) and portfolio
- Support sorting by timestamp (most recent first)
- Display full error details in expanded row
- Wireframe reference: screen-17-process-logs-file.md
