# Build stage
FROM oven/bun:latest AS builder

WORKDIR /app

# Copy package files
COPY package.json bun.lockb ./

# Install dependencies
RUN bun install

# Copy icon generation related files first
COPY src/assets/iconify-icons ./src/assets/iconify-icons
COPY tsconfig.json ./

# Generate icons
RUN bun run build:icons

# Copy remaining source files
COPY . .

# Ensure the generated icons are in the correct location
RUN mkdir -p src/assets/iconify-icons && \
    mv src/assets/iconify-icons/generated-icons.css src/assets/iconify-icons/

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
