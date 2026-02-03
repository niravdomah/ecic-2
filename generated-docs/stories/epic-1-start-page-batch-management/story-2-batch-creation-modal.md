# Story: Batch Creation Modal

**Epic:** Start Page & Batch Management | **Story:** 2 of 4 | **Wireframe:** screen-01-start-page.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/` |
| **Target File** | `app/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to create a new monthly batch via a modal dialog **So that** I can begin the monthly risk analysis workflow

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the home page, when I click "Create New Batch", then I see a modal with title "Create New Batch"
- [ ] Given the modal is open, when I view the form, then I see a "Batch Number" input field (e.g., "2026-02")
- [ ] Given the modal is open, when I view the form, then I see a "Month" dropdown with months "January" through "December"
- [ ] Given I enter batch number "2026-02" and select "February", when I click "Create Batch", then the modal closes
- [ ] Given I created a batch, when the modal closes, then I see the batch number "2026-02" displayed in the Current Batch section
- [ ] Given the modal is open, when I click "Cancel", then the modal closes without creating a batch

### Edge Cases
- [ ] Given the modal is open, when I submit without entering a batch number, then I see error message "Batch number is required"
- [ ] Given the modal is open, when I submit without selecting a month, then I see error message "Month is required"
- [ ] Given the modal is open, when I enter an invalid batch number format "ABC", then I see error message "Batch number must be in format YYYY-MM"

### Error Handling
- [ ] Given I submit the form, when batch creation fails, then I see error message "Failed to create batch. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `POST /v1/batches` - need to add to spec when backend is implemented

## Implementation Notes
- Use Shadcn Dialog component for modal
- Use Shadcn Select component for month dropdown
- Use Shadcn Input component for batch number
- Validate batch number format with Zod schema (YYYY-MM pattern)
- Store created batch in React state (localStorage for persistence across refreshes)
- Wireframe reference: screen-01-start-page.md shows batch creation in context
