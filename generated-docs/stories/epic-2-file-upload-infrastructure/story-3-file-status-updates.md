# Story: File Status Updates

**Epic:** File Upload Infrastructure | **Story:** 3 of 4 | **Wireframe:** screen-02-portfolio-imports.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/file-uploads` |
| **Target File** | `app/file-uploads/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** the file status matrix to update automatically after successful uploads **So that** I can see the current state of uploaded files without manually refreshing

## Acceptance Criteria

### Happy Path
- [ ] Given I upload "Sanlam Holdings" file successfully, when the modal closes, then the "Sanlam Holdings" cell changes from red X (✗) to green checkmark (✓)
- [ ] Given I upload "Portfolio A Cash" file successfully, when the modal closes, then the "Portfolio A Cash" cell changes from red X (✗) to green checkmark (✓)
- [ ] Given I upload a file successfully, when the matrix updates, then the "Upload" button for that cell is removed
- [ ] Given I am viewing the matrix, when I click "Refresh Status" button, then all file statuses are reloaded from the server

### Edge Cases
- [ ] Given an upload is in progress, when I navigate away from the page, then I see a confirmation dialog "Upload in progress. Are you sure you want to leave?"
- [ ] Given I upload a file for "Sanlam Holdings" twice, when the second upload completes, then the cell shows the latest upload timestamp on hover

### Error Handling
- [ ] Given the status refresh fails, when I click "Refresh Status", then I see error toast "Failed to refresh status. Please try again."
- [ ] Given an upload appears to succeed but status doesn't update, when 5 seconds pass, then I see warning toast "Upload completed but status update pending. Click Refresh Status."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/batches/{batchId}/file-status` - need to add to spec when backend is implemented

## Implementation Notes
- Update React state immediately upon successful upload
- Implement optimistic UI updates (update state before server confirmation)
- Add refresh button using Shadcn Button component
- Store file metadata (upload timestamp) for tooltip display
- Use Shadcn Toast component for status notifications
- Wireframe reference: screen-02-portfolio-imports.md shows updated matrix
