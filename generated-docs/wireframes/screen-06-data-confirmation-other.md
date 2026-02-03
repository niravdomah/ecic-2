# Screen: Data Confirmation - Other Checks Tab

## Purpose
Validates reference data completeness for instruments, prices, ratings, durations, and betas.

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
|  Reference Data Completeness                                     |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Check Type                    | Count | Status             |  |
|  |-------------------------------|-------|--------------------| |
|  | Index Price Incomplete        |   3   | [Fix] ───────────> |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Check Type                    | Count | Status             |  |
|  |-------------------------------|-------|--------------------| |
|  | Instrument Incomplete         |   7   | [Fix] ───────────> |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Check Type                    | Count | Status             |  |
|  |-------------------------------|-------|--------------------| |
|  | Credit Rating Incomplete      |  12   | [Fix] ───────────> |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Check Type                    | Count | Status             |  |
|  |-------------------------------|-------|--------------------| |
|  | Instrument Duration Incomplete|   5   | [Fix] ───────────> |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Check Type                    | Count | Status             |  |
|  |-------------------------------|-------|--------------------| |
|  | Instrument Beta Incomplete    |   8   | [Fix] ───────────> |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Summary:                                                        |
|  Total Incomplete Items: 35                                      |
|                                                                  |
|  Status: [✗] Incomplete                                          |
|  All checks must show 0 incomplete items before proceeding       |
|  to approvals.                                                   |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Main File Checks Tab | Tab | Switch to file checks |
| Other Checks Tab | Tab | Active tab for reference data checks |
| Portfolio Re-imports Tab | Tab | Switch to re-imports view |
| Refresh Checks | Button | Re-run all completeness checks |
| Export | Button | Export check results |
| Check Type Cards | Clickable Cards | Shows check type, count, and fix link |
| Fix Links | Clickable Links | Navigate to maintenance screen |
| Summary Status | Status Display | Overall completeness status |

## User Actions
- **Click Fix Link**: Navigates to appropriate maintenance screen to resolve issues
  - Index Price Incomplete → Index Prices Maintenance
  - Instrument Incomplete → Instruments Maintenance
  - Credit Rating Incomplete → Credit Ratings Maintenance
  - Duration Incomplete → Durations & YTM Maintenance
  - Beta Incomplete → Instrument Betas Maintenance
- **Refresh Checks**: Re-runs all completeness checks
- **Export**: Downloads check results report
- **Switch Tabs**: Navigate to Main File Checks or Portfolio Re-imports

## Navigation
- **From:** Data Confirmation Main File Checks, top navigation
- **To:** Index Prices Maintenance, Instruments Maintenance, Credit Ratings Maintenance, Durations Maintenance, Betas Maintenance
