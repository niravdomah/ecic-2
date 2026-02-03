# Story: Betas Maintenance

**Epic:** Risk Data Maintenance | **Story:** 2 of 4 | **Wireframe:** screen-11-betas-maintenance.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/maintenance/betas` |
| **Target File** | `app/maintenance/betas/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** InvestInsight user **I want** to manage beta coefficients for instruments **So that** I can maintain accurate beta values for portfolio risk analysis

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/maintenance/betas`, when the page loads, then I see "Betas Maintenance" page heading
- [ ] Given I am on the Betas page, when the page loads, then I see a table with columns: "Instrument Code", "Instrument Name", "Beta", "Benchmark Index", "Calculation Date", "Last Updated", "Updated By", "Actions"
- [ ] Given I am on the Betas page, when I view the top of the page, then I see "Add Beta" and "Outstanding Items: 8" buttons
- [ ] Given I click "Add Beta", when the modal opens, then I see a form with fields: "Instrument Code" (dropdown), "Beta", "Benchmark Index" (dropdown), "Calculation Date" (date picker)
- [ ] Given I enter instrument "AAPL", beta "1.15", benchmark "S&P500", date "2026-02-15", when I click "Save", then I see success toast "Beta added successfully"
- [ ] Given I click "Edit" on an existing beta, when the modal opens, then I see pre-filled form fields
- [ ] Given I edit a beta value from "1.15" to "1.20", when I click "Save", then I see success toast "Beta updated successfully"

### Edge Cases
- [ ] Given an instrument has no beta value, when I view the table, then the Beta column shows "—" with a yellow warning icon
- [ ] Given I filter by benchmark "S&P500", when I apply the filter, then the table shows only instruments with S&P500 as benchmark

### Error Handling
- [ ] Given I submit the Add form without entering "Beta", when I click "Save", then I see error message "Beta is required"
- [ ] Given I enter a beta value outside the typical range "5.0", when I click "Save", then I see warning message "Beta value is unusually high. Please confirm."
- [ ] Given the save fails, when an error occurs, then I see error toast "Failed to save beta. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoints:**
- `GET /v1/betas?search={query}&benchmark={index}` - list betas
- `POST /v1/betas` - create new beta
- `PUT /v1/betas/{instrumentCode}` - update existing beta

## Implementation Notes
- Use Shadcn Table, Dialog, Input, Select components
- Use Shadcn DatePicker component for Calculation Date
- Validate beta as decimal number (can be negative) with Zod
- Warn if beta is outside typical range (-2.0 to 3.0)
- Support filtering by benchmark index
- Wireframe reference: screen-11-betas-maintenance.md
