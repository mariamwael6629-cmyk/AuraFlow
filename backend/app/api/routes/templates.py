from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.deps import get_current_user
from app.db.session import get_db
from app.models.template import Template
from app.models.user import User
from app.models.workflow import Workflow
from app.schemas.template import TemplateOut
from app.schemas.workflow import WorkflowOut

router = APIRouter(prefix="/api/templates", tags=["templates"])


@router.get("", response_model=list[TemplateOut])
def list_templates(db: Session = Depends(get_db)):
    return db.query(Template).all()


@router.post("/{template_id}/use", response_model=WorkflowOut, status_code=201)
def use_template(template_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    template = db.query(Template).filter(Template.id == template_id).first()
    if not template:
        raise HTTPException(status_code=404, detail="Template not found")
    workflow = Workflow(
        owner_id=user.id,
        name=template.name,
        description=template.description,
        status="draft",
        nodes=template.nodes,
    )
    db.add(workflow)
    db.commit()
    db.refresh(workflow)
    return workflow
