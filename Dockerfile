FROM node:21-alpine3.19

ENV TZ Asia/Tokyo

WORKDIR /usr/src/app

COPY package*.json ./
RUN apk update && apk add bash curl
RUN npm install --global

COPY ./ ./
RUN npm run build

EXPOSE 8080

CMD ["npm", "run", "start"]