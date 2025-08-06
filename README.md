# Next.js Supabase Template

A production-ready template for building modern web applications with Next.js, TypeScript, Tailwind CSS, and Supabase.

## Tech Stack

- **Framework**: Next.js 14+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3.4
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **State Management**: Zustand (when needed)
- **Forms**: React Hook Form + Zod
- **Testing**: Jest + React Testing Library
- **Deployment**: Vercel

## Getting Started

1. **Setup environment**
   ```bash
   cp .env.local.example .env.local
   # Fill in your Supabase credentials
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development**
   ```bash
   npm run dev
   ```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run test:coverage` - Run tests with coverage
- `npm run lint` - Lint code
- `npm run type-check` - TypeScript type checking

## Testing

This project requires **80% minimum test coverage**. Write tests before implementing features.

## Deployment

Optimized for Vercel deployment with automatic CI/CD workflows.

### Environment Variables for Deployment

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_service_role_key
```

## Documentation

- [Coding Standards](./CODING_STANDARDS.md)
- See `/docs` folder for detailed guides

---

**Happy coding!**
