# --- Stage 0: Base Image ---
FROM oven/bun:1.2.13-alpine AS base


# --- Stage 1: Builder ---
FROM base AS builder
WORKDIR /app
RUN bun add -g turbo
COPY . .
RUN turbo telemetry disable
RUN turbo prune spa --docker


# --- Stage 2: Installer ---
FROM base AS installer
WORKDIR /app

# First install dependencies (as they change less often)
COPY --from=builder /app/out/json/ .
RUN bun install

# Build the project and its dependencies
COPY --from=builder /app/out/full/ .

RUN bun turbo build


# Stage 3: Nginx Stage (uses non-root user by default)
FROM nginx:1.28.0-alpine AS release
WORKDIR /usr/share/nginx/html

# Remove default Nginx static assets
RUN rm -rf /usr/share/nginx/html/*

# Copy built assets and config
COPY --from=installer /app/apps/spa/dist ./
COPY --from=builder /app/apps/spa/nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]