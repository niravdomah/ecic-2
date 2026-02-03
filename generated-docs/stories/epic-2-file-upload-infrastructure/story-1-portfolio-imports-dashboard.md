# Story: Portfolio Imports Dashboard

**Epic:** File Upload Infrastructure | **Story:** 1 of 4 | **Wireframe:** screen-02-portfolio-imports.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/file-uploads` |
| **Target File** | `app/file-uploads/page.tsx` |
| **Page Action** | `create_new` |

## User Story
**As a** InvestInsight user **I want** to view the portfolio manager file upload status matrix **So that** I can see which files have been uploaded for each portfolio and identify missing files

## Acceptance Criteria

### Happy Path
- [ ] Given I navigate to `/file-uploads`, when the page loads, then I see "File Uploads" page heading
- [ ] Given I am on the File Uploads page, when the page loads, then I see two tabs: "Portfolio Imports" and "Other Imports"
- [ ] Given I am on the File Uploads page, when the page loads, then the "Portfolio Imports" tab is active by default
- [ ] Given I am viewing Portfolio Imports, when the page loads, then I see a table with columns: "Portfolio", "Holdings", "Transactions", "Income", "Cash", "Performance", "Mgmt Fee"
- [ ] Given I am viewing Portfolio Imports, when the page loads, then I see rows for portfolios: "Sanlam", "Portfolio A", "Portfolio B", "Portfolio C", "Portfolio D"
- [ ] Given a file is uploaded for "Sanlam Holdings", when I view the matrix, then I see a green checkmark (✓) in that cell
- [ ] Given a file is NOT uploaded for "Portfolio A Cash", when I view the matrix, then I see a red X (✗) in that cell
- [ ] Given I am viewing Portfolio Imports, when I view each cell, then I see an "Upload" button for cells with missing files

### Edge Cases
- [ ] Given no batch exists, when I navigate to `/file-uploads`, then I see message "Create a batch on the home page to begin uploading files"
- [ ] Given a portfolio has all files uploaded, when I view the row, then all cells show green checkmarks with no upload buttons

### Error Handling
- [ ] Given the file status fetch fails, when loading the page, then I see error message "Failed to load file upload status. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/batches/{batchId}/file-status` - need to add to spec when backend is implemented

## Implementation Notes
- Use Shadcn Table component for file status matrix
- Use Shadcn Tabs component for Portfolio/Other Imports navigation
- Use Shadcn Button component for upload actions
- Implement visual indicators: green checkmark for uploaded, red X for missing
- Store file status in React state with mocked data structure
- Wireframe reference: screen-02-portfolio-imports.md
