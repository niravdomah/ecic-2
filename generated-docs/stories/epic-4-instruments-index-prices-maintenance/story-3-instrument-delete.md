# Story: Instrument Delete

**Epic:** Instruments & Index Prices Maintenance | **Story:** 3 of 4 | **Wireframe:** screen-08-instruments-maintenance.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/maintenance/instruments` |
| **Target File** | `app/maintenance/instruments/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to delete instruments with confirmation **So that** I can remove obsolete instruments while preventing accidental deletions

## Acceptance Criteria

### Happy Path
- [ ] Given I click "Delete" on instrument "AAPL", when the confirmation dialog opens, then I see title "Delete Instrument?"
- [ ] Given the confirmation dialog is open, when I view the message, then I see "Are you sure you want to delete AAPL (Apple Inc.)? This action cannot be undone."
- [ ] Given the confirmation dialog is open, when I click "Delete", then the dialog closes
- [ ] Given I confirmed deletion, when the dialog closes, then I see success toast "Instrument deleted successfully" and "AAPL" is removed from the table
- [ ] Given the confirmation dialog is open, when I click "Cancel", then the dialog closes without deleting the instrument

### Edge Cases
- [ ] Given instrument "AAPL" is used in existing portfolios, when I attempt to delete it, then I see error message "Cannot delete AAPL: used in 5 portfolios"
- [ ] Given the last instrument on page 2 is deleted, when deletion completes, then the table automatically navigates to page 1

### Error Handling
- [ ] Given the deletion fails, when an error occurs, then I see error toast "Failed to delete instrument. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `DELETE /v1/instruments/{code}` - need to add to spec when backend is implemented

## Implementation Notes
- Use Shadcn AlertDialog component for confirmation
- Check for instrument usage constraints before allowing deletion
- Implement optimistic UI updates (remove from table immediately)
- Handle pagination edge cases after deletion
- Wireframe reference: screen-08-instruments-maintenance.md shows delete action
