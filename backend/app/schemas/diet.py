from datetime import datetime

from pydantic import BaseModel
from pydantic import ConfigDict


# -------------------------------------------------
# Meal
# -------------------------------------------------

class MealResponse(BaseModel):

    model_config = ConfigDict(
        from_attributes=True
    )

    id: int

    meal_type: str

    title: str

    calories: float

    protein: float

    carbohydrates: float

    fat: float

    recipe: str

    meal_order: int


# -------------------------------------------------
# Grocery
# -------------------------------------------------

class GroceryItemResponse(BaseModel):

    model_config = ConfigDict(
        from_attributes=True
    )

    id: int

    item_name: str

    quantity: str


# -------------------------------------------------
# Diet Plan
# -------------------------------------------------

class DietPlanResponse(BaseModel):

    model_config = ConfigDict(
        from_attributes=True
    )

    id: int

    title: str

    goal: str

    generated_by: str

    created_at: datetime

    meals: list[MealResponse]

    grocery_items: list[GroceryItemResponse]

# -------------------------------------------------
# Generate Diet Request
# -------------------------------------------------

class GenerateDietRequest(BaseModel):

    days: int = 1

    regenerate: bool = False

# -------------------------------------------------
# AI Response
# -------------------------------------------------

class GeneratedMeal(BaseModel):

    meal_type: str

    title: str

    calories: float

    protein: float

    carbohydrates: float

    fat: float

    recipe: str


class GeneratedDietResponse(BaseModel):

    meals: list[GeneratedMeal]

    grocery_items: list[str]