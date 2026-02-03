# Screen: Data Confirmation - Portfolio Re-imports Tab

## Purpose
Manages and tracks re-import status for portfolios when data needs to be reprocessed.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Data Confirmation                                               |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [Main File Checks] [Other Checks] [Portfolio Re-imports]        |
|                                                                  |
|  Actions:                                                        |
|  [Refresh Status] [Export]                                       |
|                                                                  |
|  Portfolio Re-import Status                                      |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | Portfolio  | Re-import Status | Started At      | Completed  | |
|  |            |                  |                 | At         | |
|  |------------|------------------|-----------------|------------| |
|  | Sanlam     | Complete         | 2026-02-01 9:15 | 2026-02-  | |
|  |            |                  |                 | 01 9:22    | |
|  |------------|------------------|-----------------|------------| |
|  | Portfolio A| In Progress      | 2026-02-01 10:30| -          | |
|  |            | [⟳] 60%          |                 |            | |
|  |------------|------------------|-----------------|------------| |
|  | Portfolio B| Not Started      | -               | -          | |
|  |            | [Re-import]      |                 |            | |
|  |------------|------------------|-----------------|------------| |
|  | Portfolio C| Failed           | 2026-02-01 11:05| 2026-02-  | |
|  |            | [View Errors]    |                 | 01 11:08   | |
|  |------------|------------------|-----------------|------------| |
|  | Portfolio D| Complete         | 2026-01-31 14:20| 2026-01-  | |
|  |            |                  |                 | 31 14:28   | |
|                                                                  |
|  Summary:                                                        |
|  Complete: 2 | In Progress: 1 | Failed: 1 | Not Started: 1      |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Main File Checks Tab | Tab | Switch to file checks |
| Other Checks Tab | Tab | Switch to other data checks |
| Portfolio Re-imports Tab | Tab | Active tab for re-import status |
| Refresh Status | Button | Refresh re-import status |
| Export | Button | Export re-import status |
| Re-import Status Grid | Table | Shows re-import progress per portfolio |
| Re-import Button | Button | Trigger re-import for portfolio |
| View Errors | Link | View re-import error details |
| Progress Indicator | Progress Display | Shows re-import completion percentage |

## User Actions
- **Click Re-import**: Triggers re-import for selected portfolio
- **View Errors**: Opens modal showing re-import error details
- **Refresh Status**: Updates re-import status for all portfolios
- **Export**: Downloads re-import status report
- **Switch Tabs**: Navigate to Main File Checks or Other Checks

## Navigation
- **From:** Data Confirmation Other Checks, top navigation
- **To:** Main File Checks tab, Other Checks tab
