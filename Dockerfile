# React / Vite SPA — build, then serve with the Vite preview server.
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
ENV NODE_ENV=production
ENV PORT=8000
EXPOSE 8000
# Serves the built app; works whether or not a "preview" script exists.
CMD ["sh", "-c", "npm run preview -- --host 0.0.0.0 --port 8000 || npx vite preview --host 0.0.0.0 --port 8000"]
