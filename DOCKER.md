# Docker Setup Guide

This monorepo includes Docker Compose configurations for both development and production environments.

## Prerequisites

- Docker
- Docker Compose v2+

## Quick Start

### Development

1. Copy the environment file:
```bash
cp .env.example .env
```

2. Start all services:
```bash
docker compose -f compose-dev.yml up
```

3. Access the services:
   - **Web**: http://localhost:3000
   - **API**: http://localhost:3001
   - **RabbitMQ Management**: http://localhost:15672 (admin/admin)
   - **PostgreSQL**: localhost:5432
   - **Analytics DB**: localhost:5434
   - **Redis**: localhost:6379

### Production

1. Update environment variables in `.env` for production

2. Build and start:
```bash
docker compose -f compose-prod.yml up -d
```

## Services

### Web (Next.js)
- **Port**: 3000
- **Dev**: Hot-reload enabled with volume mounting
- **Prod**: Optimized production build

### API (Hono)
- **Port**: 3001
- **Dev**: Hot-reload with tsx watch
- **Prod**: Built and compiled TypeScript

### PostgreSQL (Main Database)
- **Port**: 5432 (dev), 5433 (prod)
- **Image**: postgres:17-alpine
- **Volume**: Persistent data storage

### Analytics Database
- **Port**: 5434
- **Image**: postgres:17-alpine
- **Volume**: Separate persistent storage

### Redis
- **Port**: 6379
- **Image**: redis:7-alpine
- **Volume**: Data persistence with AOF

### RabbitMQ
- **Ports**: 5672 (AMQP), 15672 (Management UI)
- **Image**: rabbitmq:4.1-management
- **Volume**: Persistent queue data

## Common Commands

### Development

```bash
# Start all services
docker compose -f compose-dev.yml up

# Start in background
docker compose -f compose-dev.yml up -d

# View logs
docker compose -f compose-dev.yml logs -f

# Stop all services
docker compose -f compose-dev.yml down

# Stop and remove volumes
docker compose -f compose-dev.yml down -v

# Rebuild services
docker compose -f compose-dev.yml up --build
```

### Production

```bash
# Start all services
docker compose -f compose-prod.yml up -d

# View logs
docker compose -f compose-prod.yml logs -f [service_name]

# Stop all services
docker compose -f compose-prod.yml down

# Update and restart a service
docker compose -f compose-prod.yml up -d --build [service_name]
```

### Service-Specific Commands

```bash
# Run only specific services
docker compose -f compose-dev.yml up web api postgres_db

# Execute commands in a container
docker compose -f compose-dev.yml exec api sh
docker compose -f compose-dev.yml exec web sh

# View logs for a specific service
docker compose -f compose-dev.yml logs -f api
```

## Environment Variables

Key environment variables that should be configured:

### Required
- `POSTGRES_PASSWORD`: Database password
- `BETTER_AUT_SECRET`: Authentication secret
- `BETTER_AUTH_URL`: Auth service URL

### Optional (with defaults)
- `POSTGRES_DB`: Database name (default: monorepo_db)
- `POSTGRES_USER`: Database user (default: monorepo_user)
- `RABBIT_USER`: RabbitMQ user (default: admin)
- `RABBIT_PASSWORD`: RabbitMQ password (default: admin)

## Volumes

Persistent data is stored in named volumes:

**Development:**
- `lipz_pgsql_dev_data`: Main database
- `lipz_analytics_pgsql_dev_data`: Analytics database
- `lipz_redis_dev`: Redis data
- `lipz_rabbitmq_dev`: RabbitMQ data

**Production:**
- `lipz_pgsql_prod_data`: Main database
- `lipz_analytics_pgsql_prod_data`: Analytics database
- `lipz_redis_prod`: Redis data
- `lipz_rabbitmq_prod`: RabbitMQ data

To remove volumes:
```bash
docker compose -f compose-dev.yml down -v
```

## Troubleshooting

### Port conflicts
If you get port binding errors, check if the ports are already in use:
```bash
lsof -i :3000  # Web
lsof -i :3001  # API
lsof -i :5432  # PostgreSQL
```

### Container won't start
Check the logs:
```bash
docker compose -f compose-dev.yml logs [service_name]
```

### Database connection issues
Ensure the service names are used for internal connections:
- `postgres_db` (not localhost)
- `redis` (not localhost)
- `rabbit` (not localhost)

### Rebuild from scratch
```bash
docker compose -f compose-dev.yml down -v
docker compose -f compose-dev.yml build --no-cache
docker compose -f compose-dev.yml up
```

## Database Migrations

To run database migrations:

```bash
# Using the API container
docker compose -f compose-dev.yml exec api bun run migrate

# Or from host (if you have bun installed)
cd apps/api
bun run migrate
```

## Notes

- **Development** uses volume mounting for hot-reload
- **Production** uses built artifacts for better performance
- Both environments use the same database images for consistency
- RabbitMQ management UI is available in both environments
- Redis uses AOF (Append Only File) for data persistence

