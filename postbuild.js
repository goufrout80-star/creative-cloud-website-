// Post-build script for Next.js standalone deployment
// This ensures all necessary files are copied to .next/standalone

const fs = require('fs');
const path = require('path');

// Copy public folder to standalone if it doesn't exist
const publicDir = path.join(process.cwd(), 'public');
const standalonePublicDir = path.join(process.cwd(), '.next', 'standalone', 'public');

if (fs.existsSync(publicDir) && fs.existsSync(path.join(process.cwd(), '.next', 'standalone'))) {
  if (!fs.existsSync(standalonePublicDir)) {
    fs.mkdirSync(standalonePublicDir, { recursive: true });
    copyRecursiveSync(publicDir, standalonePublicDir);
    console.log('✓ Copied public folder to standalone');
  }
}

// Copy .next/static to standalone if needed
const staticDir = path.join(process.cwd(), '.next', 'static');
const standaloneStaticDir = path.join(process.cwd(), '.next', 'standalone', '.next', 'static');

if (fs.existsSync(staticDir) && fs.existsSync(path.join(process.cwd(), '.next', 'standalone'))) {
  if (!fs.existsSync(standaloneStaticDir)) {
    const standaloneNextDir = path.join(process.cwd(), '.next', 'standalone', '.next');
    if (!fs.existsSync(standaloneNextDir)) {
      fs.mkdirSync(standaloneNextDir, { recursive: true });
    }
    copyRecursiveSync(staticDir, standaloneStaticDir);
    console.log('✓ Copied static files to standalone');
  }
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  
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
}

console.log('✓ Post-build script completed');

