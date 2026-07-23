from sqlalchemy.orm import Session

from app.repositories.profile_repository import ProfileRepository
from app.repositories.diet_repository import DietRepository

from app.services.metrics_service import MetricsService
from app.services.gemini_service import GeminiService

from app.schemas.diet import (
    GenerateDietRequest,
    DietPlanResponse,
)


class DietService:

    @staticmethod
    def generate_diet(
        db: Session,
        *,
        user_id: int,
        request: GenerateDietRequest,
    ) -> DietPlanResponse:

        profile = ProfileRepository.get_by_user_id(
            db,
            user_id,
        )

        if profile is None:
            raise ValueError(
                "Profile not found."
            )

        metrics = MetricsService.get_health_metrics(
            db=db,
            user_id=user_id,
        )

        prompt = f"""
Age: {profile.age}

Gender: {profile.gender}

Height: {profile.height_cm} cm

Weight: {profile.weight_kg} kg

Goal: {profile.goal}

Activity Level: {profile.activity_level}

BMI: {metrics.bmi}

Calories Target: {metrics.calories}

Protein: {metrics.protein}

Carbohydrates: {metrics.carbohydrates}

Fat: {metrics.fat}

Generate a healthy diet plan.
"""

        gemini = GeminiService()

        ai_plan = gemini.generate_diet(prompt)

        plan = DietRepository.create_plan(
            db=db,
            user_id=user_id,
            title="AI Generated Diet Plan",
            goal=profile.goal,
        )

        meal_order = 1

        for meal in ai_plan.meals:

            DietRepository.add_meal(
                db=db,
                diet_plan_id=plan.id,
                meal_type=meal.meal_type,
                title=meal.title,
                calories=meal.calories,
                protein=meal.protein,
                carbohydrates=meal.carbohydrates,
                fat=meal.fat,
                recipe=meal.recipe,
                meal_order=meal_order,
            )

            meal_order += 1

        for item in ai_plan.grocery_items:

            DietRepository.add_grocery_item(
                db=db,
                diet_plan_id=plan.id,
                item_name=item,
                quantity="As Required",
            )

        db.commit()

        plan = DietRepository.get_plan_by_id(
            db=db,
            plan_id=plan.id,
            user_id=user_id,
        )

        return DietPlanResponse.model_validate(plan)

    @staticmethod
    def get_latest_plan(
        db: Session,
        *,
        user_id: int,
    ):

        return DietRepository.get_latest_plan(
            db,
            user_id,
        )

    @staticmethod
    def get_history(
    db: Session,
    *,
    user_id: int,
    ):

        plans = DietRepository.get_all_plans(
            db,
            user_id,
        )

        return [
        DietPlanResponse.model_validate(plan)
        for plan in plans
        ]

    @staticmethod
    def get_plan(
        db: Session,
        *,
        user_id: int,
        plan_id: int,
    ):

        plan = DietRepository.get_plan_by_id(
            db,
            plan_id,
            user_id,
        )

        if plan is None:
            raise ValueError(
                "Diet plan not found."
            )

        return DietPlanResponse.model_validate(plan)

    @staticmethod
    def delete_plan(
        db: Session,
        *,
        user_id: int,
        plan_id: int,
    ):

        plan = DietRepository.get_plan_by_id(
            db,
            plan_id,
            user_id,
        )

        if plan is None:
            raise ValueError(
                "Diet plan not found."
            )

        DietRepository.delete_by_id(
            db,
            plan,
        )

        return {
            "message": "Diet plan deleted successfully."
        }

    @staticmethod
    def generate_weekly_diet(
        db: Session,
        *,
        user_id: int,
    ):

        profile = ProfileRepository.get_by_user_id(
            db,
            user_id,
        )

        metrics = MetricsService.get_health_metrics(
            db=db,
            user_id=user_id,
        )

        prompt = f"""
Age: {profile.age}

Gender: {profile.gender}

Height: {profile.height_cm}

Weight: {profile.weight_kg}

Goal: {profile.goal}

Calories: {metrics.calories}
"""

        gemini = GeminiService()

        return gemini.generate_weekly_diet(prompt)