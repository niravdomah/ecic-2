# Story: Index Prices Maintenance

**Epic:** Instruments & Index Prices Maintenance | **Story:** 4 of 4 | **Wireframe:** screen-09-index-prices-maintenance.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/maintenance/index-prices` |
| **Target File** | `app/maintenance/index-prices/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** InvestInsight user **I want** to manage index prices with CRUD functionality **So that** I can maintain accurate benchmark pricing data for risk calculations

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/maintenance/index-prices`, when the page loads, then I see "Index Prices Maintenance" page heading
- [ ] Given I am on the Index Prices page, when the page loads, then I see a table with columns: "Index Code", "Index Name", "Price", "Price Date", "Last Updated", "Updated By", "Actions"
- [ ] Given I am on the Index Prices page, when I view the top of the page, then I see an "Add Index Price" button
- [ ] Given I click "Add Index Price", when the modal opens, then I see a form with fields: "Index Code" (dropdown), "Price", "Price Date" (date picker)
- [ ] Given I enter index "S&P500", price "4500.00", date "2026-02-15", when I click "Save", then I see success toast "Index price added successfully"
- [ ] Given I click "Edit" on an existing index price, when the modal opens, then I see pre-filled form fields
- [ ] Given I edit an index price, when I click "Save", then I see success toast "Index price updated successfully"
- [ ] Given I click "Delete" on an index price, when I confirm deletion, then I see success toast "Index price deleted successfully"

### Edge Cases
- [ ] Given I search for "S&P", when I press Enter, then the table filters to show only indices matching "S&P"
- [ ] Given there are multiple prices for the same index on different dates, when I view the table, then I see all historical entries sorted by Price Date descending

### Error Handling
- [ ] Given I submit the Add form without entering "Price", when I click "Save", then I see error message "Price is required"
- [ ] Given I enter an invalid price "ABC", when I click "Save", then I see error message "Price must be a valid number"
- [ ] Given the save fails, when an error occurs, then I see error toast "Failed to save index price. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoints:**
- `GET /v1/index-prices?search={query}` - list index prices
- `POST /v1/index-prices` - create new index price
- `PUT /v1/index-prices/{id}` - update existing index price
- `DELETE /v1/index-prices/{id}` - delete index price

## Implementation Notes
- Use Shadcn Table, Dialog, Input, Select components
- Use Shadcn DatePicker component for Price Date
- Validate price as positive decimal number with Zod
- Implement search/filter functionality
- Support multiple prices for same index on different dates
- Wireframe reference: screen-09-index-prices-maintenance.md
