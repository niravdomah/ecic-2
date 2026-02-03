# Screen: Approvals Dashboard (Level 1)

## Purpose
Initial review focusing on data completeness and key checks before advancing to Level 2 approval.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Approvals > Level 1                                             |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [Level 1] [Level 2] [Level 3]                                   |
|                                                                  |
|  Current Batch Status                                            |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Report Date: 2026-01-31                                    |  |
|  | Batch Type: Monthly                                        |  |
|  | Current State: First Approval                              |  |
|  | Workflow Status: Pending L1 Approval                       |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  Data Confirmation Summary                                       |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Main File Checks                                           |  |
|  | ─────────────────────────────────────────────────────────  |  |
|  | Status: [✓] Complete                                       |  |
|  | Complete: 60 | Incomplete: 0                               |  |
|  |                                           [View Details]   |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Other Checks                                               |  |
|  | ─────────────────────────────────────────────────────────  |  |
|  | Status: [✓] Complete                                       |  |
|  | Index Prices: 0 incomplete                                 |  |
|  | Instruments: 0 incomplete                                  |  |
|  | Credit Ratings: 0 incomplete                               |  |
|  | Durations: 0 incomplete                                    |  |
|  | Betas: 0 incomplete                                        |  |
|  |                                           [View Details]   |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  Report Comments                                                 |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | Report Name                    | Comment Preview           | |
|  |--------------------------------|---------------------------| |
|  | Portfolio Performance Summary  | Market volatility incr... | |
|  |                                | [View Full Comment]       | |
|  |--------------------------------|---------------------------| |
|  | Risk Analytics Report          | Increased exposure to ... | |
|  |                                | [View Full Comment]       | |
|  |--------------------------------|---------------------------| |
|  | Asset Allocation Dashboard     | Rebalancing completed ... | |
|  |                                | [View Full Comment]       | |
|  |--------------------------------|---------------------------| |
|                                                                  |
|  [View All Comments (18)]                                        |
|                                                                  |
|  Approval History                                                |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | Type             | Status  | User              | Date       | |
|  |------------------|---------|-------------------|------------| |
|  | Data Preparation | Complete| john.smith@ex...  | 2026-01-30 | |
|  |                  |         |                   | 16:45      | |
|                                                                  |
|  Approval Actions                                                |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Ready to approve this batch for Level 1?                   |  |
|  |                                                            |  |
|  | [Approve for L1]                      [Reject to Data Prep]|  |
|  +------------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

## Wireframe (Rejection Modal)
```
                +------------------------------------------------+
                | Reject to Data Preparation               [X]   |
                +------------------------------------------------+
                |                                                |
                | Report Batch: 2026-01-31 (Monthly)             |
                |                                                |
                | Are you sure you want to reject this batch     |
                | and return it to Data Preparation phase?       |
                |                                                |
                | Rejection Reason (Optional for L1):            |
                | +--------------------------------------------+ |
                | |                                            | |
                | |                                            | |
                | |                                            | |
                | +--------------------------------------------+ |
                |                                                |
                | Impact:                                        |
                | • Workflow returns to Data Preparation         |
                | • Calculations will be cleared                 |
                | • File uploads and maintenance become editable |
                | • All approvals reset                          |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                |                    [Cancel]  [Confirm Reject]  |
                |                                                |
                +------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Level 1 Tab | Tab | Active tab for Level 1 approval |
| Level 2 Tab | Tab | Navigate to Level 2 (if approved) |
| Level 3 Tab | Tab | Navigate to Level 3 (if approved) |
| Current Batch Status | Card | Displays batch details and workflow state |
| Data Confirmation Summary | Card Group | Shows completeness check results |
| View Details | Link | Opens detailed data confirmation view |
| Report Comments | Table | Displays report comments for review |
| View Full Comment | Link | Opens modal with full comment text |
| View All Comments | Link | Opens full comments list |
| Approval History | Table | Shows previous approval actions |
| Approve for L1 | Button | Approves batch and advances to L2 |
| Reject to Data Prep | Button | Opens rejection modal |
| Rejection Reason | Textarea | Optional reason for L1 rejection |
| Confirm Reject | Button | Confirms rejection |
| Cancel | Button | Closes rejection modal |

## User Actions
- **View Details**: Opens Data Confirmation screen for detailed review
- **View Full Comment**: Opens modal showing complete comment text
- **View All Comments**: Opens Report Comments screen
- **Approve for L1**: Advances batch to Level 2 approval stage
- **Reject to Data Prep**: Opens rejection modal
- **Confirm Reject**: Returns batch to Data Preparation phase and clears calculations
- **Cancel**: Closes rejection modal without action
- **Switch Tabs**: Navigate between approval levels (if permissions allow)

## Navigation
- **From:** Start Page, top navigation
- **To:** Data Confirmation, Report Comments, Level 2 Approvals
