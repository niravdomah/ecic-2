# Story: Home Page Setup

**Epic:** Start Page & Batch Management | **Story:** 1 of 4 | **Wireframe:** screen-01-start-page.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/` |
| **Target File** | `app/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to see the InvestInsight start page when I visit the application **So that** I have a central dashboard for managing monthly batches

## Acceptance Criteria

### Happy Path
- [ ] Given I visit `/`, when the page loads, then I see "InvestInsight" in the header
- [ ] Given I am on the home page, when the page loads, then I see a "Create New Batch" button
- [ ] Given I am on the home page, when the page loads, then I see "Current Batch" section with placeholder text "No active batch"
- [ ] Given I am on the home page, when the page loads, then I see "Quick Navigation" section with four cards (File Uploads, Data Confirmation, Maintenance, Admin)

### Edge Cases
- [ ] Given no batch exists, when the page loads, then the Current Batch section displays "No active batch - Create one to begin"

### Error Handling
- [ ] Given the page fails to load, when an error occurs, then I see an error message "Failed to load InvestInsight dashboard"

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

## Implementation Notes
- Replace template placeholder with InvestInsight branding
- Use Shadcn Card components for layout structure
- Implement responsive grid layout for Quick Navigation cards
- Wireframe reference: screen-01-start-page.md
