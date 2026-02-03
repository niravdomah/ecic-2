# Feature Planner Handoff Template

This template shows the **correct way** to hand off to the feature-planner agent during PLAN phase.

## Critical Requirement

**ALWAYS check for API specifications BEFORE invoking feature-planner:**

```bash
node .claude/scripts/check-api-specs.js
```

Include the results in your handoff prompt. This prevents the planner from assuming "no API exists."

---

## Example Handoff Prompt (PLAN Phase)

```
You are starting the PLAN phase of the TDD workflow for the [Feature Name] platform.

**Feature Specification:** documentation/[spec-file].md

**API Specifications Found:**
The following API specification files exist in documentation/:
- documentation/FileImporterAPIDefinition.yaml (80KB, OpenAPI spec)
- documentation/MonthlyAPIDefinition.yaml (24KB, OpenAPI spec)
- documentation/DataMaintenanceAPIDefinition.yaml (111KB, OpenAPI spec)

**IMPORTANT:** These API specs are the SOURCE OF TRUTH for all endpoint definitions. Read them before creating stories. Do NOT assume endpoints are "mocked" or "placeholders" - use the actual endpoint paths, methods, request/response types defined in these YAML files.

**Wireframes:** [If applicable: "Available in generated-docs/wireframes/" OR "No wireframes created"]

**Current Status:**
- DESIGN phase: [complete/skipped]
- PLAN phase: Starting now
- Current epic: 1

**Your Task:**
1. Read the feature specification from documentation/[spec-file].md
2. **READ the API specification files** to understand available endpoints
3. [If wireframes exist: "Review the wireframes in generated-docs/wireframes/ to understand the UI design"]
4. Break down the entire feature into epics and user stories with acceptance criteria
5. Create all epic and story files in generated-docs/ following the standard structure
6. **Reference actual API endpoints from the YAML specs in story files**
7. Ensure each story has clear, testable acceptance criteria

**Important:**
- This is the PLAN phase, so create ALL epics and ALL stories upfront before any implementation begins
- Each story should be small enough to implement and test in one iteration
- Stories should build on each other progressively
- Include acceptance criteria that can be translated into integration tests
- **Use the API specs to document real endpoints, not placeholders**

**When you finish:**
You MUST update the workflow state by running:
```bash
node .claude/scripts/transition-phase.js --epic 1 --to SPECIFY
```

Begin by reading the spec and API definitions, then create the epic/story breakdown.
```

---

## Example Handoff Prompt (REALIGN Phase)

```
You are resuming the REALIGN phase for Epic [N]: [Epic Name].

**Context:**
- Feature: [Feature Name]
- Current Epic: [N]
- Previous Epic: [N-1] (completed)
- Discovered Impacts: generated-docs/discovered-impacts.md

**API Specifications:**
[If relevant to this epic, list the API spec files]

**Your Task:**
1. Read generated-docs/discovered-impacts.md for learnings from previous epic
2. Review Epic [N] stories in generated-docs/stories/epic-[N]/
3. Update any stories affected by discovered impacts
4. Document changes made

**When you finish:**
Run: node .claude/scripts/transition-phase.js --epic [N] --to SPECIFY
```

---

## What NOT to Do

❌ **BAD - Missing API check:**
```
Create epics and stories for the feature spec in documentation/
```
*Problem: No mention of API specs, planner will assume they don't exist*

❌ **BAD - Vague reference:**
```
Check if there are any API specs in documentation/
```
*Problem: Planner might skip this step or miss the files*

---

## Checklist for Orchestrator

Before invoking feature-planner in PLAN phase:

- [ ] Run `node .claude/scripts/check-api-specs.js`
- [ ] Include API spec list in handoff prompt
- [ ] Explicitly state "these are the source of truth"
- [ ] Tell planner to READ the API specs before creating stories
- [ ] Remind planner NOT to use "mocked" or "placeholder" language if specs exist

---

## Testing the Fix

After implementing these changes, verify by:

1. Starting a new feature with `/start`
2. Check that API specs are discovered and mentioned in handoff
3. Review generated story files - they should reference actual endpoints
4. Confirm no "mocked data" or "placeholder" language appears in stories when API specs exist
