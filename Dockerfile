# Stage 1: Install dependencies
FROM node:20-alpine AS deps
WORKDIR /app
COPY package.json package-lock.json* ./
# ใช้ npm ci เพื่อให้ติดตั้ง version ตรงตาม lock file เป๊ะๆ
RUN npm ci 

# Stage 2: Builder
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# ปิดการเช็คเรื่อง telemetry และเพิ่มคำสั่งข้ามการเช็ค lint/type หากต้องการรีบ build ให้ผ่าน
ENV NEXT_TELEMETRY_DISABLED=1
# หากแก้โค้ดแล้วยังไม่ผ่าน และต้องการข้ามการเช็คเพื่อเทส docker ก่อน 
# ให้เติม --no-lint ในคำสั่ง build (ถ้าใน package.json รองรับ) 
RUN npm run build