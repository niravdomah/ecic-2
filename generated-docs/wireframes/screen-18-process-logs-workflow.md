# Screen: Process Logs - Monthly Workflow Logs

## Purpose
Record end-to-end workflow execution for monthly reporting batches including state transitions and events.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Process Logs > Monthly Workflow Logs                            |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [File Logs] [Monthly Workflow Logs] [Calculation Logs]          |
|                                                                  |
|  Actions:                                                        |
|  [Refresh] [Export Logs]                                        |
|                                                                  |
|  Search & Filter:                                                |
|  [Search by batch or event...]           [Filter v] [Clear]     |
|                                                                  |
|  Monthly Process Logs                                            |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | Report    | Report Date | Batch Type | Event Name            | |
|  | Batch ID  |             |            |                       | |
|  |-----------|-------------|------------|-----------------------| |
|  | 145       | 2026-01-31  | Monthly    | Create Report Batch   | |
|  |-----------|-------------|------------|-----------------------| |
|  | 145       | 2026-01-31  | Monthly    | Prepare Data          | |
|  |-----------|-------------|------------|-----------------------| |
|  | 145       | 2026-01-31  | Monthly    | Run Calculations      | |
|  |-----------|-------------|------------|-----------------------| |
|  | 145       | 2026-01-31  | Monthly    | Publish Draft Reports | |
|  |-----------|-------------|------------|-----------------------| |
|  | 145       | 2026-01-31  | Monthly    | Approve First Level   | |
|  |-----------|-------------|------------|-----------------------| |
|  | 145       | 2026-01-31  | Monthly    | Approve Second Level  | |
|  |-----------|-------------|------------|-----------------------| |
|  | 144       | 2025-12-31  | Monthly    | Approve Third Level   | |
|  |-----------|-------------|------------|-----------------------| |
|  | 144       | 2025-12-31  | Monthly    | Publish Final Reports | |
|  |-----------|-------------|------------|-----------------------| |
|  | 144       | 2025-12-31  | Monthly    | Pending Complete      | |
|  |-----------|-------------|------------|-----------------------| |
|  | 144       | 2025-12-31  | Monthly    | Complete              | |
|  |-----------|-------------|------------|-----------------------| |
|                                                                  |
|  | Executed At         | Last Activity Name    | Status        | |
|  |---------------------|------------------------|---------------| |
|  | 2026-01-30 08:00:15 | BatchCreated           | Completed     | |
|  |                     |                        | [View]        | |
|  |---------------------|------------------------|---------------| |
|  | 2026-01-30 08:05:30 | DataPreparationStarted | Completed     | |
|  |                     |                        | [View]        | |
|  |---------------------|------------------------|---------------| |
|  | 2026-01-30 16:45:22 | CalculationsStarted    | Completed     | |
|  |                     |                        | [View]        | |
|  |---------------------|------------------------|---------------| |
|  | 2026-01-30 17:12:45 | DraftReportsPublished  | Completed     | |
|  |                     |                        | [View]        | |
|  |---------------------|------------------------|---------------| |
|  | 2026-01-31 09:15:33 | L1ApprovalGranted      | Completed     | |
|  |                     |                        | [View]        | |
|  |---------------------|------------------------|---------------| |
|  | 2026-01-31 14:30:18 | L2ApprovalGranted      | In Progress   | |
|  |                     |                        | [View]        | |
|  |---------------------|------------------------|---------------| |
|  | 2026-01-05 10:25:40 | L3ApprovalGranted      | Completed     | |
|  |                     |                        | [View]        | |
|  |---------------------|------------------------|---------------| |
|  | 2026-01-05 10:30:15 | FinalReportsPublished  | Completed     | |
|  |                     |                        | [View]        | |
|  |---------------------|------------------------|---------------| |
|  | 2026-01-05 10:35:22 | PendingComplete        | Completed     | |
|  |                     |                        | [View]        | |
|  |---------------------|------------------------|---------------| |
|  | 2026-01-05 10:40:10 | BatchCompleted         | Completed     | |
|  |                     |                        | [View]        | |
|  |---------------------|------------------------|---------------| |
|                                                                  |
|  Showing 1-10 of 156 workflow logs       [< Prev] [Next >]      |
|                                                                  |
+------------------------------------------------------------------+
```

## Wireframe (Workflow Log Detail View)
```
                +------------------------------------------------+
                | Workflow Event Details                   [X]   |
                +------------------------------------------------+
                |                                                |
                | Report Batch ID: 145                           |
                | Report Date: 2026-01-31 (Monthly)              |
                |                                                |
                | Event: Approve First Level                     |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Execution Details:                             |
                | • Executed At: 2026-01-31 09:15:33             |
                | • Status: Completed                            |
                | • Last Activity: L1ApprovalGranted             |
                | • Duration: 2.4 seconds                        |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Event Metadata:                                |
                | • Approver: mary.jones@example.com             |
                | • Previous State: Publish Draft Reports        |
                | • New State: Approve First Level               |
                | • Workflow Instance ID: WF-145-20260130        |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Activity Log:                                  |
                | 09:15:33.124 - L1ApprovalRequested             |
                | 09:15:33.256 - DataChecksValidated             |
                | 09:15:33.412 - ApprovalDecisionRecorded        |
                | 09:15:33.589 - L1ApprovalGranted               |
                | 09:15:33.702 - StateTransitionCompleted        |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | [Download Event Log]                           |
                |                                                |
                |                                        [Close] |
                |                                                |
                +------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| File Logs Tab | Tab | Switch to file logs |
| Monthly Workflow Logs Tab | Tab | Active tab for workflow logs |
| Calculation Logs Tab | Tab | Switch to calculation logs |
| Refresh | Button | Refreshes log list |
| Export Logs | Button | Exports workflow logs to CSV/Excel |
| Search Input | Text Input | Search by batch ID or event name |
| Filter Dropdown | Dropdown | Filter by batch, date range, status |
| Clear | Button | Clears search and filters |
| Workflow Logs Grid | Table | Displays all workflow execution logs |
| View | Link | Opens detailed event view modal |
| Workflow Detail Modal | Modal | Shows complete event execution details |
| Download Event Log | Button | Downloads detailed event log |
| Close | Button | Closes detail modal |
| Pagination | Navigation | Navigate through pages |

## User Actions
- **View**: Opens modal with detailed workflow event information
- **Download Event Log**: Downloads detailed event execution log
- **Refresh**: Updates log list with latest data
- **Export Logs**: Downloads complete workflow log data
- **Search**: Filters logs by search term
- **Filter**: Applies filters to log list (batch, date range, status)
- **Switch Tabs**: Navigate between log types
- **Pagination**: Navigate through log pages

## Navigation
- **From:** File Logs, top navigation
- **To:** File Logs, Calculation Logs
