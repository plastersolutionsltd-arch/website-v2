# Code Conventions

## Overview

This document defines the coding standards and conventions used across this project.

## File Naming

- **Components**: PascalCase (e.g., `Header.jsx`, `Button.jsx`)
- **Pages**: PascalCase (e.g., `HomePage.jsx`, `About.jsx`)
- **Utilities**: camelCase (e.g., `formatDate.js`, `apiClient.js`)
- **Styles**: kebab-case (e.g., `header-styles.css`, `global.css`)
- **Assets**: kebab-case (e.g., `hero-image.png`, `logo-dark.svg`)

## Code Style

### JavaScript/JSX

- Use 2 spaces for indentation
- Use semicolons
- Use single quotes for strings (unless JSX attributes)
- Use arrow functions for callbacks
- Add JSDoc comments for functions

Example:
```javascript
/**
 * Formats a date string for display
 * @param {string} dateString - ISO date string
 * @returns {string} Formatted date
 */
const formatDate = (dateString) => {
  // Implementation
};
```

### CSS

- Use kebab-case for class names
- Use semantic class names
- Group related properties
- Use CSS variables for colors and sizes

Example:
```css
.button-primary {
  background-color: var(--color-primary);
  color: var(--color-white);
  padding: var(--spacing-md);
}
```

## Component Guidelines

- **Single Responsibility**: Each component should have one reason to change
- **Props Documentation**: Document all props with JSDoc or TypeScript
- **Accessibility**: Include ARIA attributes where needed
- **Error Handling**: Handle error states gracefully

## Import Organization

1. External libraries
2. Internal components
3. Utilities
4. Styles
5. Assets

Example:
```javascript
import React from 'react';
import Header from '../components/Header';
import { formatDate } from '../utils/formatting';
import styles from './home.css';
```

## Testing

- Test files live in `/tests/` or alongside components
- Use `.test.js` or `.spec.js` suffix
- Aim for meaningful test coverage
- Test behavior, not implementation

## Comments

- Write self-documenting code first
- Use comments for "why", not "what"
- Keep comments up-to-date with code changes
- Avoid commented-out code blocks

## Git Commits

- Use clear, descriptive commit messages
- Reference issues/tickets when relevant
- Keep commits focused on single changes

Example: `feat: add responsive header component`

## Linting & Formatting

- Use ESLint for JavaScript
- Use Prettier for code formatting
- Run checks before committing

## Accessibility (a11y)

- Use semantic HTML
- Include alt text for images
- Ensure keyboard navigation
- Test with screen readers
- Meet WCAG 2.1 Level AA standards
