import json

from google import genai

from app.core.config import settings
from app.core.logger import logger
from app.core.prompts import (
    DIET_PLAN_PROMPT,
    WEEKLY_DIET_PROMPT,
)
from app.schemas.diet import GeneratedDietResponse
from app.schemas.weekly_diet import WeeklyDietResponse


class GeminiService:

    def __init__(self):
        self.client = genai.Client(
            api_key=settings.GEMINI_API_KEY
        )

    def generate_diet(
        self,
        user_prompt: str,
    ) -> GeneratedDietResponse:

        prompt = f"""
{DIET_PLAN_PROMPT}

User Information

{user_prompt}
"""

        try:

            logger.info("Generating AI diet plan...")

            response = self.client.models.generate_content(
                model=settings.GEMINI_MODEL,
                contents=prompt,
            )

            text = response.text.strip()

            if text.startswith("```json"):
                text = text.replace("```json", "", 1)

            if text.startswith("```"):
                text = text.replace("```", "", 1)

            if text.endswith("```"):
                text = text[:-3]

            text = text.strip()

            data = json.loads(text)

            logger.info("AI diet plan generated successfully.")

            return GeneratedDietResponse.model_validate(
                data
            )

        except json.JSONDecodeError as e:

            logger.exception("Gemini returned invalid JSON.")

            raise ValueError(
                f"Gemini returned invalid JSON: {e}"
            )

        except Exception as e:

            logger.exception("Gemini API Error.")

            raise ValueError(
                f"Gemini API Error: {e}"
            )

    def generate_weekly_diet(
        self,
        user_prompt: str,
    ) -> WeeklyDietResponse:

        prompt = f"""
{WEEKLY_DIET_PROMPT}

User Information

{user_prompt}
"""

        try:

            logger.info("Generating weekly AI diet plan...")

            response = self.client.models.generate_content(
                model=settings.GEMINI_MODEL,
                contents=prompt,
            )

            text = response.text.strip()

            if text.startswith("```json"):
                text = text.replace("```json", "", 1)

            if text.startswith("```"):
                text = text.replace("```", "", 1)

            if text.endswith("```"):
                text = text[:-3]

            text = text.strip()

            data = json.loads(text)

            logger.info("Weekly AI diet generated successfully.")

            return WeeklyDietResponse.model_validate(
                data
            )

        except json.JSONDecodeError as e:

            logger.exception("Gemini returned invalid JSON.")

            raise ValueError(
                f"Gemini returned invalid JSON: {e}"
            )

        except Exception as e:

            logger.exception("Gemini API Error.")

            raise ValueError(
                f"Gemini API Error: {e}"
            )