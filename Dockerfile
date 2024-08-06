FROM node:20
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN npm install -g pnpm
RUN pnpm install
COPY src tsconfig*.json ./
RUN pnpm build
CMD ["pnpm", "start:dev"]
