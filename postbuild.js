// Post-build script for Next.js standalone deployment
// This ensures all necessary files are copied to .next/standalone

const fs = require('fs');
const path = require('path');

let hasErrors = false;

// Check if standalone build exists
const standaloneDir = path.join(process.cwd(), '.next', 'standalone');
if (!fs.existsSync(standaloneDir)) {
  console.error('✗ ERROR: Standalone build not found. Run "npm run build" first.');
  process.exit(1);
}

// Find server.js recursively (handles nested paths with spaces/special chars)
// Exclude node_modules and testmode directories
function findServerJs(dir, depth = 0, maxDepth = 10) {
  if (depth > maxDepth) return null;
  
  const files = fs.readdirSync(dir, { withFileTypes: true });
  for (const file of files) {
    // Skip node_modules and testmode
    if (file.name === 'node_modules' || file.name === 'testmode') continue;
    
    const fullPath = path.join(dir, file.name);
    if (file.isDirectory()) {
      const found = findServerJs(fullPath, depth + 1, maxDepth);
      if (found) return found;
    } else if (file.name === 'server.js') {
      // Check if this server.js has package.json in same directory (indicates it's the main server)
      const dirPath = path.dirname(fullPath);
      if (fs.existsSync(path.join(dirPath, 'package.json'))) {
        return fullPath;
      }
    }
  }
  return null;
}

const standaloneServer = findServerJs(standaloneDir);
if (!standaloneServer) {
  console.error('✗ ERROR: Standalone server.js not found. Build may have failed.');
  process.exit(1);
} else {
  console.log(`✓ Found standalone server.js at: ${path.relative(process.cwd(), standaloneServer)}`);
}

// Copy public folder to standalone if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
const standalonePublicDir = path.join(standaloneDir, 'public');

try {
  if (fs.existsSync(publicDir)) {
    if (!fs.existsSync(standalonePublicDir)) {
      fs.mkdirSync(standalonePublicDir, { recursive: true });
      copyRecursiveSync(publicDir, standalonePublicDir);
      console.log('✓ Copied public folder to standalone');
    } else {
      console.log('✓ Public folder already exists in standalone');
    }
  }
} catch (error) {
  console.error('✗ ERROR copying public folder:', error.message);
  hasErrors = true;
}

// Copy .next/static to standalone if needed
const staticDir = path.join(process.cwd(), '.next', 'static');
const standaloneStaticDir = path.join(standaloneDir, '.next', 'static');

try {
  if (fs.existsSync(staticDir)) {
    if (!fs.existsSync(standaloneStaticDir)) {
      const standaloneNextDir = path.join(standaloneDir, '.next');
      if (!fs.existsSync(standaloneNextDir)) {
        fs.mkdirSync(standaloneNextDir, { recursive: true });
      }
      copyRecursiveSync(staticDir, standaloneStaticDir);
      console.log('✓ Copied static files to standalone');
    } else {
      console.log('✓ Static files already exist in standalone');
    }
  }
} catch (error) {
  console.error('✗ ERROR copying static files:', error.message);
  hasErrors = true;
}

function copyRecursiveSync(src, dest) {
  try {
    const exists = fs.existsSync(src);
    if (!exists) {
      throw new Error(`Source does not exist: ${src}`);
    }
    
    const stats = fs.statSync(src);
    const isDirectory = stats.isDirectory();
    
    if (isDirectory) {
      if (!fs.existsSync(dest)) {
        fs.mkdirSync(dest, { recursive: true });
      }
      fs.readdirSync(src).forEach(childItemName => {
        copyRecursiveSync(
          path.join(src, childItemName),
          path.join(dest, childItemName)
        );
      });
    } else {
      fs.copyFileSync(src, dest);
    }
  } catch (error) {
    console.error(`✗ ERROR copying ${src} to ${dest}:`, error.message);
    throw error;
  }
}

if (hasErrors) {
  console.error('✗ Post-build script completed with errors');
  process.exit(1);
} else {
  console.log('✓ Post-build script completed successfully');
  process.exit(0);
}

