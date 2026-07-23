from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException
from fastapi import status

from sqlalchemy.orm import Session

from app.db.database import get_db

from app.dependencies.auth import get_current_user

from app.models.user import User

from app.schemas.profile import (
    UserProfileCreate,
    UserProfileUpdate,
    UserProfileResponse,
    WeightLogCreate,
    WeightLogResponse,
)

from app.services.profile_service import ProfileService
from app.schemas.response import APIResponse


router = APIRouter(
    prefix="/profile",
    tags=["Profile"],
)

@router.post(
    "",
    response_model=UserProfileResponse,
    status_code=status.HTTP_201_CREATED,
)
def create_profile(
    request: UserProfileCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        return ProfileService.create_profile(
            db=db,
            user_id=current_user.id,
            request=request,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e),
        )
    
@router.get(
    "",
    response_model=APIResponse,
)
def get_profile(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    profile = ProfileService.get_profile(
        db=db,
        user_id=current_user.id,
    )

    if profile is None:

        raise HTTPException(
            status_code=404,
            detail="Profile not found.",
        )

    return APIResponse(
        message="Profile fetched successfully",
        data=UserProfileResponse.model_validate(profile),
    )

@router.patch(
    "",
    response_model=UserProfileResponse,
)
def update_profile(
    request: UserProfileUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    profile = ProfileService.get_profile(
        db=db,
        user_id=current_user.id,
    )

    if profile is None:

        raise HTTPException(
            status_code=404,
            detail="Profile not found.",
        )

    return ProfileService.update_profile(
        db=db,
        profile=profile,
        request=request,
    )

@router.post(
    "/weight",
    response_model=WeightLogResponse,
)
def add_weight(
    request: WeightLogCreate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        return ProfileService.add_weight_log(
            db=db,
            user_id=current_user.id,
            weight_kg=request.weight_kg,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e),
        )
    
@router.get(
    "/weight-history",
    response_model=list[WeightLogResponse],
)
def weight_history(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    return ProfileService.get_weight_history(
        db=db,
        user_id=current_user.id,
    )