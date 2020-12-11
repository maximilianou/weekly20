FROM node:14-alpine
RUN npm set strict-ssl false
WORKDIR /ui
COPY package.json ./
RUN npm i
COPY . .
EXPOSE 3000 
CMD [ "npm", "run", "start" ]
