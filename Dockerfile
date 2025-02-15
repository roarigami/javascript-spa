FROM node:18-alpine
WORKDIR /jscms
COPY . .
CMD [ "node", "./frontend/static/js/index.js" ]
EXPOSE 5000
