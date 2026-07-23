from math import pow


# -----------------------------------------------------
# BMI
# -----------------------------------------------------

def calculate_bmi(
    height_cm: float,
    weight_kg: float,
) -> float:

    height_m = height_cm / 100

    bmi = weight_kg / pow(height_m, 2)

    return round(bmi, 2)


# -----------------------------------------------------
# BMI Category
# -----------------------------------------------------

def bmi_category(
    bmi: float,
) -> str:

    if bmi < 18.5:
        return "Underweight"

    if bmi < 25:
        return "Normal"

    if bmi < 30:
        return "Overweight"

    return "Obese"


# -----------------------------------------------------
# BMR
# Mifflin-St Jeor Equation
# -----------------------------------------------------

def calculate_bmr(
    gender: str,
    age: int,
    height_cm: float,
    weight_kg: float,
) -> float:

    if gender.lower() == "male":

        bmr = (
            10 * weight_kg
            + 6.25 * height_cm
            - 5 * age
            + 5
        )

    else:

        bmr = (
            10 * weight_kg
            + 6.25 * height_cm
            - 5 * age
            - 161
        )

    return round(bmr, 2)

# -----------------------------------------------------
# TDEE
# -----------------------------------------------------

ACTIVITY_FACTORS = {

    "sedentary": 1.20,

    "light": 1.375,

    "moderate": 1.55,

    "active": 1.725,

    "very_active": 1.90,
}


def calculate_tdee(
    bmr: float,
    activity_level: str,
) -> float:

    factor = ACTIVITY_FACTORS.get(
        activity_level,
        1.20,
    )

    return round(
        bmr * factor,
        2,
    )

# -----------------------------------------------------
# Calories
# -----------------------------------------------------

def calculate_daily_calories(
    tdee: float,
    goal: str,
) -> float:

    if goal == "lose_weight":
        return round(tdee - 500, 2)

    if goal == "gain_muscle":
        return round(tdee + 300, 2)

    return round(tdee, 2)

# -----------------------------------------------------
# Macronutrients
# -----------------------------------------------------

def calculate_macros(
    calories: float,
    weight_kg: float,
):

    protein = weight_kg * 2

    fat = (calories * 0.25) / 9

    protein_calories = protein * 4

    fat_calories = fat * 9

    carbohydrates = (
        calories
        - protein_calories
        - fat_calories
    ) / 4

    return {

        "protein": round(protein, 2),

        "fat": round(fat, 2),

        "carbohydrates": round(
            carbohydrates,
            2,
        ),
    }





