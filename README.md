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
cp .env.example .env.dev
cp .env.example .env.staging
cp .env.example .env.prod
```

### Development

Start the development server:

```bash
# Development
bun run dev

# Staging
bun run dev:staging

# Production
bun run dev:prod
```

The application will be available at `http://localhost:8000`

### Building

```bash
# Development
bun run build:dev

# Staging
bun run build:staging

# Production
bun dev

```

## Project Structure

```
src/
├── app/ # Next.js app directory with route handlers
├── components/ # Reusable UI components
├── configs/ # Configuration files (API, env, HTTP)
├── constants/ # Constants and regex patterns
├── hooks/ # Custom React hooks
├── i18n/ # Internationalization configuration
├── messages/ # Translation message files
├── providers/ # React context providers
├── services/ # API and utility services
├── styles/ # Global styles and Tailwind config
├── types/ # TypeScript type definitions
├── utils/ # Utility functions
└── views/ # Page-specific view components
```

## Internationalization

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
