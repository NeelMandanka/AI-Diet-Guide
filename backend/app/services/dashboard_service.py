from sqlalchemy.orm import Session

from app.models.user import User

from app.repositories.profile_repository import ProfileRepository
from app.services.metrics_service import MetricsService

from app.schemas.dashboard import (
    DashboardResponse,
    DashboardUser,
    DashboardProfile,
    DashboardMetrics,
    DashboardWeightLog,
)


class DashboardService:

    @staticmethod
    def get_dashboard(
        db: Session,
        user: User,
    ) -> DashboardResponse:

        profile = ProfileRepository.get_by_user_id(
            db,
            user.id,
        )

        if profile is None:
            raise ValueError(
                "Profile not found."
            )

        metrics = MetricsService.get_health_metrics(
            db=db,
            user_id=user.id,
        )

        weight_logs = ProfileRepository.get_weight_history(
            db,
            user.id,
        )[:10]

        return DashboardResponse(

            user=DashboardUser(
                id=user.id,
                name=user.name,
                email=user.email,
            ),

            profile=DashboardProfile(
                age=profile.age,
                gender=profile.gender,
                height_cm=profile.height_cm,
                weight_kg=profile.weight_kg,
                activity_level=profile.activity_level,
                goal=profile.goal,
            ),

            metrics=DashboardMetrics(
                **metrics.model_dump()
            ),

            recent_weight_logs=[
                DashboardWeightLog(
                    weight_kg=log.weight_kg,
                    logged_at=log.logged_at,
                )
                for log in weight_logs
            ],
        )