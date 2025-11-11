# Turborepo starter

This Turborepo starter is maintained by the Turborepo core team.

### Apps and Packages

- `web`: Next.js app
- `api`: Hono.js API 

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting

### Build

To build all apps and packages, run the following command:
```
bun turbo build
```

You can build a specific package by using a `filter`:
```
bun turbo build --filter=APP_NAME
```

### Develop

To develop all apps and packages, run the following command:

- Run `bun install` to install all dependencies
- Run `bun dev` to run all apps
- Run `bun dev --filter=APP_NAME` to run a specific app
- Run `bun add PACKAGE_NAME --cwd=apps/APP_NAME` to install a package to a specific app

### Docker Setup

This project includes Docker Compose configurations for both development and production environments.

**Development:**
```bash
docker compose -f compose-dev.yml up
```

**Production:**
```bash
docker compose -f compose-prod.yml up -d
```

For detailed Docker instructions, see [DOCKER.md](./DOCKER.md)

**Services included:**
- Web (Next.js) on port 3000
- API (Hono) on port 3001
- PostgreSQL on port 5432
- Analytics Database on port 5434
- Redis on port 6379
- RabbitMQ on ports 5672 and 15672 (management UI)
