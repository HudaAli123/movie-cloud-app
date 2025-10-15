<<<<<<< HEAD
<<<<<<< HEAD
# movie-cloud-app
=======
# Movie Catalog — Original Refactor
React + Flask with separate CI/CD and Kustomize.
See .github/workflows for pipelines.
>>>>>>> e3c612e (Initial commit: original FE/BE + CI/CD)
=======
# Movie Catalog — React + Flask (CI/CD + Kustomize)

This repository contains a React frontend and a Flask backend, each with separate CI (tests/build) and CD (containerize + deploy to EKS using Kustomize).

- Frontend app (React, CRA)
- Backend API (Flask, CORS enabled)
- Dockerfiles for FE/BE
- Kustomize manifests for FE/BE
- GitHub Actions pipelines in `.github/workflows`

Repository: `https://github.com/HudaAli123/movie-cloud-app`

## Live URLs (for review)

- Frontend URL: <ADD_FINAL_FRONTEND_URL_HERE>
- Backend URL: <ADD_FINAL_BACKEND_BASE_URL_HERE> (GET `/movies`)

If the infrastructure is deleted before review, see the Screenshots and kubectl outputs below.

## How to Verify

1. Open the Frontend URL and confirm the list of movies renders. Click a movie to view details.
2. Call the Backend endpoint: `GET {BACKEND_URL}/movies` should return JSON with a `movies` array.
3. Optionally: `GET {BACKEND_URL}/movies/123` returns a single movie.

## API

- `GET /movies` → `{ movies: [{ id, title }] }`
- `GET /movies/:id` → `{ movie: { id, title, description } }` or 404

## Local Development

Frontend

```bash
cd frontend
npm install
npm start
```

Backend

```bash
cd backend
pip install pipenv --user
pipenv install --dev
pipenv run python -m backend
```

## CI/CD Overview

- CI runs tests and builds on push/PR.
- CD builds Docker images and deploys to ECR/EKS using Kustomize overlays in `frontend/k8s` and `backend/k8s`.
- Workflows are under `.github/workflows`.

## Screenshots Required by Reviewers

Place all screenshots under `docs/screenshots/` and ensure they include your AWS Account ID and a visible timestamp.

- Frontend CI: pipeline run (tests/build) success
- Backend CI: pipeline run (tests/build) success
- Frontend CD: image push to ECR, deploy to EKS, service/ingress
- Backend CD: image push to ECR, deploy to EKS, service
- AWS ECR: repositories and image tags for FE/BE
- AWS EKS: cluster overview
- EKS resources: deployments, pods, services visible
- kubectl describes: deployments and services

Folder suggestions (already created):

- `docs/screenshots/frontend-ci/`
- `docs/screenshots/backend-ci/`
- `docs/screenshots/frontend-cd/`
- `docs/screenshots/backend-cd/`
- `docs/screenshots/cluster/` (EKS & ECR)
- `docs/screenshots/kubectl/`

For how to capture with Account ID and timestamps, see `docs/README.md`.

## kubectl Outputs (paste here or place under docs/screenshots/kubectl)

```bash
kubectl get svc,pods,deploy,nodes -o wide
```

```bash
kubectl describe deploy <frontend-deploy-name>
kubectl describe deploy <backend-deploy-name>
```

```bash
kubectl describe svc <frontend-svc-name>
kubectl describe svc <backend-svc-name>
```

## Kustomize Manifests

- Frontend: `frontend/k8s`
- Backend: `backend/k8s`

## Notes

- If the cluster is torn down before review, ensure all requested screenshots and kubectl outputs above are committed.
- Replace the `<ADD_FINAL_FRONTEND_URL_HERE>` and `<ADD_FINAL_BACKEND_BASE_URL_HERE>` placeholders before submission.
>>>>>>> 9c2a2c6 (Backend: switch to Gunicorn and fix Dockerfile paths for Render)
