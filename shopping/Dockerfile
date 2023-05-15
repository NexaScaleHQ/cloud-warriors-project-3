# import from node alpine
FROM   node:19-alpine 

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Copy the application code to the container
COPY . .


# Install dependencies
RUN npm install

# Expose the port on which the application will run
EXPOSE 8003

# Start the application
CMD ["npm", "start"]