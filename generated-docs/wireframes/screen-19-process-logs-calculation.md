# Screen: Process Logs - Calculation Logs

## Purpose
Track calculation execution including status, timing, and error details for debugging and operations support.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Process Logs > Calculation Logs                                 |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [File Logs] [Monthly Workflow Logs] [Calculation Logs]          |
|                                                                  |
|  Actions:                                                        |
|  [Refresh] [Export Logs]                                        |
|                                                                  |
|  Search & Filter:                                                |
|  [Search by calculation name...]     [Filter v] [Clear]         |
|                                                                  |
|  Calculation Logs                                                |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | Calc    | Calculation Name           | Status    | Start    | |
|  | Log ID  |                            |           | Time     | |
|  |---------|----------------------------|-----------|----------| |
|  | 5001    | Portfolio Valuation        | Complete  | 2026-01- | |
|  |         |                            |           | 30 16:45 | |
|  |---------|----------------------------|-----------|----------| |
|  | 5002    | Performance Attribution    | Complete  | 2026-01- | |
|  |         |                            |           | 30 16:52 | |
|  |---------|----------------------------|-----------|----------| |
|  | 5003    | Risk Metrics Calculation   | Failed    | 2026-01- | |
|  |         |                            |           | 30 17:05 | |
|  |---------|----------------------------|-----------|----------| |
|  | 5004    | Asset Allocation Summary   | Complete  | 2026-01- | |
|  |         |                            |           | 30 17:15 | |
|  |---------|----------------------------|-----------|----------| |
|  | 5005    | Transaction Reconciliation | Complete  | 2026-01- | |
|  |         |                            |           | 30 17:22 | |
|  |---------|----------------------------|-----------|----------| |
|  | 5006    | Fee Calculations           | Failed    | 2026-01- | |
|  |         |                            |           | 30 17:30 | |
|  |---------|----------------------------|-----------|----------| |
|  | 5007    | Cash Flow Analysis         | Complete  | 2026-01- | |
|  |         |                            |           | 30 17:38 | |
|  |---------|----------------------------|-----------|----------| |
|  | 5008    | Index Comparison           | In Prog   | 2026-01- | |
|  |         |                            |           | 30 17:45 | |
|  |---------|----------------------------|-----------|----------| |
|                                                                  |
|  | End Time | Duration | Errors | Actions                        | |
|  |----------|----------|--------|--------------------------------| |
|  | 16:51:34 | 6m 34s   | 0      | [View Log]                     | |
|  |----------|----------|--------|--------------------------------| |
|  | 17:04:22 | 12m 22s  | 0      | [View Log]                     | |
|  |----------|----------|--------|--------------------------------| |
|  | 17:06:15 | 1m 15s   | 3      | [View Log] [View Errors]       | |
|  |----------|----------|--------|--------------------------------| |
|  | 17:21:08 | 5m 8s    | 0      | [View Log]                     | |
|  |----------|----------|--------|--------------------------------| |
|  | 17:29:45 | 7m 45s   | 0      | [View Log]                     | |
|  |----------|----------|--------|--------------------------------| |
|  | 17:32:12 | 2m 12s   | 5      | [View Log] [View Errors]       | |
|  |----------|----------|--------|--------------------------------| |
|  | 17:44:56 | 6m 56s   | 0      | [View Log]                     | |
|  |----------|----------|--------|--------------------------------| |
|  | -        | -        | -      | [View Log]                     | |
|  |----------|----------|--------|--------------------------------| |
|                                                                  |
|  Summary:                                                        |
|  Total: 234 | Complete: 218 | Failed: 12 | In Progress: 4        |
|                                                                  |
|  Showing 1-8 of 234 calculation logs     [< Prev] [Next >]      |
|                                                                  |
+------------------------------------------------------------------+
```

## Wireframe (Calculation Errors View)
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Process Logs > Calculation Errors                               |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [Back to Calculation Logs]                                      |
|                                                                  |
|  Calculation: Risk Metrics Calculation (Log ID: 5003)            |
|  Status: Failed | Duration: 1m 15s | Errors: 3                   |
|                                                                  |
|  Calculation Log Errors                                          |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | Error | Calculation Name      | Status | Start Time          | |
|  | ID    |                       |        |                     | |
|  |-------|-----------------------|--------|---------------------| |
|  | 301   | Risk Metrics          | Failed | 2026-01-30 17:05:22 | |
|  |       | Calculation           |        |                     | |
|  |-------|-----------------------|--------|---------------------| |
|  | 302   | Risk Metrics          | Failed | 2026-01-30 17:05:45 | |
|  |       | Calculation           |        |                     | |
|  |-------|-----------------------|--------|---------------------| |
|  | 303   | Risk Metrics          | Failed | 2026-01-30 17:06:03 | |
|  |       | Calculation           |        |                     | |
|  |-------|-----------------------|--------|---------------------| |
|                                                                  |
|  | End Time    | Error Prefix | Full Error                      | |
|  |-------------|--------------|--------------------------------| |
|  | 17:05:28    | DATA_MISSING | Missing beta values for 12     | |
|  |             |              | instruments in portfolio       | |
|  |             |              | calculation. InstrumentIds:    | |
|  |             |              | [102, 109, 115, 121...]        | |
|  |             |              | [View Full Error]              | |
|  |-------------|--------------|--------------------------------| |
|  | 17:05:52    | CALC_ERROR   | Division by zero in VaR        | |
|  |             |              | calculation for Portfolio A.   | |
|  |             |              | Check market data completeness.| |
|  |             |              | [View Full Error]              | |
|  |-------------|--------------|--------------------------------| |
|  | 17:06:15    | DATA_INVALID | Invalid duration value         | |
|  |             |              | (negative) for InstrumentId    | |
|  |             |              | 145. Duration: -2.5            | |
|  |             |              | [View Full Error]              | |
|  |-------------|--------------|--------------------------------| |
|                                                                  |
|  Actions:                                                        |
|  [Export Error Report] [Download Error Log]                     |
|                                                                  |
+------------------------------------------------------------------+
```

