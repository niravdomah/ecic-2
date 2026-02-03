# Story: Current Status Display

**Epic:** Start Page & Batch Management | **Story:** 3 of 4 | **Wireframe:** screen-01-start-page.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/` |
| **Target File** | `app/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to see the current batch status with workflow stage indicators **So that** I can quickly understand where we are in the monthly process

## Acceptance Criteria

### Happy Path
- [ ] Given a batch "2026-02" exists, when I view the Current Batch section, then I see "Batch: 2026-02 (February 2026)"
- [ ] Given a batch exists, when I view the status, then I see five workflow stages: "Importing", "Confirming", "Maintaining", "Approving", "Complete"
- [ ] Given a batch is in "Importing" stage, when I view the status, then I see "Importing" highlighted with a blue indicator
- [ ] Given a batch is in "Confirming" stage, when I view the status, then I see "Confirming" highlighted with a blue indicator
- [ ] Given a batch is in "Complete" stage, when I view the status, then I see "Complete" highlighted with a green checkmark

### Edge Cases
- [ ] Given no batch exists, when I view the Current Batch section, then I see "No active batch - Create one to begin" with no workflow stages shown
- [ ] Given a batch has substatus "Awaiting L1 Approval", when I view the status, then I see "Approving (Awaiting L1 Approval)" under the stage indicator

### Error Handling
- [ ] Given batch status fetch fails, when loading the page, then I see "Unable to load batch status" in the Current Batch section

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/batches/{batchId}/status` - need to add to spec when backend is implemented

## Implementation Notes
- Use Shadcn Badge components for stage indicators
- Implement color coding: blue for active stage, green for complete, gray for pending
- Display workflow stages in horizontal timeline layout
- Store batch status in React state (update based on mocked workflow progression)
- Wireframe reference: screen-01-start-page.md shows status display with stages
