# Screen: Instrument Betas Maintenance

## Purpose
Maintain instrument beta values with full audit capabilities.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Maintenance > Instrument Betas                                  |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Report Batch: 2026-01-31 (Monthly)                              |
|                                                                  |
|  [Current Betas] [Outstanding Items]                             |
|                                                                  |
|  Actions:                                                        |
|  [+ Add Beta] [Refresh]                                         |
|                                                                  |
|  Search & Filter:                                                |
|  [Search by instrument code or ISIN...]  [Filter v] [Clear]     |
|                                                                  |
|  Instrument Betas                                                |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | ID  | Instrument | ISIN        | Beta   | Status  | Report   | |
|  |     | Code       |             |        |         | Batch    | |
|  |-----|------------|-------------|--------|---------|----------| |
|  | 801 | INST002    | US123456789 | 1.25   | Active  | 2026-01- | |
|  |     |            |             |        |         | 31       | |
|  |     |            |             |        | [Edit]  |          | |
|  |-----|------------|-------------|--------|---------|----------| |
|  | 802 | INST004    | FR444444444 | 0.87   | Active  | 2026-01- | |
|  |     |            |             |        |         | 31       | |
|  |     |            |             |        | [Edit]  |          | |
|  |-----|------------|-------------|--------|---------|----------| |
|  | 803 | INST006    | DE666666666 | 1.42   | Active  | 2026-01- | |
|  |     |            |             |        |         | 31       | |
|  |     |            |             |        | [Edit]  |          | |
|  |-----|------------|-------------|--------|---------|----------| |
|  | 804 | INST008    | JP888888888 | 0.95   | Active  | 2026-01- | |
|  |     |            |             |        |         | 31       | |
|  |     |            |             |        | [Edit]  |          | |
|  |-----|------------|-------------|--------|---------|----------| |
|                                                                  |
|  | Last Changed By        | Last Changed Date                    | |
|  |------------------------|--------------------------------------| |
|  | john.smith@example.com | 2026-01-29 13:45                     | |
|  | [History] [Delete]                                           | |
|  |------------------------|--------------------------------------| |
|  | jane.doe@example.com   | 2026-01-28 10:30                     | |
|  | [History] [Delete]                                           | |
|  |------------------------|--------------------------------------| |
|  | admin@example.com      | 2026-01-27 15:20                     | |
|  | [History] [Delete]                                           | |
|  |------------------------|--------------------------------------| |
|  | john.smith@example.com | 2026-01-26 09:15                     | |
|  | [History] [Delete]                                           | |
|  |------------------------|--------------------------------------| |
|                                                                  |
|  Showing 1-4 of 156 beta entries         [< Prev] [Next >]      |
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
|  Maintenance > Instrument Betas                                  |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Report Batch: 2026-01-31 (Monthly)                              |
|                                                                  |
|  [Current Betas] [Outstanding Items]                             |
|                                                                  |
|  Outstanding Betas (Missing Data)                                |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  The following instruments are missing beta data for the         |
|  current report batch:                                           |
|                                                                  |
|  | Instrument ID | Instrument Code | ISIN        | Name         | |
|  |---------------|-----------------|-------------|--------------| |
|  | 109           | INST009         | CA999999999 | Equity I     | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 111           | INST011         | CH111111111 | Equity K     | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 113           | INST013         | SE333333333 | Equity M     | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 115           | INST015         | NO555555555 | Equity O     | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 117           | INST017         | DK777777777 | Equity Q     | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 119           | INST019         | FI999999999 | Equity S     | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 121           | INST021         | IT111111111 | Equity U     | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|  | 123           | INST023         | ES333333333 | Equity W     | |
|  |               |                 |             | [Add Data]   | |
|  |---------------|-----------------|-------------|--------------| |
|                                                                  |
|  Total Outstanding: 8 instruments                                |
|                                                                  |
|  Showing 1-8 of 8 outstanding items                              |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Report Batch Display | Label | Shows current report batch context |
| Current Betas Tab | Tab | Active tab showing beta entries |
| Outstanding Items Tab | Tab | Shows instruments missing betas |
| Add Beta | Button | Opens form to add new beta entry |
| Refresh | Button | Refreshes beta list |
| Search Input | Text Input | Search by instrument code or ISIN |
| Filter Dropdown | Dropdown | Filter by status |
| Clear | Button | Clears search and filters |
| Betas Grid | Table | Displays all beta entries for current batch |
| Outstanding Grid | Table | Shows instruments missing beta data |
| Edit | Button | Opens edit form for beta |
| Add Data | Button | Opens form to add beta for outstanding instrument |
| History | Link | Opens audit trail for beta |
| Delete | Button | Deletes beta entry with confirmation |
| Pagination | Navigation | Navigate through pages |

## User Actions
- **Add Beta**: Opens modal form to add new beta entry
- **Edit**: Opens modal form to edit beta value
- **Delete**: Confirms deletion and removes beta entry
- **History**: Opens audit trail modal showing all changes
- **Add Data (Outstanding)**: Opens form pre-filled with instrument details
- **Switch Tabs**: Toggle between current betas and outstanding items
- **Search**: Filters betas by search term
- **Filter**: Applies filters to beta list
- **Pagination**: Navigate through beta pages

## Navigation
- **From:** Data Confirmation (Other Checks), top navigation
- **To:** Beta edit modal, audit trail modal
