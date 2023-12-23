FROM node:lts-alpine
WORKDIR /app
ADD . .
RUN npm install
CMD node app.js
