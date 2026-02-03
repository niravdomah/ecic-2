# Screen: Approvals Dashboard (Level 2)

## Purpose
Portfolio-level confirmation and risk checks before advancing to Level 3 approval.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Approvals > Level 2                                             |
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
|  | Current State: Second Approval                             |  |
|  | Workflow Status: Pending L2 Approval                       |  |
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
|                                                                  |
|  [View All Comments (18)]                                        |
|                                                                  |
|  Approval History                                                |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | Type             | Status   | User              | Date       | |
|  |------------------|----------|-------------------|------------| |
|  | Level 1          | Approved | mary.jones@ex...  | 2026-01-31 | |
|  |                  |          |                   | 09:15      | |
|  | Data Preparation | Complete | john.smith@ex...  | 2026-01-30 | |
|  |                  |          |                   | 16:45      | |
|                                                                  |
|  Approval Actions                                                |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Ready to approve this batch for Level 2?                   |  |
|  |                                                            |  |
|  | [Approve for L2]                      [Reject to Data Prep]|  |
|  +------------------------------------------------------------+  |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Level 1 Tab | Tab | View Level 1 approval status |
| Level 2 Tab | Tab | Active tab for Level 2 approval |
| Level 3 Tab | Tab | Navigate to Level 3 (if approved) |
| Current Batch Status | Card | Displays batch details and workflow state |
| Data Confirmation Summary | Card Group | Shows completeness check results |
| Portfolio Risk Summary | Table | Displays portfolio risk metrics |
| View Report | Link | Opens portfolio risk report |
| View Details | Link | Opens detailed data confirmation view |
| Report Comments | Table | Displays report comments for review |
| View Full Comment | Link | Opens modal with full comment text |
| View All Comments | Link | Opens full comments list |
| Approval History | Table | Shows previous approval actions |
| Approve for L2 | Button | Approves batch and advances to L3 |
| Reject to Data Prep | Button | Opens rejection modal |

## User Actions
- **View Details**: Opens Data Confirmation screen for detailed review
- **View Report**: Opens portfolio-specific risk report
- **View Full Comment**: Opens modal showing complete comment text
- **View All Comments**: Opens Report Comments screen
- **Approve for L2**: Advances batch to Level 3 approval stage
- **Reject to Data Prep**: Opens rejection modal (returns to Data Preparation)
- **Switch Tabs**: Navigate between approval levels (if permissions allow)

## Navigation
- **From:** Level 1 Approvals, top navigation
- **To:** Data Confirmation, Report Comments, Level 3 Approvals, Portfolio Reports
