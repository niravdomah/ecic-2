# Story: Workflow Status Logs

**Epic:** Process Logs & Monitoring | **Story:** 2 of 4 | **Wireframe:** screen-18-process-logs-workflow.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/admin/logs` |
| **Target File** | `app/admin/logs/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight administrator **I want** to track batch workflow state transitions **So that** I can monitor batch progression and identify bottlenecks

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the Process Logs page, when I click the "Workflow Status" tab, then I see the workflow logs table
- [ ] Given I am viewing Workflow Status Logs, when the page loads, then I see a table with columns: "Timestamp", "Batch", "From Status", "To Status", "User", "Comments"
- [ ] Given batch "2026-02" transitioned from "Importing" to "Confirming", when I view the table, then I see a row showing this transition with timestamp and user
- [ ] Given a batch was rejected at L2, when I view the table, then I see transition "L2 Pending" → "L2 Rejected" with rejection comments
- [ ] Given I filter by batch "2026-02", when I apply the filter, then the table shows only transitions for batch 2026-02 in chronological order

### Edge Cases
- [ ] Given a batch has never changed status, when I view the logs, then I see only the initial "Created" transition
- [ ] Given I view logs for a completed batch, when I see the timeline, then all transitions from "Created" to "Complete" are visible

### Error Handling
- [ ] Given the workflow logs fetch fails, when loading the tab, then I see error message "Failed to load workflow status logs. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/logs/workflow-status?batch={batchId}` - fetch workflow status logs

## Implementation Notes
- Use Shadcn Table component for workflow logs
- Implement batch filter dropdown
- Support sorting by timestamp (most recent first)
- Display transitions with arrow notation (From → To)
- Show user who initiated transition and optional comments
- Wireframe reference: screen-18-process-logs-workflow.md
