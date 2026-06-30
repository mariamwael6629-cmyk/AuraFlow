from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session

from app.api.deps import get_current_user
from app.db.session import get_db
from app.models.team import TeamMember
from app.models.user import User
from app.schemas.team import TeamInviteRequest, TeamMemberOut

router = APIRouter(prefix="/api/team", tags=["team"])


@router.get("", response_model=list[TeamMemberOut])
def list_team(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    return db.query(TeamMember).filter(TeamMember.owner_id == user.id).all()


@router.post("", response_model=TeamMemberOut, status_code=201)
def invite_member(
    payload: TeamInviteRequest, db: Session = Depends(get_db), user: User = Depends(get_current_user)
):
    member = TeamMember(owner_id=user.id, **payload.model_dump())
    db.add(member)
    db.commit()
    db.refresh(member)
    return member
