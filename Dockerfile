FROM oven/bun:1.2.17

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=3000

COPY package.json bun.lock bunfig.toml ./
RUN bun install --frozen-lockfile

COPY . .
RUN bun run build

EXPOSE 3000

CMD ["sh", "-c", "if [ -f .output/server/index.mjs ]; then exec bun .output/server/index.mjs; elif [ -f dist/server/server.js ]; then exec bun dist/server/server.js; elif [ -f dist/server/index.mjs ]; then exec bun dist/server/index.mjs; else exec bun run preview --host 0.0.0.0 --port ${PORT:-3000}; fi"]