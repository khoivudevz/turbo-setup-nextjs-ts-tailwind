# Turbo Setup NextJS - TS - TailwindCSS

A modern, feature-rich Next.js boilerplate with TypeScript, TailwindCSS, and internationalization support.

## Features

- 🚀 Next.js 15.1.3
- 📝 TypeScript
- 🎨 TailwindCSS
- 🌐 i18n Support (English & Korean)
- 🔍 ESLint + Prettier
- 🪝 Husky Git Hooks
- 🏷️ Conventional Commits
- 🔄 Environment Configuration
- 📦 Zustand State Management
- 🎯 Path Aliases
- 🔒 Type-Safe API Calls
- 🔄 **Nuqs** for URL query state management
- ⚡ **SWR** for data fetching and caching
- 🔐 **Enhanced Cookie Management** with client/server separation
- 🛡️ **Middleware-based Authentication** for route protection

## Getting Started

### Prerequisites

- Node.js 18+
- Bun

### Installation

1. Clone the repository:

```
git clone https://github.com/yourusername/turbo-setup-nextjs-ts-tailwind.git
```

2. Install dependencies:

```
bun install
```

3. Create environment files:

```
cp .env
```

### Development

Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:8000`

### Building

```bash
bun run build

```

### Start server

```bash
bun run start

```

## Project Structure

```
messages/ # Translation message files
├── [locale].json
src/
├── app/ # Next.js app directory with route handlers
├── components/ # Reusable UI components
├── configs/ # Configuration files (API, env, HTTP)
├── constants/ # Constants and regex patterns
├── hooks/ # Custom React hooks
├── i18n/ # Internationalization configuration
├── providers/ # React context providers
├── services/ # API and utility services
├── styles/ # Global styles and Tailwind config
├── types/ # TypeScript type definitions
├── utils/ # Utility functions
└── views/ # Page-specific view components
```

## Internationalization

The project uses `next-intl` for internationalization. Currently supported languages:

- English (en)
- Korean (ko)

### Translation Files

- Message files are stored in `/messages/{lang}.json`
- Each language has its own JSON file with nested translation keys
- Translation files follow this structure:

```
{
"lang": "english",
"home": {
"title": "Home",
"welcome_to_home": "Welcome to the home page",
// ... other translations
}
}
```

### Adding a New Language

1. Create a new JSON file in `/messages/{lang}.json`
2. Add the language code to the locales array in `src/i18n/config.ts`:

```
export const locales = ['en', 'ko', 'your-new-locale'] as const
```

### Using Translations

```
import {useTranslations} from 'next-intl'

const Component = () => {
  const t = useTranslations()
  return <div>{t('home.welcome_to_home')}</div>
}
```

### Configuration

The internationalization setup is configured in:

- `next.config.ts` - Next.js configuration with next-intl plugin
- `src/i18n/config.ts` - Locale configuration and defaults
- `src/i18n/request.ts` - Server-side locale detection

## Nuqs & SWR Integration

The project uses modern data management solutions:

### Nuqs

`nuqs` is used for managing URL query state, allowing seamless synchronization of component state with URL query parameters. This enhances the user experience by maintaining state across page reloads and navigations.

### SWR

`swr` provides a powerful data fetching and caching solution with features like:

- Automatic revalidation
- Real-time experience
- Suspense mode support
- TypeScript ready
- Request deduplication
- Error handling
- Optimistic UI updates

### Example Usage

```typescript
// Nuqs example
import {useQueryState} from 'nuqs'

const SearchDemo = () => {
	const [name, setName] = useQueryState('name')
	// ... component logic
}

// SWR example
import useSWR from 'swr'

const DataComponent = () => {
	const {data, error, isLoading} = useSWR('/api/data', fetcher)
	// ... component logic
}
```

## Enhanced Cookie Management

The project features a robust cookie management system with clear separation between client and server environments:

### Cookie Services Architecture

```
src/services/
├── cookie-client.service.ts  # Client-side cookie operations
├── cookie-server.service.ts  # Server-side cookie operations (with 'use server')
└── cookie.service.ts         # Unified exports and backward compatibility
```

### Key Features

- **Environment Separation**: Dedicated services for client and server environments
- **Type Safety**: Full TypeScript support with proper async/sync handling
- **Security**: Automatic secure flags in production, proper SameSite settings
- **Convenience Methods**: Built-in auth token and locale management
- **Next.js Compatibility**: Server actions support with `'use server'` directive

### Usage Examples

```typescript
// Client-side usage
import {cookieServices} from '@/services/cookie.service'

