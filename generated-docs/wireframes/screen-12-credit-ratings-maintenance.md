# Screen: Credit Ratings Maintenance

## Purpose
Manage credit rating data for instruments and view rating changes across portfolios.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Maintenance > Credit Ratings                                    |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [Current Ratings] [Rating Changes]                              |
|                                                                  |
|  Actions:                                                        |
|  [+ Add Rating] [Retry Decision Flow] [Refresh]                 |
|                                                                  |
|  Search & Filter:                                                |
|  [Search by instrument code or ISIN...]  [Filter v] [Clear]     |
|                                                                  |
|  Credit Ratings                                                  |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | ID  | Instrument | ISIN        | Country | Rating Agency    | |
|  |     | Code       |             |         |                  | |
|  |-----|------------|-------------|---------|------------------| |
|  | 901 | INST001    | ZAE0001234  | ZA      | Moody's          | |
|  |     |            |             |         | [Edit]           | |
|  |-----|------------|-------------|---------|------------------| |
|  | 902 | INST003    | GB987654321 | GB      | S&P              | |
|  |     |            |             |         | [Edit]           | |
|  |-----|------------|-------------|---------|------------------| |
|  | 903 | INST005    | US555555555 | US      | Fitch            | |
|  |     |            |             |         | [Edit]           | |
|  |-----|------------|-------------|---------|------------------| |
|  | 904 | INST007    | ZAE7777777  | ZA      | Moody's          | |
|  |     |            |             |         | [Edit]           | |
|  |-----|------------|-------------|---------|------------------| |
|                                                                  |
|  | National | International | Final Natl | Final Intl | Effective| |
|  | Rating   | Rating        | Rating     | Rating     | Date     | |
|  |----------|---------------|------------|------------|----------| |
|  | Aa1.za   | Baa3          | Aa1.za     | Baa3       | 2026-01- | |
|  |          |               |            |            | 15       | |
|  | [History] [Delete]                                           | |
|  |----------|---------------|------------|------------|----------| |
|  | AA-      | AA-           | AA-        | AA-        | 2025-12- | |
|  |          |               |            |            | 20       | |
|  | [History] [Delete]                                           | |
|  |----------|---------------|------------|------------|----------| |
|  | A+       | A+            | A+         | A+         | 2026-01- | |
|  |          |               |            |            | 10       | |
|  | [History] [Delete]                                           | |
|  |----------|---------------|------------|------------|----------| |
|  | A2.za    | Baa1          | A2.za      | Baa1       | 2025-11- | |
|  |          |               |            |            | 30       | |
|  | [History] [Delete]                                           | |
|  |----------|---------------|------------|------------|----------| |
|                                                                  |
|  | Last Changed By        | Last Changed Date                    | |
|  |------------------------|--------------------------------------| |
|  | john.smith@example.com | 2026-01-29 16:20                     | |
|  |------------------------|--------------------------------------| |
|  | admin@example.com      | 2025-12-22 11:45                     | |
|  |------------------------|--------------------------------------| |
|  | jane.doe@example.com   | 2026-01-15 14:30                     | |
|  |------------------------|--------------------------------------| |
|  | john.smith@example.com | 2025-12-05 09:10                     | |
|  |------------------------|--------------------------------------| |
|                                                                  |
|  Showing 1-4 of 389 credit ratings       [< Prev] [Next >]      |
|                                                                  |
+------------------------------------------------------------------+
```

## Wireframe (Rating Changes Tab)
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Maintenance > Credit Ratings                                    |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [Current Ratings] [Rating Changes]                              |
|                                                                  |
|  Actions:                                                        |
|  [Export Changes] [Refresh]                                     |
|                                                                  |
|  Search & Filter:                                                |
|  [Search by instrument code or ISIN...]  [Filter v] [Clear]     |
|                                                                  |
|  Rating Changes                                                  |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | Report    | Instrument | ISIN        | Country | Current     | |
|  | Date      | Code       |             |         | Natl Rating | |
|  |-----------|------------|-------------|---------|-------------| |
|  | 2026-01-  | INST001    | ZAE0001234  | ZA      | Aa1.za      | |
|  | 31        |            |             |         |             | |
|  |-----------|------------|-------------|---------|-------------| |
|  | 2026-01-  | INST012    | ZAE1212121  | ZA      | A1.za       | |
|  | 31        |            |             |         |             | |
|  |-----------|------------|-------------|---------|-------------| |
|  | 2026-01-  | INST015    | US555555555 | US      | BBB+        | |
|  | 31        |            |             |         |             | |
|  |-----------|------------|-------------|---------|-------------| |
|                                                                  |
|  | Previous  | Current    | Previous   | Change                 | |
|  | Natl Rtg  | Intl Rtg   | Intl Rtg   | Direction              | |
|  |-----------|------------|------------|------------------------| |
|  | A1.za     | Baa3       | Baa2       | ↓ Downgrade            | |
|  |-----------|------------|------------|------------------------| |
|  | A2.za     | A+         | A          | ↑ Upgrade              | |
|  |-----------|------------|------------|------------------------| |
|  | BBB       | BBB+       | BBB        | ↑ Upgrade              | |
|  |-----------|------------|------------|------------------------| |
|                                                                  |
|  Summary:                                                        |
|  Total Changes: 3 | Upgrades: 2 | Downgrades: 1                 |
|                                                                  |
|  Showing 1-3 of 3 rating changes         [< Prev] [Next >]      |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Current Ratings Tab | Tab | Active tab showing all credit ratings |
| Rating Changes Tab | Tab | Shows rating changes across periods |
| Add Rating | Button | Opens form to add new credit rating |
| Retry Decision Flow | Button | Re-runs credit rating decision flow |
| Refresh | Button | Refreshes rating list |
| Export Changes | Button | Exports rating changes report |
| Search Input | Text Input | Search by instrument code or ISIN |
| Filter Dropdown | Dropdown | Filter by agency, country, or date range |
| Clear | Button | Clears search and filters |
| Ratings Grid | Table | Displays all credit ratings |
| Changes Grid | Table | Shows rating changes with direction |
| Edit | Button | Opens edit form for rating |
| History | Link | Opens rating history for instrument |
| Delete | Button | Deletes rating entry with confirmation |
| Change Direction | Icon | Shows upgrade/downgrade indicator |
| Pagination | Navigation | Navigate through pages |

## User Actions
- **Add Rating**: Opens modal form to add new credit rating
- **Edit**: Opens modal form to edit rating values
- **Delete**: Confirms deletion and removes rating entry
- **History**: Opens rating history modal for selected instrument
- **Retry Decision Flow**: Re-runs credit rating decision flow for current batch
- **Export Changes**: Downloads rating changes report
- **Switch Tabs**: Toggle between current ratings and rating changes
- **Search**: Filters ratings by search term
- **Filter**: Applies filters to rating list
- **Pagination**: Navigate through rating pages

## Navigation
- **From:** Data Confirmation (Other Checks), top navigation
- **To:** Rating edit modal, rating history modal
