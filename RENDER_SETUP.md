# Render Deployment Setup Guide

## Your Specific URLs

Based on your Render services, here are the URLs you need:

- **Frontend URL**: `https://movie-cloud-app-1.onrender.com`
- **Backend URL**: `https://movie-cloud-app.onrender.com`
- **Backend API Endpoint**: `https://movie-cloud-app.onrender.com/movies`

## GitHub Secrets Required

To make the CI/CD pipelines work with Render, you need to set up the following GitHub Secrets in your repository:

### Frontend CD Pipeline Secrets:
- `FRONTEND_URL`: `https://movie-cloud-app-1.onrender.com`
- `REACT_APP_MOVIE_API_URL`: `https://movie-cloud-app.onrender.com`

### Backend CD Pipeline Secrets:
- `BACKEND_URL`: `https://movie-cloud-app.onrender.com`

## How to Set Up GitHub Secrets:

1. Go to your GitHub repository: https://github.com/HudaAli123/movie-cloud-app
2. Click on "Settings" tab
3. In the left sidebar, click on "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Add each secret with the appropriate name and value:

```
Secret Name: FRONTEND_URL
Secret Value: https://movie-cloud-app-1.onrender.com

Secret Name: BACKEND_URL  
Secret Value: https://movie-cloud-app.onrender.com

Secret Name: REACT_APP_MOVIE_API_URL
Secret Value: https://movie-cloud-app.onrender.com
```

## Render Service Configuration:

### Frontend Service:
- **Build Command**: `npm ci && npm run build`
- **Publish Directory**: `build`
- **Environment Variables**:
  - `REACT_APP_MOVIE_API_URL`: Your backend URL

### Backend Service:
- **Build Command**: `pip install -r requirements.txt`
- **Start Command**: `gunicorn --bind 0.0.0.0:$PORT backend:app`
- **Environment Variables**:
  - `PORT`: Automatically set by Render

## Pipeline Features:

### CI Pipelines (frontend-ci.yaml & backend-ci.yaml):
✅ **Lint Job**: Runs linting with proper caching
✅ **Test Job**: Runs tests with proper caching  
✅ **Build Job**: Builds Docker images (runs after lint & test pass)
✅ **Parallel Execution**: Lint and test jobs run in parallel
✅ **Manual Trigger**: Can be run manually via workflow_dispatch
✅ **Pull Request Trigger**: Runs automatically on PRs to main

### CD Pipelines (frontend-cd.yaml & backend-cd.yaml):
✅ **Lint Job**: Runs linting with proper caching
✅ **Test Job**: Runs tests with proper caching
✅ **Build Job**: Builds Docker images with build args (frontend)
✅ **Deploy Job**: Deploys to Render and verifies deployment
✅ **Manual Trigger**: Can be run manually via workflow_dispatch
✅ **Main Branch Trigger**: Runs automatically on pushes to main
✅ **Environment Variables**: Properly passes build args to Docker

## Testing the Pipelines:

1. **Test CI Pipeline**: Create a pull request to trigger the CI pipeline
2. **Test CD Pipeline**: Merge to main branch to trigger the CD pipeline
3. **Manual Testing**: Use the "Actions" tab in GitHub to manually trigger workflows

## Verification:

After deployment, verify:
- Frontend loads at your Render URL
- Backend API responds at `/movies` endpoint
- Frontend can successfully fetch data from backend
- Environment variables are properly set

## Troubleshooting:

- If tests fail, check the test output in the Actions tab
- If deployment fails, verify your GitHub Secrets are set correctly
- If frontend can't connect to backend, check the `REACT_APP_MOVIE_API_URL` secret
- Render services may take a few minutes to start up after deployment
