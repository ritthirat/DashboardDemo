# Build stage
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy all files needed for icon generation
COPY tsconfig.json ./
COPY src/assets ./src/assets
COPY package.json ./

# Generate icons and verify
RUN bun run build:icons && \
    ls -la src/assets/iconify-icons/

# Copy remaining source files
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build application
RUN bun run build

# Production stage
FROM oven/bun:slim AS runner

WORKDIR /app

# Copy necessary files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.mjs ./
COPY --from=builder /app/node_modules ./node_modules

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000
ENV NEXT_TELEMETRY_DISABLED=1

# Expose port
EXPOSE $PORT

# Start the application
CMD ["bun", "run", "start"]
