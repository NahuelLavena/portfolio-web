# AGENTS.md - Developer Guidelines for This Project

## Project Overview

This is a React 19 + Vite portfolio/landing page website. It uses vanilla React with framer-motion for animations and CSS modules (companion .css files). The project is written in JavaScript (JSX).

## Build Commands

All commands run from the `portfolio-web/` directory:

```bash
# Install dependencies (first time only)
npm install

# Start development server with hot reload
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview

# Run ESLint on all source files
npm run lint
```

### Running a Single Test

**No test framework is currently configured.** If you add tests later, common commands would be:
- `npm test` - Run all tests
- `npm test -- --watch` - Watch mode
- `npm test -- --testNamePattern="pattern"` - Run matching tests

## Project Structure

```
portfolio-web/
├── src/
│   ├── components/       # React components (JSX + companion CSS)
│   ├── assets/           # Static assets (images, SVG)
│   ├── App.jsx           # Main app component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── public/               # Public static files (favicon, icons)
├── dist/                 # Production build output (do not edit)
├── index.html            # HTML entry
├── vite.config.js        # Vite configuration
├── eslint.config.js      # ESLint configuration
└── package.json
```

## Code Style Guidelines

### General Conventions

- **Language**: JavaScript with JSX (not TypeScript)
- **Framework**: React 19 (functional components with hooks)
- **Build Tool**: Vite
- **Animation**: framer-motion for motion components

### Imports

- React core imports first, then third-party libraries, then local imports
- Local imports use relative paths (`./components/Navbar`)
- CSS imports sit alongside their component (`import './Navbar.css'`)
- Order: React hooks → external libraries → local components/utils → styles

```jsx
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from './components/Navbar';
import './Navbar.css';
```

### Formatting

- Use semicolons at the end of statements
- Use single quotes for strings
- Use 2 spaces for indentation
- Multi-line JSX: one prop per line, closing bracket on new line
- Add trailing commas in multi-line objects/arrays

### Naming Conventions

- **Components**: PascalCase (e.g., `Navbar`, `ServicesSection`)
- **Files**: PascalCase for components (`.jsx`), kebab-case for non-components
- **Variables/functions**: camelCase
- **CSS Classes**: kebab-case with BEM-style naming (e.g., `navbar-link`, `services-card__title`)
- **Constants**: UPPER_SNAKE_CASE for true constants, camelCase otherwise

### Component Patterns

- Use functional components with hooks exclusively
- Prefer default exports for single components
- Use named exports for data arrays/objects
- Destructure props when possible
- Define data arrays outside the component when static

```jsx
// Good: default export for component
const Navbar = () => { /* ... */ };
export default Navbar;

// Good: named export for static data
export const services = [{ title: '...', value: '...' }];
```

### Hooks Usage

- Follow React hooks rules (only call at top level)
- Clean up side effects in `useEffect` return functions
- Use dependency arrays correctly

```jsx
useEffect(() => {
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```

### Error Handling

- Use conditional rendering for potential null/undefined values
- Check DOM elements exist before calling methods
- No try/catch needed for simple renders (no async data fetching currently)

### CSS Guidelines

- Each component has a companion `.css` file in the same directory
- Use CSS custom properties (variables) in `index.css` for theme values
- Use BEM naming: `block__element--modifier`
- Mobile-first responsive design
- Use flexbox and grid for layouts

## ESLint Configuration

The project uses ESLint with these rules:
- React Hooks recommended rules
- React Refresh for Vite HMR compatibility
- No unused variables (except those starting with uppercase, for JSX components)
- ES2020 + browser globals

Run `npm run lint` before committing to catch issues.

## Adding New Dependencies

Before adding new packages:
1. Check if the package is already installed (see `package.json`)
2. Use `npm install <package>` to install and update package.json
3. Restart dev server if needed

Current dependencies:
- `react` / `react-dom` - UI framework
- `framer-motion` - Animations

Dev dependencies:
- `vite` - Build tool
- `@vitejs/plugin-react` - React plugin
- `eslint` + plugins - Linting

## Deployment (Vercel)

This project deploys to Vercel. Vite + React projects are supported natively.

```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy to preview (gets a preview URL)
vercel

# Deploy to production
vercel --prod
```

Or connect the GitHub repo to Vercel for automatic deployments on push.

The `dist/` folder is the production build output.

## Browser Support

The project targets modern browsers (ES2020+, last 2 versions).

## Accessibility

- Include `lang` attribute in HTML
- Use semantic HTML elements (`<nav>`, `<section>`, `<article>`, `<main>`)
- Include meta description for SEO
- Use accessible color contrast ratios
- Ensure interactive elements are keyboard accessible
