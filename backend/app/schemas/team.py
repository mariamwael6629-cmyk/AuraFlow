from pydantic import BaseModel, ConfigDict, EmailStr


class TeamMemberOut(BaseModel):
    model_config = ConfigDict(from_attributes=True)

    id: int
    name: str
    email: str
    role: str
    department: str
    permission_level: str


class TeamInviteRequest(BaseModel):
    name: str
    email: EmailStr
    role: str = "Viewer"
    department: str = ""
    permission_level: str = "view"
