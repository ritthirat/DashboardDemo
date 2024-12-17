# Dependencies stage
FROM oven/bun:latest AS deps

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies using bun (faster)
RUN bun install

# Build stage
FROM node:23-alpine AS builder

WORKDIR /app

# Copy dependencies from bun stage
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./

# Copy configuration files first
COPY tsconfig.json next.config.mjs ./

# Copy source files
COPY src ./src

# Debug icon generation
RUN echo "Generating icons..." && \
    npm run build:icons

# Copy remaining files
COPY . .

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Build application
RUN npm run build

# Production stage
FROM node:23-alpine AS runner

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
CMD ["npm", "run", "start"]
