from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_current_user
from app.db.session import get_db
from app.models.notification import Notification
from app.models.user import User
from app.schemas.notification import NotificationOut

router = APIRouter(prefix="/api/notifications", tags=["notifications"])


@router.get("", response_model=list[NotificationOut])
def list_notifications(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    return (
        db.query(Notification)
        .filter(Notification.user_id == user.id)
        .order_by(Notification.created_at.desc())
        .all()
    )


@router.post("/read-all", response_model=list[NotificationOut])
def mark_all_read(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    notifications = db.query(Notification).filter(Notification.user_id == user.id).all()
    for notification in notifications:
        notification.read = True
    db.commit()
    return notifications
