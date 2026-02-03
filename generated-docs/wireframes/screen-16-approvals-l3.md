# Screen: Approvals Dashboard (Level 3)

## Purpose
Final sign-off before publishing reports. Rejection at this level requires a mandatory reason.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Approvals > Level 3 (Final)                                     |
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
|  | Current State: Final Approval                              |  |
|  | Workflow Status: Pending L3 Approval                       |  |
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
|  Portfolio Risk Summary                                          |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | Portfolio  | Total Value | Risk Level | Key Metrics        | |
|  |------------|-------------|------------|--------------------| |
|  | Sanlam     | R 2.4B      | Low        | VaR: 2.1%, Beta: .9| |
|  |            |             |            | [View Report]      | |
|  |------------|-------------|------------|--------------------| |
|  | Portfolio A| R 850M      | Medium     | VaR: 3.5%, Beta: 1.| |
|  |            |             |            | [View Report]      | |
|  |------------|-------------|------------|--------------------| |
|  | Portfolio B| R 1.2B      | Low        | VaR: 2.3%, Beta: .8| |
|  |            |             |            | [View Report]      | |
|  |------------|-------------|------------|--------------------| |
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
|  | Type             | Status   | User              | Date       | |
|  |------------------|----------|-------------------|------------| |
|  | Level 2          | Approved | robert.chen@ex... | 2026-01-31 | |
|  |                  |          |                   | 14:30      | |
|  | Level 1          | Approved | mary.jones@ex...  | 2026-01-31 | |
|  |                  |          |                   | 09:15      | |
|  | Data Preparation | Complete | john.smith@ex...  | 2026-01-30 | |
|  |                  |          |                   | 16:45      | |
|                                                                  |
|  Final Approval Actions                                          |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Ready to give final approval and publish reports?          |  |
|  |                                                            |  |
|  | [Final Approve]                       [Reject to Data Prep]|  |
|  +------------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

## Wireframe (L3 Rejection Modal - Mandatory Reason)
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
                | Rejection Reason (REQUIRED for L3): *          |
                | +--------------------------------------------+ |
                | |                                            | |
                | |                                            | |
                | |                                            | |
                | |                                            | |
                | |                                            | |
                | +--------------------------------------------+ |
                |                                                |
                | Impact:                                        |
                | • Workflow returns to Data Preparation         |
                | • Calculations will be cleared                 |
                | • File uploads and maintenance become editable |
                | • All approvals (L1, L2, L3) reset             |
                | • Rejection reason will be logged and visible  |
                |   to all users                                 |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                |                    [Cancel]  [Confirm Reject]  |
                |                                                |
                +------------------------------------------------+
```

## Wireframe (Final Approval Confirmation)
```
                +------------------------------------------------+
                | Final Approval Confirmation              [X]   |
                +------------------------------------------------+
                |                                                |
                | Report Batch: 2026-01-31 (Monthly)             |
                |                                                |
                | You are about to give final approval for this  |
                | batch. This will:                              |
                |                                                |
                | ✓ Mark the batch as approved                   |
                | ✓ Trigger final report publication             |
                | ✓ Lock all data for this reporting period      |
                | ✓ Make reports available for distribution      |
                |                                                |
                | Please confirm you have reviewed:              |
                | [ ] All data confirmation checks               |
                | [ ] Portfolio risk summaries                   |
                | [ ] Report comments                            |
                | [ ] Approval history                           |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                |                    [Cancel]  [Confirm Approval]|
                |                                                |
                +------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Level 1 Tab | Tab | View Level 1 approval status |
| Level 2 Tab | Tab | View Level 2 approval status |
| Level 3 Tab | Tab | Active tab for Level 3 final approval |
| Current Batch Status | Card | Displays batch details and workflow state |
| Data Confirmation Summary | Card Group | Shows completeness check results |
| Portfolio Risk Summary | Table | Displays portfolio risk metrics |
| View Report | Link | Opens portfolio risk report |
| View Details | Link | Opens detailed data confirmation view |
| Report Comments | Table | Displays report comments for review |
| View Full Comment | Link | Opens modal with full comment text |
| View All Comments | Link | Opens full comments list |
| Approval History | Table | Shows all previous approval actions |
| Final Approve | Button | Opens final approval confirmation modal |
| Reject to Data Prep | Button | Opens rejection modal (requires reason) |
| Rejection Reason | Textarea | Mandatory reason for L3 rejection |
| Review Checklist | Checkboxes | Confirmation checklist for final approval |
| Confirm Approval | Button | Gives final approval and publishes reports |
| Confirm Reject | Button | Confirms rejection with reason |
| Cancel | Button | Closes modal without action |

## User Actions
- **View Details**: Opens Data Confirmation screen for detailed review
- **View Report**: Opens portfolio-specific risk report
- **View Full Comment**: Opens modal showing complete comment text
- **View All Comments**: Opens Report Comments screen
- **Final Approve**: Opens confirmation modal with checklist
- **Confirm Approval**: Gives final approval, publishes reports, and locks batch
- **Reject to Data Prep**: Opens rejection modal
- **Confirm Reject**: Returns batch to Data Preparation with logged reason
- **Cancel**: Closes modal without action
- **Switch Tabs**: Navigate between approval levels (if permissions allow)

## Navigation
- **From:** Level 2 Approvals, top navigation
- **To:** Data Confirmation, Report Comments, Portfolio Reports
