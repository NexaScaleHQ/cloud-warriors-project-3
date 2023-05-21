FROM node:16-alpine 
LABEL maintainer="Destiny Erhabor "
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 8001
CMD ["npm", "start"]
