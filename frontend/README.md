# AuraFlow — Frontend

React 18 + Vite single-page app for the AuraFlow workflow automation platform.

## Setup

```bash
npm install
cp .env.example .env   # set VITE_API_BASE_URL to your backend
npm run dev
```

Runs at `http://localhost:5173`. Requires the backend (see `../backend/README.md`) running for login, registration, and all dashboard data.

## Structure

- `src/pages/` — Landing, Login, Register, NotFound
- `src/pages/dashboard/` — Overview, Workflows, Templates, Integrations, Analytics, Scheduler, Team, Settings (all behind `ProtectedRoute`)
- `src/api/` — axios client with JWT auth interceptor (`client.js`) and endpoint functions (`endpoints.js`)
- `src/context/AuthContext.jsx` — auth state, login/register/logout, token persisted in `localStorage`
- `src/components/ProtectedRoute.jsx` — redirects unauthenticated users to `/login`
