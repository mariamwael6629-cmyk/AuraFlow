from pydantic import BaseModel, ConfigDict


class TriggerOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    description: str
    icon: str
    status: str


class TriggerUpdate(BaseModel):
    status: str
