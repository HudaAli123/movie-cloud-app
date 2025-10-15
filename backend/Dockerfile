FROM public.ecr.aws/docker/library/python:3.10-alpine
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/app

WORKDIR /app
RUN adduser -u 1000 -D app
RUN apk add --no-cache build-base gcc linux-headers openssl libffi-dev && pip install pipenv

# Copy backend dependencies and install
COPY backend/Pipfile* ./
RUN pipenv install --system --deploy

# Copy backend code as a package under /app/backend
COPY backend/ ./backend

USER app
EXPOSE 5000
# Ensure Gunicorn can resolve the module 'backend:app'
CMD gunicorn --chdir /app --bind 0.0.0.0:5000 --workers 2 --threads 4 --timeout 60 backend:app