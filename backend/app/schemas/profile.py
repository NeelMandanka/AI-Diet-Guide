from datetime import datetime

from pydantic import BaseModel
from pydantic import ConfigDict
from pydantic import Field


class UserProfileBase(BaseModel):

    age: int = Field(
        ...,
        ge=10,
        le=100,
    )

    gender: str = Field(
        ...,
        pattern="^(male|female|other)$",
    )

    height_cm: float = Field(
        ...,
        ge=50,
        lt=300,
    )

    weight_kg: float = Field(
        ...,
        gt=10,
        lt=500,
    )

    activity_level: str = Field(
        ...,
        pattern="^(sedentary|light|moderate|active|very_active)$",
    )

    goal: str = Field(
        ...,
        pattern="^(lose_weight|maintain|gain_muscle)$",
    )


class UserProfileCreate(UserProfileBase):
    pass


class UserProfileUpdate(BaseModel):

    age: int | None = Field(
        None,
        ge=10,
        le=100,
    )

    gender: str | None = Field(
        None,
        pattern="^(male|female|other)$",
    )

    height_cm: float | None = Field(
        None,
        ge=50,
        lt=300,
    )

    weight_kg: float | None = Field(
        None,
        gt=10,
        lt=500,
    )

    activity_level: str | None = Field(
        None,
        pattern="^(sedentary|light|moderate|active|very_active)$",
    )

    goal: str | None = Field(
        None,
        pattern="^(lose_weight|maintain|gain_muscle)$",
    )


class UserProfileResponse(UserProfileBase):

    model_config = ConfigDict(
        from_attributes=True,
    )

    id: int

    user_id: int

    created_at: datetime

    updated_at: datetime


class WeightLogCreate(BaseModel):

    weight_kg: float = Field(
        ...,
        gt=10,
        lt=500,
    )


class WeightLogResponse(BaseModel):

    model_config = ConfigDict(
        from_attributes=True,
    )

    id: int

    user_id: int

    weight_kg: float

    logged_at: datetime