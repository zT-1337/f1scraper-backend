FROM node:16 AS builder

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

RUN npm run build

FROM node:16

WORKDIR /app

COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/next.config.js ./

RUN ls -la ./public

CMD [ "npm", "run", "start"]