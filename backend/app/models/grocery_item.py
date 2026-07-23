from sqlalchemy import ForeignKey
from sqlalchemy import String

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from app.db.database import Base


class GroceryItem(Base):
    __tablename__ = "grocery_items"

    id: Mapped[int] = mapped_column(
        primary_key=True
    )

    diet_plan_id: Mapped[int] = mapped_column(
        ForeignKey(
            "diet_plans.id",
            ondelete="CASCADE",
        )
    )

    item_name: Mapped[str] = mapped_column(
        String(150)
    )

    quantity: Mapped[str] = mapped_column(
        String(100)
    )

    diet_plan = relationship(
        "DietPlan",
        back_populates="grocery_items",
    )