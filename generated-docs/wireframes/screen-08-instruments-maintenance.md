# Screen: Instruments Maintenance

## Purpose
Create, update, and manage instrument master data with full audit trail support.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Maintenance > Instruments                                       |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Actions:                                                        |
|  [+ Add Instrument] [Export ISINs] [Refresh]                    |
|                                                                  |
|  Search & Filter:                                                |
|  [Search by code, ISIN, or name...]         [Filter v] [Clear]  |
|                                                                  |
|  Instruments                                                     |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | ID  | Code   | ISIN        | Name        | Type  | Currency | |
|  |-----|--------|-------------|-------------|-------|----------| |
|  | 101 | INST001| ZAE0001234  | Bond A      | Bond  | ZAR      | |
|  |     |        |             |             |       | [Edit]   | |
|  |-----|--------|-------------|-------------|-------|----------| |
|  | 102 | INST002| US123456789 | Equity B    | Equity| USD      | |
|  |     |        |             |             |       | [Edit]   | |
|  |-----|--------|-------------|-------------|-------|----------| |
|  | 103 | INST003| GB987654321 | Bond C      | Bond  | GBP      | |
|  |     |        |             |             |       | [Edit]   | |
|  |-----|--------|-------------|-------------|-------|----------| |
|                                                                  |
|  | AssetClass | Country | Issuer    | Maturity   | Status      | |
|  |------------|---------|-----------|------------|-------------| |
|  | Gov Bonds  | ZA      | SA Gov    | 2030-12-31 | Active      | |
|  | [History] [Delete]                                           | |
|  |------------|---------|-----------|------------|-------------| |
|  | Equities   | US      | Tech Corp | -          | Active      | |
|  | [History] [Delete]                                           | |
|  |------------|---------|-----------|------------|-------------| |
|  | Corp Bonds | GB      | Bank PLC  | 2028-06-15 | Active      | |
|  | [History] [Delete]                                           | |
|  |------------|---------|-----------|------------|-------------| |
|                                                                  |
|  | Last Changed By        | Last Changed Date                    | |
|  |------------------------|--------------------------------------| |
|  | john.smith@example.com | 2026-01-28 14:32                     | |
|  |                        |                                      | |
|  |------------------------|--------------------------------------| |
|  | jane.doe@example.com   | 2026-01-25 10:15                     | |
|  |                        |                                      | |
|  |------------------------|--------------------------------------| |
|  | admin@example.com      | 2026-01-20 09:45                     | |
|  |                        |                                      | |
|  |------------------------|--------------------------------------| |
|                                                                  |
|  Showing 1-3 of 1,247 instruments        [< Prev] [Next >]      |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Add Instrument | Button | Opens form to create new instrument |
| Export ISINs | Button | Exports ISINs for incomplete instruments |
| Refresh | Button | Refreshes instrument list |
| Search Input | Text Input | Search by code, ISIN, or name |
| Filter Dropdown | Dropdown | Filter by type, status, currency |
| Clear | Button | Clears search and filters |
| Instruments Grid | Table | Displays all instruments with details |
| Edit | Button | Opens edit form for instrument |
| History | Link | Opens audit trail for instrument |
| Delete | Button | Soft delete instrument with confirmation |
| Pagination | Navigation | Navigate through pages |

## User Actions
- **Add Instrument**: Opens modal form to create new instrument
- **Edit**: Opens modal form to edit instrument details
- **Delete**: Confirms deletion and soft deletes instrument
- **History**: Opens audit trail modal showing all changes
- **Export ISINs**: Downloads Excel file of incomplete instruments
- **Search**: Filters instruments by search term
- **Filter**: Applies filters to instrument list
- **Pagination**: Navigate through instrument pages

## Navigation
- **From:** Start Page, Data Confirmation (Other Checks), top navigation
- **To:** Instrument edit modal, audit trail modal
