# Screen: Portfolio Imports Dashboard

## Purpose
Matrix view of all portfolio files organized by portfolio and file type for quick status identification.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  File Uploads > Portfolio Imports                                |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [Portfolio Imports] [Other Imports]                             |
|                                                                  |
|  Actions:                                                        |
|  [Trigger SFTP Import] [Re-import All] [Export]                 |
|                                                                  |
|  Portfolio Files Matrix                                          |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Portfolio  | Holdings | Trans | Inst  | Income| Cash  | Perf  | Mgmt | |
|             |          | act   | Static|       |       |       | Fees | |
|  -----------|----------|-------|-------|-------|-------|-------|------| |
|  Sanlam     |   [✓]    |  [✓]  |  [✓]  |  [✓]  |  [✓]  |  [✓]  | [✓]  | |
|  Portfolio A|   [✓]    |  [⟳]  |  [✓]  |  [✓]  |  [✗]  |  [✓]  | [✓]  | |
|  Portfolio B|   [✓]    |  [✓]  |  [✓]  |  [✓]  |  [✓]  |  [✓]  | [✓]  | |
|  Portfolio C|   [○]    |  [○]  |  [○]  |  [○]  |  [○]  |  [○]  | [○]  | |
|  Portfolio D|   [✓]    |  [✓]  |  [✓]  |  [✓]  |  [✓]  |  [✓]  | [✓]  | |
|  Portfolio E|   [✓]    |  [⟳]  |  [✓]  |  [✓]  |  [✓]  |  [✓]  | [✓]  | |
|                                                                  |
|  Legend:                                                         |
|  [✓] Complete  [⟳] Busy  [✗] Failed  [○] Missing                |
|                                                                  |
|  Summary:                                                        |
|  Total Files: 56 | Complete: 48 | Busy: 3 | Failed: 1 | Missing: 4 |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Portfolio Imports Tab | Tab | Active tab for portfolio files |
| Other Imports Tab | Tab | Switch to other imports view |
| Trigger SFTP Import | Button | Import files from SFTP folder |
| Re-import All | Button | Re-import all files for all portfolios |
| Export | Button | Export file upload data |
| Status Icons | Clickable Icons | Shows file status per portfolio/file type |
| Summary Bar | Status Display | Aggregate file status counts |

## User Actions
- **Click Status Icon**: Opens File Upload Modal for that specific file
- **Trigger SFTP Import**: Initiates automatic import from configured SFTP folder
- **Re-import All**: Re-imports all portfolio files
- **Export**: Downloads file upload status report
- **Switch to Other Imports**: Changes to Other Imports Dashboard

## Navigation
- **From:** Start Page, top navigation
- **To:** File Upload Modal (via status icon click), Other Imports Dashboard
