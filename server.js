// Server entry point for Hostinger deployment
// This file is used when running 'npm start'
// In standalone mode, Next.js creates .next/standalone/server.js
// Hostinger should use: .next/standalone/server.js as startup file
// OR use this file which requires the standalone build

if (process.env.NODE_ENV === 'production') {
  // In production, use the standalone server
  const path = require('path');
  const standalonePath = path.join(__dirname, '.next', 'standalone', 'server.js');
  
  try {
    if (require('fs').existsSync(standalonePath)) {
      require(standalonePath);
    } else {
      console.error('ERROR: Standalone server not found. Please run "npm run build" first.');
      console.error('Expected path:', standalonePath);
      process.exit(1);
    }
  } catch (error) {
    console.error('ERROR: Failed to start standalone server:', error.message);
    console.error('Please ensure you have run "npm run build" before starting the server.');
    process.exit(1);
  }
} else {
  // In development, this shouldn't be used (use 'npm run dev' instead)
  console.error('Please use "npm run dev" for development');
  process.exit(1);
}

