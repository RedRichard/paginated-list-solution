FROM node:15.6.0-alpine3.10

RUN apk update && apk add bash

RUN mkdir -p /app

WORKDIR /app

COPY . /app

RUN yarn install

CMD ["npm", "start"]