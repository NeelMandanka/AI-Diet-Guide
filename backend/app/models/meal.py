from sqlalchemy import Float
from sqlalchemy import ForeignKey
from sqlalchemy import Integer
from sqlalchemy import String
from sqlalchemy import Text

from sqlalchemy.orm import Mapped
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import relationship

from app.db.database import Base


class Meal(Base):
    __tablename__ = "meals"

    id: Mapped[int] = mapped_column(
        primary_key=True
    )

    diet_plan_id: Mapped[int] = mapped_column(
        ForeignKey(
            "diet_plans.id",
            ondelete="CASCADE",
        )
    )

    meal_type: Mapped[str] = mapped_column(
        String(30)
    )

    title: Mapped[str] = mapped_column(
        String(200)
    )

    calories: Mapped[float] = mapped_column(
        Float
    )

    protein: Mapped[float] = mapped_column(
        Float
    )

    carbohydrates: Mapped[float] = mapped_column(
        Float
    )

    fat: Mapped[float] = mapped_column(
        Float
    )

    recipe: Mapped[str] = mapped_column(
        Text
    )

    meal_order: Mapped[int] = mapped_column(
        Integer
    )

    diet_plan = relationship(
        "DietPlan",
        back_populates="meals",
    )