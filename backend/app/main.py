from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.api.routes import (
    analytics,
    auth,
    executions,
    integrations,
    notifications,
    scheduler,
    team,
    templates,
    workflows,
)
from app.core.config import settings
from app.db.seed import seed_static_data
from app.db.session import Base, SessionLocal, engine

# import models so SQLAlchemy registers them on Base.metadata before create_all
from app.models import (  # noqa: F401
    execution,
    integration,
    notification,
    team as team_model,
    template,
    trigger,
    user,
    workflow,
)


@asynccontextmanager
async def lifespan(app: FastAPI):
    Base.metadata.create_all(bind=engine)
    db = SessionLocal()
    try:
        seed_static_data(db)
    finally:
        db.close()
    yield


app = FastAPI(
    title=settings.app_name,
    description="AuraFlow API - AI-powered workflow automation platform backend.",
    version="1.0.0",
    lifespan=lifespan,
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins_list,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth.router)
app.include_router(workflows.router)
app.include_router(templates.router)
app.include_router(integrations.router)
app.include_router(analytics.router)
app.include_router(executions.router)
app.include_router(notifications.router)
app.include_router(team.router)
app.include_router(scheduler.router)


@app.get("/api/health", tags=["health"])
def health_check():
    return {"status": "ok", "service": settings.app_name}
