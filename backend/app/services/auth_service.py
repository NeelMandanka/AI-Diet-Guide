from sqlalchemy.orm import Session

from app.core.security import (
    create_access_token,
    create_refresh_token,
    hash_password,
    verify_password,
)

from app.models.user import User
from app.repositories.user_repository import UserRepository
from app.schemas.auth import (
    LoginRequest,
    RegisterRequest,
    TokenResponse,
)
from app.core.security import (
    create_access_token,
    decode_refresh_token,
)

class AuthService:

    @staticmethod
    def register(
        db: Session,
        request: RegisterRequest,
    ) -> User:

        existing_user = UserRepository.get_by_email(
            db,
            request.email,
        )

        if existing_user:
            raise ValueError("Email already registered")

        hashed_password = hash_password(
            request.password
        )

        user = UserRepository.create(
            db=db,
            name=request.name,
            email=request.email,
            password_hash=hashed_password,
        )

        return user

    @staticmethod
    def login(
        db: Session,
        request: LoginRequest,
    ) -> TokenResponse:

        user = UserRepository.get_by_email(
            db,
            request.email,
        )

        if user is None:
            raise ValueError("Invalid email or password")

        if not verify_password(
            request.password,
            user.password_hash,
        ):
            raise ValueError("Invalid email or password")

        access_token = create_access_token(
            str(user.id)
        )

        refresh_token = create_refresh_token(
            str(user.id)
        )

        return TokenResponse(
            access_token=access_token,
            refresh_token=refresh_token,
        )

    @staticmethod
    def get_current_user(
        db: Session,
        user_id: int,
    ) -> User | None:

        return UserRepository.get_by_id(
            db,
            user_id,
        )


    @staticmethod
    def refresh_token(refresh_token: str) -> TokenResponse:

        payload = decode_refresh_token(refresh_token)

        if payload is None:
            raise ValueError("Invalid refresh token")

        user_id = payload["sub"]

        access_token = create_access_token(user_id)

        new_refresh_token = create_refresh_token(user_id)

        return TokenResponse(
            access_token=access_token,
            refresh_token=new_refresh_token,
        )