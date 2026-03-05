# Stage 1: Build
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Stage 2: Production
FROM node:24-alpine

WORKDIR /app

RUN addgroup -S appgroup && adduser -S appuser -G appgroup

RUN npm install -g http-server

COPY --from=build /app/dist ./dist

RUN chown -R appuser:appgroup /app

USER appuser

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/ || exit 1

CMD ["http-server", "dist", "-p", "3000", "--gzip"]
