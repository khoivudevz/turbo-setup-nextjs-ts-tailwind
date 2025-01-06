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
├── app/ # Next.js app directory
├── components/ # Reusable components
├── configs/ # Configuration files
├── constants/ # Constants and enums
├── hooks/ # Custom React hooks
├── providers/ # React context providers
├── services/ # API services
├── styles/ # Global styles
├── translation/ # i18n translations
├── types/ # TypeScript types
├── utils/ # Utility functions
└── views/ # Page-specific view components
```

## Internationalization

The project supports multiple languages through a custom translation system. Currently supported languages:

- English (en)
- Korean (ko)

To add a new translation:

1. Create a new JSON file in `src/translation/locales/{lang}/common.json`
2. Add the language option in `src/constants/common.constant.ts`
3. Update the dictionary import in `src/utils/getDictionary.ts`

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
