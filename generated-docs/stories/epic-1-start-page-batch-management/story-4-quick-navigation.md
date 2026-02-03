# Story: Quick Navigation

**Epic:** Start Page & Batch Management | **Story:** 4 of 4 | **Wireframe:** screen-01-start-page.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/` |
| **Target File** | `app/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to navigate quickly to major feature areas from the home page **So that** I can access File Uploads, Data Confirmation, Maintenance, and Admin sections efficiently

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the home page, when I view Quick Navigation, then I see four cards: "File Uploads", "Data Confirmation", "Maintenance", "Admin"
- [ ] Given I am on the home page, when I click the "File Uploads" card, then I navigate to `/file-uploads`
- [ ] Given I am on the home page, when I click the "Data Confirmation" card, then I navigate to `/data-confirmation`
- [ ] Given I am on the home page, when I click the "Maintenance" card, then I navigate to `/maintenance`
- [ ] Given I am on the home page, when I click the "Admin" card, then I navigate to `/admin`
- [ ] Given I hover over a navigation card, when my cursor is over it, then the card shows a hover state with elevated shadow

### Edge Cases
- [ ] Given no batch exists, when I click "Data Confirmation" card, then I still navigate to `/data-confirmation` (the target page will handle the "no batch" state)
- [ ] Given a batch exists, when I click navigation cards, then all routes are accessible regardless of batch status

### Error Handling
- [ ] Given navigation fails, when I click a card, then I remain on the home page and see error toast "Navigation failed. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story implements client-side navigation only

## Implementation Notes
- Use Shadcn Card components with hover effects
- Implement cards in 2x2 grid layout on desktop, stacked on mobile
- Use Next.js Link component for navigation
- Each card should have an icon, title, and brief description
- Wireframe reference: screen-01-start-page.md shows navigation card layout
- Target routes will be implemented in subsequent epics (placeholder pages acceptable for now)
