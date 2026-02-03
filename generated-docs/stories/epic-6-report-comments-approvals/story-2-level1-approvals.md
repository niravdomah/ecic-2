# Story: Level 1 Approvals (Portfolio Manager)

**Epic:** Report Comments & Multi-Level Approvals | **Story:** 2 of 5 | **Wireframe:** screen-14-approvals-l1.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/approvals/level1` |
| **Target File** | `app/approvals/level1/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** Portfolio Manager **I want** to review and approve batches at Level 1 **So that** I can validate portfolio data before it proceeds to Risk Manager review

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/approvals/level1`, when the page loads, then I see "Level 1 Approvals (Portfolio Manager)" page heading
- [ ] Given I am on the Level 1 Approvals page, when the page loads, then I see a table with columns: "Batch", "Month", "Submitted Date", "Status", "Actions"
- [ ] Given batch "2026-02" is awaiting L1 approval, when I view the table, then I see status "Pending Review" with yellow indicator
- [ ] Given I click "Review" on batch "2026-02", when the detail view opens, then I see batch summary, data confirmation status, and report comments
- [ ] Given I am reviewing batch "2026-02", when I scroll to the bottom, then I see "Approve" and "Reject" buttons
- [ ] Given I click "Approve", when the confirmation dialog opens, then I see "Approve Batch 2026-02 for Level 1?"
- [ ] Given I confirm approval, when processing completes, then I see success toast "Batch approved at Level 1" and status changes to "L1 Approved"

### Edge Cases
- [ ] Given no batches are awaiting L1 approval, when I view the page, then I see message "No batches pending Level 1 approval"
- [ ] Given I click "Reject", when the dialog opens, then I see a required "Rejection Comments" text area

### Error Handling
- [ ] Given I attempt to reject without entering comments, when I click "Submit Rejection", then I see error message "Rejection comments are required"
- [ ] Given the approval fails, when an error occurs, then I see error toast "Failed to approve batch. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoints:**
- `GET /v1/approvals/level1` - list batches pending L1 approval
- `POST /v1/approvals/level1/{batchId}/approve` - approve at L1
- `POST /v1/approvals/level1/{batchId}/reject` - reject at L1

## Implementation Notes
- Use Shadcn Table component for batches list
- Use Shadcn Dialog component for approval confirmation
- Use Shadcn Textarea component for rejection comments
- Implement role-based access (Portfolio Manager role required)
- Update batch status in React state upon approval/rejection
- Wireframe reference: screen-14-approvals-l1.md
