FROM public.ecr.aws/docker/library/python:3.10-alpine
ENV PYTHONUNBUFFERED=1
ENV PYTHONPATH=/app

WORKDIR /app
RUN adduser -u 1000 -D app
RUN apk add --no-cache build-base gcc linux-headers openssl libffi-dev

# Copy backend dependencies and install via pip
COPY backend/requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

# Copy backend code as a package under /app/backend
COPY backend/ ./backend

USER app
EXPOSE 5000
# Ensure Gunicorn can resolve the module 'backend:app'
CMD gunicorn --chdir /app --bind 0.0.0.0:5000 --workers 2 --threads 4 --timeout 60 backend:app