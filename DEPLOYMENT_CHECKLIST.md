# Hostinger Deployment Checklist

## Pre-Deployment Checks ✅

### 1. Environment Variables (REQUIRED in Production)
Set these in Hostinger Node.js dashboard → Environment Variables:

```
SESSION_SECRET=<generate-a-random-32-char-string>
ENCRYPTION_KEY=<generate-a-random-32-char-string>
NODE_ENV=production
NEXT_PUBLIC_BASE_URL=https://todayfilmmakers.com
```

**⚠️ CRITICAL:** Without `SESSION_SECRET` and `ENCRYPTION_KEY`, the app will crash in production.

### 2. Node.js Version
- **Required:** Node.js v20 or v22
- **Check in Hostinger:** Websites → Manage → Node.js → Version

### 3. Build Configuration
- **Startup File:** `.next/standalone/server.js` OR use `npm start`
- **Build Command:** `npm run build`
- **Package Manager:** `npm`

### 4. File Structure
After build, ensure these exist:
- `.next/standalone/server.js` (main server file)
- `.next/standalone/public/` (public assets)
- `.next/standalone/.next/static/` (static assets)

### 5. Security Checklist
- ✅ `.env*` files are in `.gitignore`
- ✅ No secrets committed to Git
- ✅ `SESSION_SECRET` set in production
- ✅ `ENCRYPTION_KEY` set in production
- ✅ HTTPS enabled (Hostinger default)

## Deployment Steps

1. **Push to GitHub** (main branch)
2. **Hostinger Dashboard:**
   - Go to Websites → Manage → Node.js
   - Set Node.js version to v20 or v22
   - Set Startup File: `.next/standalone/server.js`
   - Set Build Command: `npm run build`
   - Add Environment Variables (see above)
   - Click "Install Dependencies"
   - Click "Build"
   - Click "Restart"

## Troubleshooting

### 503 Service Unavailable
1. Check Node.js version (must be v20+)
2. Verify startup file path: `.next/standalone/server.js`
3. Check build logs for errors
4. Delete `node_modules` and `.next` folders, rebuild

### Build Fails
1. Check Node.js version
2. Verify all dependencies in `package.json`
3. Check build logs for specific errors
4. Try: Delete `node_modules`, run `npm install`, then build

### App Crashes on Start
1. Check environment variables are set
2. Verify `SESSION_SECRET` and `ENCRYPTION_KEY` are set
3. Check server logs in Hostinger dashboard
4. Verify `.next/standalone/server.js` exists after build

### Videos/Images Not Loading
1. Check `next.config.ts` remotePatterns includes your domains
2. Verify CORS settings if using external APIs
3. Check browser console for blocked resources

## Post-Deployment Verification

- [ ] Website loads without errors
- [ ] Menu videos play correctly
- [ ] Creative Timeline section works
- [ ] All pages accessible
- [ ] Admin routes protected
- [ ] HTTPS working
- [ ] No console errors

## Notes

- The app uses standalone mode for optimal Hostinger deployment
- Videos are loaded from Dropbox (ensure URLs are accessible)
- Admin routes require authentication
- Session cookies are secure in production (HTTPS only)

