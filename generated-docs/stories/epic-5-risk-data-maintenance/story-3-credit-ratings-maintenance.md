# Story: Credit Ratings Maintenance

**Epic:** Risk Data Maintenance | **Story:** 3 of 4 | **Wireframe:** screen-12-credit-ratings-maintenance.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/maintenance/credit-ratings` |
| **Target File** | `app/maintenance/credit-ratings/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** InvestInsight user **I want** to manage credit ratings for instruments **So that** I can maintain accurate credit risk data for portfolio analysis

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/maintenance/credit-ratings`, when the page loads, then I see "Credit Ratings Maintenance" page heading
- [ ] Given I am on the Credit Ratings page, when the page loads, then I see a table with columns: "Instrument Code", "Instrument Name", "Rating", "Agency", "Rating Date", "Last Updated", "Updated By", "Actions"
- [ ] Given I am on the Credit Ratings page, when I view the top of the page, then I see "Add Rating" and "Outstanding Items: 12" buttons
- [ ] Given I click "Add Rating", when the modal opens, then I see a form with fields: "Instrument Code" (dropdown), "Rating", "Agency" (dropdown with options: S&P, Moody's, Fitch), "Rating Date" (date picker)
- [ ] Given I enter instrument "BOND001", rating "AA+", agency "S&P", date "2026-02-15", when I click "Save", then I see success toast "Credit rating added successfully"
- [ ] Given I click "Edit" on an existing rating, when the modal opens, then I see pre-filled form fields
- [ ] Given I edit a rating from "AA+" to "AA", when I click "Save", then I see success toast "Credit rating updated successfully"

### Edge Cases
- [ ] Given an instrument has no credit rating, when I view the table, then the Rating column shows "—" with a yellow warning icon
- [ ] Given an instrument has ratings from multiple agencies, when I view the table, then I see separate rows for each agency's rating
- [ ] Given I filter by agency "Moody's", when I apply the filter, then the table shows only ratings from Moody's

### Error Handling
- [ ] Given I submit the Add form without selecting "Agency", when I click "Save", then I see error message "Rating agency is required"
- [ ] Given I enter an invalid rating "XYZ", when I click "Save", then I see error message "Invalid rating format. Use standard agency ratings (e.g., AAA, AA+, BB-)"
- [ ] Given the save fails, when an error occurs, then I see error toast "Failed to save credit rating. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoints:**
- `GET /v1/credit-ratings?search={query}&agency={agency}` - list credit ratings
- `POST /v1/credit-ratings` - create new credit rating
- `PUT /v1/credit-ratings/{id}` - update existing credit rating

## Implementation Notes
- Use Shadcn Table, Dialog, Input, Select components
- Use Shadcn DatePicker component for Rating Date
- Validate rating format based on selected agency (S&P: AAA to D, Moody's: Aaa to C)
- Support multiple ratings per instrument (one per agency)
- Support filtering by agency
- Wireframe reference: screen-12-credit-ratings-maintenance.md
