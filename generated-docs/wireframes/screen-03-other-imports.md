# Screen: Other Imports Dashboard

## Purpose
List view for managing non-portfolio-specific files such as index data, Bloomberg feeds, and custodian files.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  File Uploads > Other Imports                                    |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [Portfolio Imports] [Other Imports]                             |
|                                                                  |
|  Actions:                                                        |
|  [Trigger SFTP Import] [Export]                                 |
|                                                                  |
|  Other Files                                                     |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | File Type                              | Status            |  |
|  |----------------------------------------|-------------------|  |
|  | Monthly Index Files                    |      [✓]          |  |
|  |                                        |                   |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | File Type                              | Status            |  |
|  |----------------------------------------|-------------------|  |
|  | Bloomberg Credit Ratings               |      [⟳]          |  |
|  |                                        |                   |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | File Type                              | Status            |  |
|  |----------------------------------------|-------------------|  |
|  | Bloomberg Holdings                     |      [✓]          |  |
|  |                                        |                   |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | File Type                              | Status            |  |
|  |----------------------------------------|-------------------|  |
|  | Custodian Files                        |      [✗]          |  |
|  |                                        |                   |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  Legend:                                                         |
|  [✓] Complete  [⟳] Busy  [✗] Failed  [○] Missing                |
|                                                                  |
|  Summary:                                                        |
|  Total Files: 4 | Complete: 2 | Busy: 1 | Failed: 1 | Missing: 0 |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Portfolio Imports Tab | Tab | Switch to portfolio imports view |
| Other Imports Tab | Tab | Active tab for other files |
| Trigger SFTP Import | Button | Import files from SFTP folder |
| Export | Button | Export file upload data |
| File Type Cards | Clickable Cards | Shows file type and status icon |
| Status Icons | Clickable Icons | Shows file upload status |
| Summary Bar | Status Display | Aggregate file status counts |

## User Actions
- **Click Status Icon**: Opens File Upload Modal for that specific file type
- **Trigger SFTP Import**: Initiates automatic import from configured SFTP folder
- **Export**: Downloads file upload status report
- **Switch to Portfolio Imports**: Changes to Portfolio Imports Dashboard

## Navigation
- **From:** Start Page, Portfolio Imports Dashboard
- **To:** File Upload Modal (via status icon click), Portfolio Imports Dashboard
