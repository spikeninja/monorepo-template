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

Run `bun dev` to run all apps
Run `bun dev --filter=APP_NAME` to run a specific app
Run `bun add PACKAGE_NAME --filter=APP_NAME` to install a package to a specific app
