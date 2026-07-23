from fastapi import APIRouter
from fastapi import Depends
from fastapi import HTTPException

from sqlalchemy.orm import Session

from app.db.database import get_db
from app.dependencies.auth import get_current_user
from app.models.user import User

from app.schemas.response import APIResponse

from app.services.dashboard_service import DashboardService


router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"],
)


@router.get(
    "",
    response_model=APIResponse,
)
def dashboard(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user),
):

    try:

        dashboard_data = DashboardService.get_dashboard(
            db=db,
            user=current_user,
        )

        return APIResponse(
            message="Dashboard fetched successfully",
            data=dashboard_data,
        )

    except ValueError as e:

        raise HTTPException(
            status_code=404,
            detail=str(e),
        )