// Basic operations
cookieServices.client.set('key', 'value', 7) // 7 days
const value = cookieServices.client.get('key')
cookieServices.client.remove('key')

// Auth helpers
cookieServices.client.setAuthToken(token, rememberMe)
const isAuthenticated = cookieServices.client.isAuthenticated()

// Server-side usage (in server components/API routes)
import {cookieServices} from '@/services/cookie.service'

await cookieServices.server.set('key', 'value', 7)
const value = await cookieServices.server.get('key')
await cookieServices.server.remove('key')

// Server auth helpers
await cookieServices.server.setAuthToken(token, rememberMe)
const isAuth = await cookieServices.server.isAuthenticated()
```

## Authentication System

The project implements a simplified, middleware-based authentication system that provides robust security with minimal complexity.

### Authentication Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   User visits   │───▶│   Middleware     │───▶│   Page renders  │
│   /dashboard    │    │   checks auth    │    │   (if allowed)  │
│                 │    │   redirects if   │    │                 │
│                 │    │   needed         │    │                 │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

### Key Components

#### 1. Middleware Route Protection (`middleware.ts`)

Automatically protects routes based on authentication status:

```typescript
// Define your protected routes
const protectedRoutes = ['/dashboard', '/profile', '/settings', '/admin']
const authRoutes = ['/login', '/register'] // Redirect away if already authenticated

// Middleware automatically:
// - Redirects unauthenticated users from protected routes to login
// - Redirects authenticated users away from auth routes
// - Preserves callback URLs for seamless post-login experience
```

#### 2. Client-Side Auth Hook (`src/hooks/useAuth.ts`)

Manages authentication state and operations:

```typescript
import {useAuthContext} from '@/providers/AuthProvider'

const {user, isAuthenticated, login, logout, isLoading} = useAuthContext()

// Login
await login({email, password}, rememberMe)

// Logout
await logout()

// Check auth status
if (isAuthenticated) {
	// User is logged in
}
```

#### 3. Auth Provider (`src/providers/AuthProvider.tsx`)

Provides global authentication context:

```typescript
// app/layout.tsx
import { AuthProvider } from '@/providers/AuthProvider'

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  )
}
```

### Usage Examples

#### Protected Page (No Auth Code Needed)

```typescript
// app/dashboard/page.tsx - Middleware handles protection
export default function DashboardPage() {
  return <div>Dashboard Content</div>
}
```

#### Navigation with Auth State

```typescript
import { useAuthContext } from '@/providers/AuthProvider'

export function Navigation() {
  const { isAuthenticated, user, logout } = useAuthContext()

  return (
    <nav>
      {isAuthenticated ? (
        <div>
          <span>Welcome {user?.email}</span>
          <button onClick={logout}>Logout</button>
        </div>
      ) : (
        <a href="/login">Login</a>
      )}
    </nav>
  )
}
```

#### Login Page

```typescript
// app/login/page.tsx
'use client'
import { useAuthContext } from '@/providers/AuthProvider'

export default function LoginPage() {
  const { login, isLoading } = useAuthContext()

  const handleLogin = async (credentials) => {
    try {
      await login(credentials, rememberMe)
      // Middleware automatically redirects to intended page
    } catch (error) {
      // Handle login error
    }
  }

  return <LoginForm onSubmit={handleLogin} loading={isLoading} />
}
```

### Authentication Benefits

- **🚀 Simple Setup**: Only middleware + auth context needed
- **🔒 Secure by Default**: Route protection at the middleware level
- **⚡ Performance**: No unnecessary component re-renders or guards
- **🎯 SEO Friendly**: Server-side redirects for better SEO
- **🔄 Automatic Redirects**: Seamless user experience with callback URLs
- **📱 TypeScript Ready**: Full type safety throughout the auth flow

## Git Hooks

This project uses Husky for Git hooks:

- Pre-commit: Runs TypeScript compilation, lint-staged, and build
- Commit message: Enforces conventional commit messages

## Environment Variables

The project supports multiple environments:

- Development (.env.dev)
- Staging (.env.staging)
- Production (.env.prod)

Required environment variables:

```env
NEXT_PUBLIC_ENV=
NEXT_PUBLIC_USER_API_URL=
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
