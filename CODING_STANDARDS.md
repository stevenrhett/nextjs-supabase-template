# Coding Standards & Guidelines

## Project Setup Requirements

### Tech Stack
- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript (TSX/JSX files)
- **Styling**: Tailwind CSS v3.4
- **Database**: Supabase
- **Bundler**: Vite (primary), Webpack (fallback)
- **State Management**: Zustand (only when needed)
- **Forms**: React Hook Form + Zod validation

## Coding Standards

### Component Guidelines
- Write functional components with proper TypeScript interfaces
- Use Server Components by default, Client Components only when interactive
- Always include loading and error states
- Implement proper error boundaries

### Naming Conventions
- **Components**: PascalCase (`UserProfile.tsx`)
- **Functions**: camelCase (`getUserData`)
- **Constants**: UPPER_SNAKE_CASE (`API_ENDPOINTS`)
- **Files**: kebab-case for pages (`user-profile.tsx`)

### Testing Protocol
1. **Write tests BEFORE implementing features**
2. **Run tests after each component creation**
3. **Maintain minimum 80% test coverage**

### Debugging Sequence
When errors occur, debug in this order:
1. Check console for TypeScript errors
2. Verify Supabase connection
3. Check API routes
4. Review component state management
5. Test responsive design with Tailwind

## Performance Standards

### Optimization Requirements
- Use Next.js Image component for all images
- Implement proper meta tags for SEO
- Configure Tailwind CSS purging
- Use React Suspense for loading states
- Implement proper caching strategies

### Security Guidelines
- Use Supabase Auth with RLS policies
- Validate all inputs with Zod schemas
- Secure API routes with proper validation
- Use environment variables for secrets
