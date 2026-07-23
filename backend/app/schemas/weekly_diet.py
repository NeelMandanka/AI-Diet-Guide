from pydantic import BaseModel


class WeeklyMeal(BaseModel):

    meal_type: str

    title: str

    calories: float

    protein: float

    carbohydrates: float

    fat: float

    recipe: str


class DailyDiet(BaseModel):

    day: str

    meals: list[WeeklyMeal]


class WeeklyDietResponse(BaseModel):

    week: list[DailyDiet]

    grocery_items: list[str]