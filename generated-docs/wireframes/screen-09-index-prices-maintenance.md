# Screen: Index Prices Maintenance

## Purpose
Upload, update, and view index price data with full history tracking.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Maintenance > Index Prices                                      |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Report Batch: 2026-01-31 (Monthly)                              |
|                                                                  |
|  Actions:                                                        |
|  [+ Add Price] [Upload Prices] [Refresh]                        |
|                                                                  |
|  Search & Filter:                                                |
|  [Search by index code or ticker...]     [Filter v] [Clear]     |
|                                                                  |
|  Index Prices                                                    |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | ID  | Index Code | Bloomberg Ticker | Report Date | Price    | |
|  |-----|------------|------------------|-------------|----------| |
|  | 501 | JSE_ALSI   | JALSH Index      | 2026-01-31  | 72,345.67| |
|  |     |            |                  |             | [Edit]   | |
|  |-----|------------|------------------|-------------|----------| |
|  | 502 | JSE_FINI   | JFINI Index      | 2026-01-31  | 15,234.89| |
|  |     |            |                  |             | [Edit]   | |
|  |-----|------------|------------------|-------------|----------| |
|  | 503 | JSE_INDI   | JINDI Index      | 2026-01-31  | 88,901.23| |
|  |     |            |                  |             | [Edit]   | |
|  |-----|------------|------------------|-------------|----------| |
|  | 504 | MSCI_EM    | MXEF Index       | 2026-01-31  | 1,045.78 | |
|  |     |            |                  |             | [Edit]   | |
|  |-----|------------|------------------|-------------|----------| |
|                                                                  |
|  | Batch Type | Status  | Actions                                | |
|  |------------|---------|----------------------------------------| |
|  | Monthly    | Active  | [History] [Delete]                     | |
|  |------------|---------|----------------------------------------| |
|  | Monthly    | Active  | [History] [Delete]                     | |
|  |------------|---------|----------------------------------------| |
|  | Monthly    | Active  | [History] [Delete]                     | |
|  |------------|---------|----------------------------------------| |
|  | Monthly    | Active  | [History] [Delete]                     | |
|  |------------|---------|----------------------------------------| |
|                                                                  |
|  Showing 1-4 of 47 index prices          [< Prev] [Next >]      |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Report Batch Display | Label | Shows current report batch context |
| Add Price | Button | Opens form to add new index price |
| Upload Prices | Button | Bulk upload price file |
| Refresh | Button | Refreshes price list |
| Search Input | Text Input | Search by index code or ticker |
| Filter Dropdown | Dropdown | Filter by status or batch type |
| Clear | Button | Clears search and filters |
| Index Prices Grid | Table | Displays all index prices for current batch |
| Edit | Button | Opens edit form for price |
| History | Link | Opens price history for index |
| Delete | Button | Deletes price entry with confirmation |
| Pagination | Navigation | Navigate through pages |

## User Actions
- **Add Price**: Opens modal form to add new index price
- **Upload Prices**: Opens file upload dialog for bulk price import
- **Edit**: Opens modal form to edit price value
- **Delete**: Confirms deletion and removes price entry
- **History**: Opens modal showing historical prices for selected index
- **Search**: Filters prices by search term
- **Filter**: Applies filters to price list
- **Pagination**: Navigate through price pages

## Navigation
- **From:** Data Confirmation (Other Checks), top navigation
- **To:** Price edit modal, price history modal
