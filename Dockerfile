# Use the official Node.js image as a base
FROM node:18-alpine

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock)
COPY package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY . .

# Build the project (this will generate the dist folder)
RUN npm run build

# Expose the port the app will run on
EXPOSE 8080

# Start the application
CMD ["npm", "run", "start:prod"]
