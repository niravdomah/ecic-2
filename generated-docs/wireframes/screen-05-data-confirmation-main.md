# Screen: Data Confirmation - Main File Checks Tab

## Purpose
Verifies that all required portfolio and custodian data is complete before proceeding to approvals.

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
|  [Refresh Checks] [Export]                                       |
|                                                                  |
|  Portfolio Manager Data                                          |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Portfolio  | Holdings | Trans | Income | Cash | Perf | Mgmt Fee | |
|  -----------|----------|-------|--------|------|------|----------| |
|  Sanlam     |   [✓]    |  [✓]  |  [✓]   | [✓]  | [✓]  |   [✓]    | |
|  Portfolio A|   [✓]    |  [✓]  |  [✓]   | [✗]  | [✓]  |   [✓]    | |
|  Portfolio B|   [✓]    |  [✓]  |  [✓]   | [✓]  | [✓]  |   [✓]    | |
|  Portfolio C|   [✗]    |  [✗]  |  [✗]   | [✗]  | [✗]  |   [✗]    | |
|  Portfolio D|   [✓]    |  [✓]  |  [✓]   | [✓]  | [✓]  |   [✓]    | |
|                                                                  |
|  Custodian Data                                                  |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Portfolio  | Cust Holdings | Cust Trans | Cust Cash | Cust Fee | |
|  -----------|---------------|------------|-----------|----------| |
|  Sanlam     |      [✓]      |    [✓]     |    [✓]    |   [✓]    | |
|  Portfolio A|      [✓]      |    [✓]     |    [✓]    |   [✓]    | |
|  Portfolio B|      [✓]      |    [✓]     |    [✓]    |   [✓]    | |
|  Portfolio C|      [✗]      |    [✗]     |    [✗]    |   [✗]    | |
|  Portfolio D|      [✓]      |    [✓]     |    [✓]    |   [✓]    | |
|                                                                  |
|  Bloomberg Holdings                                              |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Portfolio  | Bloomberg Holdings |                                |
|  -----------|--------------------|                                |
|  Sanlam     |        [✓]         |                                |
|  Portfolio A|        [✓]         |                                |
|  Portfolio B|        [✓]         |                                |
|  Portfolio C|        [✗]         |                                |
|  Portfolio D|        [✓]         |                                |
|                                                                  |
|  Summary:                                                        |
|  Complete: 50 | Incomplete: 10 | Total Checks: 60                |
|                                                                  |
|  [✓] = Complete  [✗] = Incomplete (click to navigate to fix)    |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Main File Checks Tab | Tab | Active tab for file completeness checks |
| Other Checks Tab | Tab | Switch to other data checks |
| Portfolio Re-imports Tab | Tab | Switch to re-imports view |
| Refresh Checks | Button | Re-run all completeness checks |
| Export | Button | Export check results |
| Status Indicators | Clickable Icons | Shows complete/incomplete status |
| Portfolio Manager Data Grid | Table | File completeness per portfolio |
| Custodian Data Grid | Table | Custodian file completeness |
| Bloomberg Holdings Grid | Table | Bloomberg data completeness |
| Summary Bar | Status Display | Aggregate check counts |

## User Actions
- **Click Incomplete Icon**: Navigates to File Uploads screen to fix the issue
- **Refresh Checks**: Re-runs all completeness checks
- **Export**: Downloads check results report
- **Switch Tabs**: Navigate to Other Checks or Portfolio Re-imports

## Navigation
- **From:** Start Page, top navigation
- **To:** File Uploads (via incomplete icon click), Other Checks tab, Portfolio Re-imports tab