## Wireframe (Full Error Detail Modal)
```
                +------------------------------------------------+
                | Calculation Error Details                [X]   |
                +------------------------------------------------+
                |                                                |
                | Error ID: 301                                  |
                | Calculation: Risk Metrics Calculation          |
                | Calculation Log ID: 5003                       |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Error Information:                             |
                | • Error Prefix: DATA_MISSING                   |
                | • Start Time: 2026-01-30 17:05:22              |
                | • End Time: 2026-01-30 17:05:28                |
                | • Status: Failed                               |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Full Error Message:                            |
                | +--------------------------------------------+ |
                | | Missing beta values for 12 instruments in  | |
                | | portfolio calculation. Unable to complete  | |
                | | risk metrics computation.                  | |
                | |                                            | |
                | | InstrumentIds: [102, 109, 115, 121, 123,   | |
                | | 127, 131, 145, 156, 167, 178, 189]         | |
                | |                                            | |
                | | Resolution: Add beta values for these      | |
                | | instruments in Instrument Betas            | |
                | | Maintenance screen before retrying         | |
                | | calculation.                               | |
                | +--------------------------------------------+ |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Stack Trace:                                   |
                | +--------------------------------------------+ |
                | | at RiskCalculator.CalculateBeta()          | |
                | | at PortfolioRisk.ComputeMetrics()          | |
                | | at MonthlyBatch.RunCalculations()          | |
                | +--------------------------------------------+ |
                |                                                |
                | [Download Error Details]                       |
                |                                                |
                |                                        [Close] |
                |                                                |
                +------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| File Logs Tab | Tab | Switch to file logs |
| Monthly Workflow Logs Tab | Tab | Switch to workflow logs |
| Calculation Logs Tab | Tab | Active tab for calculation logs |
| Refresh | Button | Refreshes log list |
| Export Logs | Button | Exports calculation logs to CSV/Excel |
| Search Input | Text Input | Search by calculation name |
| Filter Dropdown | Dropdown | Filter by status, date range |
| Clear | Button | Clears search and filters |
| Calculation Logs Grid | Table | Displays all calculation execution logs |
| View Log | Link | Opens detailed calculation log view |
| View Errors | Link | Opens calculation errors view |
| Back to Calculation Logs | Link | Returns to main calculation logs view |
| Calculation Errors Grid | Table | Shows all errors for a failed calculation |
| View Full Error | Link | Opens full error detail modal |
| Error Detail Modal | Modal | Shows complete error with stack trace |
| Export Error Report | Button | Exports error report |
| Download Error Log | Button | Downloads error log file |
| Download Error Details | Button | Downloads specific error details |
| Close | Button | Closes modal |
| Pagination | Navigation | Navigate through pages |

## User Actions
- **View Log**: Opens detailed calculation log view
- **View Errors**: Opens calculation errors view for failed calculations
- **View Full Error**: Opens modal with complete error details and stack trace
- **Download Error Details**: Downloads detailed error information
- **Export Error Report**: Exports all errors for a calculation
- **Download Error Log**: Downloads complete error log
- **Refresh**: Updates log list with latest data
- **Export Logs**: Downloads complete calculation log data
- **Search**: Filters logs by search term
- **Filter**: Applies filters to log list (status, date range)
- **Switch Tabs**: Navigate between log types
- **Pagination**: Navigate through log pages

## Navigation
- **From:** File Logs, Monthly Workflow Logs, top navigation
- **To:** File Logs, Monthly Workflow Logs, Calculation Errors view, Instrument Betas Maintenance (to fix errors)
