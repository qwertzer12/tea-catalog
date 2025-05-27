FROM node:lts-alpine

WORKDIR /usr/src/app

# Copy package.json and package-lock.json (or npm-shrinkwrap.json)
# This allows Docker to cache the npm install step if these files haven't changed.
COPY package.json package-lock.json* npm-shrinkwrap.json* ./

# Install all dependencies, including devDependencies needed for the build.
# Use --silent to reduce log output.
RUN npm install --silent

# Copy the rest of the application source code.
# This step will only be re-run if the source files change.
# Ensure you have a .dockerignore file to exclude node_modules, .git, etc.
COPY . .

# Build the application.
# This uses the dependencies (including devDependencies) installed above.
RUN npm run build

# Set the Node environment to production for the runtime.
ENV NODE_ENV=production

# Remove development dependencies to reduce the final image size.
# This command will only keep dependencies listed in "dependencies" in package.json.
RUN npm prune --omit=dev

EXPOSE 3005

# Run the application as a non-root user.
# The 'node' user is provided by the base image.
# Ensure the 'node' user owns the application files.
RUN chown -R node /usr/src/app
USER node

# Command to run the application.
CMD ["npm", "start"]