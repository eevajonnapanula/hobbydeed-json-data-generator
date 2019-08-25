FROM node:11.9.0-alpine

WORKDIR /app

COPY package.json .

RUN npm i

COPY . .

CMD ["nodemon", "index.js"]
