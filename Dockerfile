# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files to install dependencies
COPY package*.json ./

# Install dependencies
RUN npm install

# Install Nest CLI globally to use 'nest' commands
RUN npm install -g @nestjs/cli

# Copy the rest of the application files
COPY . .

# Build the NestJS project (this will generate the dist folder)
RUN npm run build

# Expose the port the app will run on
EXPOSE 8080

# Start the application
CMD ["npm", "run", "start:prod"]
