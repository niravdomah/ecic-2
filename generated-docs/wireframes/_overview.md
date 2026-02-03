# Wireframes: InvestInsight Portfolio Reporting Platform

## Summary
Complete wireframe set for InvestInsight, a comprehensive portfolio reporting and data stewardship platform designed to help investment teams prepare accurate weekly and monthly reports with robust data governance, multi-level approvals, and full audit trails.

## Screens

| # | Screen | Description | File |
|---|--------|-------------|------|
| 1 | Start Page | Dashboard showing current batch status, workflow state, and quick navigation | `screen-01-start-page.md` |
| 2 | Portfolio Imports Dashboard | Matrix grid showing file upload status per portfolio and file type | `screen-02-portfolio-imports.md` |
| 3 | Other Imports Dashboard | List view for non-portfolio files (indexes, Bloomberg, custodian) | `screen-03-other-imports.md` |
| 4 | File Upload Modal | Popup for viewing status, uploading, and viewing errors for files | `screen-04-file-upload-modal.md` |
| 5 | Data Confirmation - Main File Checks | Grid showing portfolio manager, custodian, Bloomberg data completeness | `screen-05-data-confirmation-main.md` |
| 6 | Data Confirmation - Other Checks | Summary counts for incomplete reference data (prices, instruments, ratings, etc.) | `screen-06-data-confirmation-other.md` |
| 7 | Data Confirmation - Re-imports | Grid showing portfolio re-import status and progress | `screen-07-data-confirmation-reimports.md` |
| 8 | Instruments Maintenance | CRUD grid for instrument master data with audit trail | `screen-08-instruments-maintenance.md` |
| 9 | Index Prices Maintenance | CRUD grid for index prices with history view | `screen-09-index-prices-maintenance.md` |
| 10 | Durations & YTM Maintenance | CRUD grid with separate outstanding items grid for missing durations | `screen-10-durations-maintenance.md` |
| 11 | Instrument Betas Maintenance | CRUD grid with separate outstanding items grid for missing betas | `screen-11-betas-maintenance.md` |
| 12 | Credit Ratings Maintenance | CRUD grid with rating changes view showing upgrades/downgrades | `screen-12-credit-ratings-maintenance.md` |
| 13 | Report Comments | CRUD grid for report commentary linked to specific reports | `screen-13-report-comments.md` |
| 14 | Approvals Dashboard (L1) | Level 1 approval screen with data check summary and approve/reject actions | `screen-14-approvals-l1.md` |
| 15 | Approvals Dashboard (L2) | Level 2 approval screen with portfolio risk summary | `screen-15-approvals-l2.md` |
| 16 | Approvals Dashboard (L3) | Level 3 final approval with mandatory rejection reason | `screen-16-approvals-l3.md` |
| 17 | Process Logs - File Logs | Grid showing file processing history with fault details | `screen-17-process-logs-file.md` |
| 18 | Process Logs - Monthly Workflow | Grid showing workflow execution events and state transitions | `screen-18-process-logs-workflow.md` |
| 19 | Process Logs - Calculation Logs | Grid showing calculation execution status with error viewing | `screen-19-process-logs-calculation.md` |

## Screen Flow

### Primary User Journey (Monthly Reporting Cycle)

```
[Start Page]
    │
    ├─> [Create New Batch]
    │
    ├─> [Portfolio Imports Dashboard]
    │   └─> [File Upload Modal] (upload files for each portfolio)
    │
    ├─> [Other Imports Dashboard]
    │   └─> [File Upload Modal] (upload reference files)
    │
    ├─> [Data Confirmation - Main File Checks]
    │   ├─> Click incomplete → [Portfolio Imports Dashboard]
    │   └─> All complete → [Data Confirmation - Other Checks]
    │
    ├─> [Data Confirmation - Other Checks]
    │   ├─> Index Prices incomplete → [Index Prices Maintenance]
    │   ├─> Instruments incomplete → [Instruments Maintenance]
    │   ├─> Ratings incomplete → [Credit Ratings Maintenance]
    │   ├─> Durations incomplete → [Durations & YTM Maintenance]
    │   └─> Betas incomplete → [Instrument Betas Maintenance]
    │
    ├─> [Report Comments] (add commentary for reports)
    │
    ├─> [Approvals Dashboard (L1)]
    │   ├─> Approve → [Approvals Dashboard (L2)]
    │   └─> Reject → [Start Page] (returns to Data Preparation)
    │
    ├─> [Approvals Dashboard (L2)]
    │   ├─> Approve → [Approvals Dashboard (L3)]
    │   └─> Reject → [Start Page] (returns to Data Preparation)
    │
    └─> [Approvals Dashboard (L3)]
        ├─> Approve → Batch Complete
        └─> Reject (with reason) → [Start Page] (returns to Data Preparation)
```

### Support & Debugging Journey

