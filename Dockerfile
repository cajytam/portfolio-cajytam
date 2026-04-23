# Stage 1: Build
FROM node:24-alpine AS build

WORKDIR /app

COPY package*.json ./

RUN --mount=type=cache,target=/root/.npm \
  npm ci --prefer-offline --no-audit --no-fund

COPY . .

RUN npm run build

RUN apk add --no-cache gzip brotli && \
  find /app/dist -type f \( -name "*.js" -o -name "*.css" -o -name "*.html" -o -name "*.svg" -o -name "*.xml" -o -name "*.json" \) \
    -exec gzip -k {} + -exec brotli -k {} +

# Stage 2: Production
FROM caddy:2-alpine

WORKDIR /srv

COPY --from=build /app/dist /srv
COPY Caddyfile /etc/caddy/Caddyfile

RUN addgroup -S appgroup && adduser -S appuser -G appgroup && \
  mkdir -p /data /config && \
  chown -R appuser:appgroup /srv /data /config /etc/caddy

USER appuser

EXPOSE 3000

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --quiet --tries=1 --spider http://localhost:3000/healthz || exit 1

CMD ["caddy", "run", "--config", "/etc/caddy/Caddyfile", "--adapter", "caddyfile"]
