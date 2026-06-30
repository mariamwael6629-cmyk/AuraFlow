import random

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.api.deps import get_current_user
from app.db.session import get_db
from app.models.execution import Execution
from app.models.user import User
from app.models.workflow import Workflow
from app.schemas.workflow import WorkflowCreate, WorkflowOut, WorkflowUpdate

router = APIRouter(prefix="/api/workflows", tags=["workflows"])


def _get_owned_workflow(db: Session, workflow_id: int, user: User) -> Workflow:
    workflow = (
        db.query(Workflow)
        .filter(Workflow.id == workflow_id, Workflow.owner_id == user.id)
        .first()
    )
    if not workflow:
        raise HTTPException(status_code=404, detail="Workflow not found")
    return workflow


@router.get("", response_model=list[WorkflowOut])
def list_workflows(db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    return db.query(Workflow).filter(Workflow.owner_id == user.id).order_by(Workflow.updated_at.desc()).all()


@router.post("", response_model=WorkflowOut, status_code=201)
def create_workflow(
    payload: WorkflowCreate, db: Session = Depends(get_db), user: User = Depends(get_current_user)
):
    workflow = Workflow(owner_id=user.id, **payload.model_dump())
    db.add(workflow)
    db.commit()
    db.refresh(workflow)
    return workflow


@router.get("/{workflow_id}", response_model=WorkflowOut)
def get_workflow(workflow_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    return _get_owned_workflow(db, workflow_id, user)


@router.put("/{workflow_id}", response_model=WorkflowOut)
def update_workflow(
    workflow_id: int,
    payload: WorkflowUpdate,
    db: Session = Depends(get_db),
    user: User = Depends(get_current_user),
):
    workflow = _get_owned_workflow(db, workflow_id, user)
    for field, value in payload.model_dump(exclude_unset=True).items():
        setattr(workflow, field, value)
    db.commit()
    db.refresh(workflow)
    return workflow


@router.delete("/{workflow_id}", status_code=204)
def delete_workflow(workflow_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    workflow = _get_owned_workflow(db, workflow_id, user)
    db.delete(workflow)
    db.commit()


@router.post("/{workflow_id}/run", response_model=WorkflowOut)
def run_workflow(workflow_id: int, db: Session = Depends(get_db), user: User = Depends(get_current_user)):
    workflow = _get_owned_workflow(db, workflow_id, user)
    workflow.status = "active"
    workflow.executions_count += 1
    success = random.random() > 0.08
    status_label = "success" if success else "error"
    message = f"{workflow.name} executed {'successfully' if success else 'with an error'}"
    db.add(Execution(workflow_id=workflow.id, owner_id=user.id, status=status_label, message=message))
    # exponential moving average so a single run nudges the rate without needing full history
    workflow.success_rate = round(workflow.success_rate * 0.85 + (100 if success else 0) * 0.15, 1)
    db.commit()
    db.refresh(workflow)
    return workflow
