from fastapi import APIRouter
from fastapi import Depends

from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User

from app.schemas.response import APIResponse

from app.services.diet_service import DietService


router = APIRouter(
    prefix="/weekly-diet",
    tags=["Weekly Diet"],
)


@router.post(
    "/generate",
    response_model=APIResponse,
)
def generate_weekly(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    weekly_plan = DietService.generate_weekly_diet(
        db=db,
        user_id=current_user.id,
    )

    return APIResponse(
        message="Weekly diet generated successfully",
        data=weekly_plan,
    )