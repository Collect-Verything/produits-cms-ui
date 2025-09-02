# =========================================
# Stage 1: Build the React.js Application
# =========================================
ARG NODE_VERSION=22.14.0-alpine
ARG NGINX_VERSION=alpine3.21
FROM node:${NODE_VERSION} AS builder
WORKDIR /app
COPY package.json package-lock.json ./

ARG REACT_APP_PRIMARY
ENV REACT_APP_PRIMARY=${REACT_APP_PRIMARY}

ARG REACT_APP_SECONDARY
ENV REACT_APP_SECONDARY=${REACT_APP_SECONDARY}

ARG REACT_APP_TITRE_SITE
ENV REACT_APP_TITRE_SITE=${REACT_APP_TITRE_SITE}

ARG REACT_APP_USER
ENV REACT_APP_USER=${REACT_APP_USER}


#ARG REACT_APP_PRIMARY="PLACEHOLDER_COLOR_PRIMARY"
#ARG REACT_APP_SECONDARY="PLACEHOLDER_COLOR_SECONDARY"
#ARG REACT_APP_TITRE_SITE="PLACEHOLDER_TITRE_SITE"
#ARG REACT_APP_USER="PLACEHOLDER_USER@GMAIL.COM"
RUN --mount=type=cache,target=/root/.npm npm ci
COPY . .
RUN npm run build

# =========================================
# Stage 2: Prepare Nginx to Serve Static Files
# =========================================

FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runner
USER nginx
COPY nginx.conf /etc/nginx/nginx.conf
COPY --chown=nginx:nginx  --from=builder /app/build /usr/share/nginx/html
EXPOSE 8080
ENTRYPOINT ["nginx", "-g", "daemon off;", "-c", "/etc/nginx/nginx.conf", "-e", "/dev/stderr"]
CMD ["-g", "daemon off;"]
