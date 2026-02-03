# Screen: Process Logs - File Logs

## Purpose
Track each file's journey through the system including upload, validation, and processing completion.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Process Logs > File Logs                                        |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [File Logs] [Monthly Workflow Logs] [Calculation Logs]          |
|                                                                  |
|  Actions:                                                        |
|  [Refresh] [Export Logs]                                        |
|                                                                  |
|  Search & Filter:                                                |
|  [Search by file name or portfolio...]   [Filter v] [Clear]     |
|                                                                  |
|  File Process Logs                                               |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | File Log | Portfolio  | File Type    | File Name            | |
|  | ID       |            |              |                      | |
|  |----------|------------|--------------|----------------------| |
|  | 10234    | Sanlam     | Holdings     | sanlam_holdings_20...| |
|  |----------|------------|--------------|----------------------| |
|  | 10235    | Portfolio A| Transactions | portfolio_a_trans_...| |
|  |----------|------------|--------------|----------------------| |
|  | 10236    | -          | Index Prices | monthly_index_2026...| |
|  |----------|------------|--------------|----------------------| |
|  | 10237    | Portfolio B| Cash         | portfolio_b_cash_2...| |
|  |----------|------------|--------------|----------------------| |
|  | 10238    | -          | Bloomberg    | bloomberg_ratings_...| |
|  |          |            | Ratings      |                      | |
|  |----------|------------|--------------|----------------------| |
|                                                                  |
|  | Upload      | Validation | Processing | Faults | Status     | |
|  | Timestamp   | Status     | Complete   | Count  |            | |
|  |-------------|------------|------------|--------|------------| |
|  | 2026-02-01  | Passed     | 2026-02-01 |   0    | Complete   | |
|  | 09:15:23    |            | 09:15:45   |        | [View]     | |
|  |-------------|------------|------------|--------|------------| |
|  | 2026-02-01  | Failed     | 2026-02-01 |   5    | Failed     | |
|  | 10:32:17    |            | 10:32:29   |        | [View]     | |
|  |-------------|------------|------------|--------|------------| |
|  | 2026-02-01  | Passed     | 2026-02-01 |   0    | Complete   | |
|  | 08:45:10    |            | 08:45:38   |        | [View]     | |
|  |-------------|------------|------------|--------|------------| |
|  | 2026-02-01  | Passed     | 2026-02-01 |   0    | Complete   | |
|  | 11:20:05    |            | 11:20:22   |        | [View]     | |
|  |-------------|------------|------------|--------|------------| |
|  | 2026-02-01  | In Progress| -          |   -    | Processing | |
|  | 13:10:44    |            |            |        | [View]     | |
|  |-------------|------------|------------|--------|------------| |
|                                                                  |
|  Summary:                                                        |
|  Total Files: 2,345 | Complete: 2,289 | Failed: 34 | Processing: 22 |
|                                                                  |
|  Showing 1-5 of 2,345 file logs          [< Prev] [Next >]      |
|                                                                  |
+------------------------------------------------------------------+
```

## Wireframe (File Log Detail View)
```
                +------------------------------------------------+
                | File Process Log Details                 [X]   |
                +------------------------------------------------+
                |                                                |
                | File Log ID: 10235                             |
                |                                                |
                | File Information:                              |
                | • Portfolio: Portfolio A                       |
                | • File Type: Transactions                      |
                | • File Name: portfolio_a_trans_2026-01-31.csv  |
                | • File Size: 1.8 MB                            |
                | • Records: 856                                 |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Processing Timeline:                           |
                | • Upload Started: 2026-02-01 10:32:17          |
                | • Upload Completed: 2026-02-01 10:32:19        |
                | • Validation Started: 2026-02-01 10:32:19      |
                | • Validation Failed: 2026-02-01 10:32:29       |
                | • Processing Status: Failed                    |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Validation Faults (5):                         |
                |                                                |
                | | Row | Fault Code | Description              | |
                | |-----|------------|-------------------------| |
                | | 145 | VAL001     | Missing required field  | |
                | |     |            | TransactionDate         | |
                | | 276 | VAL003     | Invalid date format     | |
                | | 398 | VAL001     | Missing required field  | |
                | |     |            | Amount                  | |
                | | 512 | VAL005     | Invalid transaction type| |
                | | 689 | VAL001     | Missing required field  | |
                | |     |            | InstrumentCode          | |
                |                                                |
                | [Download Error Report]                        |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                |                                        [Close] |
                |                                                |
                +------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| File Logs Tab | Tab | Active tab for file process logs |
| Monthly Workflow Logs Tab | Tab | Switch to workflow logs |
| Calculation Logs Tab | Tab | Switch to calculation logs |
| Refresh | Button | Refreshes log list |
| Export Logs | Button | Exports file logs to CSV/Excel |
| Search Input | Text Input | Search by file name or portfolio |
| Filter Dropdown | Dropdown | Filter by status, file type, date range |
| Clear | Button | Clears search and filters |
| File Logs Grid | Table | Displays all file process logs |
| View | Link | Opens detailed log view modal |
| Summary Bar | Status Display | Aggregate file status counts |
| File Log Detail Modal | Modal | Shows complete log details and faults |
| Download Error Report | Button | Downloads fault report for file |
| Close | Button | Closes detail modal |
| Pagination | Navigation | Navigate through pages |

## User Actions
- **View**: Opens modal with detailed file log and fault information
- **Download Error Report**: Downloads detailed error report for failed file
- **Refresh**: Updates log list with latest data
- **Export Logs**: Downloads complete file log data
- **Search**: Filters logs by search term
- **Filter**: Applies filters to log list (status, file type, date range)
- **Switch Tabs**: Navigate between log types
- **Pagination**: Navigate through log pages

## Navigation
- **From:** Top navigation, Start Page
- **To:** Monthly Workflow Logs, Calculation Logs
