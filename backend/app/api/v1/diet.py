from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from fastapi import status

from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User

from app.schemas.diet import GenerateDietRequest
from app.schemas.response import APIResponse

from app.services.diet_service import DietService


router = APIRouter(
    prefix="/diet",
    tags=["AI Diet"],
)


@router.post(
    "/generate",
    response_model=APIResponse,
    status_code=status.HTTP_201_CREATED,
)
def generate_diet(
    request: GenerateDietRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        diet_plan = DietService.generate_diet(
            db=db,
            user_id=current_user.id,
            request=request,
        )

        return APIResponse(
            message="Diet plan generated successfully",
            data=diet_plan,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e),
        )

    except Exception as e:

        raise HTTPException(
            status_code=500,
            detail=str(e),
        )