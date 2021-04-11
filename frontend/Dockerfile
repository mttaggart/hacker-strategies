FROM nginx:latest
COPY dist /usr/share/nginx/html
COPY ./nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
EXPOSE 443
CMD nginx -g 'daemon off;'
