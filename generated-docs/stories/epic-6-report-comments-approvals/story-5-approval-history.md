# Story: Approval History & Audit Trail

**Epic:** Report Comments & Multi-Level Approvals | **Story:** 5 of 5 | **Wireframe:** screen-14-approvals-l1.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/approvals/history` |
| **Target File** | `app/approvals/history/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** InvestInsight user **I want** to view complete approval history for all batches **So that** I can audit the approval workflow and track who approved what and when

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/approvals/history`, when the page loads, then I see "Approval History" page heading
- [ ] Given I am on the Approval History page, when the page loads, then I see a table with columns: "Batch", "Month", "L1 Status", "L2 Status", "L3 Status", "Completed Date", "Actions"
- [ ] Given batch "2026-02" is complete, when I view the table, then I see green checkmarks for L1, L2, and L3 statuses
- [ ] Given batch "2026-01" was rejected at L2, when I view the table, then I see green checkmark for L1, red X for L2, and gray dash for L3
- [ ] Given I click "View Details" on batch "2026-02", when the detail modal opens, then I see complete timeline with approver names, timestamps, and comments for each level
- [ ] Given I am viewing approval details, when I see the timeline, then events are sorted chronologically (oldest first)

### Edge Cases
- [ ] Given I filter by "Complete" status, when I apply the filter, then the table shows only completed batches
- [ ] Given I filter by "Rejected" status, when I apply the filter, then the table shows only batches rejected at any level
- [ ] Given no batches have been submitted for approval, when I view the page, then I see message "No approval history available"

### Error Handling
- [ ] Given the approval history fetch fails, when loading the page, then I see error message "Failed to load approval history. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/approvals/history?status={status}` - fetch approval history

## Implementation Notes
- Use Shadcn Table component for history list
- Use Shadcn Dialog component for detail view
- Implement timeline component for approval events
- Support filtering by status (Complete, Rejected, Pending)
- Display approver names, roles, timestamps, and comments
- Wireframe reference: screen-14-approvals-l1.md shows approval context
