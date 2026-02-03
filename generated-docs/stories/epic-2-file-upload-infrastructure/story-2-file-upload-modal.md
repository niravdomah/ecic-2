# Story: File Upload Modal

**Epic:** File Upload Infrastructure | **Story:** 2 of 4 | **Wireframe:** screen-04-file-upload-modal.md

## Story Metadata
| Field | Value |
|-------|-------|
| **Route** | `/file-uploads` |
| **Target File** | `app/file-uploads/page.tsx` |
| **Page Action** | `modify_existing` |

## User Story
**As a** InvestInsight user **I want** to upload files via a modal dialog with drag-drop or file picker **So that** I can import portfolio data files into the system

## Acceptance Criteria

### Happy Path
- [ ] Given I click an "Upload" button for "Sanlam Holdings", when the modal opens, then I see title "Upload File: Sanlam - Holdings"
- [ ] Given the modal is open, when I view the interface, then I see a drag-drop zone with text "Drag and drop file here or click to browse"
- [ ] Given the modal is open, when I view the form, then I see a "File Type" dropdown showing the preselected type (e.g., "Holdings")
- [ ] Given the modal is open, when I view the form, then I see a "Portfolio" dropdown showing the preselected portfolio (e.g., "Sanlam")
- [ ] Given I drag a file "holdings.xlsx" into the zone, when I drop it, then I see the file name "holdings.xlsx" displayed
- [ ] Given I have selected a file, when I click "Upload", then I see a progress indicator
- [ ] Given the upload succeeds, when processing completes, then I see success message "File uploaded successfully" and the modal closes
- [ ] Given the modal is open, when I click "Cancel", then the modal closes without uploading

### Edge Cases
- [ ] Given the modal is open, when I click the drag-drop zone, then a file picker dialog opens
- [ ] Given I select a file, when I change the portfolio dropdown, then the upload target updates accordingly
- [ ] Given the modal is open, when I attempt to upload without selecting a file, then I see error message "Please select a file to upload"

### Error Handling
- [ ] Given I select a file "document.pdf", when I attempt to upload, then I see error message "Invalid file type. Please upload .xlsx or .csv files only"
- [ ] Given I select a file larger than 10MB, when I attempt to upload, then I see error message "File size exceeds 10MB limit"
- [ ] Given the upload fails, when an error occurs, then I see error message "Upload failed. Please try again."

## API Endpoints (from OpenAPI spec)
N/A - This story uses mocked data

⚠️ **Missing endpoint:** `POST /v1/batches/{batchId}/files` - need to add to spec when backend is implemented

## Implementation Notes
- Use Shadcn Dialog component for modal
- Use Shadcn Select component for dropdowns
- Implement drag-drop with HTML5 drag-drop API
- Validate file type (.xlsx, .csv only) and size (max 10MB) client-side
- Use Shadcn Progress component for upload progress
- Mock upload with 2-second delay for realistic testing
- Wireframe reference: screen-04-file-upload-modal.md
