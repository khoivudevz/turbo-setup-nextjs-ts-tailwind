# Turbo Setup NextJS - TS - TailwindCSS

A modern, feature-rich Next.js boilerplate with TypeScript, TailwindCSS, and internationalization support.

## Features

- 🚀 Next.js 16.0.3
- ⚛️ **React Compiler** enabled for automatic optimization
- 📝 TypeScript
- 🎨 TailwindCSS v4
- 🌐 i18n Support (English & Korean)
- 🔍 ESLint + Prettier
- 🪝 Husky Git Hooks
- 🏷️ Conventional Commits
- 🔄 Environment Configuration
- 📦 Zustand State Management
- 🎯 Path Aliases
- 🔒 Type-Safe API Calls
- 🔄 **Nuqs** for URL query state management
- ⚡ **Custom useFetch hook** for data fetching and state management
- 🔐 **Enhanced Cookie Management** with client/server separation
- 🛡️ **Middleware-based Authentication** for route protection
- 📁 **Snake-case file naming** convention for better organization

## Getting Started

### Prerequisites

- Node.js 18+
- Bun

### Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/turbo-setup-nextjs-ts-tailwind.git
cd turbo-setup-nextjs-ts-tailwind
```

2. Install dependencies:

```bash
bun install
```

3. Set up environment variables:

```bash
# Copy the example environment file
cp .env.example .env.local

# Edit the environment variables
# NEXT_PUBLIC_ENV=development
# NEXT_PUBLIC_API_URL=https://your-api-url.com
```

4. Start the development server:

```bash
bun run dev
```

The application will be available at `http://localhost:8000`

### Quick Start

After installation, you can immediately:

1. **View the homepage** - See the internationalized landing page
2. **Test the news page** - Experience the custom useFetch hook in action
3. **Switch languages** - Toggle between English and Korean
4. **Open modals** - Test the modal system with Zustand state management
5. **Explore the code** - Check out the snake_case file organization

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
├── en.json
├── ko.json
src/
├── app/ # Next.js app directory with route handlers
│   ├── layout.tsx
│   ├── page.tsx
│   └── news/
│       └── page.tsx
├── components/ # Reusable UI components (snake_case naming)
│   ├── button/
│   │   └── button.tsx
│   ├── modal/
│   │   ├── components/
│   │   │   └── demo-modal.tsx
│   │   ├── modal.tsx
│   │   └── modal-wrapper.tsx
│   ├── search-demo/
│   │   ├── search-demo.tsx
│   │   └── search-result.tsx
│   └── switch-language/
│       └── switch-language.tsx
├── configs/ # Configuration files (API, env, HTTP)
│   ├── api-url.config.ts
│   ├── app-url.config.ts
│   ├── env.config.ts
│   └── http.ts
├── constants/ # Constants and regex patterns
│   ├── common.constant.ts
│   └── modals.constant.ts
├── hooks/ # Custom React hooks (snake_case naming)
│   ├── use-auth.ts
│   ├── use-clear-modals.ts
│   ├── use-fetch.ts
│   ├── use-news.ts
│   └── use-router.ts
├── i18n/ # Internationalization configuration
│   ├── config.ts
│   └── request.ts
├── providers/ # React context providers (snake_case naming)
│   ├── app-provider.tsx
│   ├── auth-provider.tsx
│   └── modals-provider.tsx
├── services/ # API and utility services
│   ├── auth.service.ts
│   ├── cookie-client.service.ts
│   ├── cookie-server.service.ts
│   ├── cookie.service.ts
│   ├── dumb.service.ts
│   ├── locale-client.service.ts
│   └── locale-server.service.ts
├── stores/ # Zustand stores (snake_case naming)
│   ├── use-count.store.ts
│   └── use-modal.store.ts
├── styles/ # Global styles and Tailwind config
│   └── globals.css
├── types/ # TypeScript type definitions
│   ├── api.type.ts
│   └── common.type.ts
├── utils/ # Utility functions (snake_case naming)
│   ├── cn.util.ts
│   ├── delay.util.ts
│   ├── format-date.util.ts
│   ├── string.util.ts
│   └── validate.util.ts
└── views/ # Page-specific view components (snake_case naming)
    ├── home-view/
    │   ├── components/
    │   │   └── modal-button.tsx
    │   └── home-view.tsx
    └── news-view/
        └── news-view.tsx
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

## Nuqs & Custom useFetch Integration

The project uses modern data management solutions:

### Nuqs

`nuqs` is used for managing URL query state, allowing seamless synchronization of component state with URL query parameters. This enhances the user experience by maintaining state across page reloads and navigations.

### Custom useFetch Hook

The project includes a custom `useFetch` hook that provides a lightweight alternative to SWR with the following features:

- **Automatic data fetching** with immediate execution option
- **Loading and error states** for better UX
- **Manual execution control** with `execute()` function
- **Success/error callbacks** for custom handling
- **Reset functionality** to clear state
- **TypeScript ready** with full type safety
- **Conditional fetching** with `enabled` option
- **No external dependencies** - pure React implementation

#### Hook Interface

```typescript
interface UseFetchOptions {
	immediate?: boolean // Auto-fetch on mount (default: true)
	enabled?: boolean // Enable/disable fetching (default: true)
	onSuccess?: (data: any) => void
	onError?: (error: any) => void
}

interface UseFetchReturn<T> {
	data: T | null
	isLoading: boolean
	error: any
	execute: () => Promise<void> // Manual trigger
	reset: () => void // Clear state
}
```

### Example Usage

