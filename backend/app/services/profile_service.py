from sqlalchemy.orm import Session

from app.models.profile import UserProfile
from app.models.weight_log import WeightLog

from app.repositories.profile_repository import ProfileRepository

from app.schemas.profile import (
    UserProfileCreate,
    UserProfileUpdate,
)


class ProfileService:

    @staticmethod
    def create_profile(
        db: Session,
        *,
        user_id: int,
        request: UserProfileCreate,
    ) -> UserProfile:

        existing = ProfileRepository.get_by_user_id(
            db,
            user_id,
        )

        if existing:
            raise ValueError(
                "Profile already exists."
            )

        return ProfileRepository.create(
            db=db,
            user_id=user_id,
            age=request.age,
            gender=request.gender,
            height_cm=request.height_cm,
            weight_kg=request.weight_kg,
            activity_level=request.activity_level,
            goal=request.goal,
        )

    @staticmethod
    def get_profile(
        db: Session,
        *,
        user_id: int,
    ) -> UserProfile | None:

        return ProfileRepository.get_by_user_id(
            db,
            user_id,
        )

    @staticmethod
    def update_profile(
        db: Session,
        *,
        profile: UserProfile,
        request: UserProfileUpdate,
    ) -> UserProfile:

        update_data = request.model_dump(
            exclude_unset=True,
            exclude_none=True,
        )

        for field, value in update_data.items():
            setattr(profile, field, value)

        return ProfileRepository.update(
            db,
            profile,
        )

    @staticmethod
    def add_weight_log(
        db: Session,
        *,
        user_id: int,
        weight_kg: float,
    ) -> WeightLog:

        profile = ProfileRepository.get_by_user_id(
            db,
            user_id,
        )

        if profile is None:
            raise ValueError(
                "Create profile first."
            )

        profile.weight_kg = weight_kg

        ProfileRepository.update(
            db,
            profile,
        )

        return ProfileRepository.add_weight_log(
            db=db,
            user_id=user_id,
            weight_kg=weight_kg,
        )

    @staticmethod
    def get_weight_history(
        db: Session,
        *,
        user_id: int,
    ) -> list[WeightLog]:

        return ProfileRepository.get_weight_history(
            db,
            user_id,
        )