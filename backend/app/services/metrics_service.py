from sqlalchemy.orm import Session

from app.repositories.profile_repository import ProfileRepository

from app.schemas.metrics import HealthMetricsResponse

from app.utils.calculations import (
    calculate_bmi,
    bmi_category,
    calculate_bmr,
    calculate_tdee,
    calculate_daily_calories,
    calculate_macros,
)


class MetricsService:

    @staticmethod
    def get_health_metrics(
        db: Session,
        *,
        user_id: int,
    ) -> HealthMetricsResponse:

        profile = ProfileRepository.get_by_user_id(
            db,
            user_id,
        )

        if profile is None:
            raise ValueError(
                "Profile not found."
            )

        bmi = calculate_bmi(
            profile.height_cm,
            profile.weight_kg,
        )

        category = bmi_category(
            bmi,
        )

        bmr = calculate_bmr(
            profile.gender,
            profile.age,
            profile.height_cm,
            profile.weight_kg,
        )

        tdee = calculate_tdee(
            bmr,
            profile.activity_level,
        )

        calories = calculate_daily_calories(
            tdee,
            profile.goal,
        )

        macros = calculate_macros(
            calories,
            profile.weight_kg,
        )

        return HealthMetricsResponse(
            bmi=bmi,
            bmi_category=category,
            bmr=bmr,
            tdee=tdee,
            calories=calories,
            protein=macros["protein"],
            carbohydrates=macros["carbohydrates"],
            fat=macros["fat"],
        )