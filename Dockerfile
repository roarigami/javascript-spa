FROM node:18-alpine
WORKDIR /jscms
COPY . .
CMD [ "node", "server.js" ]
EXPOSE 5000
