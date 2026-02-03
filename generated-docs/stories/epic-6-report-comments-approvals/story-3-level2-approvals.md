# Story: Level 2 Approvals (Risk Manager)

**Epic:** Report Comments & Multi-Level Approvals | **Story:** 3 of 5 | **Wireframe:** screen-15-approvals-l2.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/approvals/level2` |
| **Target File** | `app/approvals/level2/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** Risk Manager **I want** to review and approve batches at Level 2 **So that** I can validate risk analysis before it proceeds to CIO final approval

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/approvals/level2`, when the page loads, then I see "Level 2 Approvals (Risk Manager)" page heading
- [ ] Given batch "2026-02" is L1 approved, when I view the table, then I see status "Pending L2 Review" with yellow indicator
- [ ] Given I click "Review" on batch "2026-02", when the detail view opens, then I see L1 approval details, risk metrics summary, and report comments
- [ ] Given I am reviewing batch "2026-02", when I scroll to the bottom, then I see "Approve" and "Reject" buttons
- [ ] Given I click "Approve", when I confirm, then I see success toast "Batch approved at Level 2" and status changes to "L2 Approved"
- [ ] Given I click "Reject", when I enter comments and confirm, then status changes to "L2 Rejected" and batch is sent back to L1

### Edge Cases
- [ ] Given a batch is not yet L1 approved, when I view the table, then I see status "Awaiting L1 Approval" with gray indicator and no Review button
- [ ] Given no batches are awaiting L2 approval, when I view the page, then I see message "No batches pending Level 2 approval"

### Error Handling
- [ ] Given I attempt to approve a batch that hasn't passed L1, when I click Approve, then I see error message "Batch must be L1 approved before L2 approval"
- [ ] Given the approval fails, when an error occurs, then I see error toast "Failed to approve batch. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoints:**
- `GET /v1/approvals/level2` - list batches pending L2 approval
- `POST /v1/approvals/level2/{batchId}/approve` - approve at L2
- `POST /v1/approvals/level2/{batchId}/reject` - reject at L2

## Implementation Notes
- Use Shadcn Table component for batches list
- Use Shadcn Dialog component for approval confirmation
- Implement role-based access (Risk Manager role required)
- Display L1 approval details (approver, timestamp, comments)
- Prevent L2 approval if L1 not approved
- Wireframe reference: screen-15-approvals-l2.md
