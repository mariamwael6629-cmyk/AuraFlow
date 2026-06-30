from sqlalchemy import ForeignKey, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.session import Base


class Trigger(Base):
    __tablename__ = "triggers"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    owner_id: Mapped[int] = mapped_column(ForeignKey("users.id"))
    name: Mapped[str] = mapped_column(String(150))
    description: Mapped[str] = mapped_column(String(255))
    icon: Mapped[str] = mapped_column(String(10), default="⏰")
    status: Mapped[str] = mapped_column(String(10), default="on")  # on | off
