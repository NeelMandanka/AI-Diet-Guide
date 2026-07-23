from sqlalchemy.orm import Session
from sqlalchemy.orm import selectinload

from app.models.diet_plan import DietPlan
from app.models.meal import Meal
from app.models.grocery_item import GroceryItem


class DietRepository:

    @staticmethod
    def create_plan(
        db: Session,
        *,
        user_id: int,
        title: str,
        goal: str,
        generated_by: str = "gemini",
    ) -> DietPlan:

        plan = DietPlan(
            user_id=user_id,
            title=title,
            goal=goal,
            generated_by=generated_by,
        )

        db.add(plan)
        db.commit()
        db.refresh(plan)

        return plan

    @staticmethod
    def add_meal(
        db: Session,
        *,
        diet_plan_id: int,
        meal_type: str,
        title: str,
        calories: float,
        protein: float,
        carbohydrates: float,
        fat: float,
        recipe: str,
        meal_order: int,
    ) -> Meal:

        meal = Meal(
            diet_plan_id=diet_plan_id,
            meal_type=meal_type,
            title=title,
            calories=calories,
            protein=protein,
            carbohydrates=carbohydrates,
            fat=fat,
            recipe=recipe,
            meal_order=meal_order,
        )

        db.add(meal)
        db.commit()
        db.refresh(meal)

        return meal

    @staticmethod
    def add_grocery_item(
        db: Session,
        *,
        diet_plan_id: int,
        item_name: str,
        quantity: str,
    ) -> GroceryItem:

        item = GroceryItem(
            diet_plan_id=diet_plan_id,
            item_name=item_name,
            quantity=quantity,
        )

        db.add(item)
        db.commit()
        db.refresh(item)

        return item

    @staticmethod
    def get_latest_plan(
        db: Session,
        user_id: int,
    ) -> DietPlan | None:

        return (
            db.query(DietPlan)
            .options(
                selectinload(DietPlan.meals),
                selectinload(DietPlan.grocery_items),
            )
            .filter(DietPlan.user_id == user_id)
            .order_by(DietPlan.created_at.desc())
            .first()
        )

    @staticmethod
    def get_all_plans(
        db: Session,
        user_id: int,
    ) -> list[DietPlan]:

        return (
            db.query(DietPlan)
            .options(
                selectinload(DietPlan.meals),
                selectinload(DietPlan.grocery_items),
            )
            .filter(DietPlan.user_id == user_id)
            .order_by(DietPlan.created_at.desc())
            .all()
        )

    @staticmethod
    def get_plan_by_id(
        db: Session,
        plan_id: int,
        user_id: int,
    ) -> DietPlan | None:

        return (
            db.query(DietPlan)
            .options(
                selectinload(DietPlan.meals),
                selectinload(DietPlan.grocery_items),
            )
            .filter(
                DietPlan.id == plan_id,
                DietPlan.user_id == user_id,
            )
            .first()
        )

    @staticmethod
    def delete_plan(
        db: Session,
        plan: DietPlan,
    ) -> None:

        db.delete(plan)
        db.commit()

    @staticmethod
    def delete_by_id(
        db: Session,
        plan: DietPlan,
    ):

        db.delete(plan)
        db.commit()