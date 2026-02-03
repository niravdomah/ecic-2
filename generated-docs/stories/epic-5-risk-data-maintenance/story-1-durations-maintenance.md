# Story: Durations Maintenance

**Epic:** Risk Data Maintenance | **Story:** 1 of 4 | **Wireframe:** screen-10-durations-maintenance.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/maintenance/durations` |
| **Target File** | `app/maintenance/durations/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** InvestInsight user **I want** to manage duration values for instruments **So that** I can maintain accurate duration data for risk calculations

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/maintenance/durations`, when the page loads, then I see "Durations Maintenance" page heading
- [ ] Given I am on the Durations page, when the page loads, then I see a table with columns: "Instrument Code", "Instrument Name", "Duration", "Effective Date", "Last Updated", "Updated By", "Actions"
- [ ] Given I am on the Durations page, when I view the top of the page, then I see "Add Duration" and "Outstanding Items: 5" buttons
- [ ] Given I click "Add Duration", when the modal opens, then I see a form with fields: "Instrument Code" (dropdown), "Duration", "Effective Date" (date picker)
- [ ] Given I enter instrument "BOND001", duration "5.2", date "2026-02-15", when I click "Save", then I see success toast "Duration added successfully"
- [ ] Given I click "Edit" on an existing duration, when the modal opens, then I see pre-filled form fields
- [ ] Given I edit a duration value, when I click "Save", then I see success toast "Duration updated successfully"

### Edge Cases
- [ ] Given an instrument has no duration value, when I view the table, then the Duration column shows "—" (em dash) with a yellow warning icon
- [ ] Given I search for "BOND", when I press Enter, then the table filters to show only instruments matching "BOND"

### Error Handling
- [ ] Given I submit the Add form without entering "Duration", when I click "Save", then I see error message "Duration is required"
- [ ] Given I enter an invalid duration "-1.5", when I click "Save", then I see error message "Duration must be a positive number"
- [ ] Given the save fails, when an error occurs, then I see error toast "Failed to save duration. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoints:**
- `GET /v1/durations?search={query}` - list durations
- `POST /v1/durations` - create new duration
- `PUT /v1/durations/{instrumentCode}` - update existing duration

## Implementation Notes
- Use Shadcn Table, Dialog, Input, Select components
- Use Shadcn DatePicker component for Effective Date
- Validate duration as positive decimal number with Zod
- Highlight missing durations with warning icon
- Display outstanding items count badge
- Wireframe reference: screen-10-durations-maintenance.md
