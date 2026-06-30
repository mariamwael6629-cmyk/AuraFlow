from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.session import Base


class TeamMember(Base):
    __tablename__ = "team_members"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    owner_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    name: Mapped[str] = mapped_column(String(120))
    email: Mapped[str] = mapped_column(String(255))
    role: Mapped[str] = mapped_column(String(50), default="Viewer")
    department: Mapped[str] = mapped_column(String(80), default="")
    permission_level: Mapped[str] = mapped_column(String(20), default="view")  # admin | edit | view
