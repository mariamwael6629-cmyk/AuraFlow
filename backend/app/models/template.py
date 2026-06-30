from sqlalchemy import JSON, String
from sqlalchemy.orm import Mapped, mapped_column

from app.db.session import Base


class Template(Base):
    __tablename__ = "templates"

    id: Mapped[int] = mapped_column(primary_key=True, index=True)
    name: Mapped[str] = mapped_column(String(200))
    description: Mapped[str] = mapped_column(String(500))
    tag: Mapped[str] = mapped_column(String(20), default="new")  # popular | new | ai
    nodes: Mapped[list] = mapped_column(JSON, default=list)
