# Security Guidelines

## Authentication
- Use Supabase Auth for user management
- Implement Row Level Security (RLS) policies
- Validate all inputs with Zod schemas
- Secure API routes with proper middleware

## Environment Variables
- Never commit secrets to git
- Use environment variables for all sensitive data
- Validate environment variables at startup
- Use different environments for dev/staging/prod

## Security Headers
- Content Security Policy configured
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- Referrer-Policy: origin-when-cross-origin

## Best Practices
- Sanitize all user inputs
- Implement rate limiting on API routes
- Use TypeScript for type safety
- Regular dependency security audits
- HTTPS enforcement in production
- Secure cookie settings

## Supabase Security
- Enable Row Level Security (RLS)
- Use service role key only on server
- Validate user permissions
- Use database policies for access control
