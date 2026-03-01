# Building the Project

## Development Setup

### Prerequisites

- Node.js v16.0.0 or higher
- npm v7.0.0 or higher (or yarn v1.22.0+)
- Git

### Installation Steps

1. Clone or navigate to the project:
```bash
cd my-project/website
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env.local` file with any required environment variables:
```bash
# .env.local
VITE_API_URL=http://localhost:3000
VITE_APP_NAME=My Website
```

## Development Workflow

### Start Development Server

```bash
npm run dev
```

This starts a local development server (usually at http://localhost:5173).

### Building for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` folder.

### Running Tests

```bash
npm test
```

Runs all test suites with coverage reporting.

### Linting and Formatting

```bash
# Run linter
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format
```

## Project Structure for Development

- **`src/components/`** - Write new components here
- **`src/pages/`** - Create new pages for routing
- **`src/styles/`** - Add or modify stylesheets
- **`src/utils/`** - Add helper functions and utilities
- **`src/assets/`** - Store images, fonts, icons
- **`public/`** - Static files served directly (favicons, etc.)

## Environment Variables

Create a `.env.local` file in the root directory:

```env
# API Configuration
VITE_API_URL=http://localhost:3000

# App Configuration
VITE_APP_NAME=My Website
VITE_APP_VERSION=1.0.0

# Debug Mode
VITE_DEBUG=false
```

## Build Optimization

### Code Splitting
- Pages are automatically split into separate bundles
- Large libraries are separated into vendor chunks

### Image Optimization
- Use Next Image or similar for automatic optimization
- Include responsive images with srcset

### CSS Optimization
- Remove unused CSS in production builds
- Leverage CSS variables for theming

## Deployment

### Pre-Deployment Checklist

- [ ] All tests passing
- [ ] No linting errors
- [ ] Environment variables configured
- [ ] Production build tested locally
- [ ] Performance metrics acceptable

### Build Artifacts

Production build output:
- `dist/` - Optimized files ready for deployment
- Source maps (for debugging in production)

### Deployment Platforms

#### Vercel
```bash
npm i -g vercel
vercel
```

#### Netlify
```bash
npm i -g netlify-cli
netlify deploy --prod --dir=dist
```

#### Traditional Server
1. Run `npm run build`
2. Upload `dist/` to server
3. Configure server to serve `index.html` for all routes

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm test` | Run test suite |
| `npm run lint` | Check code quality |
| `npm run lint:fix` | Auto-fix linting issues |
| `npm run format` | Format code with Prettier |
| `npm run preview` | Preview production build locally |

## Troubleshooting

### Port Already in Use
```bash
# Use a different port
npm run dev -- --port 3000
```

### Dependencies Issues
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Failures
1. Check Node.js version: `node --version`
2. Clear build cache: `npm run clean`
3. Reinstall dependencies: `npm install`
4. Check for environment variable issues

## Performance Monitoring

- Use Lighthouse for performance audits
- Monitor bundle size with `npm run analyze`
- Check Core Web Vitals regularly

## Documentation

- See `architecture.md` for system design
- See `code-conventions.md` for coding standards
- See `CLAUDE.md` for project context
