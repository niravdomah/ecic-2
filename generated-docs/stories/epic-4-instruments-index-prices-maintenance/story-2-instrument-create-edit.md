# Story: Instrument Create/Edit

**Epic:** Instruments & Index Prices Maintenance | **Story:** 2 of 4 | **Wireframe:** screen-08-instruments-maintenance.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/maintenance/instruments` |
| **Target File** | `app/maintenance/instruments/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to create new instruments or edit existing ones **So that** I can maintain accurate instrument master data

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the Instruments page, when I click "Add Instrument", then I see a modal with title "Add Instrument"
- [ ] Given the Add modal is open, when I view the form, then I see fields: "Instrument Code", "Name", "Type" (dropdown), "Currency" (dropdown), "ISIN"
- [ ] Given I enter code "AAPL", name "Apple Inc.", type "Equity", currency "USD", ISIN "US0378331005", when I click "Save", then the modal closes
- [ ] Given I save a new instrument, when the modal closes, then I see success toast "Instrument added successfully" and the new instrument appears in the table
- [ ] Given I click "Edit" on an existing instrument, when the modal opens, then I see title "Edit Instrument: AAPL" with pre-filled form fields
- [ ] Given I edit "AAPL" to change name to "Apple Inc. (Updated)", when I click "Save", then I see success toast "Instrument updated successfully"

### Edge Cases
- [ ] Given the Add modal is open, when I click "Cancel", then the modal closes without saving and no new instrument is added
- [ ] Given I start editing an instrument, when I change fields and click "Cancel", then I see confirmation dialog "Discard changes?"

### Error Handling
- [ ] Given the Add modal is open, when I submit without entering "Instrument Code", then I see error message "Instrument code is required"
- [ ] Given the Add modal is open, when I submit without entering "Name", then I see error message "Instrument name is required"
- [ ] Given I enter code "AAPL" that already exists, when I click "Save", then I see error message "Instrument code AAPL already exists"
- [ ] Given the save fails, when an error occurs, then I see error toast "Failed to save instrument. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoints:**
- `POST /v1/instruments` - create new instrument
- `PUT /v1/instruments/{code}` - update existing instrument

## Implementation Notes
- Use Shadcn Dialog component for modal
- Use Shadcn Select component for Type and Currency dropdowns
- Use Shadcn Input component for text fields
- Validate with Zod schema (instrument code format, required fields)
- Implement optimistic UI updates
- Wireframe reference: screen-08-instruments-maintenance.md shows form fields
