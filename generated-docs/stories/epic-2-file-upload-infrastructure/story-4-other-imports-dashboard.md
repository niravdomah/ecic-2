# Story: Other Imports Dashboard

**Epic:** File Upload Infrastructure | **Story:** 4 of 4 | **Wireframe:** screen-03-other-imports.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/file-uploads` |
| **Target File** | `app/file-uploads/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to view and upload custodian and Bloomberg files **So that** I can import all required data sources for portfolio analysis

## Acceptance Criteria

### Happy Path
- [ ] Given I am on the File Uploads page, when I click the "Other Imports" tab, then I see the custodian and Bloomberg file status matrix
- [ ] Given I am viewing Other Imports, when the page loads, then I see a "Custodian Files" section with columns: "Portfolio", "Cust Holdings", "Cust Transactions", "Cust Cash", "Cust Fees"
- [ ] Given I am viewing Other Imports, when the page loads, then I see a "Bloomberg Files" section with columns: "Portfolio", "Bloomberg Holdings"
- [ ] Given a custodian file is uploaded for "Sanlam Cust Holdings", when I view the matrix, then I see a green checkmark (✓) in that cell
- [ ] Given a Bloomberg file is NOT uploaded for "Portfolio C", when I view the matrix, then I see a red X (✗) in that cell
- [ ] Given I click "Upload" for "Portfolio A Cust Cash", when the modal opens, then I see title "Upload File: Portfolio A - Custodian Cash"

### Edge Cases
- [ ] Given I switch from "Portfolio Imports" to "Other Imports", when the tab changes, then the file status matrix updates to show custodian and Bloomberg data
- [ ] Given I switch from "Other Imports" back to "Portfolio Imports", when the tab changes, then the matrix reverts to portfolio manager data

### Error Handling
- [ ] Given the custodian file status fetch fails, when loading Other Imports tab, then I see error message "Failed to load custodian file status. Please refresh the page."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `GET /v1/batches/{batchId}/other-file-status` - need to add to spec when backend is implemented

## Implementation Notes
- Use same Table and Tabs components as Portfolio Imports
- Implement separate state management for custodian/Bloomberg files
- Reuse file upload modal component with different file type options
- Support file types: .xlsx, .csv for custodian and Bloomberg data
- Wireframe reference: screen-03-other-imports.md
