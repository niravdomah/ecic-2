# Screen: Report Comments

## Purpose
Capture and manage commentary tied to specific reports within a reporting period.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Maintenance > Report Comments                                   |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  Report Batch: 2026-01-31 (Monthly)                              |
|                                                                  |
|  Actions:                                                        |
|  [+ Add Comment] [Refresh]                                      |
|                                                                  |
|  Search & Filter:                                                |
|  [Search by report name...]              [Filter v] [Clear]     |
|                                                                  |
|  Report Comments                                                 |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | ID   | Report    | Report Name                | Comment      | |
|  |      | Batch     |                            | Preview      | |
|  |------|-----------|----------------------------|--------------|  |
|  | 1001 | 2026-01-  | Portfolio Performance      | Market vol...| |
|  |      | 31        | Summary                    |              | |
|  |      |           |                            | [Edit]       | |
|  |------|-----------|----------------------------|--------------|  |
|  | 1002 | 2026-01-  | Risk Analytics Report      | Increased ...| |
|  |      | 31        |                            |              | |
|  |      |           |                            | [Edit]       | |
|  |------|-----------|----------------------------|--------------|  |
|  | 1003 | 2026-01-  | Asset Allocation           | Rebalancing..| |
|  |      | 31        | Dashboard                  |              | |
|  |      |           |                            | [Edit]       | |
|  |------|-----------|----------------------------|--------------|  |
|  | 1004 | 2026-01-  | Holdings Detail Report     | New positi...| |
|  |      | 31        |                            |              | |
|  |      |           |                            | [Edit]       | |
|  |------|-----------|----------------------------|--------------|  |
|  | 1005 | 2026-01-  | Transaction Summary        | Large redem..| |
|  |      | 31        |                            |              | |
|  |      |           |                            | [Edit]       | |
|  |------|-----------|----------------------------|--------------|  |
|                                                                  |
|  | Last Changed By        | Last Changed Date    | Actions      | |
|  |------------------------|----------------------|--------------|  |
|  | john.smith@example.com | 2026-01-30 14:25     | [View]       | |
|  |                        |                      | [Delete]     | |
|  |------------------------|----------------------|--------------|  |
|  | jane.doe@example.com   | 2026-01-30 11:15     | [View]       | |
|  |                        |                      | [Delete]     | |
|  |------------------------|----------------------|--------------|  |
|  | admin@example.com      | 2026-01-29 16:40     | [View]       | |
|  |                        |                      | [Delete]     | |
|  |------------------------|----------------------|--------------|  |
|  | john.smith@example.com | 2026-01-29 10:30     | [View]       | |
|  |                        |                      | [Delete]     | |
|  |------------------------|----------------------|--------------|  |
|  | jane.doe@example.com   | 2026-01-28 15:20     | [View]       | |
|  |                        |                      | [Delete]     | |
|  |------------------------|----------------------|--------------|  |
|                                                                  |
|  Showing 1-5 of 18 report comments       [< Prev] [Next >]      |
|                                                                  |
+------------------------------------------------------------------+
```

## Wireframe (Add/Edit Comment Modal)
```
                +------------------------------------------------+
                | Report Comment                           [X]   |
                +------------------------------------------------+
                |                                                |
                | Report Batch:                                  |
                | [2026-01-31 (Monthly)        v]                |
                |                                                |
                | Report:                                        |
                | [Portfolio Performance Summary v]              |
                |                                                |
                | Comment:                                       |
                | +--------------------------------------------+ |
                | | Market volatility increased significantly  | |
                | | during the last week of January. Key       | |
                | | drivers include:                           | |
                | | - Federal Reserve policy uncertainty       | |
                | | - Geopolitical tensions                    | |
                | | - Sector rotation from tech to value       | |
                | |                                            | |
                | | Portfolio maintained defensive posture     | |
                | | with increased allocation to bonds and     | |
                | | cash equivalents.                          | |
                | +--------------------------------------------+ |
                |                                                |
                | Last Changed By: john.smith@example.com        |
                | Last Changed Date: 2026-01-30 14:25            |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                |                    [Cancel]  [Save Comment]    |
                |                                                |
                +------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Report Batch Display | Label | Shows current report batch context |
| Add Comment | Button | Opens form to add new comment |
| Refresh | Button | Refreshes comment list |
| Search Input | Text Input | Search by report name |
| Filter Dropdown | Dropdown | Filter by report type |
| Clear | Button | Clears search and filters |
| Comments Grid | Table | Displays all report comments for current batch |
| Comment Preview | Text | Truncated comment preview |
| Edit | Button | Opens edit form for comment |
| View | Link | Opens read-only view of full comment |
| Delete | Button | Deletes comment with confirmation |
| Report Batch Dropdown | Dropdown | Select report batch in modal |
| Report Dropdown | Dropdown | Select report in modal |
| Comment Textarea | Textarea | Multi-line comment input |
| Save Comment | Button | Saves comment |
| Cancel | Button | Closes modal without saving |
| Pagination | Navigation | Navigate through pages |

## User Actions
- **Add Comment**: Opens modal form to add new report comment
- **Edit**: Opens modal form to edit comment text
- **View**: Opens modal showing full comment in read-only mode
- **Delete**: Confirms deletion and removes comment
- **Save Comment**: Saves comment and closes modal
- **Cancel**: Closes modal without saving changes
- **Search**: Filters comments by search term
- **Filter**: Applies filters to comment list
- **Pagination**: Navigate through comment pages

## Navigation
- **From:** Top navigation, Approvals screens
- **To:** Comment edit modal, comment view modal
