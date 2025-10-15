# Documentation and Screenshots Guide

Place all required screenshots under `docs/screenshots/` using the folder structure below. Ensure every screenshot visibly includes:

- Your AWS Account ID (top-right of AWS console header or account settings)
- A clear timestamp (Windows taskbar clock or macOS menu bar clock visible in capture)

## Folder structure

- `docs/screenshots/frontend-ci/` — Frontend CI pipeline runs (tests/build)
- `docs/screenshots/backend-ci/` — Backend CI pipeline runs (tests/build)
- `docs/screenshots/frontend-cd/` — Frontend ECR images, EKS deploy, services/ingress
- `docs/screenshots/backend-cd/` — Backend ECR images, EKS deploy, services
- `docs/screenshots/cluster/` — EKS cluster, node groups, ECR repo listings
- `docs/screenshots/kubectl/` — Outputs for kubectl commands

Name files meaningfully, e.g. `2025-10-15_aws-ecr-frontend.png`.

## Required AWS console screenshots

- ECR repositories for frontend/backend with pushed image tags
- EKS cluster overview and workloads
- Deployments, Pods, Services pages for frontend/backend namespaces

## Required kubectl outputs

Run from a configured shell with context pointing to your EKS cluster.

```bash
kubectl get svc,pods,deploy,nodes -o wide
kubectl describe deploy <frontend-deploy-name>
kubectl describe deploy <backend-deploy-name>
kubectl describe svc <frontend-svc-name>
kubectl describe svc <backend-svc-name>
```

Save outputs to files (optional) before screenshotting:

```bash
kubectl get svc,pods,deploy,nodes -o wide > docs/screenshots/kubectl/get-wide.txt
kubectl describe deploy <frontend> > docs/screenshots/kubectl/describe-deploy-frontend.txt
kubectl describe deploy <backend> > docs/screenshots/kubectl/describe-deploy-backend.txt
kubectl describe svc <frontend> > docs/screenshots/kubectl/describe-svc-frontend.txt
kubectl describe svc <backend> > docs/screenshots/kubectl/describe-svc-backend.txt
```

## Final URLs

Update these in the root `README.md` before submission:

- Frontend URL: https://<your-domain-or-elb>
- Backend URL: https://<your-backend-domain-or-elb>