```typescript
// Nuqs example
import {useQueryState} from 'nuqs'

const SearchDemo = () => {
	const [name, setName] = useQueryState('name')
	// ... component logic
}

// Custom useFetch example
import {useFetch} from '@/hooks/use-fetch'

const DataComponent = () => {
	const {data, error, isLoading, execute, reset} = useFetch(() =>
		fetch('/api/data').then((res) => res.json())
	)

	// ... component logic
}

// Advanced usage with options
const AdvancedComponent = () => {
	const {data, error, isLoading, execute} = useFetch(
		() => fetchUserData(userId),
		{
			immediate: false,  // Don't auto-fetch
			enabled: !!userId, // Only fetch when userId exists
			onSuccess: (user) => console.log('User loaded:', user),
			onError: (err) => console.error('Failed to load user:', err)
		}
	)

	return (
		<div>
			{isLoading && <div>Loading...</div>}
			{error && <div>Error: {error.message}</div>}
			{data && <div>User: {data.name}</div>}
			<button onClick={execute}>Refresh</button>
		</div>
	)
}
```

## File Naming Convention

This project follows a **snake_case** naming convention for better organization and consistency:

### Naming Rules

- **Files**: Use snake_case (e.g., `use-auth.ts`, `modal-wrapper.tsx`)
- **Directories**: Use snake_case (e.g., `home-view/`, `search-demo/`)
- **Components**: Use PascalCase in code, snake_case for filenames
- **Hooks**: Use snake_case with `use-` prefix (e.g., `use-fetch.ts`)
- **Stores**: Use snake_case with `.store.ts` suffix (e.g., `use-modal.store.ts`)
- **Utils**: Use snake_case with `.util.ts` suffix (e.g., `format-date.util.ts`)

### Examples

```
✅ Correct:
- src/hooks/use-auth.ts
- src/components/modal/modal-wrapper.tsx
- src/views/home-view/home-view.tsx
- src/stores/use-modal.store.ts
- src/utils/format-date.util.ts

❌ Avoid:
- src/hooks/useAuth.ts
- src/components/Modal/ModalWrapper.tsx
- src/views/HomeView/HomeView.tsx
- src/stores/useModal.store.ts
- src/utils/formatDate.util.ts
```

### Benefits

- **Consistency**: Uniform naming across all files
- **Readability**: Easier to scan and understand file structure
- **Maintainability**: Clear patterns for different file types
- **Team Collaboration**: Reduces naming conflicts and confusion

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

#### 2. Client-Side Auth Hook (`src/hooks/use-auth.ts`)

Manages authentication state and operations:

```typescript
import {useAuthContext} from '@/providers/auth-provider'

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

#### 3. Auth Provider (`src/providers/auth-provider.tsx`)

Provides global authentication context:

```typescript
// app/layout.tsx
import { AuthProvider } from '@/providers/auth-provider'

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
import { useAuthContext } from '@/providers/auth-provider'

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
import { useAuthContext } from '@/providers/auth-provider'

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

## Development Workflow

### Available Scripts

```bash
# Development
bun run dev          # Start development server with Webpack
bun run build        # Build for production
bun run start        # Start production server
bun run lint         # Run ESLint

# Git Hooks (automatic)
# Pre-commit: Runs linting and type checking
# Commit: Enforces conventional commit messages
```

### Development Features

- **Webpack**: Stable development builds with Next.js 16
- **React Compiler**: Automatic optimization of React components
- **Hot Reload**: Instant updates during development
- **TypeScript**: Full type checking and IntelliSense
- **ESLint**: Code quality and consistency
- **Prettier**: Automatic code formatting
- **Husky**: Git hooks for quality assurance

## Environment Variables

The project supports multiple environments with centralized configuration:

### Environment Files

- `.env.local` - Local development overrides
- `.env.dev` - Development environment
- `.env.staging` - Staging environment
- `.env.prod` - Production environment

### Required Variables

```env
# Environment
NEXT_PUBLIC_ENV=development|staging|production

# API Configuration
NEXT_PUBLIC_USER_API_URL=https://api.example.com
NEXT_PUBLIC_API_URL=https://api.example.com

# Optional: Analytics, Sentry, etc.
NEXT_PUBLIC_ANALYTICS_ID=your-analytics-id
```

### Configuration Management

Environment variables are managed through `src/configs/env.config.ts`:

```typescript
export const PUBLIC_ENV = {
	ENV: process.env.NEXT_PUBLIC_ENV || 'development',
	USER_API_URL: process.env.NEXT_PUBLIC_USER_API_URL || '',
	API_URL: process.env.NEXT_PUBLIC_API_URL || '',
} as const
```

## React Compiler

The project uses [React Compiler](https://react.dev/learn/react-compiler) for automatic optimization of React components. The compiler is enabled in `next.config.ts`:

```typescript
const nextConfig: NextConfig = {
	distDir: 'build',
	reactCompiler: true,
}
```

### Benefits

- **Automatic Memoization**: Components and hooks are automatically memoized
- **Performance Optimization**: Reduces unnecessary re-renders
- **Zero Configuration**: Works out of the box with Next.js 16
- **Type Safety**: Full TypeScript support

### How It Works

The React Compiler automatically optimizes your React code during the build process. It analyzes your components and hooks to determine when memoization is beneficial, eliminating the need for manual `useMemo`, `useCallback`, and `React.memo` in most cases.

**Note**: The compiler is enabled via the `reactCompiler: true` option in Next.js config. No additional Babel plugins or configuration needed - Next.js 16 handles it natively.

## License

This project is licensed under the MIT License - see the LICENSE file for details.
