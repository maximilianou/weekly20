FROM node:lts-alpine AS base
RUN npm set strict-ssl false
WORKDIR /ui
COPY package.json ./
EXPOSE 3000 

FROM base AS dev
COPY . .
RUN npm install && npm audit fix && npm clean-install
CMD [ "npm", "run", "start" ]

FROM base as prod
COPY . .
RUN npm install --production && npm audit fix && npm clean-install
COPY build build
RUN npm i serve -g
CMD [ "serve", "-s", "build" ]
