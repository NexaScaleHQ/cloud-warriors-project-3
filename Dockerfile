# syntax=docker/dockerfile:1

FROM node:18.7.0
ENV NODE_ENV=production

WORKDIR /

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

EXPOSE 4000
CMD [ "node", "src/index.js" ]