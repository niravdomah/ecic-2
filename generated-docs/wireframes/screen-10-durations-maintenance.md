# Screen: Durations & YTM Maintenance

## Purpose
Maintain instrument duration and yield-to-maturity data with comprehensive audit tracking.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Maintenance > Durations & YTM                                   |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Report Batch: 2026-01-31 (Monthly)                              |
|                                                                  |
|  [Current Durations] [Outstanding Items]                         |
|                                                                  |
|  Actions:                                                        |
|  [+ Add Duration] [Refresh]                                     |
|                                                                  |
|  Search & Filter:                                                |
|  [Search by instrument code or ISIN...]  [Filter v] [Clear]     |
|                                                                  |
|  Instrument Durations                                            |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | ID  | Instrument | ISIN        | Duration | YTM    | Status  | |
|  |     | Code       |             |          |        |         | |
|  |-----|------------|-------------|----------|--------|---------|  |
|  | 701 | INST001    | ZAE0001234  | 5.42     | 7.85%  | Active  | |
|  |     |            |             |          |        | [Edit]  | |
|  |-----|------------|-------------|----------|--------|---------|  |
|  | 702 | INST003    | GB987654321 | 3.28     | 5.12%  | Active  | |
|  |     |            |             |          |        | [Edit]  | |
|  |-----|------------|-------------|----------|--------|---------|  |
|  | 703 | INST005    | US555555555 | 7.91     | 6.35%  | Active  | |
|  |     |            |             |          |        | [Edit]  | |
|  |-----|------------|-------------|----------|--------|---------|  |
|  | 704 | INST007    | ZAE7777777  | 2.15     | 8.50%  | Active  | |
|  |     |            |             |          |        | [Edit]  | |
|  |-----|------------|-------------|----------|--------|---------|  |
|                                                                  |
|  | Report Batch  | Last Changed By        | Last Changed Date   | |
|  |---------------|------------------------|---------------------| |
|  | 2026-01-31    | john.smith@example.com | 2026-01-29 11:20    | |
|  | [History] [Delete]                                           | |
|  |---------------|------------------------|---------------------| |
|  | 2026-01-31    | jane.doe@example.com   | 2026-01-28 09:15    | |
|  | [History] [Delete]                                           | |
|  |---------------|------------------------|---------------------| |
|  | 2026-01-31    | john.smith@example.com | 2026-01-27 14:45    | |
|  | [History] [Delete]                                           | |
|  |---------------|------------------------|---------------------| |
|  | 2026-01-31    | admin@example.com      | 2026-01-26 16:30    | |
|  | [History] [Delete]                                           | |
|  |---------------|------------------------|---------------------| |
|                                                                  |
|  Showing 1-4 of 234 duration entries     [< Prev] [Next >]      |
|                                                                  |
+------------------------------------------------------------------+
```

## Wireframe (Outstanding Items Tab)
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Maintenance > Durations & YTM                                   |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Report Batch: 2026-01-31 (Monthly)                              |
|                                                                  |
|  [Current Durations] [Outstanding Items]                         |
|                                                                  |
|  Outstanding Durations (Missing Data)                            |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  The following instruments are missing duration/YTM data for     |
|  the current report batch:                                       |
|                                                                  |
|  | Instrument ID | Instrument Code | ISIN        | Name         | |
|  |---------------|-----------------|-------------|--------------| |
|  | 102           | INST002         | US123456789 | Equity B     | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 104           | INST004         | FR444444444 | Bond D       | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 106           | INST006         | DE666666666 | Bond F       | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 108           | INST008         | JP888888888 | Equity H     | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 110           | INST010         | AU000000000 | Bond J       | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|                                                                  |
|  Total Outstanding: 5 instruments                                |
|                                                                  |
|  Showing 1-5 of 5 outstanding items                              |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Report Batch Display | Label | Shows current report batch context |
| Current Durations Tab | Tab | Active tab showing duration entries |
| Outstanding Items Tab | Tab | Shows instruments missing durations |
| Add Duration | Button | Opens form to add new duration entry |
| Refresh | Button | Refreshes duration list |
| Search Input | Text Input | Search by instrument code or ISIN |
| Filter Dropdown | Dropdown | Filter by status |
| Clear | Button | Clears search and filters |
| Durations Grid | Table | Displays all duration entries for current batch |
| Outstanding Grid | Table | Shows instruments missing duration data |
| Edit | Button | Opens edit form for duration |
| Add Data | Button | Opens form to add duration for outstanding instrument |
| History | Link | Opens audit trail for duration |
| Delete | Button | Deletes duration entry with confirmation |
| Pagination | Navigation | Navigate through pages |

## User Actions
- **Add Duration**: Opens modal form to add new duration entry
- **Edit**: Opens modal form to edit duration and YTM values
- **Delete**: Confirms deletion and removes duration entry
- **History**: Opens audit trail modal showing all changes
- **Add Data (Outstanding)**: Opens form pre-filled with instrument details
- **Switch Tabs**: Toggle between current durations and outstanding items
- **Search**: Filters durations by search term
- **Filter**: Applies filters to duration list
- **Pagination**: Navigate through duration pages

## Navigation
- **From:** Data Confirmation (Other Checks), top navigation
- **To:** Duration edit modal, audit trail modal
