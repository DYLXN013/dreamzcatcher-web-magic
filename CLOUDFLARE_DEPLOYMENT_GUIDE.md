# Cloudflare Pages Deployment Guide

Your Dreamcatcherz website is ready to be deployed on Cloudflare Pages! Follow this step-by-step guide.

## Step 1: Sign Up for Cloudflare Pages

1. **Go to [pages.cloudflare.com](https://pages.cloudflare.com)**
2. **Click "Sign up"** or **"Get started for free"**
3. **Create an account** or sign in with your existing Cloudflare account
4. **Verify your email** if required

## Step 2: Connect Your GitHub Repository

1. **In Cloudflare Pages dashboard**, click **"Create a project"**
2. **Click "Connect to Git"**
3. **Select "GitHub"** as your Git provider
4. **Authorize Cloudflare** to access your GitHub account
5. **Select your repository**: `DYLXN013/dreamzcatcher-web-magic`

## Step 3: Configure Build Settings

Once your repository is connected, configure these settings:

### **Project Name:**
- **Project name**: `dreamcatcherz-event-planning` (or your preferred name)
- This will create: `https://your-project-name.pages.dev`

### **Build Settings:**
- **Production branch**: `main`
- **Framework preset**: `Vite`
- **Build command**: `npm run build`
- **Build output directory**: `dist`
- **Root directory**: `/` (leave blank)

### **Environment Variables:**
- **Node.js version**: `18` (or latest LTS)

## Step 4: Deploy Your Site

1. **Click "Save and Deploy"**
2. **Wait for the build to complete** (usually 2-3 minutes)
3. **Your site will be live** at the provided URL!

## Step 5: Add Your Custom Domain (.uk domain)

### **Option A: Domain Already in Cloudflare**
1. **Go to your Cloudflare Pages project**
2. **Click "Custom domains"**
3. **Click "Set up a custom domain"**
4. **Enter your .uk domain** (e.g., `yourdomain.co.uk`)
5. **Click "Continue"**
6. **Follow the DNS setup instructions**

### **Option B: Domain Not in Cloudflare**
1. **Add your domain to Cloudflare first:**
   - Go to [dash.cloudflare.com](https://dash.cloudflare.com)
   - Click "Add a Site"
   - Enter your domain
   - Follow the DNS setup instructions
2. **Then add it to Pages** (follow Option A steps)

## Step 6: Configure DNS Records

If your domain is not in Cloudflare, you'll need to add these DNS records in your domain registrar:

### **For Cloudflare-managed domains:**
- Cloudflare will automatically add the necessary records

### **For external domains:**
Add these records in your domain registrar's DNS settings:

**Record 1:**
- **Type:** CNAME
- **Name:** @ (or leave blank)
- **Value:** `your-project-name.pages.dev`
- **TTL:** 300

**Record 2:**
- **Type:** CNAME
- **Name:** www
- **Value:** `your-project-name.pages.dev`
- **TTL:** 300

## Step 7: SSL Certificate

- **Cloudflare automatically provides SSL certificates**
- **Your site will be accessible via HTTPS**
- **No additional configuration needed**

## Step 8: Test Your Deployment

1. **Visit your live site** at the provided URL
2. **Test all pages** (Home, About, Services, Moodboard, Contact)
3. **Test the contact form** to ensure EmailJS is working
4. **Check mobile responsiveness**

## Step 9: Set Up Automatic Deployments

### **Automatic Deployments:**
- **Every push to `main` branch** will automatically trigger a new deployment
- **Preview deployments** are created for pull requests
- **No manual intervention needed**

### **Manual Deployments:**
- **Go to your project dashboard**
- **Click "Deployments"**
- **Click "Create new deployment"**

## Step 10: Monitor and Optimize

### **Performance:**
- **Cloudflare Pages automatically optimizes** your site
- **Global CDN** ensures fast loading worldwide
- **Automatic image optimization**

### **Analytics:**
- **Enable Cloudflare Web Analytics** (free)
- **Track visitor behavior** and performance

## Troubleshooting

### **Build Failures:**
1. **Check build logs** in the Cloudflare dashboard
2. **Verify build command**: `npm run build`
3. **Check output directory**: `dist`
4. **Ensure all dependencies** are in `package.json`

### **Domain Issues:**
1. **Wait 24-48 hours** for DNS propagation
2. **Check DNS records** are correct
3. **Verify domain is properly added** to Cloudflare

### **Contact Form Issues:**
1. **Verify EmailJS credentials** are correct
2. **Check browser console** for errors
3. **Test with different browsers**

## Benefits of Cloudflare Pages

✅ **Free hosting** with generous limits  
✅ **Global CDN** for fast loading  
✅ **Automatic SSL certificates**  
✅ **Git integration** for easy updates  
✅ **Preview deployments** for testing  
✅ **Excellent .uk domain support**  
✅ **Built-in analytics** (optional)  
✅ **DDoS protection** included  

## Your Site URL

After deployment, your site will be available at:
- **Cloudflare URL**: `https://your-project-name.pages.dev`
- **Custom Domain**: `https://yourdomain.co.uk` (after setup)

## Next Steps

1. **Deploy your site** following the steps above
2. **Add your custom domain**
3. **Test all functionality**
4. **Share your live site** with clients!

Your Dreamcatcherz event planning website will be live and ready to attract clients! 🎉 