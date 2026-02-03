# Story: Level 3 Approvals (Chief Investment Officer)

**Epic:** Report Comments & Multi-Level Approvals | **Story:** 4 of 5 | **Wireframe:** screen-16-approvals-l3.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/approvals/level3` |
| **Target File** | `app/approvals/level3/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** Chief Investment Officer **I want** to perform final approval of batches at Level 3 **So that** I can authorize the completion of the monthly risk analysis workflow

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/approvals/level3`, when the page loads, then I see "Level 3 Approvals (Chief Investment Officer)" page heading
- [ ] Given batch "2026-02" is L2 approved, when I view the table, then I see status "Pending L3 Review" with yellow indicator
- [ ] Given I click "Review" on batch "2026-02", when the detail view opens, then I see complete approval history (L1 and L2), final report preview, and executive summary
- [ ] Given I am reviewing batch "2026-02", when I scroll to the bottom, then I see "Final Approve" and "Reject" buttons
- [ ] Given I click "Final Approve", when I confirm, then I see success toast "Batch completed - Final approval granted" and status changes to "Complete"
- [ ] Given a batch is completed, when I view the table, then I see status "Complete" with green checkmark and "View Report" button

### Edge Cases
- [ ] Given a batch is not yet L2 approved, when I view the table, then I see status "Awaiting L2 Approval" with gray indicator and no Review button
- [ ] Given no batches are awaiting L3 approval, when I view the page, then I see message "No batches pending Level 3 approval"
- [ ] Given I click "Reject" at L3, when I enter comments and confirm, then status changes to "L3 Rejected" and batch is sent back to L2

### Error Handling
- [ ] Given I attempt to approve a batch that hasn't passed L2, when I click Final Approve, then I see error message "Batch must be L2 approved before final approval"
- [ ] Given the approval fails, when an error occurs, then I see error toast "Failed to approve batch. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoints:**
- `GET /v1/approvals/level3` - list batches pending L3 approval
- `POST /v1/approvals/level3/{batchId}/approve` - final approval at L3
- `POST /v1/approvals/level3/{batchId}/reject` - reject at L3

## Implementation Notes
- Use Shadcn Table component for batches list
- Use Shadcn Dialog component for approval confirmation
- Implement role-based access (CIO role required)
- Display complete approval history (L1, L2, L3)
- Update batch status to "Complete" upon final approval
- Wireframe reference: screen-16-approvals-l3.md
