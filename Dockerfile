# Base image
FROM oven/bun

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN bun install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN bun run build

# Set environment variables
ENV NODE_ENV=production
ENV PORT=3000

# Expose the port used by the server
EXPOSE $PORT

# Start the server
CMD ["bun", "run", "start"]
