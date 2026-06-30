from datetime import datetime

from pydantic import BaseModel, ConfigDict


class WorkflowBase(BaseModel):
    name: str
    description: str = ""
    nodes: list[str] = []


class WorkflowCreate(WorkflowBase):
    status: str = "draft"


class WorkflowUpdate(BaseModel):
    name: str | None = None
    description: str | None = None
    status: str | None = None
    nodes: list[str] | None = None


class WorkflowOut(WorkflowBase):
    model_config = ConfigDict(from_attributes=True)

    id: int
    owner_id: int
    status: str
    executions_count: int
    success_rate: float
    created_at: datetime
    updated_at: datetime
