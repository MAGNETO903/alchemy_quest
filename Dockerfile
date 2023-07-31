
# Use the official Node.js image as the base image
FROM node:18.17.0-bookworm

# Set the working directory in the container
WORKDIR /app

# Copy the application files into the working directory
COPY . /app

# Install the application dependencies
RUN npm install

EXPOSE 3000
CMD [ "node", "server.js" ]
