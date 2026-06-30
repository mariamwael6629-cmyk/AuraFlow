from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.deps import get_current_user
from app.db.session import get_db
from app.models.trigger import Trigger
from app.models.user import User
from app.schemas.trigger import TriggerOut, TriggerUpdate

router = APIRouter(prefix="/api/scheduler/triggers", tags=["scheduler"])


@router.get("", response_model=list[TriggerOut])
def list_triggers(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    return db.query(Trigger).filter(Trigger.owner_id == user.id).all()


@router.patch("/{trigger_id}", response_model=TriggerOut)
def update_trigger(
    trigger_id: int,
    payload: TriggerUpdate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    trigger = (
        db.query(Trigger).filter(Trigger.id == trigger_id, Trigger.owner_id == user.id).first()
    )
    if not trigger:
        raise HTTPException(status_code=404, detail="Trigger not found")
    trigger.status = payload.status
    db.commit()
    db.refresh(trigger)
    return trigger
