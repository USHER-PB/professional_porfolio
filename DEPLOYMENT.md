# Deployment Guide for Vercel

This guide will help you deploy your portfolio website to Vercel.

## Prerequisites

- A GitHub, GitLab, or Bitbucket account
- A Vercel account (free tier available at [vercel.com](https://vercel.com))

## Step-by-Step Deployment

### Option 1: Deploy via Vercel Dashboard (Recommended for Beginners)

1. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin YOUR_GITHUB_REPO_URL
   git push -u origin main
   ```

2. **Sign in to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Sign up or log in (you can use your GitHub account)

3. **Import your project**:
   - Click "Add New..." → "Project"
   - Select "Import Git Repository"
   - Choose your GitHub repository
   - Click "Import"

4. **Configure your project**:
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: ./
   - **Build Command**: `npm run build` (auto-filled)
   - **Output Directory**: `.next` (auto-filled)
   - **Install Command**: `npm install` (auto-filled)

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete (usually 1-2 minutes)
   - Your site will be live at `your-project-name.vercel.app`

### Option 2: Deploy via Vercel CLI

1. **Install Vercel CLI**:
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**:
   ```bash
   vercel login
   ```

3. **Deploy**:
   ```bash
   vercel
   ```

4. **Follow the prompts**:
   - Set up and deploy? Yes
   - Which scope? Select your account
   - Link to existing project? No
   - What's your project's name? (Enter a name)
   - In which directory is your code located? ./
   - Want to override settings? No

5. **Production deployment**:
   ```bash
   vercel --prod
   ```

## Custom Domain Setup

### Adding a Custom Domain

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Domains"
   - Click "Add"
   - Enter your domain name
   - Click "Add"

2. **Configure DNS**:
   
   **For root domain (example.com)**:
   - Add an A record pointing to: `76.76.21.21`
   
   **For subdomain (www.example.com)**:
   - Add a CNAME record pointing to: `cname.vercel-dns.com`

3. **Wait for DNS propagation** (can take up to 48 hours, usually much faster)

### SSL/TLS Certificate

Vercel automatically:
- ✅ Provisions SSL certificates
- ✅ Renews certificates automatically
- ✅ Redirects HTTP to HTTPS
- ✅ Enables HSTS

No configuration needed!

## Environment Variables

If you're using email integration or other services:

1. **In Vercel Dashboard**:
   - Go to your project
   - Click "Settings" → "Environment Variables"
   - Add your variables:
     - `SENDGRID_API_KEY`
     - `CONTACT_EMAIL`
   - Click "Save"

2. **Redeploy** for changes to take effect

## Automatic Deployments

Vercel automatically deploys:

- **Production**: Every push to `main` branch
- **Preview**: Every push to other branches
- **Pull Requests**: Automatic preview deployments

## Monitoring and Analytics

### Enable Analytics

1. Go to your project in Vercel
2. Click "Analytics" tab
3. Enable Web Analytics (free)
4. View real-time visitor data

### View Deployment Logs

1. Go to "Deployments" tab
2. Click on any deployment
3. View build logs and runtime logs

## Performance Optimization

Vercel automatically provides:

- ✅ Global CDN distribution
- ✅ Edge caching
- ✅ Image optimization
- ✅ Automatic compression
- ✅ HTTP/2 and HTTP/3 support

## Troubleshooting

### Build Fails

1. Check build logs in Vercel dashboard
2. Ensure all dependencies are in `package.json`
3. Test build locally: `npm run build`

### 404 Errors

1. Ensure `next.config.js` is properly configured
2. Check file paths are correct
3. Verify API routes are in `src/app/api/` directory

### Environment Variables Not Working

1. Ensure variables are added in Vercel dashboard
2. Redeploy after adding variables
3. Check variable names match exactly

## Useful Commands

```bash
# Deploy to production
vercel --prod

# View deployment logs
vercel logs

# List all deployments
vercel ls

# Remove a deployment
vercel rm deployment-url

# View project info
vercel inspect
```

## Free Tier Limits

Vercel Free Tier includes:

- ✅ Unlimited deployments
- ✅ 100GB bandwidth per month
- ✅ Automatic SSL
- ✅ Custom domains
- ✅ Preview deployments
- ✅ Web Analytics

Perfect for a portfolio website!

## Support

- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Community](https://github.com/vercel/vercel/discussions)

---

**Your portfolio will be live at**: `https://your-project-name.vercel.app`

Good luck with your job search! 🚀
