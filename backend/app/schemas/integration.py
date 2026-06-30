from pydantic import BaseModel, ConfigDict


class IntegrationOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    color: str
    category: str
