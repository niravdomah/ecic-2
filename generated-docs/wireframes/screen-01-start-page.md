# Screen: Start Page

## Purpose
High-level entry point for creating new report batches and monitoring current workflow status.

## Wireframe
```
+------------------------------------------------------------------+
|  InvestInsight                        [User Menu v] [Logout]     |
+------------------------------------------------------------------+
|  [Home] [File Uploads] [Data Confirmation] [Maintenance] [Admin] |
+------------------------------------------------------------------+
|                                                                  |
|  Start Page                                                      |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  [+ Create New Batch]                                            |
|                                                                  |
|  +------------------------------------------------------------+  |
|  | Current Batch Status                                       |  |
|  +------------------------------------------------------------+  |
|  | Report Date: 2026-01-31                                    |  |
|  | Batch Type: Monthly                                        |  |
|  | Current State: Data Preparation                            |  |
|  | Status: In Progress                                        |  |
|  |                                                            |  |
|  | Workflow Progress:                                         |  |
|  | [■■■■■□□□□□] 50% Complete                                  |  |
|  |                                                            |  |
|  | Create Batch → Prepare Data → Run Calculations            |  |
|  |      ✓              ▶                                      |  |
|  +------------------------------------------------------------+  |
|                                                                  |
|  Quick Navigation                                                |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  +------------------+  +------------------+  +-----------------+ |
|  | Data Confirmation|  | File Uploads     |  | Instruments     | |
|  |                  |  |                  |  |                 | |
|  | [View Checks]    |  | [Manage Files]   |  | [Maintain Data] | |
|  +------------------+  +------------------+  +-----------------+ |
|                                                                  |
|  Batch History                                                   |
|  ──────────────────────────────────────────────────────────────  |
|                                                                  |
|  | Report Date  | Batch Type | Status    | Completed On       | |
|  |--------------|------------|-----------|--------------------| |
|  | 2025-12-31   | Monthly    | Complete  | 2026-01-15 14:32   | |
|  | 2025-12-24   | Weekly     | Complete  | 2025-12-27 11:20   | |
|  | 2025-11-30   | Monthly    | Complete  | 2025-12-10 16:45   | |
|  |              |            |           | [View More...]     | |
|                                                                  |
+------------------------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Create New Batch | Button | Initiates a new weekly or monthly report batch |
| Current Batch Status | Card | Displays active batch workflow state and progress |
| Workflow Progress | Progress Bar | Visual indicator of workflow completion |
| Quick Navigation Cards | Link Cards | Direct access to key screens |
| Batch History | Table | Historical batches with completion status |
| View Checks | Button | Navigate to Data Confirmation screen |
| Manage Files | Button | Navigate to File Uploads screen |
| Maintain Data | Button | Navigate to Instruments Maintenance screen |

## User Actions
- **Create New Batch**: Opens modal to select batch type (Weekly/Monthly) and report date
- **View Checks**: Navigates to Data Confirmation screen
- **Manage Files**: Navigates to File Uploads screen
- **Maintain Data**: Navigates to Instruments Maintenance screen
- **Click History Row**: Opens read-only view of completed batch

## Navigation
- **From:** Login page, top navigation
- **To:** File Uploads, Data Confirmation, Maintenance screens, Approvals
