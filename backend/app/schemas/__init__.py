from app.schemas.auth import (
    ForgotPasswordRequest,
    LoginRequest,
    MessageResponse,
    RefreshTokenRequest,
    RegisterRequest,
    ResetPasswordRequest,
    TokenResponse,
)

from app.schemas.profile import (
    UserProfileCreate,
    UserProfileUpdate,
    UserProfileResponse,
    WeightLogCreate,
    WeightLogResponse,
)

from app.schemas.user import (
    CurrentUserResponse,
    UserResponse,
)
from app.schemas.metrics import (
    BMIMetrics,
    BMRMetrics,
    TDEEMetrics,
    MacroNutrients,
    HealthMetricsResponse,
)
from app.schemas.dashboard import (
    DashboardMetrics,
    DashboardProfile,
    DashboardResponse,
    DashboardUser,
    DashboardWeightLog,
)
from app.schemas.diet import (
    MealResponse,
    GroceryItemResponse,
    DietPlanResponse,
    GenerateDietRequest,
    GeneratedMeal,
    GeneratedDietResponse,
)

from app.schemas.weekly_diet import (
    WeeklyMeal,
    DailyDiet,
    WeeklyDietResponse,
)

from app.schemas.response import APIResponse