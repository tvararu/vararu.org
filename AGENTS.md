# AGENTS.md

This file provides guidance to AI agents when working with code in this
repository.

## Project Overview

This is a personal website built with Next.js 16 App Router, React 19,
TypeScript, and Tailwind CSS v4.

## Development Commands

### Task Runner (mise)

This project uses `mise` as the primary task runner:

```bash
mise dev              # Start development server (localhost:3000)
mise ci               # Run all checks in parallel
mise eslint           # Check for linting issues
mise eslint:fix       # Fix linting issues
mise prettier         # Check code formatting
mise prettier:fix     # Fix code formatting
mise tsc              # Run TypeScript type checking
mise bundle           # Install dependencies
```

## Architecture

### Next.js App Router Structure

- **`app/layout.tsx`**: Root layout with metadata configuration and HTML
  structure
- **`app/page.tsx`**: Home page content (single-page portfolio with social
  links)
- **`components/`**: Reusable React components (Header, Logo)
- **`app/globals.css`**: Tailwind CSS v4 imports (CSS-first configuration)

### Key Patterns

1. **Tailwind CSS v4**: Uses CSS-first approach via `@import "tailwindcss"` in
   globals.css (no tailwind.config.js)
2. **Path Aliases**: `@/*` imports from project root (configured in
   tsconfig.json)
3. **Image Optimization**: Use Next.js `<Image />` component, not `<img>` tags
4. **Metadata**: Use Next.js metadata API in layout.tsx, not `<Head>` component
5. **3D Effects**: Logo uses Tailwind's CSS-based 3D transforms

### Tooling Configuration

- **ESLint**: Flat config (eslint.config.mjs) with Next.js Core Web Vitals +
  TypeScript presets
- **Prettier**: Auto-sorts Tailwind classes via `prettier-plugin-tailwindcss`
- **TypeScript**: Strict mode enabled
- **Node Version**: v22 (managed by mise in mise.toml)

## Code Quality

All code must pass:

- ESLint (Next.js best practices + TypeScript rules)
- TypeScript strict type checking
- Prettier formatting with Tailwind class sorting

Run `mise ci` to validate all checks in parallel.

## Memories

- Don't run `mise dev`, the user is running it in the background
