from pydantic_settings import BaseSettings, SettingsConfigDict
import os


class Settings(BaseSettings):

    APP_NAME: str = "AI Diet Guide API"
    APP_VERSION: str = "1.0.0"
    DEBUG: bool = True

    DATABASE_URL: str

    SECRET_KEY: str

    ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    GEMINI_API_KEY: str

    GEMINI_MODEL: str = os.getenv("GEMINI_MODEL")

    model_config = SettingsConfigDict(
        env_file=".env",
        extra="ignore",
    )


settings = Settings()