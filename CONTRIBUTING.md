# Contributing to Hirachu

Thanks for your interest in contributing! Here's how you can help.

## Getting Started

1. Fork the repository
2. Clone your fork: `git clone https://github.com/theteleporter/hirachu.git`
3. Create a branch: `git checkout -b feature/your-feature`
4. Install dependencies: `pnpm install`
5. Set up `.env.local` with your Shopify credentials
6. Start dev server: `pnpm dev`

## Development Guidelines

### Code Style

- Use TypeScript for type safety
- Follow existing patterns and naming conventions
- Keep components small and focused
- Use Tailwind utility classes (avoid custom CSS when possible)
- Prefer Server Components unless interactivity is needed

### Commit Messages

Use clear, descriptive commit messages:
```
feat: add wishlist badge to menu
fix: resolve cart drawer animation glitch
docs: update README installation steps
```

### Pull Requests

1. Update documentation if needed
2. Test your changes thoroughly
3. Keep PRs focused on a single feature/fix
4. Link any related issues

## Project Structure

- `app/` - Next.js pages and API routes
- `components/` - React components
- `lib/` - Utilities and helpers
- `public/` - Static assets

## Areas to Contribute

- UI/UX improvements
- Performance optimizations
- Bug fixes
- Documentation
- New features (discuss first in an issue)

## Questions?

Open an issue or reach out to [@theteleporter_](https://x.com/theteleporter_)
