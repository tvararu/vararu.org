# AGENTS.md

This file provides guidance to AI agents when working with code in this
repository.

## Project Overview

This is a personal website built with Next.js 16 App Router, React 19,
TypeScript, and Tailwind CSS v4. Runtime and package manager: Bun.

## Development Commands

### Task Runner (mise)

This project uses `mise` as the primary task runner:

```bash
mise dev              # Start development server (localhost:3000)
mise ci               # Run all checks in parallel
mise tsc              # Run TypeScript type checking
mise bundle           # Install dependencies
mise cv               # Build cv/cv.pdf from cv/cv.tex
mise cv:watch         # Rebuild the CV on save (latexmk -pvc)
mise cv:clean         # Remove CV build artifacts
```

## Architecture

### Next.js App Router Structure

- **`app/layout.tsx`**: Root layout with metadata configuration and HTML
  structure
- **`app/page.tsx`**: Home page content (single-page portfolio with social
  links)
- **`components/`**: Reusable React components (Header, Logo)
- **`app/globals.css`**: Tailwind CSS v4 imports (CSS-first configuration)
- **`cv/cv.tex`**: LaTeX source for the CV; built to `cv/cv.pdf` via `mise cv` (pdflatex + Latin Modern, no system fonts required)

### Key Patterns

1. **Tailwind CSS v4**: Uses CSS-first approach via `@import "tailwindcss"` in
   globals.css (no tailwind.config.js)
2. **Path Aliases**: `@/*` imports from project root (configured in
   tsconfig.json)
3. **Image Optimization**: Use Next.js `<Image />` component, not `<img>` tags
4. **Metadata**: Use Next.js metadata API in layout.tsx, not `<Head>` component
5. **3D Effects**: Logo uses Tailwind's CSS-based 3D transforms
6. **External Links**: Use plain `<a>` for external URLs; reserve `next/link`
   for internal navigation

### Tooling Configuration

- **TypeScript**: Strict mode enabled, ES2022 target
- **Tailwind CSS v4**: CSS-first configuration, no plugins
- **Bun**: Used for package management and script execution (managed by mise in
  mise.toml)
- **TinyTeX**: LaTeX distribution for building the CV (managed by mise)

## Code Quality

All code must pass:

- TypeScript strict type checking

Run `mise ci` to validate all checks in parallel.

## Memories

- Don't run `mise dev`, the user is running it in the background
- Never replace ’ or other smart quotes
