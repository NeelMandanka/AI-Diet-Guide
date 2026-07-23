from pydantic import BaseModel


class BMIMetrics(BaseModel):
    bmi: float
    category: str


class BMRMetrics(BaseModel):
    bmr: float


class TDEEMetrics(BaseModel):
    tdee: float


class MacroNutrients(BaseModel):
    calories: float
    protein: float
    carbohydrates: float
    fat: float


class HealthMetricsResponse(BaseModel):
    bmi: float
    bmi_category: str
    bmr: float
    tdee: float
    calories: float
    protein: float
    carbohydrates: float
    fat: float