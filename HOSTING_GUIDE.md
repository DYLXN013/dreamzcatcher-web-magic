# Website Hosting & Domain Setup Guide

Your website is now ready to be hosted! Here are the best options for hosting your event planning website.

## Option 1: Netlify (Recommended - Easiest & Free)

Netlify is perfect for React apps and offers free hosting with custom domains.

### Step 1: Deploy to Netlify

**Method A: Drag & Drop (Quick)**
1. Go to [netlify.com](https://netlify.com) and sign up
2. Drag your `dist` folder (from the build) to the Netlify dashboard
3. Your site will be live instantly with a URL like `https://random-name.netlify.app`

**Method B: Git Integration (Recommended)**
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Netlify will automatically deploy when you push changes

### Step 2: Add Custom Domain
1. In Netlify dashboard, go to **Site settings → Domain management**
2. Click **Add custom domain**
3. Enter your domain name
4. Follow the DNS configuration instructions

### Step 3: Configure DNS
You'll need to update your domain's DNS settings:
- **A Record:** Point to Netlify's IP
- **CNAME Record:** Point to your Netlify site URL

## Option 2: Vercel (Alternative - Also Great)

Vercel is another excellent option for React apps.

### Step 1: Deploy to Vercel
1. Go to [vercel.com](https://vercel.com) and sign up
2. Install Vercel CLI: `npm i -g vercel`
3. Run `vercel` in your project directory
4. Follow the prompts

### Step 2: Add Custom Domain
1. In Vercel dashboard, go to **Settings → Domains**
2. Add your domain
3. Configure DNS as instructed

## Option 3: GitHub Pages (Free)

GitHub Pages is free but requires a bit more setup.

### Step 1: Setup GitHub Pages
1. Push your code to GitHub
2. Go to repository **Settings → Pages**
3. Select **Deploy from a branch**
4. Choose `main` branch and `/docs` folder
5. Update your build output to `docs` folder

### Step 2: Configure Build
Update your `vite.config.ts`:
```typescript
export default defineConfig({
  base: '/your-repo-name/',
  build: {
    outDir: 'docs'
  }
})
```

## Option 4: Traditional Hosting (cPanel, etc.)

For traditional hosting providers like HostGator, Bluehost, etc.

### Step 1: Upload Files
1. Build your project: `npm run build`
2. Upload the contents of the `dist` folder to your hosting's `public_html` directory
3. Create a `.htaccess` file for React Router:

```apache
RewriteEngine On
RewriteBase /
RewriteRule ^index\.html$ - [L]
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule . /index.html [L]
```

## Domain Registration Options

### Popular Domain Registrars:
1. **Namecheap** - Good prices, good support
2. **GoDaddy** - Popular but can be expensive
3. **Google Domains** - Clean interface, good prices
4. **Cloudflare** - Free privacy protection
5. **Porkbun** - Often cheapest prices

### Domain Suggestions for Event Planning:
- `dreamcatcherzevents.com`
- `dreamcatcherzplanning.com`
- `dreamcatcherz.co.uk`
- `dreamcatcherzevents.co.uk`
- `dreamcatcherzplanner.com`

## Step-by-Step: Complete Setup with Netlify

### 1. Prepare Your Project
```bash
# Build your project
npm run build

# The dist folder is now ready for deployment
```

### 2. Deploy to Netlify
1. **Sign up** at [netlify.com](https://netlify.com)
2. **Drag and drop** your `dist` folder to Netlify
3. **Wait** for deployment (usually 30 seconds)
4. **Your site is live!** 🎉

### 3. Buy a Domain
1. **Choose a registrar** (Namecheap recommended)
2. **Search for your domain** (e.g., `dreamcatcherzevents.com`)
3. **Purchase the domain**
4. **Note down the nameservers** or DNS settings

### 4. Connect Domain to Netlify
1. **In Netlify dashboard**, go to Site settings → Domain management
2. **Click "Add custom domain"**
3. **Enter your domain** (e.g., `dreamcatcherzevents.com`)
4. **Choose DNS configuration method**:
   - **Option A:** Use Netlify nameservers (easiest)
   - **Option B:** Configure DNS records manually

### 5. Configure DNS
**If using Netlify nameservers:**
1. Go to your domain registrar
2. Update nameservers to Netlify's:
   - `dns1.p01.nsone.net`
   - `dns2.p01.nsone.net`
   - `dns3.p01.nsone.net`
   - `dns4.p01.nsone.net`

**If configuring manually:**
1. Add A record: `@` → `75.2.60.5`
2. Add CNAME record: `www` → `your-site.netlify.app`

### 6. Wait for Propagation
- DNS changes can take 24-48 hours
- Usually works within 1-2 hours
- You can check propagation at [whatsmydns.net](https://whatsmydns.net)

## SSL Certificate
- **Netlify/Vercel:** Automatic SSL (HTTPS)
- **GitHub Pages:** Automatic SSL
- **Traditional hosting:** Usually included or can be added

## Cost Breakdown
- **Netlify/Vercel:** Free hosting, $12-15/year for domain
- **GitHub Pages:** Free hosting, $12-15/year for domain
- **Traditional hosting:** $3-10/month hosting + $12-15/year domain

## Recommended Setup
1. **Hosting:** Netlify (free, easy, reliable)
2. **Domain:** Namecheap (good prices, good support)
3. **Total cost:** ~$15/year for domain only

## Next Steps After Deployment
1. **Test your contact form** on the live site
2. **Set up Google Analytics** for tracking
3. **Submit to search engines** (Google Search Console)
4. **Create social media accounts** for your business
5. **Set up email marketing** (Mailchimp, ConvertKit)

Your website will be live and ready to attract clients! 🚀 