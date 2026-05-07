# Todo App DevOps

Application Todo complète avec chaîne DevOps de bout en bout.

## Architecture
- Frontend: React + Vite
- Backend: Node.js + Express
- CI/CD: GitHub Actions
- Containerisation: Docker
- Orchestration: Kubernetes (Minikube)
- GitOps: ArgoCD
- Monitoring: Prometheus + Grafana
- Qualité: SonarCloud + ESLint
- Sécurité: Trivy + npm audit

## Lancer localement
```bash
cd backend && npm install && npm start
cd frontend && npm install && npm run dev
```

## Pipeline CI/CD
Le pipeline GitHub Actions effectue automatiquement :
lint → tests → SonarCloud → build Docker → Trivy scan → push Docker Hub

## Déploiement
ArgoCD surveille le repo et déploie automatiquement sur Kubernetes.

## Monitoring
- Prometheus : http://localhost:9090
- Grafana : http://localhost:3001
- Métriques backend : http://localhost:5000/metrics
# trigger
