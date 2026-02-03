# Story: Report Comments Management

**Epic:** Report Comments & Multi-Level Approvals | **Story:** 1 of 5 | **Wireframe:** screen-13-report-comments.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/report-comments` |
| **Target File** | `app/report-comments/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** InvestInsight user **I want** to add and edit report comments with rich text **So that** I can provide commentary for monthly risk reports

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/report-comments`, when the page loads, then I see "Report Comments" page heading with current batch number
- [ ] Given I am on the Report Comments page, when the page loads, then I see sections: "Executive Summary", "Market Commentary", "Portfolio Performance", "Risk Analysis"
- [ ] Given I am viewing the Executive Summary section, when the page loads, then I see a rich text editor with formatting toolbar (bold, italic, bullets, numbering)
- [ ] Given I type "The portfolio performed well this month." in Executive Summary, when I click "Save", then I see success toast "Comments saved successfully"
- [ ] Given I saved comments, when I navigate away and return, then my comments are preserved
- [ ] Given I am editing Market Commentary, when I select text and click "Bold", then the text becomes bold
- [ ] Given I am viewing the page, when I scroll to the bottom, then I see "Submit for Approval" button

### Edge Cases
- [ ] Given no batch exists, when I navigate to `/report-comments`, then I see message "Create a batch on the home page to begin"
- [ ] Given I have unsaved changes, when I attempt to navigate away, then I see confirmation dialog "You have unsaved changes. Discard them?"

### Error Handling
- [ ] Given the save fails, when I click "Save", then I see error toast "Failed to save comments. Please try again."
- [ ] Given the comments fetch fails, when loading the page, then I see error message "Failed to load report comments. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoints:**
- `GET /v1/batches/{batchId}/comments` - fetch report comments
- `PUT /v1/batches/{batchId}/comments` - save report comments

## Implementation Notes
- Use rich text editor library (e.g., Tiptap or Lexical)
- Implement auto-save every 30 seconds
- Store comments in React state with localStorage backup
- Support basic formatting: bold, italic, underline, bullets, numbering
- Wireframe reference: screen-13-report-comments.md
