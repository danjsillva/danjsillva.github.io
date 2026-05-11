# Daniel Silva Portfolio

Personal portfolio built with React, TypeScript, Tailwind CSS, and Vite.

Live site: [danjsillva.github.io](https://danjsillva.github.io)

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- Vite
- i18next
- ESLint
- GitHub Pages

## Requirements

- Node.js `^20.19.0 || >=22.13.0`
- Yarn `1.22.22`

## Getting Started

```bash
git clone https://github.com/danjsillva/danjsillva.github.io.git
cd danjsillva.github.io
yarn install
yarn dev
```

The development server runs at `http://localhost:5173`.

## Scripts

```bash
yarn dev       # Start the local development server
yarn build     # Create a production build
yarn lint      # Run ESLint
yarn preview   # Preview the production build locally
yarn deploy    # Build and publish dist to gh-pages
```

## Deployment

Deployments run automatically on every push to `main`.

The GitHub Actions workflow builds the project and publishes `dist` to the `gh-pages` branch, which is used by GitHub Pages.
