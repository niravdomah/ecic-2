# Screen: File Upload Modal

## Purpose
Popup for viewing status, uploading, canceling, and viewing errors for a specific file.

## Wireframe
```
                +------------------------------------------------+
                | File Upload Details                      [X]   |
                +------------------------------------------------+
                |                                                |
                | Portfolio: Sanlam                              |
                | File Type: Holdings                            |
                | Report Date: 2026-01-31                        |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Status: [✓] Complete                           |
                |                                                |
                | File Details:                                  |
                | • File Name: sanlam_holdings_2026-01-31.csv    |
                | • Upload Date: 2026-02-01 09:15:23             |
                | • Uploaded By: john.smith@example.com          |
                | • File Size: 2.4 MB                            |
                | • Records: 1,247                               |
                | • Validation Status: Passed                    |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Actions:                                       |
                |                                                |
                | [Upload New File]  [Replace File]              |
                |                                                |
                | [Cancel File]  [Retry Validation]              |
                |                                                |
                | [Export File Data]                             |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Validation Errors: (0)                         |
                |                                                |
                | (No errors found)                              |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                |                          [Close]               |
                |                                                |
                +------------------------------------------------+
```

## Wireframe (Failed File with Errors)
```
                +------------------------------------------------+
                | File Upload Details                      [X]   |
                +------------------------------------------------+
                |                                                |
                | Portfolio: Portfolio A                         |
                | File Type: Cash                                |
                | Report Date: 2026-01-31                        |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Status: [✗] Failed                             |
                |                                                |
                | File Details:                                  |
                | • File Name: portfolio_a_cash_2026-01-31.csv   |
                | • Upload Date: 2026-02-01 10:32:17             |
                | • Uploaded By: jane.doe@example.com            |
                | • File Size: 1.1 MB                            |
                | • Records: 523                                 |
                | • Validation Status: Failed                    |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Actions:                                       |
                |                                                |
                | [Upload New File]  [Replace File]              |
                |                                                |
                | [Cancel File]  [Retry Validation]              |
                |                                                |
                | [Export File Data]  [Download Error Report]    |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                | Validation Errors: (3)                         |
                |                                                |
                | | Row | Error Code | Description              | |
                | |-----|------------|-------------------------| |
                | | 145 | VAL001     | Missing required field  | |
                | |     |            | CashBalance             | |
                | | 276 | VAL003     | Invalid date format     | |
                | | 398 | VAL001     | Missing required field  | |
                | |     |            | AccountNumber           | |
                |                                                |
                | [View All Errors...]                           |
                |                                                |
                | ──────────────────────────────────────────── |
                |                                                |
                |                          [Close]               |
                |                                                |
                +------------------------------------------------+
```

## Elements
| Element | Type | Description |
|---------|------|-------------|
| Portfolio/File Type | Display | Shows file context |
| Status Indicator | Status Badge | Current file status |
| File Details | Information Display | Upload metadata and validation results |
| Upload New File | Button | Upload initial file |
| Replace File | Button | Replace existing file with new version |
| Cancel File | Button | Cancel file upload |
| Retry Validation | Button | Re-run validation on uploaded file |
| Export File Data | Button | Download uploaded file data |
| Download Error Report | Button | Download validation errors |
| Validation Errors | Table | List of validation errors with details |
| Close | Button | Close modal |

## User Actions
- **Upload New File**: Opens file browser to select and upload file
- **Replace File**: Uploads new file to replace current version
- **Cancel File**: Removes file from upload queue
- **Retry Validation**: Re-runs validation after source file corrections
- **Export File Data**: Downloads uploaded file data
- **Download Error Report**: Downloads detailed error report
- **View All Errors**: Expands to show complete error list
- **Close**: Closes modal and returns to dashboard

## Navigation
- **From:** Portfolio Imports Dashboard, Other Imports Dashboard (via status icon click)
- **To:** Closes back to calling dashboard
