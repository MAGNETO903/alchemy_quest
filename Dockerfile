
# Use the official Node.js image as the base image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install --no-package-lock   # Added the flag --no-package-lock to prevent npm from generating the package-lock.json file

EXPOSE 3000
CMD [ "node", "server.js" ]