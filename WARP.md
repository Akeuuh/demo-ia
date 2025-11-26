# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

This is a learning repository focused on demonstrating the evolution from AI chatbots (without context) to AI agents (with context). The main project is `sessionOne`, a React + TypeScript + Vite application used for demonstrations and teaching purposes.

## Common Commands

### Development
```bash
cd sessionOne
yarn dev          # Start development server with hot reload
yarn build        # Type-check with tsc and build for production
yarn preview      # Preview production build locally
yarn lint         # Run ESLint on all TypeScript files
```

### Package Management
This project uses **Yarn** as its package manager. Always use `yarn` commands, not `npm`.

## Code Architecture

### Project Structure
The repository contains:
- `sessionOne/` - Main React application demonstrating context-aware AI concepts
- `.claude/` - Contains Claude Code configuration (settings.local.json)

### sessionOne Application

**Technology Stack:**
- React 19.2 with TypeScript
- Vite 7.2 for build tooling
- styled-components 6.1 for styling
- ESLint with typescript-eslint for code quality

**Styling Architecture:**
The application uses a **centralized theming system** with styled-components:

1. **Theme Definition** (`src/theme.ts`):
   - Defines `colors`, `fonts`, and `spacing` design tokens
   - Current theme: Dark mode with primary color `#646cff`

2. **Theme Types** (`src/styled.d.ts`):
   - Extends `styled-components` DefaultTheme interface
   - Provides full TypeScript support for theme properties

3. **Global Styles** (`src/global.ts`):
   - Uses `createGlobalStyle` to apply theme-based styles
   - Accesses theme via `${({ theme }) => theme.property}`

4. **Component Styling**:
   - All styled-components MUST use the theme object
   - Access theme properties: `${({ theme }) => theme.colors.primary}`
   - Follow existing patterns for consistency

**Application Entry Point:**
- `src/main.tsx` wraps the app with `ThemeProvider` and `GlobalStyle`
- Always ensure theme context is available to all components

**TypeScript Configuration:**
- Strict mode enabled with comprehensive linting rules
- Uses project references: `tsconfig.app.json` (app code) and `tsconfig.node.json` (build config)
- `jsx` mode: `react-jsx` (new JSX transform)

## Development Guidelines

### When Creating Components
1. **Always use styled-components** - This is a styled-components project
2. **Integrate with the theme system** - Access colors, fonts, and spacing from `theme` object
3. **Define TypeScript types properly** - Component props should be explicitly typed
4. **Follow the established pattern**:
   ```tsx
   import styled from 'styled-components';
   
   const StyledButton = styled.button`
     background-color: ${({ theme }) => theme.colors.primary};
     padding: ${({ theme }) => theme.spacing.medium};
     font-family: ${({ theme }) => theme.fonts.main};
   `;
   ```

### Code Style
- ESLint configuration uses recommended rules for React hooks and TypeScript
- File naming: Use `.tsx` for React components, `.ts` for utilities
- Imports: Include `.tsx`/`.ts` extensions (required by Vite + TypeScript configuration)

### Adding New Features
When extending the application:
1. Check existing theme tokens before adding new colors/spacing
2. Update `src/styled.d.ts` if adding new theme properties
3. Maintain consistency with existing component patterns
4. Keep components in `src/components/` directory (currently empty, ready for new components)

## Important Context

### Educational Purpose
This codebase is specifically designed to demonstrate the difference between:
- **AI without context** (e.g., ChatGPT generating generic code)
- **AI with context** (e.g., Claude Code, Cursor understanding project patterns)

When generating code for this project, you should demonstrate context-awareness by:
- Using the existing theme system automatically
- Following the styled-components patterns already in place
- Respecting the TypeScript configuration and strict typing
- Matching the code style visible in existing files

### Presentation Material
The `sessionOne/presentation.md` file contains teaching material about AI development tools. This is reference documentation, not application code.
