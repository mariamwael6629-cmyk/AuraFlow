# AuraFlow — Backend

FastAPI service powering the AuraFlow workflow automation platform: auth, workflows, templates, integrations, analytics, scheduler triggers, team, and notifications.

## Setup

```bash
cd backend
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
cp .env.example .env
python -m app.db.seed     # creates demo data
uvicorn app.main:app --reload --port 8000
```

API docs at `http://localhost:8000/docs`.

## Structure

- `app/models/` — SQLAlchemy ORM models
- `app/schemas/` — Pydantic request/response schemas
- `app/api/routes/` — route handlers, mounted under `/api`
- `app/services/` — business logic (auth/password hashing/JWT)
- `app/core/config.py` — settings loaded from `.env` via pydantic-settings
- `app/core/security.py` — JWT encode/decode, password hashing
- `app/db/session.py` — SQLAlchemy engine/session, `app/db/seed.py` — demo data loader

## Auth

JWT bearer tokens issued at `/api/auth/login` and `/api/auth/register`. Send `Authorization: Bearer <token>` on subsequent requests.