```
[Process Logs - File Logs]
    │
    ├─> View failed file → [File Upload Modal] (retry upload)
    │
[Process Logs - Monthly Workflow]
    │
    ├─> Track workflow state transitions
    │
[Process Logs - Calculation Logs]
    │
    └─> View errors → Fix data issues in maintenance screens
```

## Design Notes

### Component Patterns

**Navigation**
- Top navigation bar with main sections: Home, File Uploads, Data Confirmation, Maintenance, Admin
- Consistent user menu and logout in top right
- Breadcrumb navigation showing current location

**Data Grids**
- Consistent table styling across all screens
- Pagination controls at bottom
- Action buttons aligned right within rows
- Status indicators using icons: [✓] Complete, [⟳] Busy, [✗] Failed, [○] Missing

**Modals**
- Close button [X] in top right
- Clear sections separated by horizontal rules
- Action buttons at bottom (Cancel/Save pattern)
- Consistent spacing and padding

**Forms**
- Required fields marked with asterisk (*)
- Dropdown selectors for reference data
- Multi-line textareas for comments and long text
- Clear labels above inputs

**Status Indicators**
- Color-coded status badges (not shown in ASCII but implied)
- Icons for complete/incomplete/failed states
- Progress bars for ongoing operations
- Summary counts showing totals

### Responsive Considerations

- Grids should be horizontally scrollable on smaller screens
- Modals should overlay and center on screen
- Navigation should collapse to hamburger menu on mobile
- Action buttons should stack vertically on narrow screens
- Tables should support column hiding on mobile

### Accessibility

- All interactive elements represented as clickable [Buttons] or [Links]
- Form inputs clearly labeled
- Tab navigation between sections
- Status information available as text, not just color
- Modal dialogs trap focus when open

### Workflow State Management

**Data Preparation Phase:**
- Full access to file uploads and maintenance screens
- CRUD operations enabled on all maintenance grids
- Files can be uploaded, replaced, or canceled

**Approval Phases (L1/L2/L3):**
- File uploads and maintenance screens become read-only
- No CRUD operations allowed
- Users can only view data and approve/reject

**Rejection Behavior:**
- Any rejection returns workflow to Data Preparation phase
- Calculations are cleared
- File uploads and maintenance become editable again
- L3 rejections require mandatory reason

### Audit Trail Features

All maintenance screens (Instruments, Index Prices, Durations, Betas, Credit Ratings) include:
- Last Changed By field showing user email
- Last Changed Date field with timestamp
- [History] link to view complete audit trail
- Full audit trail view showing all changes with before/after values

### Error Handling

**File Upload Errors:**
- Validation errors shown in modal
- Row number and error code provided
- Descriptive error messages
- Option to retry validation or download error report

**Calculation Errors:**
- Error prefix categorization (DATA_MISSING, CALC_ERROR, etc.)
- Full error message with resolution guidance
- Stack trace for debugging
- Link to maintenance screen to fix data issues

## Implementation Priority

### Phase 1: Core Workflow (MVP)
1. Start Page
2. Portfolio Imports Dashboard
3. Other Imports Dashboard
4. File Upload Modal
5. Data Confirmation tabs (all 3)

### Phase 2: Data Maintenance
6. Instruments Maintenance
7. Index Prices Maintenance
8. Durations & YTM Maintenance
9. Instrument Betas Maintenance
10. Credit Ratings Maintenance

### Phase 3: Approvals & Governance
11. Report Comments
12. Approvals Dashboard (L1)
13. Approvals Dashboard (L2)
14. Approvals Dashboard (L3)

### Phase 4: Support & Debugging
15. Process Logs - File Logs
16. Process Logs - Monthly Workflow
17. Process Logs - Calculation Logs

## Key User Roles

**Operations Lead:**
- Uses: Start Page, File Uploads, Data Confirmation
- Actions: Create batches, upload files, verify completeness

**Analyst:**
- Uses: Data Confirmation, Maintenance screens, Report Comments
- Actions: Fix data issues, update reference data, add commentary

**Approver (L1):**
- Uses: Approvals Dashboard (L1), Data Confirmation
- Actions: Review data completeness, approve or reject

**Approver (L2):**
- Uses: Approvals Dashboard (L2), Portfolio Reports
- Actions: Review portfolio metrics, approve or reject

**Approver (L3):**
- Uses: Approvals Dashboard (L3)
- Actions: Final sign-off, reject with mandatory reason

**Administrator:**
- Uses: All screens, Process Logs
- Actions: Support operations, debug issues, manage system

## Next Steps

After wireframe approval:
1. Hand off to feature-planner agent for technical specification
2. Feature-planner creates implementation plan with:
   - Component structure
   - API integration details
   - State management approach
   - Testing strategy
3. Developer agent implements features following TDD workflow
4. Quality gates ensure production readiness

---

**Created:** 2026-02-03
**Status:** Ready for Review
**Next Phase:** PLAN (feature-planner agent)
