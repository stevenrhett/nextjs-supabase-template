'use client'

import { Button } from '@/components/ui/Button'

export default function Home() {
  const handleGetStarted = () => {
    alert('Get Started clicked! Add your functionality here.')
  }

  const handleLearnMore = () => {
    alert('Learn More clicked! Add your functionality here.')
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center w-full lg:text-left">
          Welcome to Next.js Supabase Template
        </h1>
      </div>

      <div className="mt-8 space-x-4">
        <Button variant="primary" onClick={handleGetStarted}>
          Get Started
        </Button>
        <Button variant="outline" onClick={handleLearnMore}>
          Learn More
        </Button>
      </div>

      <div className="mt-16 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left gap-4">
        <div className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer">
          <h2 className="mb-3 text-2xl font-semibold">
            TypeScript{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Fully typed with TypeScript for better developer experience.
          </p>
        </div>

        <div className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer">
          <h2 className="mb-3 text-2xl font-semibold">
            Supabase{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            PostgreSQL database with real-time subscriptions.
          </p>
        </div>

        <div className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer">
          <h2 className="mb-3 text-2xl font-semibold">
            Testing{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Jest and React Testing Library with 80% coverage requirement.
          </p>
        </div>

        <div className="group rounded-lg border border-gray-300 px-5 py-4 transition-colors hover:border-gray-400 hover:bg-gray-50 cursor-pointer">
          <h2 className="mb-3 text-2xl font-semibold">
            Deploy{' '}
            <span className="inline-block transition-transform group-hover:translate-x-1">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Optimized for Vercel with automatic deployments.
          </p>
        </div>
      </div>
    </main>
  )
}