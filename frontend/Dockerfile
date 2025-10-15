FROM  public.ecr.aws/docker/library/node:18.14.2-alpine3.17

ARG REACT_APP_MOVIE_API_URL
ENV REACT_APP_MOVIE_API_URL=${REACT_APP_MOVIE_API_URL}

WORKDIR /app

# Copy dependency files from the frontend subfolder
COPY frontend/package.json ./package.json
COPY frontend/package-lock.json ./package-lock.json

# Install packages (prefer ci, fallback to install)
RUN npm ci || npm install

# Copy app source
COPY frontend/ .

# Build the app
RUN npm run build

# Expose the port used by the React app
EXPOSE 3000

# Start the React app when the container starts
CMD ["npm", "run", "serve"]