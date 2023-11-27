FROM node:18-alpine AS builder
WORKDIR /app

COPY . .

RUN npm ci
RUN npm run build
RUN npm prune --production

FROM node:18-alpine
WORKDIR /app

COPY --from=builder /app/build build/
COPY --from=builder /app/node_modules node_modules/

COPY package.json .

ENV NODE_ENV=production
EXPOSE 3000
CMD [ "node", "build" ]
