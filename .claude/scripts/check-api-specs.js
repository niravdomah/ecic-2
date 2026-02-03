#!/usr/bin/env node

/**
 * API Specification Discovery Script
 *
 * Scans the documentation/ directory for API specification files
 * (OpenAPI/Swagger YAML/JSON files) and returns structured information
 * about what API definitions exist in the project.
 *
 * Usage:
 *   node .claude/scripts/check-api-specs.js [--json]
 *
 * Output:
 *   JSON object with status and list of API spec files found
 */

const fs = require('fs');
const path = require('path');

const DOCS_DIR = path.join(__dirname, '..', '..', 'documentation');
const API_EXTENSIONS = ['.yaml', '.yml', '.json'];

function findApiSpecs() {
  try {
    // Check if documentation directory exists
    if (!fs.existsSync(DOCS_DIR)) {
      return {
        status: 'error',
        message: 'documentation/ directory not found',
        specs: []
      };
    }

    // Read all files in documentation directory
    const files = fs.readdirSync(DOCS_DIR);

    // Filter for potential API spec files
    const specFiles = files.filter(file => {
      const ext = path.extname(file).toLowerCase();
      return API_EXTENSIONS.includes(ext);
    });

    // Get full paths and file info
    const specs = specFiles.map(file => {
      const fullPath = path.join(DOCS_DIR, file);
      const relativePath = path.relative(process.cwd(), fullPath);
      const stats = fs.statSync(fullPath);

      return {
        filename: file,
        path: relativePath,
        absolutePath: fullPath,
        size: stats.size,
        modified: stats.mtime.toISOString()
      };
    });

    // Determine if these look like OpenAPI specs by checking content
    const validatedSpecs = specs.map(spec => {
      try {
        const content = fs.readFileSync(spec.absolutePath, 'utf8');
        const looksLikeOpenAPI =
          content.includes('openapi:') ||
          content.includes('swagger:') ||
          content.includes('"openapi"') ||
          content.includes('"swagger"') ||
          content.toLowerCase().includes('api') ||
          content.includes('paths:') ||
          content.includes('"paths"');

        return {
          ...spec,
          likelyApiSpec: looksLikeOpenAPI
        };
      } catch (err) {
        return {
          ...spec,
          likelyApiSpec: false,
          readError: err.message
        };
      }
    });

    return {
      status: 'ok',
      count: validatedSpecs.length,
      specs: validatedSpecs,
      message: validatedSpecs.length === 0
        ? 'No API specification files found in documentation/'
        : `Found ${validatedSpecs.length} API specification file(s)`
    };

  } catch (error) {
    return {
      status: 'error',
      message: error.message,
      specs: []
    };
  }
}

// Main execution
const result = findApiSpecs();

// Always output JSON for consistency
console.log(JSON.stringify(result, null, 2));

// Exit with appropriate code
process.exit(result.status === 'ok' ? 0 : 1);
