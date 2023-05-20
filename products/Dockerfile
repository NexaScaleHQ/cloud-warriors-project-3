FROM   node:19-alpine 
WORKDIR /app
COPY package*.json ./
COPY . .
RUN npm install

EXPOSE 8002

CMD ["npm", "start"]
