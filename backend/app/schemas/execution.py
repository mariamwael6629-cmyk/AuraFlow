from datetime import datetime

from pydantic import BaseModel, ConfigDict


class ExecutionOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    workflow_id: int
    status: str
    message: str
    created_at: datetime
