FROM nginx:alpine

WORKDIR /www/static

# Nginx configuration
COPY nginx.conf config/
# Static assets
COPY public/ ./

# Run the server
ENTRYPOINT ["nginx", "-c", "/www/static/config/nginx.conf"]
