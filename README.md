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

### Cursor AI rules (.cursor/)
This is a disciplined prompting setup to standardize how the work is done with AI across editors.

- Doctrine (auto-applied in Cursor):
  - `.cursor/rules/core.md` — our operating “constitution” (Research‑First, Safety, Evidence, Self‑Audit). Cursor reads this passively.

- Playbooks (paste to start tasks):
  - `.cursor/rules/request.md` — build/refactor workflow.
  - `.cursor/rules/refresh.md` — deep bug RCA and remediation.
  - `.cursor/rules/retro.md` — session learnings and doctrine updates.

- Directives (optional, paste when needed at the end of your prompt):
  - `.cursor/rules/05-concise-directive.md` — radically concise reporting.
  - `.cursor/rules/no-absolute-right-directive.md` — anti‑sycophantic communication.

Usage:
- Cursor: core.md is auto‑loaded; paste a playbook to begin, append directives if desired.
- VS Code: paste the same playbooks/directives into your AI chat; core.md is shared as reference but not auto‑loaded by default.
