# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
RUN npm ci

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
# ต้องตั้งค่า output: 'standalone' ใน next.config.ts ด้วยนะคร้บ
RUN npm run build

# Stage 3: Runner (ตัวที่จะรันจริง)
FROM node:20-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000

# คัดลอกเฉพาะไฟล์ที่จำเป็นมาจาก builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

EXPOSE 3000

# คำสั่งรันต้องอยู่ที่ Stage สุดท้ายเท่านั้น
CMD ["node", "server.js"]