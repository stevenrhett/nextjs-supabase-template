# Deployment Guide

## Vercel Deployment (Recommended)

1. Connect GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Variables

Add these in your Vercel dashboard:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

### Build Settings

- Build Command: `npm run build`
- Output Directory: `.next`
- Install Command: `npm install`

## Alternative Deployments

### Netlify
- Connect repository
- Build command: `npm run build`
- Publish directory: `.next`

### Railway
- Connect GitHub repository
- Add environment variables
- Deploy automatically
