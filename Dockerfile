# Node.js server — install deps, build if present, run.
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --omit=dev || npm install --omit=dev
COPY . .
RUN npm run build --if-present
ENV NODE_ENV=production
ENV PORT=8000
EXPOSE 8000
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "8000"]
