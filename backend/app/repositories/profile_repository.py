from sqlalchemy.orm import Session

from app.models.profile import UserProfile
from app.models.weight_log import WeightLog


class ProfileRepository:

    @staticmethod
    def get_by_user_id(
        db: Session,
        user_id: int,
    ) -> UserProfile | None:

        return (
            db.query(UserProfile)
            .filter(UserProfile.user_id == user_id)
            .first()
        )

    @staticmethod
    def create(
        db: Session,
        *,
        user_id: int,
        age: int,
        gender: str,
        height_cm: float,
        weight_kg: float,
        activity_level: str,
        goal: str,
    ) -> UserProfile:

        profile = UserProfile(
            user_id=user_id,
            age=age,
            gender=gender,
            height_cm=height_cm,
            weight_kg=weight_kg,
            activity_level=activity_level,
            goal=goal,
        )

        db.add(profile)
        db.commit()
        db.refresh(profile)

        return profile

    @staticmethod
    def update(
        db: Session,
        profile: UserProfile,
    ) -> UserProfile:

        db.commit()
        db.refresh(profile)

        return profile

    @staticmethod
    def add_weight_log(
        db: Session,
        *,
        user_id: int,
        weight_kg: float,
    ) -> WeightLog:

        weight_log = WeightLog(
            user_id=user_id,
            weight_kg=weight_kg,
        )

        db.add(weight_log)
        db.commit()
        db.refresh(weight_log)

        return weight_log

    @staticmethod
    def get_weight_history(
        db: Session,
        user_id: int,
    ) -> list[WeightLog]:

        return (
            db.query(WeightLog)
            .filter(WeightLog.user_id == user_id)
            .order_by(WeightLog.logged_at.desc())
            .all()
        )