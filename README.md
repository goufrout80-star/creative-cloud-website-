This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

## 🚀 Hostinger Deployment Guide (ainewscentral.net)

Follow these **EXACT** steps to fix 503 errors and deploy successfully.

### 1. DNS Configuration
- **Domain:** `ainewscentral.net`
- **Type:** A Record
- **Name:** @
- **Points to:** [Your Hostinger VPS/Cloud IP Address]
- **TTL:** 3600

### 2. Hostinger Node.js Settings
Go to **Websites** → **Manage** → **Node.js**

| Setting | Value |
|---------|-------|
| **Node.js Version** | **v20** (or v22) - REQUIRED |
| **Application Startup File** | `.next/standalone/server.js` |
| **Package Manager** | `npm` |
| **Build Command** | `npm run build` |

> **Note:** If Hostinger does not accept the startup file path, use `npm start` as the custom start command or leave it as `server.js` and ensure `npm start` is used.

### 3. Environment Variables
(Optional for this demo version, but good practice)
```bash
NEXT_PUBLIC_BASE_URL=https://ainewscentral.net
```

### 4. Deployment Steps
1. **Push to GitHub**: Code is auto-deployed from `main` branch.
2. **Hostinger Dashboard**:
   - Click **"Install Dependencies"**
   - Click **"Build"**
   - Click **"Restart"**

### 🛑 How to Fix 503 Service Unavailable
If you see a 503 error:
1. **Verify Node Version**: Must be **v20+**. Next.js 16 will fail on v18.
2. **Force Reinstall**:
   - Delete `node_modules` and `.next` folders in File Manager.
   - Click **Save** in Node.js settings to force a fresh install.
3. **Check Startup Command**: Ensure it is running `node .next/standalone/server.js`.

### 🛠️ Local Development
```bash
npm install
npm run dev
```

### 📦 Build Locally
```bash
npm run build
# Output will be in .next/standalone
```
1. **Check DNS**: Ensure your domain's **A Record** points to the Hostinger IP address shown in the dashboard.
2. **Wait for Propagation**: DNS changes can take up to 24 hours (usually 15 mins).
3. **Restart Server**: In Hostinger Node.js dashboard, click **Restart**.
4. **Verify Startup File**: Ensure it is exactly `server.js`.
5. **Force Rebuild**: Sometimes old cache breaks the build. 
   - Delete `node_modules` and `.next` folders in Hostinger File Manager.
   - Click "Install Dependencies" and "Build" again.

### 5. Stripe & Domain Redirects
The checkout API is configured to automatically detect your domain. 
However, for production, ALWAYS set `NEXT_PUBLIC_BASE_URL` in Hostinger to `https://todayfilmmakers.com` to ensure Stripe redirects users back correctly.

