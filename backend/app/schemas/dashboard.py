from datetime import datetime

from pydantic import BaseModel


class DashboardUser(BaseModel):
    id: int
    name: str
    email: str


class DashboardProfile(BaseModel):
    age: int
    gender: str
    height_cm: float
    weight_kg: float
    activity_level: str
    goal: str


class DashboardMetrics(BaseModel):
    bmi: float
    bmi_category: str
    bmr: float
    tdee: float
    calories: float
    protein: float
    carbohydrates: float
    fat: float


class DashboardWeightLog(BaseModel):
    weight_kg: float
    logged_at: datetime


class DashboardResponse(BaseModel):
    user: DashboardUser
    profile: DashboardProfile
    metrics: DashboardMetrics
    recent_weight_logs: list[DashboardWeightLog]