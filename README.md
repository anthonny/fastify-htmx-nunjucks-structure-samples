# Demo Structure

A demonstration project comparing different backend architecture patterns using TypeScript and Fastify.

## Architecture Patterns

This project showcases two architecture approaches:

- **Three-Tiers Architecture** (`/src/three-tiers`): Classic presentation-logic-data separation
- **Clean Architecture** (`/src/clean-archi`): Domain-centric with use cases, entities, and infrastructure

Both implementations expose the same functionality through REST endpoints with HTML (HTMX) and JSON responses.

## Quick Start

### Install dependencies
```bash
npm install
```

### Development mode
```bash
npm run dev
```

Server runs at `http://localhost:8080`

### Production build
```bash
npm run build
npm start
```

### Run e2e tests
```bash
npm run test:e2e
npm run test:e2e:ui  # with UI
```

## Endpoints

- `/three-tiers/users` - Three-tiers implementation
- `/clean-archi/users` - Clean architecture implementation

Both support:
- `Accept: text/html` - HTML view with HTMX
- `Accept: application/json` - JSON response

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Fastify
- **Language**: TypeScript
- **Template**: Nunjucks
- **Frontend**: HTMX
- **Testing**: Playwright
