from datetime import datetime, timezone

from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_current_user
from app.db.session import get_db
from app.models.execution import Execution
from app.models.user import User
from app.models.workflow import Workflow
from app.schemas.analytics import AnalyticsSummary

router = APIRouter(prefix="/api/analytics", tags=["analytics"])

WEEKDAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]


@router.get("/summary", response_model=AnalyticsSummary)
def get_summary(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    workflows = db.query(Workflow).filter(Workflow.owner_id == user.id).all()
    executions = db.query(Execution).filter(Execution.owner_id == user.id).all()

    active = sum(1 for w in workflows if w.status == "active")
    paused = sum(1 for w in workflows if w.status == "paused")
    draft = sum(1 for w in workflows if w.status == "draft")

    total_executions = sum(w.executions_count for w in workflows)
    avg_success = (
        round(sum(w.success_rate for w in workflows) / len(workflows), 1) if workflows else 100.0
    )

    error_count = sum(1 for e in executions if e.status == "error")
    error_rate = round((error_count / len(executions)) * 100, 2) if executions else 0.0

    weekly = [{"day": day, "executions": 0} for day in WEEKDAYS]
    for execution in executions:
        idx = execution.created_at.weekday()
        weekly[idx]["executions"] += 1

    return AnalyticsSummary(
        time_saved_hours=total_executions * 4 // 60 or total_executions,
        tasks_automated=total_executions,
        cost_saved=round(total_executions * 0.42, 2),
        error_rate=error_rate,
        executions_today=sum(
            1 for e in executions if e.created_at.date() == datetime.now(timezone.utc).date()
        ),
        success_rate=avg_success,
        avg_response_seconds=1.24,
        active_workflows=active,
        paused_workflows=paused,
        draft_workflows=draft,
        weekly_executions=weekly,
    )
