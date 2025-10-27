# AWS EKS Deployment Setup Guide

## Required GitHub Secrets

To make the CI/CD pipelines work with AWS EKS, you need to set up the following GitHub Secrets in your repository:

### AWS Credentials:
- `AWS_ACCESS_KEY_ID`: Your AWS access key ID
- `AWS_SECRET_ACCESS_KEY`: Your AWS secret access key
- `AWS_REGION`: Your AWS region (e.g., `us-east-1`)
- `EKS_CLUSTER_NAME`: Your EKS cluster name

### Application Configuration:
- `REACT_APP_MOVIE_API_URL`: The backend API URL for the frontend to connect to

## How to Set Up GitHub Secrets:

1. Go to your GitHub repository: https://github.com/HudaAli123/movie-cloud-app
2. Click on "Settings" tab
3. In the left sidebar, click on "Secrets and variables" → "Actions"
4. Click "New repository secret"
5. Add each secret with the appropriate name and value:

```
Secret Name: AWS_ACCESS_KEY_ID
Secret Value: [Your AWS Access Key ID]

Secret Name: AWS_SECRET_ACCESS_KEY
Secret Value: [Your AWS Secret Access Key]

Secret Name: AWS_REGION
Secret Value: us-east-1

Secret Name: EKS_CLUSTER_NAME
Secret Value: movie-cloud-cluster

Secret Name: REACT_APP_MOVIE_API_URL
Secret Value: http://backend-service.default.svc.cluster.local
```

## AWS Infrastructure Requirements:

### ECR Repositories:
- `frontend`: Repository for frontend Docker images
- `backend`: Repository for backend Docker images

### EKS Cluster:
- Running EKS cluster with proper IAM permissions
- Deployments named `frontend` and `backend` in the `default` namespace

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
✅ **ECR Login**: Uses aws-actions/amazon-ecr-login action
✅ **ECR Push**: Builds, tags, and pushes Docker images to ECR
✅ **EKS Deployment**: Updates deployments using kubectl
✅ **Manual Trigger**: Can be run manually via workflow_dispatch
✅ **Main Branch Trigger**: Runs automatically on pushes to main
✅ **Environment Variables**: Properly passes build args to Docker

## Testing the Pipelines:

1. **Test CI Pipeline**: Create a pull request to trigger the CI pipeline
2. **Test CD Pipeline**: Merge to main branch to trigger the CD pipeline
3. **Manual Testing**: Use the "Actions" tab in GitHub to manually trigger workflows

## Verification:

After deployment, verify:
- Frontend loads at your EKS service URL
- Backend API responds at `/movies` endpoint
- Frontend can successfully fetch data from backend
- Environment variables are properly set

## Troubleshooting:

- If tests fail, check the test output in the Actions tab
- If deployment fails, verify your AWS credentials and EKS cluster access
- If frontend can't connect to backend, check the `REACT_APP_MOVIE_API_URL` secret
- Ensure ECR repositories exist and EKS cluster is running
