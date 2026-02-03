# API Specification Detection - Prevention System

**Issue:** Feature-planner agent assumed no backend API existed, despite API spec files in documentation/.

**Root Cause:** Orchestrator didn't explicitly instruct agent to check for API specifications before planning.

---

## Prevention Layers (Defense in Depth)

### Layer 1: Project Instructions (CLAUDE.md)

**File:** `CLAUDE.md` (lines 114-135)

Added **Critical Rule #7: API Specifications Are Mandatory References**

- Requires checking `documentation/` for `.yaml`/`.yml`/`.json` files before planning
- Documents the 3 API spec files that exist in this project
- Explicitly states: "Never assume an API doesn't exist without checking first"

### Layer 2: Workflow Command Updates

**Files Updated:**
- `.claude/commands/start.md` (lines 166-172, 147-155)
- `.claude/commands/continue.md` (lines 76-85)

**Changes:**
- Added mandatory step to run `check-api-specs.js` before invoking feature-planner
- Updated handoff tables to include "API specs found" in context
- Added explicit warnings about preventing "no API" assumptions

### Layer 3: API Discovery Script

**File:** `.claude/scripts/check-api-specs.js` (new file)

**Purpose:** Automated discovery of API specification files

**Output:** JSON with:
```json
{
  "status": "ok",
  "count": 3,
  "specs": [
    {
      "filename": "FileImporterAPIDefinition.yaml",
      "path": "documentation/FileImporterAPIDefinition.yaml",
      "likelyApiSpec": true
    }
  ]
}
```

**Usage:**
```bash
node .claude/scripts/check-api-specs.js
```

### Layer 4: Handoff Template

**File:** `.claude/templates/handoff-feature-planner.md` (new file)

**Purpose:** Reference document showing correct handoff prompt structure

**Includes:**
- Example prompts with API spec information
- Checklist for orchestrator
- "What NOT to do" examples
- Testing verification steps

---

## How It Works

### During /start or /continue (PLAN phase):

1. **Orchestrator runs:** `node .claude/scripts/check-api-specs.js`
2. **Script returns:** List of API spec files found
3. **Orchestrator includes in prompt:**
   ```
   API Specifications Found:
   - documentation/FileImporterAPIDefinition.yaml
   - documentation/MonthlyAPIDefinition.yaml
   - documentation/DataMaintenanceAPIDefinition.yaml

   IMPORTANT: These are the source of truth. Read them before creating stories.
   ```
4. **Feature-planner agent:**
   - Reads API specs
   - Uses actual endpoint definitions
   - Does NOT assume "mocked data"

---

## Verification

### Test the prevention system:

1. Start new feature: `/start`
2. Observe orchestrator runs `check-api-specs.js`
3. Check handoff prompt includes API spec list
4. Review generated stories - should reference real endpoints
5. Confirm no "mocked" or "placeholder" language when specs exist

### Expected behavior:

✅ **Before (broken):**
```markdown
**Backend API:** No backend API - uses mocked data.
```

✅ **After (fixed):**
```markdown
**Backend API:** Defined in FileImporterAPIDefinition.yaml,
MonthlyAPIDefinition.yaml, and DataMaintenanceAPIDefinition.yaml
```

---

## Files Changed

1. `CLAUDE.md` - Added Critical Rule #7
2. `.claude/commands/start.md` - Added API check steps
3. `.claude/commands/continue.md` - Added API check steps
4. `.claude/scripts/check-api-specs.js` - New discovery script
5. `.claude/templates/handoff-feature-planner.md` - New reference template
6. `.claude/docs/api-spec-prevention.md` - This documentation

---

## Maintenance

### When adding new API specs:

No action needed - `check-api-specs.js` automatically discovers any `.yaml`/`.yml`/`.json` files in `documentation/`.

### When starting new projects:

1. Copy `check-api-specs.js` script
2. Copy prevention sections from `CLAUDE.md`
3. Update workflow command files
4. Reference the handoff template

---

## Related Documentation

- [CLAUDE.md Critical Rules](../../CLAUDE.md#critical-rules)
- [Start Command](.claude/commands/start.md)
- [Continue Command](.claude/commands/continue.md)
- [Handoff Template](.claude/templates/handoff-feature-planner.md)
