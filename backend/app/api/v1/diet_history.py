from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User

from app.schemas.response import APIResponse

from app.services.diet_service import DietService


router = APIRouter(
    prefix="/diet",
    tags=["Diet History"],
)


@router.get(
    "/latest",
    response_model=APIResponse,
)
def latest(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    plan = DietService.get_latest_plan(
        db=db,
        user_id=current_user.id,
    )

    if plan is None:
        raise HTTPException(
            status_code=404,
            detail="No diet plan found.",
        )

    return APIResponse(
        message="Latest diet plan fetched successfully",
        data=plan,
    )


@router.get(
    "",
    response_model=APIResponse,
)
def history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    plans = DietService.get_history(
        db=db,
        user_id=current_user.id,
    )

    return APIResponse(
        message="Diet history fetched successfully",
        data=plans,
    )


@router.get(
    "/{plan_id}",
    response_model=APIResponse,
)
def plan(
    plan_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        diet_plan = DietService.get_plan(
            db=db,
            user_id=current_user.id,
            plan_id=plan_id,
        )

        return APIResponse(
            message="Diet plan fetched successfully",
            data=diet_plan,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )


@router.delete(
    "/{plan_id}",
    response_model=APIResponse,
)
def delete_plan(
    plan_id: int,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        DietService.delete_plan(
            db=db,
            user_id=current_user.id,
            plan_id=plan_id,
        )

        return APIResponse(
            message="Diet plan deleted successfully",
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )