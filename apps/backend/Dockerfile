# --- Stage 0: Base Image ---
FROM oven/bun:1.2.13-alpine AS base

# --- Stage 1: Builder ---
FROM base AS builder
WORKDIR /usr/src/app
RUN bun add -g turbo
COPY . .
RUN turbo telemetry disable
RUN turbo prune backend --docker

# --- Stage 2: Installer ---
FROM base AS installer
WORKDIR /usr/src/app

# First install dependencies (as they change less often)
COPY --from=builder /usr/src/app/out/json/ .
RUN bun install

# Build the project and its dependencies
COPY --from=builder /usr/src/app/out/full/ .

RUN bun turbo build

# --- Stage 3: Runner ---
FROM base AS runner
WORKDIR /usr/src/app

COPY --from=installer /usr/src/app .

# Switch to non-root user
RUN addgroup -S app_group && adduser -S app_user -G app_group
RUN chown -R app_user:app_group /usr/src/app

USER app_user

ENV NODE_ENV=production

CMD bun apps/backend/dist/index.js
