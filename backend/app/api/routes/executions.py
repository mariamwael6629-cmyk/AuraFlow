from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_current_user
from app.db.session import get_db
from app.models.execution import Execution
from app.models.user import User
from app.schemas.execution import ExecutionOut

router = APIRouter(prefix="/api/executions", tags=["executions"])


@router.get("", response_model=list[ExecutionOut])
def list_executions(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    return (
        db.query(Execution)
        .filter(Execution.owner_id == user.id)
        .order_by(Execution.created_at.desc())
        .limit(20)
        .all()
    )
