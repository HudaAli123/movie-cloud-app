# Capture Guide: AWS Screenshots with Account ID and Timestamp

Follow these steps to produce reviewer-ready screenshots.

## Ensure Account ID is visible

- In AWS Console, open the account menu (top-right). The 12-digit Account ID is visible there.
- Keep the header visible when taking screenshots.

## Ensure timestamp is visible

- Windows: ensure the taskbar clock is visible in the screen capture.
- macOS: ensure the menu bar clock is visible. If hidden, enable from System Settings.
- Alternatively, include a terminal window running `date` next to the console.

## What to capture

1. CI (GitHub Actions)
   - Frontend: latest successful run (tests/build)
   - Backend: latest successful run (tests/build)
2. CD / Containers
   - ECR: frontend and backend repos with latest pushed image tags
3. EKS cluster
   - Cluster overview page
   - Workloads → Deployments (FE/BE)
   - Workloads → Pods (FE/BE)
   - Services (FE/BE)
4. kubectl outputs
   - `kubectl get svc,pods,deploy,nodes -o wide`
   - `kubectl describe deploy <frontend>`, `<backend>`
   - `kubectl describe svc <frontend>`, `<backend>`

Save all images into `docs/screenshots/` in the appropriate folders.


