# Install dependencies and build the source code
FROM node:16-alpine 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the application code to the container
COPY . .

# Expose the port on which the application will run
EXPOSE 8001

# Start the application
CMD ["npm", "start"]
